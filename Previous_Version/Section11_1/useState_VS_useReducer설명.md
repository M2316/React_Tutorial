# 1.useState() vs useReducer()


## useState()

### 특징

1. 메인으로 사용되는 state관리 툴
2. 개별 state를 관리하기에 적합
3. 간단한 state에 사용하기에 적합
4. state의 값 update가 쉬움
5. state의 종류가 몇가지 되지 않을 때 적합
6. state의 값이 변경되어야 하는 경우가 다양하지 않다면 useState()가 적합







### useState() 예시

```javascript
import React,{useState} from 'react';

const [testState,setTestState] = useState('state 초기화 값 입니다.');

setTestState('테스트 스테이트 입니다.'); 

console.log(testState);

//console.log() 결과값은 테스트 스테이트 입니다. 으로 출력 됨

```

<br/>
<br/>
<br/>
<br/>






## useReducer()

### 특징


1. 복잡한 state 관리에 적합
2. state의 변경되어야하는 경우가 다양할 때 사용(action.type별로 각각의 action을 줄 수 있다)
3. 리듀서를 사용용하기 위한 코드는 useState()에 비해 많고 복잡함
4. 여러개인 state를 한번에 관리할 수 있어 state가 많거나 복잡하다면 효과적
5. 리듀서를 통한 state관리는 dispatch함수를 통해 관리 됨
6. dispatch함수에 array,string,object 다 넣을 수 있지만 주로 object를 사용함
7. reducerFn에 전달되는 state 매개변수는 testReducer의 현재 state를 보내줌
8. reducerFn에 전달되는 action 매개변수는 dispatch함수 호출시 넘겨준 파라미터








### useReducer() 예시


```javascript
import React,{useReducer} from 'react';
const initializeObj ={
    id : 1,
    name : '테스터',
    age : '29'
}

const reducerFn = (state,action)=>{
    let somethingObj = null;
    switch(action.type){
        case 'type1':
            somethingObj = {
                id : 2,
                name : '테스터2',
                age : '33'
            }
            break;
        case 'type2':
            if(state.id === action.payload.id){
                somethingObj = {
                    ...action.payload
                }    
            }else {
                somethingObj = {
                    id : 3,
                    name : '테스터3',
                    age : '20'
                }   
            }
            
            break;
    }
    return somethingObj;
}

const {testReducer,dispatchReducer} = useReducer(reducerFn,initializeObj);

// 리듀서 호출 1번
dispatchReducer({type:'type1',payload:''});
// 리듀서 호출 2번
dispatchReducer({type:'type2',payload:initializeObj});
```