import React from "react";


class Etapa1 extends React.Component {
    render() {
      return (
        <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>Qual seu nome?</p>
        <input/>
        <p>Qual sua idade?</p>
        <input/>
        <p>Qual seu E-mail?</p>
        <input/>

        <p>Qual a sua escolaridade?</p>
        <select>
            <option>Ensino médio incompleto</option>;
            <option>Ensino médio completo</option>;
            <option>Ensino superior incompleto</option>;
            <option>Ensino superior completo</option>;
        </select>
        </div>
      );
    }
 }

  export default Etapa1; 