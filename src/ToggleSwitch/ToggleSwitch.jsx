import React from "react";
import { Container } from './Toggle.style';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: props.isChecked || false,
      };
      
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
      this.setState({ isChecked: !this.state.isChecked })
    }
    render () {
      return (
        <Container>
            
        </Container>
      );
    }
}

export default Toggle;