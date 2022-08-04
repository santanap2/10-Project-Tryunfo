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

    removeCard = ({ target }) => {
      const { savedCards } = this.state;
      const { firstChild } = target.parentElement;
      const cardName = firstChild.children[2].firstChild.innerText;
      const sameName = savedCards.filter((item) => item.name === cardName);

      this.setState({
        savedCards: savedCards.filter((item) => item !== sameName[0]),
        cardTrunfo: false,
      });
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
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  trunfoTest = () => {
    const { savedCards } = this.state;
    const trunfoOrNot = savedCards.some((item) => item.trunfo);
    return trunfoOrNot;
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
      savedCards,
    } = this.state;

    const displayCard = cardName
    || cardDescription
    || cardAttr1
    || cardAttr2
    || cardAttr3
    || cardAttr3
    || cardImage
    || cardTrunfo;

    const displayDeck = savedCards.length > 0;

    return (
      <div className="main-container">

        <div className="title-container">
          <h1 className="main-title">Tryunfo</h1>
        </div>

        <div className="form-card-div">
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
            hasTrunfo={ this.trunfoTest() }
          />

          { displayCard ? (
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
          ) : (
            ''
          )}
        </div>

        { displayDeck ? (
          <div className="card-pack">
            <h1 className="pack-title">Baralho de cartas</h1>
            <div className="cards">
              { savedCards.map((card) => (
                <section
                  className="card-and-button"
                  key={ `section-${card.name}` }
                >
                  <Card
                    key={ card.name }
                    cardName={ card.name }
                    cardDescription={ card.description }
                    cardAttr1={ card.attr1 }
                    cardAttr2={ card.attr2 }
                    cardAttr3={ card.attr3 }
                    cardImage={ card.image }
                    cardRare={ card.rare }
                    cardTrunfo={ card.trunfo }
                  />
                  <button
                    data-testid="delete-button"
                    name="delete-btn"
                    type="button"
                    id="delete-button"
                    onClick={ this.removeCard }
                  >
                    Excluir
                  </button>
                </section>
              ))}
            </div>
          </div>
        ) : ''}
      </div>
    );
  }
}

export default App;
