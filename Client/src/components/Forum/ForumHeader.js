import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Button } from 'grommet';

function ForumHeader({ show, handleClose }) {
  return (
    <section className="ForumHeaderComponent">
      <h3 className="forumHeader">
        Checkout different tags and topics people are talking about
      </h3>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>Start A Conversation!</Modal.Header>
          <Modal.Body>
            <Form id="postForm" action="/api/posts" method="post">
              <Form.Group controlId="titleForm">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="What do you want to title your conversation?"
                />
              </Form.Group>
              <Form.Group controlId="descriptionForm">
                <Form.Label>What's on your Mind?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Write a message..."
                  name="postBody"
                />
              </Form.Group>

              <Form.Group controlId="tagOptions">
                <Form.Label>Tag</Form.Label>
                <Form.Control as="select" name="tag">
                  <option key="#CovidResponse" value="#CovidResponse">
                    #CovidResponse
                  </option>
                  <option Key="#StartABusiness" value="#StartABusiness">
                    #StartABusiness
                  </option>
                  <option Key="#HelpOurEmployees" value="#HelpOurEmployees">
                    #HelpOurEmployees
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="CategoryForm">
                <Form.Label>What industry is this related to?</Form.Label>
                <Form.Control as="select" name="category">
                  <option value="Food">Food</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="addressOptions">
                <Form.Label>Address</Form.Label>
                <Form.Control as="select" name="address">
                  <option key="BX" value="BX">
                    Bronx
                  </option>
                  <option key=" BK" value="BK">
                    Brooklyn
                  </option>
                  <option key="MN" value="MN">
                    Manhattan
                  </option>
                  <option key="QN" value="QN">
                    Queens
                  </option>
                  <option key="SI" value="SI">
                    Staten Island
                  </option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit">
                Post
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}

export default ForumHeader;
