import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeMP7, setCodeMP7] = useLocalStorage("codeMP7", "");
  const [dluMP7, setDLUMP7] = useLocalStorage("dluMP7", "");
  const [dateMP7, setDateMP7] = useLocalStorage("dateMP7", "");
  const [visaMP7, setVisaMP7] = useLocalStorage("visaMP7", "");

    return (
<div className="formulaire">
        <h1>MP7</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeMP7(e.target.value)} type="text" name="name" value={codeMP7} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUMP7(e.target.value)} type="text" name="name" value={dluMP7}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateMP7(e.target.value)} type="text" name="name" value={dateMP7} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaMP7(e.target.value)} type="text" name="name" value={visaMP7}/>
          </label>
        </div>
      </div>
    )
}

export default Component