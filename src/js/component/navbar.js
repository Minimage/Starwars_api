import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../views/Likes";

export const Navbar = () => {
  // Gets the value provided to setVal from any of its child elements
  const { val, setVal } = useContext(userContext);

  // Removes the duplicates by passing the Val array through and turning it into a Set
  const noDuplicates = new Set(val);

  // Turns back into an array by using the spread operator
  const myArr = [...noDuplicates];

  let arrlen;

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1" style={{ color: "" }}>
          Home
        </span>
      </Link>
      <div className="ml-auto">
        
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {myArr.length}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {myArr.map((item, index, array) => {
              return (
                <>
                {/* <Link to="/"> */}
                  <li>{item}</li>
                  {/* </Link> */}
                  <button
                    onClick={() => {

						noDuplicates.delete(item)
            setVal(noDuplicates)
                    }}
                  >
                    {" "}
                    Del
                  </button>
                </>
              );
            })}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};
