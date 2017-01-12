import React, { Component } from 'react';

const $ = require('jquery');
$.DataTable = require('datatables.net');

import './App.css';

function searchTable(term) {
    const table = $('#example').DataTable({ dom: ""});
    table.search(term).draw();
}

const someData = [
  [ "New Data", "System Architect", "$3,120", "2011/04/25", "Edinburgh", 5421 ],
  [ "New Data 1", "Director", "$8,422", "2011/07/25", "Edinburgh", 8422 ],
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.table = $('#example').DataTable({
      dom: "",
      "data": [
        [ "1", "Tiger Nixon", "System Architect", "$3,120", "2011/04/25", "Edinburgh", 5421 ],
        [ "2", "Garrett Winters", "Director", "$8,422", "2011/07/25", "Edinburgh", 8422 ],
      ],
      'columnDefs': [{
         'targets': 0,
         'searchable': false,
         'orderable': false,
         'className': 'dt-body-center',
         'render': function (data, type, full, meta){
             return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
         }
      }],
      'order': [[1, 'asc']]
    });
  }

  getSelected = () => {
    this.table.$('input[type="checkbox"]').each(function(){
         // If checkbox doesn't exist in DOM
         if($.contains(document, this)){
            // If checkbox is checked
            //console.log(this);
            if(this.checked){
               // Create a hidden element
               console.log(this);
            }
         }
       });
  }

  search = (term) => {
    this.table.search(term).draw();
  }

  setTableData = (data) => {
    this.table.clear();
    this.table.rows.add(data);
    this.table.draw();
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleSearchChange} value={this.state.searchTerm} />
        <input type="button" onClick={() => {this.search(this.state.searchTerm) }} value="SEARCH FROM REACT"/>
        <input type="button" onClick={() => {this.setTableData(someData) }} value="SET NEW DATA"/>
        <input type="button" onClick={() => {this.getSelected() }} value="GET SELECTED"/>
      </div>
    );
  }
}

export default App;
