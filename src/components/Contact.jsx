import { useParams } from "react-router";
import contacts from "../data/contacts";

function Contact() {
  const { id } = useParams();
  const userIndex = contacts.findIndex((user) => user.id === id);
  const User = contacts[userIndex];

  return userIndex >= 0 ? (
    <div id="contact">
      <div>
        <img src={null} />
      </div>

      <div>
        <h1>
          <i>{`${User.first} ${User.last}`}</i>
          <button name="favorite" value="true">
            ★
          </button>
        </h1>
        <p>
          <a target="_blank" href={`https://twitter.com/@`}>
            {User.twitter}
          </a>
        </p>

        <p>{User.notes}</p>

        <div>
          <form action="edit">
            <button type="submit">Edit</button>
          </form>
          <form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}

export default Contact;
