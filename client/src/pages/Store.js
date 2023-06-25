import React, { Component } from 'react';
import { variables } from '../Variables';

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      modalTitle: '',
      StoreId: 0,
      StoreName: '',
      StoreAddress: '',
      StoreCapacity: '',
      StoreManager: ''
    };
  }

  refreshList() {
    fetch(variables.API_URL + 'store')
      .then(response => response.json())
      .then(data => {
        this.setState({ stores: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

    changeStoreName = (e) => {
    this.setState({ StoreName: e.target.value });
  };

  changeStoreAddress = (e) => {
    this.setState({ StoreAddress: e.target.value });
  };

  changeStoreCapacity = (e) => {
    this.setState({ StoreCapacity: e.target.value });
  };

  changeStoreManager = (e) => {
    this.setState({ StoreManager: e.target.value });
  };

    addClick() {
    this.setState({
      modalTitle: 'Add Store',
      StoreId: 0,
      StoreName: '',
      StoreAddress: '',
      StoreCapacity: '',
      StoreManager: ''
    });
  }

editClick(store) {
    this.setState({
      modalTitle: 'Edit Store',
      StoreId: store.StoreId,
      StoreName: store.StoreName,
      StoreAddress: store.StoreAddress,
      StoreCapacity: store.StoreCapacity,
      StoreManager: store.StoreManager
    });
  }

  createClick() {
    fetch(variables.API_URL + 'store', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        StoreName: this.state.StoreName,
        StoreAddress: this.state.StoreAddress,
        StoreCapacity: this.state.StoreCapacity,
        StoreManager: this.state.StoreManager
      })
    })
      .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

 updateClick() {
    fetch(variables.API_URL + 'store', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        StoreId: this.state.StoreId,
        StoreName: this.state.StoreName,
        StoreAddress: this.state.StoreAddress,
        StoreCapacity: this.state.StoreCapacity,
        StoreManager: this.state.StoreManager
      })
    })
      .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

 deleteClick(id) {
    if (window.confirm('Are you sure?')) {
      fetch(variables.API_URL + 'store/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }

  render() {
    const {
      stores,
      modalTitle,
      StoreId,
      StoreName,
      StoreAddress,
      StoreCapacity,
      StoreManager
    } = this.state;

    return (
      <div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#storeModal"
          onClick={() => this.addClick()}
        >
          Add Store
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>StoreId</th>
              <th>StoreName</th>
              <th>StoreAddress</th>
              <th>StoreCapacity</th>
              <th>StoreManager</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stores.map(store => (
              <tr key={store.StoreId}>
                <td>{store.StoreId}</td>
                <td>{store.StoreName}</td>
                <td>{store.StoreAddress}</td>
                <td>{store.StoreCapacity}</td>
                <td>{store.StoreManager}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#storeModal"
                    onClick={() => this.editClick(store)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => this.deleteClick(store.StoreId)}
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="storeModal"
          tabIndex="-1"
          aria-labelledby="storeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="storeModalLabel">
                  {modalTitle}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                 <div className="d-flex flex-row bd-highlight mb-3">
                    
                  <span className="input-group-text">StoreName</span>
                  <input
                    type="text"
                    className="form-control"
                    value={StoreName}
                    onChange={this.changeStoreName}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">StoreAddress</span>
                  <input
                    type="text"
                    className="form-control"
                    value={StoreAddress}
                    onChange={this.changeStoreAddress}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">StoreCapacity</span>
                  <input
                    type="number"
                    className="form-control"
                    value={StoreCapacity}
                    onChange={this.changeStoreCapacity}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">StoreManager</span>
                  <input
                    type="text"
                    className="form-control"
                    value={StoreManager}
                    onChange={this.changeStoreManager}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() =>
                    StoreId === 0 ? this.createClick() : this.updateClick()
                  }
                >
                  {StoreId === 0 ? 'Create' : 'Update'}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
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


