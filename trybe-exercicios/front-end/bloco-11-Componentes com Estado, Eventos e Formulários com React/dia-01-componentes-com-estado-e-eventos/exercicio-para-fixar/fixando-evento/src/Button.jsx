import React from 'react';



class Button extends React.Component {
  constructor() {
    super()
    // this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0,
    }
  }

  // const { innerText } = this.props;
  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }));
    console.log(this.setButtonColor(this.state.numeroDeCliques));
  };


  setButtonColor = (numeroDeCliques) => {
    if(numeroDeCliques > 0 && numeroDeCliques % 2 === 0) {
      return 'green';
    }
    return 'white';
  }
  
  render() {
    return (
      <button onClick={ this.handleClick } style={{ backgroundColor: this.setButtonColor(this.state.numeroDeCliques) }}>Botão</button>
    )
  }

}

export default Button;