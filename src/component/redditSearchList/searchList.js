import React from 'react';
import PropTypes from 'prop-types';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.articles = this.props.state.articles || [];
  }
  render() {
    return(
    <ul>
      {
        this.state.articles.map((article, index) => {
          return (
          <a href={article.url}>
            <h3>{article.title}</h3>
            <p>{article.ups}</p>
          </a>
          )
        })
      }
    </ul>
  )
  }
}

SearchList.propTypes = {
  articles: PropTypes.array,
}

export default SearchList;
