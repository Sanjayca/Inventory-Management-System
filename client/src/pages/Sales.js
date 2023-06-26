import React, { Component } from "react";
import { variables } from "../Variables.js";
import Papa from "papaparse";

export class Sales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sales: [],
      stores: [],
      items: [],
      modalTitle: "",
      SalesId: 0,
      StoreId: "",
      Date: "",
      ItemId: "",
      SalesQty: 0,
    };
  }

  refreshList() {
    fetch(variables.API_URL + "sales")
      .then(response => response.json())
      .then(data => {
        this.setState({ sales: data });
      });

    fetch(variables.API_URL + "store")
      .then(response => response.json())
      .then(data => {
        this.setState({ stores: data });
      });

    fetch(variables.API_URL + "item")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeStoreId = (e) => {
    this.setState({ StoreId: e.target.value });
  };

  changeDate = (e) => {
    this.setState({ Date: e.target.value });
  };

  changeItemId = (e) => {
    this.setState({ ItemId: e.target.value });
  };

  changeSalesQty = (e) => {
    this.setState({ SalesQty: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add Sales",
      SalesId: 0,
      StoreId: "",
      Date: "",
      ItemId: "",
      SalesQty: 0,
    });
  }

  editClick(sale) {
    this.setState({
      modalTitle: "Edit Sales",
      SalesId: sale.SalesId,
      StoreId: sale.StoreId,
      Date: sale.Date,
      ItemId: sale.ItemId,
      SalesQty: sale.SalesQty,
    });
  }

  createClick() {
    fetch(variables.API_URL + "sales", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        StoreId: this.state.StoreId,
        Date: this.state.Date,
        ItemId: this.state.ItemId,
        SalesQty: this.state.SalesQty,
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
    fetch(variables.API_URL + "sales", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SalesId: this.state.SalesId,
        StoreId: this.state.StoreId,
        Date: this.state.Date,
        ItemId: this.state.ItemId,
        SalesQty: this.state.SalesQty,
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
      fetch(variables.API_URL + "sales/" + id, {
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
  downloadCSV(csvData) {
    const filename = "sales_data.csv";
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement("a");

      if (link.download !== undefined) {
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  render() {
    const { sales, stores, items, modalTitle, SalesId, StoreId, Date, ItemId, SalesQty } =
      this.state;

    const tableData = sales.map((sale) => ({
      SalesId: sale.SalesId,
      StoreId: sale.StoreId,
      Date: sale.Date,
      ItemId: sale.ItemId,
      SalesQty: sale.SalesQty,
    }));

    const csvData = Papa.unparse(tableData);

    return (
      <div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.addClick()}
        >
          Add Sales
        </button>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          onClick={() => this.downloadCSV(csvData)}
        >
          Download CSV
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>SalesId</th>
              <th>StoreId</th>
              <th>Date</th>
              <th>ItemId</th>
              <th>Sales Qty</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.SalesId}>
                <td>{sale.SalesId}</td>
                <td>{sale.StoreId}</td>
                <td>{sale.Date}</td>
                <td>{sale.ItemId}</td>
                <td>{sale.SalesQty}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.editClick(sale)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    onClick={() => this.deleteClick(sale.SalesId)}
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
                  <span className="input-group-text">StoreId</span>
                  <select className="form-select" onChange={this.changeStoreId} value={StoreId}>
                    {stores.map((store) => (
                      <option key={store.StoreId}>{store.StoreId}</option>
                    ))}
                  </select>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Date</span>
                  <input
                    type="date"
                    className="form-control"
                    value={Date}
                    onChange={this.changeDate}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">ItemId</span>
                  <select className="form-select" onChange={this.changeItemId} value={ItemId}>
                    {items.map((item) => (
                      <option key={item.ItemId}>{item.ItemId}</option>
                    ))}
                  </select>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">SalesQty</span>
                  <input
                    type="number"
                    className="form-control"
                    value={SalesQty}
                    onChange={this.changeSalesQty}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => (SalesId === 0 ? this.createClick() : this.updateClick())}
                >
                  {SalesId === 0 ? "Create" : "Update"}
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
