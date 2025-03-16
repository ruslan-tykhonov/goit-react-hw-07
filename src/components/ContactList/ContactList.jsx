import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

export default function ContactList() {
  //Filtr for list
  const filtredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.wrapper}>
        {filtredContacts.map(contact => {
          return (
            <li key={contact.id} className={css.listItem}>
              <Contact {...contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
