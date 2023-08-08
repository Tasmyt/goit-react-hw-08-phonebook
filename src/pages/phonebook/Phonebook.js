import  FormContact from '../../components/FormContact/FormContact';
import { ListContact } from '../../components/ListContact/ListContact';
import { Filter } from '../../components/Filter/Filter';
import { Conteiner, Box } from '../../components/App.styled';
export default function Phonebook() {
 
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
