import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';

import './ContactList.css';

const ContactList = ({ contacts, onClick }) => (
  <ul className="contact-list">
    {contacts.map(({ name, number, id }) => (
      <ContactListItem
        name={name}
        number={number}
        key={id}
        onClick={() => onClick(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
