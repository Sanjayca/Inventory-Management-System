import React, { Component } from "react";
import { variables } from "../Variables.js";

export class Vendor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: [],
      departments: [],
      modalTitle: "",
      VendorId: 0,
      VendorName: "",
      VendorContact: "",
      PaymentMethod: "",
      VendorAddress: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "vendor")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ vendors: data });
      });

    fetch(variables.API_URL + "department")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ departments: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeVendorName = (e) => {
    this.setState({ VendorName: e.target.value });
  };

  changeVendorContact = (e) => {
    this.setState({ VendorContact: e.target.value });
  };

  changePaymentMethod = (e) => {
    this.setState({ PaymentMethod: e.target.value });
  };

  changeVendorAddress = (e) => {
    this.setState({ VendorAddress: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add Vendor",
      VendorId: 0,
      VendorName: "",
      VendorContact: "",
      PaymentMethod: "",
      VendorAddress: ""
    });
  }

  editClick(vendor) {
    this.setState({
      modalTitle: "Edit Vendor",
      VendorId: vendor.VendorId,
      VendorName: vendor.VendorName,
      VendorContact: vendor.VendorContact,
      PaymentMethod: vendor.PaymentMethod,
      VendorAddress: vendor.VendorAddress,
    });
  }

  createClick() {
    fetch(variables.API_URL + "vendor", {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        VendorName: this.state.VendorName,
        VendorContact: this.state.VendorContact,
        PaymentMethod: this.state.PaymentMethod,
        VendorAddress: this.state.VendorAddress,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  updateClick() {
    fetch(variables.API_URL + "vendor", {
      method: "PUT",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        VendorId: this.state.VendorId,
        VendorName: this.state.VendorName,
        VendorContact: this.state.VendorContact,
        PaymentMethod: this.state.PaymentMethod,
        VendorAddress: this.state.VendorAddress,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  deleteClick(id) {
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + "vendor/" + id, {
        method: "DELETE",
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            alert(result);
            this.refreshList();
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }

  render() {
    const {
      vendors,
      departments,
      modalTitle,
      VendorId,
      VendorName,
      VendorContact,
      PaymentMethod,
      VendorAddress,
    } = this.state;

    return (
      <div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          onClick={() => this.addClick()}
        >
          Add Vendor
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Vendor Contact</th>
              <th>Payment Method</th>
              <th>Vendor Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.VendorId}>
                <td>{vendor.VendorName}</td>
                <td>{vendor.VendorContact}</td>
                <td>{vendor.PaymentMethod}</td>
                <td>{vendor.VendorAddress}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    onClick={() => this.editClick(vendor)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => this.deleteClick(vendor.VendorId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Vendor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={VendorName}
                    onChange={this.changeVendorName}
                  />
                </div>
                <div className="form-group">
                  <label>Vendor Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    value={VendorContact}
                    onChange={this.changeVendorContact}
                  />
                </div>
                <div className="form-group">
                  <label>Payment Method</label>
                  <input
                    type="text"
                    className="form-control"
                    value={PaymentMethod}
                    onChange={this.changePaymentMethod}
                  />
                </div>
                <div className="form-group">
                  <label>Vendor Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={VendorAddress}
                    onChange={this.changeVendorAddress}
                  />
                </div>
              </div>
              <div className="modal-footer">
                {VendorId === 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.createClick()}
                  >
                    Create
                  </button>
                ) : null}
                {VendorId !== 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.updateClick()}
                  >
                    Update
                  </button>
                ) : null}
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
