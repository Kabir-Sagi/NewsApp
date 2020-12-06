import React    from "react";
import template from "./Navbar.jsx";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       stateUpdate:props.stateUpdate
    }
  }
  
  render() {
    return template.call(this);
  }
}

export default Navbar;
