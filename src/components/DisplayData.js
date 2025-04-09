import React from "react";
import '../index.css';

const DisplayData = ({ data }) => {
  return (
    <div>
      <h2>Dados Submetidos:</h2>
      <p>Nome: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Cidade: {data.city}</p>
      <p>Trabalho: {data.job}</p>
      <p>Data de nascimento: {data.birth}</p>
      <p>Senha: {data.password}</p>
    </div>
  );
};

export default DisplayData;
