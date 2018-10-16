import React from 'react';
import PropTypes from 'prop-types';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    if (props.articles) {
      console.log('articles loaded!')
    } else {
      console.error();
    }
  }
  render() {
    return(
    <ul>
      {
        this.props.articles.map((article, index) => {
          return (
            <li>
          <a href={article.data.url}>
            <h3>{article.data.title}</h3>
            <p>{article.data.ups}</p>
          </a>
            </li>
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
