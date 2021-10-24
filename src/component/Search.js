import React from 'react';
import { Form } from 'react-bootstrap';

const Search = (props) => {

    return (
      <div>
        <Form className="col-sm-12 col-md-12 col-lg-12">
          <Form.Group className="mb-5" >
            <Form.Control type="text" placeholder="Search...."
            value={props.value}
            onChange={(event) => props.setSearch(event.target.value)} />
          </Form.Group>
        </Form>
      </div>
    )
  }
export default Search;