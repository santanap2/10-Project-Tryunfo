import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="main-form">

        <label htmlFor="name-input">
          Nome da carta:
          <br />
          <input
            data-testid="name-input"
            type="text"
            name="card-name"
            id="name-input"
            placeholder="Nome da carta"
          />
        </label>

        <label htmlFor="card-description">
          Descrição da carta:
          <br />
          <textarea
            data-testid="description-input"
            name="card-description"
            id="card-description"
            cols="40"
            rows="5"
            resize="none"
            placeholder="Descrição da carta"
          />
        </label>

        <label htmlFor="number-input1">
          Atributo 1:
          <br />
          <input
            data-testid="attr1-input"
            type="number"
            name="number-input1"
            id="number-input1"
            placeholder="Atributo 1"

          />
        </label>

        <label htmlFor="number-input2">
          Atributo 2:
          <br />
          <input
            data-testid="attr2-input"
            type="number"
            name="number-input2"
            id="number-input2"
            placeholder="Atributo 2"

          />
        </label>

        <label htmlFor="number-input3">
          Atributo 3:
          <br />
          <input
            data-testid="attr3-input"
            type="number"
            name="number-input3"
            id="number-input3"
            placeholder="Atributo 3"
          />
        </label>

        <label htmlFor="image-input">
          Caminho da imagem:
          <br />
          <input
            data-testid="image-input"
            type="text"
            name="image-input"
            id="image-input"
            placeholder="Caminho da imagem"
          />
        </label>

        <label htmlFor="rare-input">
          Raridade:
          <br />
          <select
            data-testid="rare-input"
            name="rare-input"
            id="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Normal</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo-input"
            id="trunfo-input"
          />
        </label>

        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
