import React, { useContext } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Button } from 'grommet';
import { TagContext } from '../../contexts/tagContext';

function ForumHeader({ show, handleClose }) {
  const [tag, setTag] = useContext(TagContext);
  return (
    <section className="ForumHeaderComponent">
      <section className="ForumTags">
        <button
          onClick={() => window.location.reload()}
          class="btn color-1 btn-btn"
          href=""
        >
          #AllPosts
        </button>
        <button
          onClick={() => setTag('#CovidResponse')}
          class="btn color-1 btn-btn"
          href=""
        >
          #CovidResponse
        </button>
        <button
          onClick={() => setTag('#StartABusiness')}
          class="btn color-2 btn-btn"
          href=""
        >
          #StartABusiness
        </button>
        <button
          onClick={() => setTag('#HelpOurEmployees')}
          class="btn color-3 btn-btn"
          href=""
        >
          #HelpOurEmployees
        </button>
        <button
          onClick={() => setTag('#Finance')}
          class="btn color-4 btn-btn"
          href=""
        >
          #Finance
        </button>
        <button
          onClick={() => setTag('#Management')}
          class="btn color-5 btn-btn"
          href=""
        >
          #Management
        </button>
        <button
          onClick={() => setTag('#GasMeUp')}
          class="btn color-6 btn-btn"
          href=""
        >
          #GasMeUp
        </button>
        <button
          onClick={() => setTag('#Random')}
          class="btn color-7 btn-btn"
          href=""
        >
          #Random
        </button>
      </section>

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

              <div className="postFormSubmit">
                <Button primary type="submit" label="Post" />
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}

export default ForumHeader;
