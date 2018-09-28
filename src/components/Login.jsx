// Autogenerated using npm run gen Login
/*
* Copy to other files
* import Login from './Login';
* <Login/>
*/
import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

function Login()
{
  let _username, _password;
  _username = _password = null;
  function handleNewTicketFormSubmission(event)
  {
    event.preventDefault();
    // props.onNewTicketCreation({username: _username.value, password: _password.value});
    console.log(_username.value);
    console.log(_password.value);
    _username.value = '';
    _password.value = '';
  }
  return (
    <Main>
      <h1>User Login</h1>
      <form className="" onSubmit={handleNewTicketFormSubmission}>
        <input
          className=""
          type='text'
          id='username'
          placeholder='username'
          ref={(input) => {_username = input;}}/>
        <input
          className=""
          type='text'
          id='password'
          placeholder='Password'
          ref={(input) => {_password = input;}}/>
        <button className="btn btn-submit" type='submit'>Login!</button>
      </form>
    </Main>
  );
}

/*
Login.propTypes = {
  //  [variable-name]: PropTypes.[type],
};
*/

export default Login;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
color: white;
`;
