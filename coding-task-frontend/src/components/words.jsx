import React from "react";
import WordsTable from "./wordsTable";
import Form from "./common/form";
import Joi from "joi-browser";
import { loadWords } from "../store/words";

import { connect } from "react-redux";
class Words extends Form {
  state = {
    data: {
      searchQuery: "",
    },
    errors: {},
    sortColumn:{path: "score", order: "desc" }
  };
  
  schema = {
    searchQuery: Joi.string()
      .required()
      .min(2)
      .label("Search"),
  };

  doSubmit = async () => {
    this.props.loadWords(this.state.data.searchQuery);
  };

  render() {
     
    const { sortColumn } = this.state;
    return (
      <div className="row">
        <div className="col">
          
          <form onSubmit={this.handleSubmit} className="mb-5">
            {this.renderInput("searchQuery", "Search letters")}
            {this.renderButton("Search")}
          </form>
           
          {this.props.loading ? (
            <>Loading</> 
          ) : (
            <>
              {this.props.words.length ? (
                <>
                  <WordsTable
                      words={this.props.words}
                      sortColumn={sortColumn}
                    />
                </>
              ) : (
                <>
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  words: state.entities.words.list,
  loading: state.entities.words.loading
})
const mapDispatchToProps = dispatch => ({
  loadWords: (searchQuery) => dispatch(loadWords(searchQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(Words)
 
