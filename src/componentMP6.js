import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeMP6, setCodeMP6] = useLocalStorage("codeMP6", "");
  const [dluMP6, setDLUMP6] = useLocalStorage("dluMP6", "");
  const [dateMP6, setDateMP6] = useLocalStorage("dateMP6", "");
  const [visaMP6, setVisaMP6] = useLocalStorage("visaMP6", "");

    return (
<div className="formulaire">
        <h1>MP6</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeMP6(e.target.value)} type="text" name="name" value={codeMP6} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUMP6(e.target.value)} type="text" name="name" value={dluMP6}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateMP6(e.target.value)} type="text" name="name" value={dateMP6} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaMP6(e.target.value)} type="text" name="name" value={visaMP6}/>
          </label>
        </div>
      </div>
    )
}

export default Component