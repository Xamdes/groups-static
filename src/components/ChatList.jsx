// Autogenerated using npm run gen ChatList
/*
* Copy to other files
* import ChatList from './ChatList';
* <ChatList/>
*/
import styled from 'styled-components';
import Chat from './Chat';
// import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

//List chats by chat names pass name and uuid

function ChatList(){
  return (
    <Main>
      <h1>Current Discussions</h1>
      <Chat messageList={chatOne}/>
      <Chat messageList={chatTwo}/>
    </Main>
  );
}

/*
ChatList.propTypes = {
  //  [variable-name]: PropTypes.[type],
};
*/

export default ChatList;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;

const chatOne = ['Hi','Yay','Test One'];
const chatTwo = ['Hi','Yay','Test Two'];
