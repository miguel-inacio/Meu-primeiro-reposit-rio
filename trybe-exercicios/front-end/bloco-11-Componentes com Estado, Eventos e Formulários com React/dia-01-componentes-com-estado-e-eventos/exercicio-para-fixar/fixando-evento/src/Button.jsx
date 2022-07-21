import React from 'react';



class Button extends React.Component {
  render() {
    const { innerText } = this.props;
    function handleClick() {
      console.log(innerText);
    }
    return (
      <button onClick={ handleClick }>{ innerText }</button>
    )
  }
}

export default Button;