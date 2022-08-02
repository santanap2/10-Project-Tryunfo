/* eslint-disable react/no-unused-state */
import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isButtonDisabled: true,
      savedCards: [],
    };

  onInputChange = ({ target }) => {
    const checkboxOrNo = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: checkboxOrNo,
    }, () => {
      this.buttonState();
    });
  }

  buttonState = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const max = 90;
    const min = 0;
    const maxSum = 210;

    const buttonIsDisabled = cardName.length === 0
    || cardDescription.length === 0
    || cardImage.length === 0
    || Number(cardAttr1) > max || Number(cardAttr2) > max || Number(cardAttr3) > max
    || Number(cardAttr1) < min || Number(cardAttr2) < min || Number(cardAttr3) < min
    || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxSum;

    this.setState({
      isButtonDisabled: buttonIsDisabled,
    });
  }

  saveButtonClick = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
    } = this.state;

    const cardInfo = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };

    this.setState({
      savedCards: [...savedCards, cardInfo],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });

    console.log(savedCards);

    // alert('funcionando');
    // console.log(event.target);
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
      isButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1 className="main-title">Tryunfo</h1>

        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isButtonDisabled }
          onSaveButtonClick={ this.saveButtonClick }
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
