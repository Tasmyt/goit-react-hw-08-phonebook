import  FormContact from '../../components/FormContact/FormContact';
import { ListContact } from '../../components/ListContact/ListContact';
import { Filter } from '../../components/Filter/Filter';
import { Conteiner, Box } from '../../components/App.styled';
import { Paragraph, Title } from 'pages/pages.styled';

export default function Phonebook() {
  
  return (
    <>      
      <Conteiner>
        <Title>Phonebook</Title>
        <FormContact  />

        <Paragraph>Contacts</Paragraph>
        <Box>
        <p>Find contacts by name</p>
        <Filter />                
        <ListContact />
        </Box>
      </Conteiner>
    </>
    );
  }
