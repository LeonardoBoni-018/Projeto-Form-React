// Footer.js
import React from "react";
import '../index.css'

const Footer = () => {
  return (
    <footer className="footer"
      style={{ textAlign: "center", padding: "20px", background: "#f1f1f1" }}
    >
      <p>
        &copy; {new Date().getFullYear()} Meu Aplicativo. Todos os direitos
        reservados.
      </p>
      <p>Desenvolvido por Leonardo Boni</p>
    </footer>
  );
};

export default Footer;
