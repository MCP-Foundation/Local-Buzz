import React, { Component } from 'react';
import { Grommet } from 'grommet';
import { Button } from 'grommet';
import './Forum.css';
import Navigation from '../Navigation/Navigation';
import ForumHeader from './ForumHeader';
import SearchTags from './SearchTags';
import ForumPosts from './ForumPosts';
const theme = {
  global: {
    colors: {
      brand: '#2a48e7',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};
class Forum extends Component {
  state = {
    show: false,
  };
  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });
  postFormRedirect = () => {
    window.location.href = '/post';
  };
  render() {
    return (
      <section className="ForumComponent">
        <Grommet theme={theme} full>

          <Button
            primary
            gap="medium"
            onClick={this.handleShow}
            label="Start a conversation"
          />
          <ForumHeader show={this.state.show} handleClose={this.handleClose} />
          <SearchTags />
          <ForumPosts getAllPostsData={this.getAllPostsData} />
        </Grommet>
      </section>
    );
  }
}
export default Forum;