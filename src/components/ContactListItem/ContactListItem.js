import PropTypes from 'prop-types';

import './ContactListItem.css';

const ContactListItem = ({ name, number, onClick }) => (
  <li className="contact-list-item">
    <p className="contact-name">{name}:</p>
    <p className="contact-number">{number}</p>
    <button className="delete-contact-button" type="button" onClick={onClick}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
