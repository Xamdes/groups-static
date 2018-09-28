// Autogenerated using npm run gen App
/*
* Copy to other files
* import App from './App';
* <App/>
*/
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Login from './Login';
import Contacts from './Contacts';
import Groups from './Groups';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // masterChatList: []
    };
    // this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  render(){
    return (
      <Main className="container-fluid">
        <HeaderStyle><Header/></HeaderStyle>
        <Title className="jumbotron">Welcome to Groups</Title>
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/contacts' component={Contacts}/>
          <Route exact path='/groups' render={()=><Groups/>}/>
          <Route component={Error404} />
        </Switch>
      </Main>
    );
  }
}

/*
App.propTypes = {
  //  [variable-name]: PropTypes.[type],
};
*/

export default App;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: black;
`;

const Title = styled.h1`
text-align: center;
`;

const HeaderStyle = styled.div`
font-size: 1.2em;
text-align: center;
`;
