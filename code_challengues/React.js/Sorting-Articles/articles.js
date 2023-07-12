import React from 'react';

function Articles({ articles, sortedBy }) {
  // Sort the articles based on the selected sorting option
  const sortedArticles = articles.sort((a, b) => {
    if (sortedBy === "upvotes") {
      return b.upvotes - a.upvotes; // Sort by upvotes in descending order
    } else if (sortedBy === "date") {
      return new Date(b.date) - new Date(a.date); // Sort by date in descending order
    }
    return 0;
  });

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedArticles.map((article, index) => (
            <tr data-testid="article" key={index}>
              <td data-testid="article-title">{article.title}</td>
              <td data-testid="article-upvotes">{article.upvotes}</td>
              <td data-testid="article-date">{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
/*
In App.js:

The App component receives the articles prop, which is an array of article objects.
The state variable sortedBy is introduced using the useState hook. It will track the current sorting option.
Two event handlers are added to the "Most Upvoted" and "Most Recent" buttons using the onClick attribute. These event handlers call the sortArticles function with the corresponding sorting option ("upvotes" or "date").
The sortArticles function updates the sortedBy state with the selected sorting option.
The Articles component is rendered and passed the articles array and the sortedBy state.
In Articles.js:

The Articles component receives the articles and sortedBy props.
Inside the component, the sortedArticles variable is created to store the sorted articles based on the selected sorting option.
The articles array is sorted using the sort() method and a custom comparison function. The comparison function checks the sortedBy value to determine how to sort the articles. If sortedBy is "upvotes", the articles are sorted by the upvotes property in descending order. If sortedBy is "date", the articles are sorted by the date property in descending order.
The sorted articles are then mapped using the map() method and rendered as table rows (<tr>).
Each article's properties (title, upvotes, and date) are rendered in separate table cells (<td>). The data-testid attributes are added to each cell to match the test requirements.
Overall, the App component manages the state of the selected sorting option (sortedBy) and updates it when the buttons are clicked. The Articles component receives the articles and sortedBy props, sorts the articles based on the selected option, and renders them in the table.

With these updates, when the "Most Upvoted" button is clicked, the articles will be sorted by the number of upvotes in descending order. When the "Most Recent" button is clicked, the articles will be sorted by the date in descending order. The table will be dynamically updated based on the selected sorting option.
*/