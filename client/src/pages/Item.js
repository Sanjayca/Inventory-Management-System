import React, { Component } from "react";
import { variables } from "../Variables.js";

export class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      suppliers: [],
      modalTitle: "",
      ItemId: 0,
      ItemName: "",
      Category: "",
      Price: 0,
      SupplierId: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "item")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ items: data });
      });

    fetch(variables.API_URL + "supplier")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ suppliers: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeItemName = (e) => {
    this.setState({ ItemName: e.target.value });
  };

  changeCategory = (e) => {
    this.setState({ Category: e.target.value });
  };

  changePrice = (e) => {
    this.setState({ Price: e.target.value });
  };

  changeSupplierId = (e) => {
    this.setState({ SupplierId: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add Item",
      ItemId: 0,
      ItemName: "",
      Category: "",
      Price: 0,
      SupplierId: "",
    });
  }

  editClick(item) {
    this.setState({
      modalTitle: "Edit Item",
      ItemId: item.ItemId,
      ItemName: item.ItemName,
      Category: item.Category,
      Price: item.Price,
      SupplierId: item.SupplierId,
    });
  }

  createClick() {
    fetch(variables.API_URL + "items", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ItemName: this.state.ItemName,
        Category: this.state.Category,
        Price: this.state.Price,
        SupplierId: this.state.SupplierId,
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
    fetch(variables.API_URL + "items", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ItemId: this.state.ItemId,
        ItemName: this.state.ItemName,
        Category: this.state.Category,
        Price: this.state.Price,
        SupplierId: this.state.SupplierId,
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
      fetch(variables.API_URL + "items/" + id, {
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
    const { items, suppliers, modalTitle, ItemId, ItemName, Category, Price, SupplierId } =
      this.state;

    return (
      <div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.addClick()}
        >
          Add Item
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Supplier ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.ItemId}>
                <td>{item.ItemId}</td>
                <td>{item.ItemName}</td>
                <td>{item.Category}</td>
                <td>{item.Price}</td>
                <td>{item.SupplierId}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.editClick(item)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => this.deleteClick(item.ItemId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
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
                <div className="form-group">
                  <label>Item Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={ItemName}
                    onChange={this.changeItemName}
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Category}
                    onChange={this.changeCategory}
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={Price}
                    onChange={this.changePrice}
                  />
                </div>
                <div className="form-group">
                  <label>Supplier ID</label>
                  <select
                    className="form-control"
                    value={SupplierId}
                    onChange={this.changeSupplierId}
                  >
                    <option value="">Select Supplier</option>
                    {suppliers.map((supplier) => (
                      <option key={supplier.SupplierId} value={supplier.SupplierId}>
                        {supplier.SupplierId} - {supplier.SupplierName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={ItemId === 0 ? () => this.createClick() : () => this.updateClick()}
                >
                  {ItemId === 0 ? "Create" : "Update"}
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
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
