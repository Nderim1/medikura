import React, { Component } from "react";
import WordsTable from "./wordsTable";
import Pagination from "./common/pagination";
import { getWords, getFilteredWords } from "../services/fakeWordsService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Words extends Component {
  state = {
    words: [],
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
    sortColumn: { path: "score", order: "desc" },
  };

  componentDidMount() {
    this.setState({ words: getWords() });
  }
 
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      words: allWords,
    } = this.state;

    let filtered = allWords;
    if (searchQuery) {
      filtered = getFilteredWords(searchQuery)
    }
    
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const words = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: words };
  };

  render() {
    
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: words } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          <p>Search words in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <WordsTable
            words={words}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Words;
