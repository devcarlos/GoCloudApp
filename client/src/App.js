import React from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h1>Hello World By {this.props.name}... !!!</h1>;
  }
}

function Avatar(props) {
  return (
    <img className="Avatar-image"
      src={props.image}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} image={props.image} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} image={props.avatarUrl} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function formatDate(date) {
  return (
    <h3>{date}</h3>
  )
}

// function App() {
//   return (
// <div className="App">
//   <div id="ticker"></div>
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <div>
//     <Welcome name="Charles" />
//     </div>
//     <div>
//     <Comment author="name=Charles" avatarUrl="https://pbs.twimg.com/profile_images/1083503310332706816/aWsvkmRi_400x400.jpg" date="2020-05-23" text="This is a long comment text" />
//     </div>
//   </header>
//   <h1 className="App-intro">Testing</h1>
// </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/test")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Welcome name="Charles" />
          </div>
          <div>
            <Comment author="name=Charles" avatarUrl="https://pbs.twimg.com/profile_images/1083503310332706816/aWsvkmRi_400x400.jpg" date="2020-05-23" text="This is a long comment text" />
          </div>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
