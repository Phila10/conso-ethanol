import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeBIO2, setCodeBIO2] = useLocalStorage("codeBIO2", "");
  const [dluBIO2, setDLUBIO2] = useLocalStorage("dluBIO2", "");
  const [dateBIO2, setDateBIO2] = useLocalStorage("dateBIO2", "");
  const [visaBIO2, setVisaBIO2] = useLocalStorage("visaBIO2", "");

    return (
<div className="formulaire">
        <h1>BIO2</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeBIO2(e.target.value)} type="text" name="name" value={codeBIO2} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUBIO2(e.target.value)} type="text" name="name" value={dluBIO2}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateBIO2(e.target.value)} type="text" name="name" value={dateBIO2} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaBIO2(e.target.value)} type="text" name="name" value={visaBIO2}/>
          </label>
        </div>
      </div>
    )
}

export default Component