import React from 'react';
const config = require('../config');

let apiURL = config.REACT_APP_API_SERVER + "/api"
let action = apiURL + '/landing/subscriptions'

console.log('apiURL => ', apiURL);
console.log('action => ', action);

export default class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptions: []
    };
  }

  callAPI() {
    fetch(action)
      .then(response => response.json())
      .then(data => {
        console.log('DATA => ', data.value.subscriptions);

        let subscriptions = data.value.subscriptions;
        let i = 0;
        subscriptions.map(sub => {
          sub.i = ++i;
        })

        this.setState({ subscriptions: subscriptions })
      })
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { subscriptions } = this.state;

    return (
      <div className="subscription-items">
        <h3>Subscripciones</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Telefono</th>
              <th scope="col">Email</th>
              <th scope="col">RUT</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map(sub =>
            <tr key={sub.id}>
              <th scope="row">{sub.i}</th>
              <td>{sub.name}</td>
              <td>{sub.phone}</td>
              <td>{sub.email}</td>
              <td>{sub.RUT}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}