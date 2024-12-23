import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    this.przycisk = this.przycisk.bind(this);    
    }
    przycisk(){
        alert("aaa")
    }
    render() {
    
    
    return (
        <div className="bt_div">
      <button className="Button_bt" onClick={this.przycisk}>Przycisk</button> 
      </div>
    );
  }
}

export default Button;