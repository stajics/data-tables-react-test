import React, { Component } from 'react';

const $ = require('jquery');
$.DataTable = require('datatables.net');

import './App.css';

function searchTable(term) {
    const table = $('#example').DataTable({ dom: ""});
    table.search(term).draw();
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.table = $('#example').DataTable({ dom: ""});
  }

  search = (term) => {
    this.table.search(term).draw();
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleSearchChange} value={this.state.searchTerm} />
        <input type="button" onClick={() => {this.search(this.state.searchTerm) }} value="SEARCH FROM REACT"/>
      </div>
    );
  }
}

export default App;
