import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeMP9, setCodeMP9] = useLocalStorage("codeMP9", "");
  const [dluMP9, setDLUMP9] = useLocalStorage("dluMP9", "");
  const [dateMP9, setDateMP9] = useLocalStorage("dateMP9", "");
  const [visaMP9, setVisaMP9] = useLocalStorage("visaMP9", "");

    return (
<div className="formulaire">
        <h1>MP9</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeMP9(e.target.value)} type="text" name="name" value={codeMP9} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUMP9(e.target.value)} type="text" name="name" value={dluMP9}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateMP9(e.target.value)} type="text" name="name" value={dateMP9} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaMP9(e.target.value)} type="text" name="name" value={visaMP9}/>
          </label>
        </div>
      </div>
    )
}

export default Component