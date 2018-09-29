import ContactList from './ContactList';
// Autogenerated using npm run gen Contacts
/*
* Copy to other files
* import Contacts from './Contacts';
* <Contacts/>
*/
import styled from 'styled-components';

function Contacts(){
  return (
    <Main>
      <h1>Contacts</h1>
      <div className="row">
        <div className="col-md-3">
          <ContactList contactList={masterContactList}/>
        </div>
      </div>
    </Main>
  );
}

export default Contacts;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
color: white;
`;


const masterContactList = [{ firstname:'Kevin',lastName: 'Jenkins', id:'0' },{ firstname:'Jane',lastName: 'Jenkins', id:'1' },{ firstname:'Karl',lastName: 'Lewin', id:'2' }];
