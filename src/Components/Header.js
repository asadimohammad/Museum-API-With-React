// App Header
import Navigation from "./Navigation.js";

const Header = (prop) => {
  return (
    <div>
      <header>
        <Navigation />
        <div className="header wrapper">
          <h1>
            Met Highlights
          </h1>
          <form onSubmit={prop.submit}>
            <label className="sr-only">Search by keyword : </label>
            <input
              type="text"
              id="userQuery"
              onChange={prop.input}
              value={prop.value}
              placeholder="Search by keyword"
            />
            <button>Search</button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
