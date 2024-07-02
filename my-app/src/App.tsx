import Greeting from "./components/Greeting";
import { Counter } from "./components/Counter";

const nom: string = "Arnaud"; // On type la variable "nom" comme "string" pour éviter une incohérence de type avec le type du prop

function App() {
  return (
    <div>
      {/* ---------------- CODE : 01 - EN TSX ---------------- */}
      <Greeting name={nom} />{" "}
      {/* Atribut "name" et variable "nom" typés de la même manière comme "string"*/}
      {/* ---------------- CODE : 02 - EN TSX ---------------- */}
      <Counter />
    </div>
  );
}

export default App;
