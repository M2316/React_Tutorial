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
        <motion.img
          //useTransform을 이용하여 포멧한 변수를 style속성값중 value로 넣어준다
          style={{ opacity:opacityCity,y:yCity }}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img src={heroImg} alt="A superhero wearing a cape" id="hero-image"
        style={{y:yHero,opacity:opacityHero}} />
      </header>
      <main id="welcome-content">
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </section>
      </main>
    </>
  );
}
