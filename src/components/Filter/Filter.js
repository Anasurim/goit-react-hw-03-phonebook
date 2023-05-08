import React from 'react';
import css from '../Filter/Filter.module.css';

export function Filter({ name, onChange }) {
  return (
    <label className={css.filterLabel}>
      <span className={css.filterTitle}>Find contacts by name</span>
      <input
        type="text"
        value={name}
        onChange={onChange}
        className={css.filterInput}
      ></input>
    </label>
  );
}
