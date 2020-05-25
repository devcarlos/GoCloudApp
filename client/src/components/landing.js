import React from 'react';
const config = require('../config');

let apiURL = config.REACT_APP_API_SERVER + "/api"
let action = apiURL + '/landing/subscriptions'

console.log('apiURL => ', apiURL);
console.log('action => ', action);

export default class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      RUT: '',
      data: {
        message: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let body = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      RUT: this.state.RUT
    }

    fetch(action, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('DATA => ', data);
      this.setState({ data: data })

      console.log('STATE DATA => ', this.state.data.message);
      alert(this.state.data.message)
    })
    .catch(err => err);
  }

  render() {
    return (
      <form id="subscriptionForm" onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col">
            <label>Nombre</label>
            <input onChange={this.handleInputChange} name="name" type="text" className="form-control" placeholder="Ej. John Connor" />
          </div>
          <div className="col">
            <label>Telefono</label>
            <input onChange={this.handleInputChange} name="phone" type="text" className="form-control" placeholder="Ej. +56 9 12345678" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Correo</label>
            <input onChange={this.handleInputChange} name="email" type="email" className="form-control" placeholder="Ej. skynet@terminator.com" />
          </div>
          <div className="col">
            <label>RUT</label>
            <input onChange={this.handleInputChange} name="RUT" type="text" className="form-control" placeholder="RUT: Ej. 99.999.999-9" />
          </div>
        </div>
        <button onClick={this.onSubmit.bind(this)} type="submit" className="btn btn-primary btn-block">INSCRIBIRSE</button>
      </form>
    );
  }
}