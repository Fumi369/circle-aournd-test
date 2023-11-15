import { Suspense } from "react";
import { getContacts } from "./api";
import { Contact } from "./type";

function App() {
  return (
    <>
      <h1>Contacts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactList />
      </Suspense>
    </>
  );
}

function ContactList() {
  const contacts = getContacts();
  console.log("contacts:", contacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ContactItem cont={contact} />
        </li>
      ))}
    </ul>
  );
}

function ContactItem({ cont }: { cont: Contact }) {
  return (
    <div style={{ color: "blue" }}>
      {cont.name} | {cont.email}
    </div>
  );
}

export default App;
