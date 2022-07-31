import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="main-title">Tryunfo</h1>

        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChage={ () => { } }
          onSaveButtonClick={ () => { } }
        />

        <Card
          cardName="Stephen Curry"
          cardDescription="Melhor arremessador de 3 pontos da história da NBA."
          cardAttr1="Aremesso: 98"
          cardAttr2="Dunk: 70"
          cardAttr3="Movimentação: 92"
          cardImage="https://istoe.com.br/wp-content/uploads/2022/05/stephen-curry-418x235.jpg"
          cardRare="muito raro"
          cardTrunfo
        />

      </div>
    );
  }
}

export default App;
