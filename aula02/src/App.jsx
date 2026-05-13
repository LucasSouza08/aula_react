import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio3 from "./paginas/Exercicio3";
import Exercicio4 from "./paginas/Exercicio4";
import Exercicio5 from "./paginas/Exercicio5";

export default function App ()
{
  return (
    <div>
      <h1>Aula 02 - Estudo de Componentes e Props </h1>

      <div className="card">

        <h3>Chamada para Exemplo 1</h3>
        <Exemplo1 numero={33}/>
        <Exemplo1 numero={22}/>
        <Exemplo1 numero={11}/>

      </div>

      <div className="card">

        <h3>Chamada para Exemplo 2</h3>
        <Exemplo2 numero1={33} numero2={34}/>

      </div>

      <div className="card">

        <h3>Chamada para Exercíco 1</h3>
        <Exercicio1 />

      </div>

      <div className="card">

        <h3>Chamada para Exercíco 2</h3>
        <Exercicio2 />

      </div>
      <div className="card">

        <h3>Chamada para Exercíco 3</h3>
        <Exercicio3 />

      </div>
      <div className="card">

        <h3>Chamada para Exercíco 4</h3>
        <Exercicio4 />

      </div>
      <div className="card">

        <h3>Chamada para Exercíco 5</h3>
        <Exercicio5 />

      </div>




    </div>
  )
}