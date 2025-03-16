//Import css
import css from './App.module.css';
//import components
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, loading, error } = useSelector(state => state.contacts);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && (
        <p>
          Don't have any contacts at this moment or some problems on the
          server...
        </p>
      )}
      <>{items.length > 0 && <ContactList />}</>
    </div>
  );
}

export default App;
