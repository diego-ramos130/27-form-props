'use strict';

import "@babel/polyfill";
import React from 'react';
import superagent from 'superagent';
import redditSearchForm from '../redditSearchForm/searchForm';
import redditSearchList from '../redditSearchList/searchList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.articles = [];
  }

  loadRedditArticles = async (subreddit, posts) => {
    if (posts > 100) {
      posts = 100;
    }
    if (posts < 10) {
      posts = 10;
    }
    const LEDDIT_API = 'https://www.reddit.com/r';
    return superagent.get(`${LEDDIT_API}/${subreddit}.json?limit=${posts}`)
      .then(response => {
      if (response.body.kind === 'listing') {
        this.setState({articles: response.body.data.children});
      }
  })
      .catch(console.error);
};



  render() {
    return (
      <main>
        <redditSearchForm />
        <redditSearchList />
      </main>
    );
  }
}

export default App;
