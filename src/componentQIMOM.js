import React from 'react';
import { useLocalStorage } from "./useLocaleStorage";
const Component = ()=> {
  const [codeQIMOM, setCodeQIMOM] = useLocalStorage("codeQIMOM", "");
  const [dluQM, setDLUQM] = useLocalStorage("dluQM", "");
  const [dateQM, setDateQM] = useLocalStorage("dateQM", "");
  const [visaQM, setVisaQM] = useLocalStorage("visaQM", "");

    return (
<div className="formulaire">
        <h1>QIMO M</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input onChange={(e) => setCodeQIMOM(e.target.value)} type="text" name="name" value={codeQIMOM} />
          </label>
          <label>
            DLU :
            <input onChange={(e) => setDLUQM(e.target.value)} type="text" name="name" value={dluQM}/>
          </label>
          <label>
            Date :
            <input onChange={(e) => setDateQM(e.target.value)} type="text" name="name" value={dateQM} />
          </label>
          <label>
            Visa :
            <input onChange={(e) => setVisaQM(e.target.value)} type="text" name="name" value={visaQM}/>
          </label>
        </div>
      </div>
    )
}

export default Component