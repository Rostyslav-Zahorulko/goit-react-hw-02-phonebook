import PropTypes from 'prop-types';

const ContactListItem = ({ name, number }) => (
  <li>
    <span>{name}</span>
    <span>{number}</span>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
