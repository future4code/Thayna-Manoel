import React from "react";

class Etapa3 extends React.Component {
    render() {
      return (
        <div>
        <h2>ETAPA 3 - INFORMAÇOES GERAUS DE ENSINO</h2>
        <p>Por que você não terminou o curso de graduação?</p>
        <input/>
        <p>Você fez algum curso complementar?</p>
        <select>
            <option>Nenhum</option>;
            <option>Curso técnico</option>;
            <option>Cursp de inglês</option>;
        </select>
        </div>
      );
    }
 }

  export default Etapa3;