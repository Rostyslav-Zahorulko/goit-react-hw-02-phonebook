import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onClick }) => (
  <li>
    <span>{name}</span>
    <span>{number}</span>
    <button type="button" onClick={onClick}>
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
