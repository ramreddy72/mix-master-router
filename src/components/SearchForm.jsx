import React from 'react'
import { Form } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'

const SearchForm = ({ searchTerm }) => {
  return (
    <Wrapper>
      <Form action="" className="form" method="GET">
        <input
          type="search"
          name="search"
          id="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </Form>
    </Wrapper>
  )
}

export default SearchForm
