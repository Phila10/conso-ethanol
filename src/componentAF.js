import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeAF, setCodeAF] = useLocalStorage("codeAF", "");
  const [dluAF, setDLUAF] = useLocalStorage("dluAF", "");
  const [dateAF, setDateAF] = useLocalStorage("dateAF", "");
  const [visaAF, setVisaAF] = useLocalStorage("visaAF", "");

    return (
<div className="formulaire">
        <h1>AUTOFLUSH</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeAF(e.target.value)} type="text" name="name" value={codeAF} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUAF(e.target.value)} type="text" name="name" value={dluAF}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateAF(e.target.value)} type="text" name="name" value={dateAF} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaAF(e.target.value)} type="text" name="name" value={visaAF}/>
          </label>
        </div>
      </div>
    )
}

export default Component