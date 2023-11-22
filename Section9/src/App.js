//1. 컴포넌트로 세분화 할것!
//2. 이벤트 처리할 것
//3. 상태관리하기!
//4. 상태를 화면에 출력하기~!
//5. 이쁘게 스타일링 할것 styled-components를 이용해



import React,{useState} from "react";
import Header from "./components/Header";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";



function App() {

  const [savingsDataState,setSavingsDataState] = useState('');

  const calculateHandler = (userInput) => {
    // 양식을 제출할 때 트리거해야 합니다
    // 하지만 양식의 제출 이벤트에 직접 바인딩하고 싶지 않을 수도 있습니다...

    const yearlyData = []; // 연간 실적

    let currentSavings = +userInput['currentSavings']; // 이 입력 개체의 모양을 자유롭게 변경하세요!
    const yearlyContribution = +userInput['yearlySavings']; // 언급된 바와 같이: 모양을 자유롭게 변경하십시오...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    // 아래 코드는 연간 결과(총저축, 이자 등)를 계산합니다
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // 배열에 푸시된 데이터의 모양을 자유롭게 변경할 수 있습니다!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // 연간 데이터를 사용하여 수행...
    setSavingsDataState(yearlyData);
    console.log(savingsDataState);
  };

  return (
    <div>
      <Header></Header>
      <FormComponent onCalculateHandler={calculateHandler}></FormComponent>

      

      {/* 작업: 아래 표를 조건부로 표시(결과 데이터를 사용할 수 있는 경우에만 해당) */}
      {/* 사용 가능한 데이터가 없는 경우 폴백 텍스트 표시 */}

      <TableComponent savingsData={savingsDataState}></TableComponent>
    </div>
  );
}

export default App;
