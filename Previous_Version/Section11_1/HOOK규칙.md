# HOOK 규칙
1. 리액트로 개발한다면 hook을 사용하는데 있어서 몇가지 규칙을 지켜주어야 한다.
<br>
<br>

## 첫번째
React Hook은 jsx를 return 하는 React 함수 또는 Custom Hook 에서만 호출 되어야 한다.
<br>
<br>



## 두번째
중첩함수 또는 if문에서는 허용되지 않습니다. Hook을 사용한다면 꼭 jsx를 return하는 컴포넌트 함수 안의 최상단에 위치시켜야 한다.
<br>
<br>




## 세번째
useEffect Hook은 state 혹은 변수,함수를 useEffect안에서 사용할 시에 의존성으로 등록을 해주고 사용하는 것이 좋다. (setState()함수는 불변 함수이기 때문에 의존성에서 빼도 괜찮다)
<br>
<br>




<br>
<br>
<br>

--- 
 ※ 위 규칙을 지키지 않는다면 대부분의 IDE TOOL에서 경고표시가 발생될 거기 때문에 이런 규칙이 있다라고 이해하면 된다 ※

