function Header(props) {
  return (
    <header className="text-center">
      <h1>Monthly Activity Tracker</h1>
      <form onSubmit={props.submit} action="">
        <input
          onChange={props.change}
          type="text"
          name="text"
          placeholder="e.g. coding"
          value={props.value}
        />
        <input type="submit" name="" value="Add Activity" />
      </form>
    </header>
  );
}

export default Header;
