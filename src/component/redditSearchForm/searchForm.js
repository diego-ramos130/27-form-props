import React from 'react';
import PropTypes from 'prop-types';

class RedditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.subredditName = '';
    this.state.postlimit = 1;
  }
  handleNameChange = event => {
    this.setState({subredditName: event.target.value});
  };
  handlePostChange = event => {
    this.setState({postlimit: event.target.value});
  };
  handleSearch = event => {
    event.preventDefault();
    this.props.loadRedditArticles(this.state.subredditName, this.state.postlimit);
  };
  render() {
    return (
    <form onSubmit={this.handleSearch}>
      <input name='subredditName' value={this.state.subredditName} onChange={this.handleNameChange} type='text'/>
      <input name='postlimit' value={this.state.postlimit} onChange={this.handlePostChange} type='number'/>
      <button type="submit"> Search Subreddit</button>
    </form>
    );
  }
}

RedditForm.propTypes = {
  name: PropTypes.object,
};

export default RedditForm;
