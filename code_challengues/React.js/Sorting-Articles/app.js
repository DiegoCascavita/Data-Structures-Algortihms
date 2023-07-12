import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
  const [sortedBy, setSortedBy] = useState("upvotes"); // State to track the sorting option

  const sortArticles = (sortBy) => {
    setSortedBy(sortBy); // Update the sorting option state
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => sortArticles("upvotes")} // Sort articles by upvotes
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => sortArticles("date")} // Sort articles by date
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articles} sortedBy={sortedBy} />
    </div>
  );
}

export default App;
