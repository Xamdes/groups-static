import Contact from './Contact';
// Autogenerated using npm run gen contactList
/*
* Copy to other files
* import contactList from './contactList';
* <contactList/>
*/
import styled from 'styled-components';

function ContactList(props){
  return (
    <Main>
      {props.contactList.map((contact) =>
        <Contact firstName={contact.firstName}
          lastName={contact.lastName}
          id={contact.id}
          key={contact.id}/>
      )}
    </Main>
  );
}


ContactList.propTypes = {
  contactList: PropTypes.array,
};


export default ContactList;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
color: white;
`;
