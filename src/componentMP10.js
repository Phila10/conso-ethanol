import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeMP10, setCodeMP10] = useLocalStorage("codeMP10", "");
  const [dluMP10, setDLUMP10] = useLocalStorage("dluMP10", "");
  const [dateMP10, setDateMP10] = useLocalStorage("dateMP10", "");
  const [visaMP10, setVisaMP10] = useLocalStorage("visaMP10", "");

    return (
<div className="formulaire">
        <h1>MP10</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeMP10(e.target.value)} type="text" name="name" value={codeMP10} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUMP10(e.target.value)} type="text" name="name" value={dluMP10}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateMP10(e.target.value)} type="text" name="name" value={dateMP10} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaMP10(e.target.value)} type="text" name="name" value={visaMP10}/>
          </label>
        </div>
      </div>
    )
}

export default Component