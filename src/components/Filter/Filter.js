import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redax/selectors';
import { filterContacts } from 'redax/filterSlice';
import PropTypes from 'prop-types';
import { Input } from "./Filter.styled";

export const Filter = () => {
  const filter = useSelector(getFilter);  
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));    
  }

  return (
      <>
      <Input type="text" name="filter" placeholder="Filter"  value={filter} onChange={changeFilter}  />
      </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};