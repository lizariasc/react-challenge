import React from "react";

interface State {
    evenButton: number;
    oddButton: number;
  }
  
// the Header component 
class Header extends React.Component<any, State> {

    render() {
      //takes two props, isEven and isOdd and a state evenButton
      // and renders a div element that contains two h3 elements.
      const { isEven, isOdd, evenButton } = this.props;
      // the state evenButton prevents a title to render at the beginning of the application. When the clicks are 0.
      return (
        // if isEven is true, the first h3 will be displayed
        // if isOdd is true, the second h3 will be displayed
        <div style={{textAlign: 'center'}}>
          <h3 style={{visibility: (isEven && evenButton !==0) ? "visible" : "hidden"}}>
            {isEven && evenButton !==0 ? "That is an even number" : ""}</h3>
  
          <h3 style={{visibility: isOdd ? "visible" : "hidden"}}>
            {isOdd ? "That is an odd number" : ""}</h3>
        </div>
      )
    }
  }

export default Header;