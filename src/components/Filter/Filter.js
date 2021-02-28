const Filter = ({ filter, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" value={filter} onChange={onChange}></input>
  </label>
);

export default Filter;
