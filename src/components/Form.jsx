import React, { Component } from 'react';
import propTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    console.log(this.props);

    return (
      <form className="main-form">

        <label htmlFor="name-input">
          Nome da carta:
          <br />
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
            placeholder="Nome da carta"
          />
        </label>

        <label htmlFor="description-input">
          Descrição da carta:
          <br />
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description-input"
            cols="40"
            rows="5"
            value={ cardDescription }
            onChange={ onInputChange }
            placeholder="Descrição da carta"
          />
        </label>

        <label htmlFor="number-input1">
          Arremesso:
          <br />
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="number-input1"
            value={ cardAttr1 }
            min="0"
            onChange={ onInputChange }
            placeholder="Atributo 1"

          />
        </label>

        <label htmlFor="number-input2">
          Passe:
          <br />
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="number-input2"
            value={ cardAttr2 }
            min="0"
            onChange={ onInputChange }
            placeholder="Atributo 2"

          />
        </label>

        <label htmlFor="number-input3">
          Drible:
          <br />
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="number-input3"
            value={ cardAttr3 }
            min="0"
            onChange={ onInputChange }
            placeholder="Atributo 3"
          />
        </label>

        <label htmlFor="image-input">
          Caminho da imagem:
          <br />
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="Caminho da imagem"
          />
        </label>

        <label htmlFor="rare-input">
          Raridade:
          <br />
          <select
            data-testid="rare-input"
            name="cardRare"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
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
            name="cardTrunfo"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          data-testid="save-button"
          type="button"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  // hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
