import React from "react";
import style from "../styles/PhoneBook.module.css";
import PhonebookListItem from "./PhoneBookListItem";
import PropTypes from "prop-types";

const Phonebook = ({ contacts, onRemovePersonData }) => (
  <>
    <h2>Контакты</h2>
    <ul className={style.phoneList}>
      {contacts.map(({ id, name, number }) => (
        <PhonebookListItem
          key={id}
          name={name}
          number={number}
          onRemovePersonData={() => onRemovePersonData(id)}
        />
      ))}
    </ul>
  </>
);

export default Phonebook;
Phonebook.propTypes = {
  contacts: PropTypes.array,
  onRemovePersonData: PropTypes.func,
};
