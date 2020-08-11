import React from "react";
import style from "../styles/PhoneBook.module.css";
import PropTypes from "prop-types";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label className={style.labelMarkup}>
        Найти номер
        <input
          className={style.inputField}
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
