import React from "react";
import styles from "./form.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Select from 'react-select';
import { useState } from 'react';


const UserForm = () => {

  const options = [
    { value: 'chocolate', label: 'CR GUARAPUAVA' },
    { value: 'strawberry', label: 'CR JURUÁ' },
    { value: 'vanilla', label: 'CR ALTO PURUS' }
  ]

  const ctl = [
    { value: '1', label: 'CTL 1' },
    { value: '2 ', label: 'CTL 2' },
    { value: '3', label: 'CTL 3' }
  ]

  const teste = 180

  const [numberCTL, setCTL] = useState([])

  return (
    <div>
      <div className={styles.formControl}>
        <label htmlFor="name">Técnico Responsável:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
        />
      </div>
      <div className={styles.formControl}>
        <label>Coordenação Regional ou Frente de Proteção Etnoambiental:</label>
          <Select options={options} required />
      </div>
      <div className={styles.formControl}>
        <label>Quantas CTL(s) estão envolvidas no planejamento e/ou execução deste projeto?</label>
          <input
          type="text"
          name="numberCTL"
          id="numberCTL"
          placeholder=""
          required
          onChange={(e) => setCTL(
            parseInt(e.target.value)
          )}
        />
      </div>
      
      {
        numberCTL <= 1 
        ?
        <div className={styles.formControl}>
        <label>CTL 1</label>
          <Select options={ctl} required />
        </div>
        :
        <div className={styles.formControl}>
        <label>CTL 2</label>
          <Select options={ctl} required />
        </div>
      }

    </div>
  );
};

export default UserForm;
