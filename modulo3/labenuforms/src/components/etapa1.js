/*componente com a primeira parte do formulário;*/
import logo from './logo.svg';
import './App.css';

function etapa1() {
  return (
    <div>
      
      <h1>ETAPA 1 - DADOS GERAIS</h1>
      <form>
        <div>
          <h2>1. Qual o seu nome?</h2>
          <input type="text" id="nome" />
        </div>
        <div>
          <h2>2. Qual o sua idade?</h2>
          <input type="text" id="idade" />
        </div>
        <div>
          <h2>3. Qual o seu E-mail?</h2>
          <input type="text" id="email" />
        </div>
        <div>
          <h2>4. Qual a sua escolaridade?</h2>
         
        </div>
      </form>

    </div>
  );
}

export default App;
