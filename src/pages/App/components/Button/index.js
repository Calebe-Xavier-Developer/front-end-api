import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, ButtonContainer } from "./style";
import { logout } from "../../../../services/auth";

class CustomButton extends Component{
  handleLogout = async e => {
    logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <ButtonContainer>
        <Button color="#222" onClick={this.handleLogout}>
          <i className="fa fa-times" />
        </Button>
      </ButtonContainer>
    );
  }
};

export default withRouter(CustomButton);