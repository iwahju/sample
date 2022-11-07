import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View User Details</h3>
          <div className="card-body">
            <div className="row">
              <label> User Name: </label>
              <div> {this.state.user.name}</div>
            </div>
            <div className="row">
              <label> User password: </label>
              <div> {this.state.user.password}</div>
            </div>
            <div className="row">
              <label> User Email ID: </label>
              <div> {this.state.user.email}</div>
            </div>
            <div className="row">
              <label> User Inventory : </label>
              <td>
                {this.state.user.inventory?.map(
                  ({ ingredient, quantity, unit, date }) => (
                    <p key={ingredient}>
                      {ingredient}
                      {quantity}
                      {unit}
                      {date}
                    </p>
                  )
                )}
              </td>
            </div>
            <div className="row">
              <label> User Shopping List : </label>
              <td>
                {this.state.user.shoppingList?.map(
                  ({ ingredient, quantity, unit, date }) => (
                    <p key={ingredient}>
                      {ingredient}
                      {quantity}
                      {unit}
                      {date}
                    </p>
                  )
                )}
              </td>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
