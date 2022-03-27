import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeMP8, setCodeMP8] = useLocalStorage("codeMP8", "");
  const [dluMP8, setDLUMP8] = useLocalStorage("dluMP8", "");
  const [dateMP8, setDateMP8] = useLocalStorage("dateMP8", "");
  const [visaMP8, setVisaMP8] = useLocalStorage("visaMP8", "");

    return (
<div className="formulaire">
        <h1>MP8</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeMP8(e.target.value)} type="text" name="name" value={codeMP8} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUMP8(e.target.value)} type="text" name="name" value={dluMP8}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateMP8(e.target.value)} type="text" name="name" value={dateMP8} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaMP8(e.target.value)} type="text" name="name" value={visaMP8}/>
          </label>
        </div>
      </div>
    )
}

export default Component