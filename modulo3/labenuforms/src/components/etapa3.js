/*componente com a terceira parte do formulário;*/


import logo from './logo.svg';
import './App.css';
import App from '../App';

function Etapa2() {
  return (
    <div>
  
  <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
      <form>
        <div>
          <h2>5. Por que você não terminou um curso de graduação ?</h2>
          <input type="text" id="nome" />
        </div>
        <div>
          <h2>6. Você fez algum curso complementar?</h2>
          <input type="text" id="idade" />
        </div>
        
      </form>
  

    </div>
  );
}

export default App;