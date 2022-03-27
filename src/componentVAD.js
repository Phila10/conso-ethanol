import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeVAD, setCodeVAD] = useLocalStorage("codeVAD", "");
  const [dluVAD, setDLUVAD] = useLocalStorage("dluVAD", "");
  const [dateVAD, setDateVAD] = useLocalStorage("dateVAD", "");
  const [visaVAD, setVisaVAD] = useLocalStorage("visaVAD", "");

    return (
<div className="formulaire">
        <h1>VADSITE</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeVAD(e.target.value)} type="text" name="name" value={codeVAD} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUVAD(e.target.value)} type="text" name="name" value={dluVAD}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateVAD(e.target.value)} type="text" name="name" value={dateVAD} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaVAD(e.target.value)} type="text" name="name" value={visaVAD}/>
          </label>
        </div>
      </div>
    )
}

export default Component