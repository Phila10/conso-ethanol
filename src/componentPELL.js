import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codePELL, setCodePELL] = useLocalStorage("codePELL", "");
  const [dluPELL, setDLUPELL] = useLocalStorage("dluPELL", "");
  const [datePELL, setDatePELL] = useLocalStorage("datePELL", "");
  const [visaPELL, setVisaPELL] = useLocalStorage("visaPELL", "");

    return (
<div className="formulaire">
        <h1>PELL</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodePELL(e.target.value)} type="text" name="name" value={codePELL} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUPELL(e.target.value)} type="text" name="name" value={dluPELL}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDatePELL(e.target.value)} type="text" name="name" value={datePELL} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaPELL(e.target.value)} type="text" name="name" value={visaPELL}/>
          </label>
        </div>
      </div>
    )
}

export default Component