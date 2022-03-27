import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeBIO4, setCodeBIO4] = useLocalStorage("codeBIO4", "");
  const [dluBIO4, setDLUBIO4] = useLocalStorage("dluBIO4", "");
  const [dateBIO4, setDateBIO4] = useLocalStorage("dateBIO4", "");
  const [visaBIO4, setVisaBIO4] = useLocalStorage("visaBIO4", "");

    return (
<div className="formulaire">
        <h1>BIO4</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeBIO4(e.target.value)} type="text" name="name" value={codeBIO4} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUBIO4(e.target.value)} type="text" name="name" value={dluBIO4}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateBIO4(e.target.value)} type="text" name="name" value={dateBIO4} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaBIO4(e.target.value)} type="text" name="name" value={visaBIO4}/>
          </label>
        </div>
      </div>
    )
}

export default Component