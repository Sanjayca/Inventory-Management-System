import React, { Component } from "react";
import { variables } from "../Variables.js";

export class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suppliers: [],
      modalTitle: "",
      SupplierId: 0,
      SupplierName: "",
      SupplierContact: "",
      SupplierEmail: "",
      SupplierAddress: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "supplier")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ suppliers: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeSupplierName = (e) => {
    this.setState({ SupplierName: e.target.value });
  };

  changeSupplierContact = (e) => {
    this.setState({ SupplierContact: e.target.value });
  };

  changeSupplierEmail = (e) => {
    this.setState({ SupplierEmail: e.target.value });
  };

  changeSupplierAddress = (e) => {
    this.setState({ SupplierAddress: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add Supplier",
      SupplierId: 0,
      SupplierName: "",
      SupplierContact: "",
      SupplierEmail: "",
      SupplierAddress: "",
    });
  }

  editClick(supplier) {
    this.setState({
      modalTitle: "Edit Supplier",
      SupplierId: supplier.SupplierId,
      SupplierName: supplier.SupplierName,
      SupplierContact: supplier.SupplierContact,
      SupplierEmail: supplier.SupplierEmail,
      SupplierAddress: supplier.SupplierAddress,
    });
  }

  createClick() {
    fetch(variables.API_URL + "supplier", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SupplierName: this.state.SupplierName,
        SupplierContact: this.state.SupplierContact,
        SupplierEmail: this.state.SupplierEmail,
        SupplierAddress: this.state.SupplierAddress,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
        this.refreshList();
      })
      .catch((error) => {
        alert("Failed");
      });
  }

  updateClick() {
    fetch(variables.API_URL + "supplier", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SupplierId: this.state.SupplierId,
        SupplierName: this.state.SupplierName,
        SupplierContact: this.state.SupplierContact,
        SupplierEmail: this.state.SupplierEmail,
        SupplierAddress: this.state.SupplierAddress,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
        this.refreshList();
      })
      .catch((error) => {
        alert("Failed");
      });
  }

  deleteClick(id) {
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + "supplier/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          alert(result);
          this.refreshList();
        })
        .catch((error) => {
          alert("Failed");
        });
    }
  }

  render() {
    const {
      suppliers,
      modalTitle,
      SupplierId,
      SupplierName,
      SupplierContact,
      SupplierEmail,
      SupplierAddress,
    } = this.state;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.addClick()}
        >
          Add Supplier
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>SupplierId</th>
              <th>SupplierName</th>
              <th>SupplierContact</th>
              <th>SupplierEmail</th>
              <th>SupplierAddress</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.SupplierId}>
                <td>{supplier.SupplierId}</td>
                <td>{supplier.SupplierName}</td>
                <td>{supplier.SupplierContact}</td>
                <td>{supplier.SupplierEmail}</td>
                <td>{supplier.SupplierAddress}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.editClick(supplier)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    onClick={() => this.deleteClick(supplier.SupplierId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">SupplierName</span>
                  <input
                    type="text"
                    className="form-control"
                    value={SupplierName}
                    onChange={this.changeSupplierName}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">SupplierContact</span>
                  <input
                    type="text"
                    className="form-control"
                    value={SupplierContact}
                    onChange={this.changeSupplierContact}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">SupplierEmail</span>
                  <input
                    type="email"
                    className="form-control"
                    value={SupplierEmail}
                    onChange={this.changeSupplierEmail}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">SupplierAddress</span>
                  <input
                    type="text"
                    className="form-control"
                    value={SupplierAddress}
                    onChange={this.changeSupplierAddress}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => (SupplierId === 0 ? this.createClick() : this.updateClick())}
                >
                  {SupplierId === 0 ? "Create" : "Update"}
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Supplier;
