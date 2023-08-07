
import  FormContact from './FormContact/FormContact';
import { ListContact } from './ListContact/ListContact';
import { Filter } from './Filter/Filter';
import { Conteiner, Box } from './App.styled';
export default function App() {
 
    return (
      <Conteiner>
        <h1>Phonebook</h1>
        <FormContact  />

        <h2>Contacts</h2>
        <Box>
        <p>Find contacts by name</p>
        <Filter />        
        <ListContact />
          </Box>
      </Conteiner>
    );
  }

