import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Button } from 'grommet';

function ForumHeader({ show, handleClose }) {
  return (
    <section className="ForumHeaderComponent">
      <p className="forumHeader">
        Checkout different tags and topics people are talking about!
      </p>

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
                  <option Key="#Finance" value=" #Finance">
                    #Finance
                  </option>
                  <option Key="#Management" value="#Management">
                    #Management
                  </option>
                  <option Key="#GasMeUp" value="#GasMeUp">
                    #GasMeUp
                  </option>
                  <option Key="#Random" value="#Random">
                    #Random
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="CategoryForm">
                <Form.Label>What industry is this related to?</Form.Label>
                <Form.Control as="select" name="category">
                  <option value="General">General</option>
                  <option value="Arts">Arts</option>
                  <option value="Construction">Construction</option>
                  <option value="Finance">Finance</option>
                  <option value="Food">Food</option>
                  <option value="Health">Health</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Medical">Medical</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Retail">Retail</option>
                  <option value="Social Services">Social Services</option>
                  <option value="Tech">Tech</option>
                  <option value="Transportation">Transportation</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="addressOptions">
                <Form.Label>Address</Form.Label>
                <Form.Control as="select" name="address">
                  <option key="Bronx" value="Bronx">
                    Bronx
                  </option>
                  <option key="Brooklyn" value="Brooklyn">
                    Brooklyn
                  </option>
                  <option key="Manhattan" value="Manhattan">
                    Manhattan
                  </option>
                  <option key="Queens" value="Queens">
                    Queens
                  </option>
                  <option key="Staten Island" value="Staten Island">
                    Staten Island
                  </option>
                  <option key="Outside of NYC" value="Outside of NYC">
                    Outside of NYC
                  </option>
                </Form.Control>
              </Form.Group>

              <Button
                className="psotFormSubmit"
                primary
                type="submit"
                label="Post"
              />
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}

export default ForumHeader;
