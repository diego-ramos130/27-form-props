'use strict';

import "@babel/polyfill";
import React from 'react';
import superagent from 'superagent';
import RedditSearchForm from '../redditSearchForm/searchForm';
import RedditSearchList from '../redditSearchList/searchList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.articles = [];
  }

  loadRedditArticles = async (subreddit, posts) => {
    if (posts > 100) {
      throw new Error('Too many posts. Try a number under 100.');
    }
    if (posts < 1) {
      throw new Error('Needs to print at least one post.');
    }
    const LEDDIT_API = 'https://www.reddit.com/r';
    return superagent.get(`${LEDDIT_API}/${subreddit}.json?limit=${posts}`)
      .then(response => {
      if (response.body.data) {
        this.setState({articles: response.body.data.children});
      }
  })
      .catch(console.error);
};



  render() {
    return (
      <main>
        <RedditSearchForm loadRedditArticles={this.loadRedditArticles}/>
        <RedditSearchList articles={this.state.articles}/>
      </main>
    );
  }
}

export default App;
