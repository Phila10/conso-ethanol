import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeMEP2, setCodeMEP2] = useLocalStorage("codeMEP2", "");
  const [dluMEP2, setDLUMEP2] = useLocalStorage("dluMEP2", "");
  const [dateMEP2, setDateMEP2] = useLocalStorage("dateMEP2", "");
  const [visaMEP2, setVisaMEP2] = useLocalStorage("visaMEP2", "");

    return (
<div className="formulaire">
        <h1>MEP2</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeMEP2(e.target.value)} type="text" name="name" value={codeMEP2} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUMEP2(e.target.value)} type="text" name="name" value={dluMEP2}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateMEP2(e.target.value)} type="text" name="name" value={dateMEP2} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaMEP2(e.target.value)} type="text" name="name" value={visaMEP2}/>
          </label>
        </div>
      </div>
    )
}

export default Component