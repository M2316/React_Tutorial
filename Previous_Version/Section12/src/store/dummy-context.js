import React, { useState } from "react";


const DummyContext = React.createContext([]);

export const DummyContextProvider = (props) => {

    const [dummy,setDummy] = useState([]);
    const settingDummy = (values)=>{
        setDummy(values);
    }

  
  
    return <DummyContext.Provider value={{dummy:dummy,changeDummy:settingDummy}}>{props.children}</DummyContext.Provider>;
};

export default DummyContext;
