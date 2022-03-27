import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeBIO3, setCodeBIO3] = useLocalStorage("codeBIO3", "");
  const [dluBIO3, setDLUBIO3] = useLocalStorage("dluBIO3", "");
  const [dateBIO3, setDateBIO3] = useLocalStorage("dateBIO3", "");
  const [visaBIO3, setVisaBIO3] = useLocalStorage("visaBIO3", "");

    return (
<div className="formulaire">
        <h1>BIO3</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeBIO3(e.target.value)} type="text" name="name" value={codeBIO3} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUBIO3(e.target.value)} type="text" name="name" value={dluBIO3}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateBIO3(e.target.value)} type="text" name="name" value={dateBIO3} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaBIO3(e.target.value)} type="text" name="name" value={visaBIO3}/>
          </label>
        </div>
      </div>
    )
}

export default Component