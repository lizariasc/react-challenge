import React from "react";
import Header from "./Header"
import './Button.css'


interface State {
  evenButton: number;
  oddButton: number;
}


// The Button component defines its own initial state
class Button extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      evenButton: 0,
      oddButton: 0
    }
  }

  // defines a handleClick method which takes one argumemt, isClickLeft, if is true will inclement evenButton by 1, if false will increment oddButton by 1.
  handleClick(isClickLeft: boolean) {
    if (isClickLeft) {
      this.setState({ evenButton: this.state.evenButton + 1 })
    } else {
      this.setState({ oddButton: this.state.oddButton + 1 })
    }
  };

  // this component renders a div element that contains two columns, each one with its own header and a button
  render() {

    return (
      // the onClick handler calls the handleClick method with the appropiate value from the isClickLeft argument. 
      // the text inside the buttons is the number of times clicked which comes from the initial Button state evenButton and oddButton

      <div >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>


          <div style={{ width: '50%', textAlign: 'center', color: 'black', fontSize: '1.2em' }}>

            <Header
              isEven={this.state.evenButton % 2 === 0}
              isOdd={false}
              evenButton={this.state.evenButton}
            />

            <button onClick={() => this.handleClick(true)} className='rounded-button'>

              Times clicked: {this.state.evenButton}
            </button>
          </div >


          <div style={{ width: '50%', textAlign: 'center', color: "black", fontSize: '1.2em' }}>

            <Header
              isEven={false}
              isOdd={this.state.oddButton % 2 !== 0}
            />
            <button onClick={() => this.handleClick(false)} className='rounded-button'>

              Times clicked: {this.state.oddButton}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Button;