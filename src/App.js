import React from 'react';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
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
      </div>
    );
  }
}

export default App;
