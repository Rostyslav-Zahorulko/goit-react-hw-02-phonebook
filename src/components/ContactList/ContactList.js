import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts }) => {
  const a = Math.random() > 0.5;

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem name={name} number={number} key={id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
