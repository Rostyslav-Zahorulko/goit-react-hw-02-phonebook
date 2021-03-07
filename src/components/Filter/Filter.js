import PropTypes from 'prop-types';

import './Filter.css';

const Filter = ({ filter, onChange }) => (
  <label className="filter">
    Find contacts by name
    <input
      className="filter-input"
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
