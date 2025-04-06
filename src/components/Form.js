import React, { Component } from "react";
import DisplayData from "./DisplayData";
import "../index.css";
import Footer from "./Footer";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      city: "",
      job: "",
      birth: "",
      password: "",
      submittedData: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((prevState) => ({
      submittedData: [
        ...prevState.submittedData,
        {
          name: prevState.name,
          email: prevState.email,
          city: prevState.city,
          job: prevState.job,
          birth: prevState.birth,
          password: prevState.password,
        },
      ],
      name: "",
      email: "",
      city: "",
      job: "",
      birth: "",
      password: "",
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Nome:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Cidade:
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Trabalho:
              <input
                type="text"
                name="job"
                value={this.state.job}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Data de nascimento:
              <input
                type="date"
                name="birth"
                value={this.state.birth}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Senha:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>

        {this.state.submittedData.length > 0 && (
          <div>
            {/* <h2>Dados Submetidos:</h2> */}
            {this.state.submittedData.map((data, index) => (
              <DisplayData key={index} data={data} />
            ))}
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

export default Form;
