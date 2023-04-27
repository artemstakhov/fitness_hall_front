import React from 'react';
import { default as RSelect } from 'react-select';
import styles from './Select.module.css'

const options = [
  { value: 'user', label: 'Client' },
  { value: 'admin', label: 'Manager' }
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    border: 'none',
    outline: 'none',
    "&:hover": {
      borderColor: state.isFocused ? "none" : "none"
    },
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "none" : "none"
    }
  }),
  singleValue: (provided, state) => {
    const color = '#FFF';

    return { ...provided, color };
  }
}

const Select = () => (
  <RSelect className={styles.container} styles={customStyles} options={options} />
)
export default Select;