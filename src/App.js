/* eslint-disable react/no-unused-state */
import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const checkboxOrNo = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: checkboxOrNo,
    }, () => this.isSaveButtonDisabled);
  }

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxAttr = 90;
    const maxSum = 210;

    const buttonIsDisabled = cardName.length === 0
    || cardDescription.length === 0
    || cardImage.length === 0
    || cardRare.length === 0
    || cardAttr1 > maxAttr
    || cardAttr2 > maxAttr
    || cardAttr3 > maxAttr
    || cardAttr1 + cardAttr2 + cardAttr3 > maxSum;

    this.setState({
      isButtonDisabled: buttonIsDisabled,
    });
  }

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
    } = this.state;

    return (
      <div>
        <h1 className="main-title">Tryunfo</h1>

        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

      </div>
    );
  }
}

export default App;
