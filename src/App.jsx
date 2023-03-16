import { useState } from "react";
import contacts from "./data/contacts";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              // className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            {/* <div id="search-spinner" aria-hidden hidden={!searching} /> */}
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorite && <span>★</span>}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        // className={navigation.state === "loading" ? "loading" : ""}
      >
        <div id="contact">
          <div>
            <img src={null} />
          </div>

          <div>
            <h1>
              <i>No Name</i>{" "}
              <button name="favorite" value="true">
                ★
              </button>
            </h1>
            <p>
              <a target="_blank" href={`https://twitter.com/@`}>
                @
              </a>
            </p>

            <p>Notes</p>

            <div>
              <form action="edit">
                <button type="submit">Edit</button>
              </form>
              <form
                method="post"
                action="destroy"
                onSubmit={(event) => {
                  if (
                    !confirm("Please confirm you want to delete this record.")
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <button type="submit">Delete</button>
              </form>
            </div>
          </div>
        </div>

        <br />
        
        <form method="post" id="contact-form">
          <p>
            <span>Name</span>
            <input
              placeholder="First"
              aria-label="First name"
              type="text"
              name="first"
              defaultValue=""
            />
            <input
              placeholder="Last"
              aria-label="Last name"
              type="text"
              name="last"
              defaultValue=""
            />
          </p>
          <label>
            <span>Twitter</span>
            <input
              type="text"
              name="twitter"
              placeholder="@jack"
              defaultValue="@"
            />
          </label>
          <label>
            <span>Avatar URL</span>
            <input
              placeholder="https://example.com/avatar.jpg"
              aria-label="Avatar URL"
              type="text"
              name="avatar"
              defaultValue=""
            />
          </label>
          <label>
            <span>Notes</span>
            <textarea name="notes" defaultValue="Notes" rows={6} />
          </label>
          <p>
            <button type="submit">Save</button>
            <button type="button">Cancel</button>
          </p>
        </form>
      </div>
    </>
  );
}

export default App;
