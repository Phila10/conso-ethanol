import "./App.css";
import { useLocalStorage } from "./useLocaleStorage";

const machines = [
  {
    machine: "MP2",
  },
  {
    machine: "MP6",
  },
  {
    machine: "MP7",
  },
  {
    machine: "MP8",
  },
  {
    machine: "MP9",
  },
  {
    machine: "MP10",
  },
  {
    machine: "VADSITE",
  },
  {
    machine: "MEP2",
  },
  {
    machine: "BIO2",
  },
  {
    machine: "BIO3",
  },
  {
    machine: "BIO4",
  },
  {
    machine: "PELLICOQUE",
  },
  {
    machine: "QIMO M",
  },
  {
    machine: "AUTOFLUSH",
  },
];

const FullCards = () => {
  const [code, setCode] = useLocalStorage("code", "");
  const [dlu, setDLU] = useLocalStorage("dlu", "");
  const [date, setDate] = useLocalStorage("date", "");
  const [visa, setVisa] = useLocalStorage("visa", "");
  return (
    <div className="FullCards">
      {machines.map((item) => (
        <div>
          <div className="formulaire-fullCard">
            <h1>Machine</h1>
            <div className="formulaire-component">
              <label>
                Code :
                <input
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  name="name"
                  value={code}
                />
              </label>
              <label>
                DLU :
                <input
                  onChange={(e) => setDLU(e.target.value)}
                  type="text"
                  name="name"
                  value={dlu}
                />
              </label>
              <label>
                Date :
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="text"
                  name="name"
                  value={date}
                />
              </label>
              <label>
                Visa :
                <input
                  onChange={(e) => setVisa(e.target.value)}
                  type="text"
                  name="name"
                  value={visa}
                />
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullCards;
