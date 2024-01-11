# useContext()

## 특징

1. state또는 reducer를 등 컴포넌트에서 사용되는 인자 값을 Props Drilling하지 않고도 어디서나 꺼내어 쓸 수 있게 해줌
2. Props Drilling을 하지 않으므로 컨포넌트 부분은 view에 더욱 집중할 수 있게 해줌
3. 해당 컴포넌트에서 props가 사용되지 않아도 props를 전달해야하는 상황을 피할 수 있게 해줌
4. 리엑트에서 context 사용방법은 아래와 같다
    + 공급자와 소비자를 이용한 사용 방법
    + useContext를 이용하여 외부에 생성한 context.js 파일을 읽어와서 사용하는 방법
5. 최 하단 컴포넌트에게 이벤트 함수를 지정해 줄 때는 컴포넌트의 재사용 성을 높이기 위해 props를 이용하여 부모 컴포넌트에서 Event Handler를 전달해 주는것을 추천함
6. context는 state update(1초에 여러번정도)속도가 빠를 시에는 적합하지 않다.
7. context는 state에 비해 무겁다는 [나의 생각이 있다...]
8. 이것들을 해결하기 위해 이후에 리덕스를 사용하게 된다.



## 예시 사용 예시

### App.js

test-context에 저장되어 있는 name을 꺼내어 사용함
```js
import React,{useContext} from 'react';
import TestContext from '../context저장소/test-context'


const testContext = useContext(TestContext);

const App = ()=>{
    return (
        <>
          <button>{testContext.name}</button>
        </>
    );
}

export default App

```

### test-context.js
state 들이 저장될 외부 context파일 기본 위치는 /store/test-context.js 처럼 폴더 명을 저장소 느낌으로 지어준다
```jsx

import React,{useState} from 'react';

const testContext = {
    name : "",//초기 name셋팅 
    age : "", //초기 age셋팅
    onModifyHandler: ()=>{} //context변수 자동완성이 편하도록 빈 함수로 초기화
}

const testContextProvider = (props)=>{

    const [이름,set이름] = useState('');
    const [나이,set나이] = useState('');

    const on이름변경함수 = (changeName)=>{
        set이름(changeName);
    }
    

    return (
        <testContextProvider value={
            name:이름,
            age:나이,
            onModifyHandler:on이름변경함수,
        }>
            {props.children}
        </testContextProvider>
    );
}
export default testContext;


```


### index.js
useContext() 전역 설정
전역설정을 통해 App 컴포넌트 안에있는 모든 컴포넌트에서 접근이 가능해진다
```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { testContextProvider } from "./store/test-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <testContextProvider>
    <App />
  </testContextProvider>
);


```
