import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ItemContact } from '../ItemContact/ItemContact';
import { getFiltredContacts } from '../../redax/selectors';
import { fetchContacts } from 'redax/operations';

const STATUS = {
	IDLE: 'idle',
	PENDING: 'pending',
	REJECTED: 'rejected',
	FULFILLED: 'fulfilled',
} 

export const ListContact = () => {
  const {status, error} = useSelector((state) => state.contacts)  
  const contactsFilter = useSelector(getFiltredContacts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts()); 
}, [dispatch]);
  
  return (
  <>
    {status === STATUS.PENDING && (<div>
				<span >Loading...</span>
      </div>)
      }      
      {(status === STATUS.FULFILLED && contactsFilter.length > 0) &&
        (<ul>
          {contactsFilter.map(({ id, name, number }) => (
            <ItemContact key={id} id={id} name={name} number={number} />
          ))}
        </ul>)}
      {status === STATUS.REJECTED && alert(error)}      
      </>
  );
};

ListContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletContact: PropTypes.func,
};