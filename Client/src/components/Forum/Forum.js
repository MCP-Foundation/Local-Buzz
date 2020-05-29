import React, { Component } from 'react';
import { Button } from 'grommet';
import './Forum.css';
import ForumHeader from './ForumHeader';
import ForumPosts from './ForumPosts';
import Footer from '../Footer/Footer';

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
        <p className="forumHeader">
          Checkout different tags and topics people are talking about!
        </p>
        <Button
          gap="medium"
          size="large"
          onClick={this.handleShow}
          label="Start a conversation"
        />
        <ForumHeader show={this.state.show} handleClose={this.handleClose} />
        <ForumPosts getAllPostsData={this.getAllPostsData} />
        <Footer />
      </section>
    );
  }
}
export default Forum;
