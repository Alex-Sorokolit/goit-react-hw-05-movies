export const SearchBox = ({ value, onSubmit, onChange }) => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div style={{ display: 'flex' }}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={event => onChange(event.target.value)}
        />
      </form>
      <button type="submit" onClick={handleSubmit}>
        <span>Search</span>
      </button>
    </div>
  );
};
