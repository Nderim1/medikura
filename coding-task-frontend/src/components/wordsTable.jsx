import React, { Component } from "react";
import Table from "./table";

class WordsTable extends Component {
  columns = [
    { path: "title", label: "Words" },
    { path: "score", label: "Score" },
    { path: "desc", label: "Description" },
    
  ];
  render() {
    const { words, sortColumn, onSort } = this.props;
   
    return (
      <Table
        columns={this.columns}
        data={words}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default WordsTable;
