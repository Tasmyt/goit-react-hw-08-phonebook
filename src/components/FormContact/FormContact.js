import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redax/selectors';
import { nanoid } from 'nanoid';
import { fetchAddContact } from '../../redax/operations';
import { Form, Lable, Input, Button } from './FormContact.styled';

export default function FormContact() {
  const contacts = useSelector(getContacts);  
  const dispatch = useDispatch();

  const resetInput = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };
    const findContact = contacts.find(
      item => contact.name.toLowerCase() === item.name.toLowerCase()
    );
    if (findContact) {
      return alert(`${contact.name} is already in contacts.`);
    }
    const findNumber = contacts.find(
      item => contact.number.toLowerCase() === item.number.toLowerCase()
    );
    if (findNumber) {
      return alert(`${contact.number} is already in use.`);
    }
    dispatch(fetchAddContact(contact));
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={resetInput}>
      <Lable>
        {' '}
        Name
        <Input
          type="text"
          name="name"
          placeholder="Name"          
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Lable>

      <Lable>
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Number"          
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Lable>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
