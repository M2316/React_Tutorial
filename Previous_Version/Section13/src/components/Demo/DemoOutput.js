import React from 'react'

const DemoOutput = (props) => {
    console.log('이게 실행이 될까요???? 버튼 누르면 실행이 되나요 ???')
  return (
    <p>{props.show ? "This is new! " : ''}</p>
  )
}

export default React.memo(DemoOutput);