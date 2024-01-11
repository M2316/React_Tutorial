# Framer-Motion

<br><br><br>

> # Framer-Motion 이 뭘까?
> - Framer-Motion은 React 프로젝트에서 사용할 수 있는 애니메이션 제어 라이브러리 중 하나이다.
> - CSS로 작성하는 애니메이션보다 좀더 자연스럽고 간편하게 Component의 애니메이션을 제어할 수 있다.

<br><br><br>

> # Framer-Motion 사용하는 이유
> - 기존 CSS를 이용한 애니메이션 부여는 DOM 또는 Component가 사라질 때 발생하는 애니메이션을 부여하는 것이 다소 복잡했다.
> - 미리 정의해 둔 애니메이션들을 가져와서 사용할 수 있기 때문에 복잡하게 생각하지 않고 간편하게 정의 된 애니메이션을 사용할 수 있다.
> - 커스터마이징 또한 Component 단위에서 쉽게 할 수 있고 애니메이션을 부여하고 관리하는 대에 있어 부담감을 크게 줄여준다.
    <br> ps. 물론 Framer-Motion이 쉬운 라이브러리라는 것은 아니다...

<br><br><br>

> ## Framer-Motion 사용방법
### React Project에 Framer-Motion 설치하기

1. 사용하고자 하는 프로젝트에서 Framer-Motion의존성을 추가해준다.
```npm
# 프로젝트가 존재하는 폴더로 이동하여 아래 명령어 수행(package.json이 있는 경로면 됨)
npm install framer-motion
```
2. 사용하고 싶은 Component 파일을 열어서 Framer-Motion의 motion객체를 import해준다
```jsx
//motion을 import 해준다.
import {motion} from 'framer-motion'

function App() {
  return (
    <div>
        <div id="target">애니메이션 적용할 DOM</div>
    </div>
  );
}
export default App;
```
3. 사용하고 싶은 태그 앞에 "motion."을 붙여 motion Component로 만들어 준다
```jsx
...

function App() {
  return (
    <div>
    <!-- motion.div Component로 변경 -->
        <motion.div id="target">애니메이션 적용할 DOM</motion.div>
    </div>
  );
}
export default App;
```

4.motion Component로 만들고 속성을 추가해 준다
```jsx
...

function App() {
  return (
    <div>
    <!-- 아래는 속성의 예시이다. 이 외의 속성은 Framer-Motion 공식 홈페이지 참조 -->
        <motion.div 
        animate={{opacity:1,scale:1,...}}
        initial={{opacity:0,scale:0.8,...}}
        exit={{opacity:0,scale:0.8,...}}
        id="target">애니메이션 적용할 DOM</motion.div>
    </div>
  );
  // 위에서부터 순서대로
  // animate는 Component의 정지상태로 보여졌을 때의 값
  // initial은 Component가 랜더링 되는 시점의 초기 값
  // exit은 Component가 사라질 때 애니메이션 값
  // initial부터 animate 값 까지 애니메이션이 적용되고 Component가 사라지면 
  // animate 값에서 부터 exit 값 까지 애니메이션이 적용된다
}
export default App;
```


4.motion Component로 만들고 속성을 추가해 준다
```jsx
...
// id=target Component가 사라질때는 페이지에서 단순히 삭제되는 것이 아닌 
// Component 전체가 렌더링 되어 필요 없는 부분만 빠지고 렌더링 되기 때문에 
// exit모션이 실행이 되지 않을 때가 있다.
// 이 때는 아래처럼 AnimatePresence를 이용하면 문제가 해결 된다
// AnimatePresence Component에 한개의 Component만 들어가면 상관없지만
// 2개 이상의 Component가 들어가면 자식 Component마다 key 속성을 달아주어야 한다
// 또한 AnimatePresence Component에는 mode속성을 추가할 수 있는데
// mode="sync"는 애니메이션을 동시에 후생 mode="wait"은 
// 상단 Component의 애니메이션이 끝날 때 까지 기다린다
function App() {
  return (
    <div>
        <AnimatePresence>
            <motion.div 
                animate={{opacity:1,scale:1,...}}
                initial={{opacity:0,scale:0.8,...}}
                exit={{opacity:0,scale:0.8,...}}
                id="target">애니메이션 적용할 DOM</motion.div>
        </AnimatePresence>
    </div>
  );
  //위에처럼 AnimatePresence Component로 감싸주기만 하면 된다
}
export default App;
```

<br><br><br>

> ## useAnimate 훅 사용하기
> ### useAnimate 훅을 사용하는 이유
> - 선언적으로 Component에 애니메이션을 부여하는게 아닌 함수의 결과값에 따라 특정 Component단위 별로 애니메이션을 부여할 수 있게 해준다.
> - 함수에 애니메이션 속성을 작성하여 jsx부분을 보다 깨끗하게 관리할 수 있게 해준다.
> - scope을 지정하여 원하는 범위만 애니메이션을 부여할 수 있어 애니메이션이 필요없는 Component에 까지 영향을 주는 것을 막을 수 있다.
```jsx
import {useAnimate} from 'framer-motion';

function App() {


    //scope은 ref처럼 사용한다. animate적용 범위를 선택하기 위해 사용한다.
    const [scope,animate] = useAnimate();


    const clickHandler = ()=>{
        //[매개변수 설명]
        //선택자를 이용하여 animate를 지정할 태그 선택,
        //적용할 애니메이션 속성을 객체로 지정,
        //애니메이션 속성을 얼마나 지속하며 어떤 속도로 실행시킬지 속성을 입력            
        animate('.target',
                {x:[-10,0,10,0]},
                {type:'spring',duration:0.2,delay:stagger(0.05)});
    }
  return (
    <div>
        <div className="target" ref={scope} style={{backgroundColor:blue,color:white}}>
            흔들리는 BOX
        </div>
        <button onClick={{clickHandler}}>Animate!</button>
    </div>
  );
}
export default App;
```

<br><br><br>

> ## motion Component에서 layout 속성 넣기
> ### layout 사용하는 이유
> - ol Component안에 li Component가 여러개 존재하는 구조의 Component일 때 li Component를 지우게 되면 이벤트가 발생되지 않는다.<br>
> 이 때 li Component를 motion.li Component로 변경하고 속성을 layout으로 지정해 motion Component가 알아서 layout변화에 자동으로 애니메이션을 적용해 준다.
```jsx

...

  
  return (
    //motion 태그 안에 layout을 설정해 Component 내부의 변경사항을 감지하여 애니메이션을 동작하시킨다
    <motion.li layout>
      <article className="challenge-item">
        <header>
          <img {...challenge.image} />
          <div className="challenge-item-meta">
            <h2>{challenge.title}</h2>
            <p>Complete until {formattedDate}</p>
            <p className="challenge-item-actions">
              <button onClick={handleCancel} className="btn-negative">
                Mark as failed
              </button>
              <button onClick={handleComplete}>
                Mark as completed
              </button>
            </p>
          </div>
        </header>

            ...       

        </article>
      </motion.li>
  );
```
> ### layoutId 는 무엇인가??
> - motion Component에 layoutId 속성을 부여하면 같은 layoutId를 갖는 Component끼리 변경되는 사항이 있으면 자연스럽게 애니메이션을 부여해 준다<br>
> 다른 설정없이 원하는 Component에다 layoutId 속성을 부여하면 framer-motion 라이브러리에서 자동으로 애니메이션을 부여해준다.
> - 사용하는 예시로는 여러개의 탭 중의 활성화 탭을 변경하면 활성화 버튼 탭 이동 애니메이션을 부여해 주게 된다.


```jsx
...

function Tab({ isSelected, onSelect, badgeCaption, children }) {
  return (
    <li>
      <button
        className={isSelected ? 'selected' : undefined}
        onClick={onSelect}
      >
        {children}
        <Badge caption={badgeCaption}></Badge>
      </button>
      <!-- motion Component안에 layoutId를 지정해 준다 -->
      {isSelected && <motion.div layoutId='tab-indicator' className="active-tab-indicator" />}
    </li>
  );
}

...

```


> ## 애니메이션 트리거
> - 이미 motion Component에 정의 된 애니메이션을 내부 값이 변경되거나 애니메이션 재생이 필요 할 때는 motion Component에 Key 값을 주고 Key값으로는 트리거가 가능할 만한 변수 또는 state를 넣어주면 필요시 마다 애니메이션을 재생 시킬 수 있다.
```jsx
... 

function Tab({ isSelected, onSelect, badgeCaption, children }) {
  return (
    <li>
      <button
        className={isSelected ? 'selected' : undefined}
        onClick={onSelect}
      >
        {children}
        <!-- key를 통해서 badgeCaption State를 통해 Component가 
        이전에 랜더링 한 Component와 동일 하지 않게 key값을 State로 지정 -->
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
      </button>
      {isSelected && <motion.div layoutId='tab-indicator' className="active-tab-indicator" />}
    </li>
  );
}

...
```

> ## framer-motion을 이용한 패럴렉스
> - 패럴렉스를 적용하면 여러 겹의 이미지가 서로 다른 애니메이션을 갖고 스크롤 또는 사용자 이벤트 발생시 동시에 개별적으로 움직이게 만들 수 있게 된다.
> - 대체로 패럴렉스는 스크롤을 움직일 때 이벤트를 부여하기 때문에 사용자가 움직이는 스크롤 값을 가져오는 것이 중요하다.
> - framer-motion에서 지원하는 useScroll 훅을 이용하면 간편하게 사용자의 스크롤 값을 가져올 수 있다.
> - motion Component에서 useScroll로 가져온 값을 사용하려면 useTransform이라는 훅을 이용해 값을 포멧팅 해주어야 한다.
> - useTransform훅은 애니메이션 값으로 넣을 수 있게 변환해 주는 역할을 수행한다고 보면 된다.
> - motion Component에는 style속성도 사용할 수 있는데 style속성값이 변경되면 자동으로 변경 된 것을 React가 인지하여 변경된 style을 적용해 준다

```jsx

import {motion,useScroll,useTransform} from 'framer-motion';
import { Link } from 'react-router-dom';

import cityImg from '../assets/city.jpg';
import heroImg from '../assets/hero.png';

export default function WelcomePage() {

  //사용자가 움직이는 스크롤 값을 받아올 수 있게 scrollY 변수로 받는다
  //scrollYProgress변수로 받을 경우 사용자가 스크롤을 최 하단까지 다 내려야 1이 되며
  //조금이라도 내리지 않는다면 0으로 표시 된다.
  //패럴렉스 애니메이션을 부여할 때는 scrollY로 받아 픽셀마다 애니메이션을 정의해 주는것이 좋다
  const {scrollY}  = useScroll();
  const {scrollYProgress}  = useScroll();

  //scrollY변수로 받아온 픽셀 값을 애니메이션에 넣을 수 있도록 포멧팅 해줘야 한다.
  //useTransform을 이용하여 scrollY값이 [0px,200px] 처럼 변화 한다면 포멧은 값은 [0,-200] 처럼 값이 포멧된다
  const yCity = useTransform(scrollY,[0,200],[0,-200]);
  const opacityCity = useTransform(scrollY,[0,200,300,500],[1,0.5,0.5,0]);
  
  const yHero = useTransform(scrollY,[0,200],[0,-250]);

  //여기서는 scrollY 값이 0px일때는 1로 300px일 때도 1로 500px이상 되어야 값이 0으로 된다
  //정리하자면 스크롤을 Y축으로 500px이상 움직이면 0값을 반환하도록 한 것이다.
  const opacityHero = useTransform(scrollY,[0,300,500],[1,1,0]);

  const scaleText = useTransform(scrollY,[0,300],[1,1.5])
  const yText = useTransform(scrollY,[0,200,300,500],[0,50,50,300])
  return (
    <>
      <header id="welcome-header">
        <motion.div id="welcome-header-content" style={{scale:scaleText,y:yText}}>
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
          <!-- useTransform을 이용하여 포멧한 변수를 style속성값중 value로 넣어준다 -->
        <motion.img
          style={{ opacity:opacityCity,y:yCity }}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img src={heroImg} alt="A superhero wearing a cape" id="hero-image"
        style={{y:yHero,opacity:opacityHero}} />
      </header>
      
      ...

    </>
  );
}



```