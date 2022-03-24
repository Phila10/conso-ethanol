import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [code, setCode] = useLocalStorage("code", "");
  const [dlu, setDLU] = useLocalStorage("dlu", "");
  const [date, setDate] = useLocalStorage("date", "");
  const [visa, setVisa] = useLocalStorage("visa", "");

    return (
<div className="formulaire">
        <h1>MP2</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCode(e.target.value)} type="text" name="name" value={code} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLU(e.target.value)} type="text" name="name" value={dlu}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDate(e.target.value)} type="text" name="name" value={date} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisa(e.target.value)} type="text" name="name" value={visa}/>
          </label>
        </div>
      </div>
    )
}

export default Component