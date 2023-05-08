import React from 'react';
import css from '../ContactList/ContactList.module.css';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listItem}>
            <p className={css.listName}>
              {name}: {number}
            </p>

            <button
              type="button"
              onClick={() => deleteContact(id)}
              className={css.listButton}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
