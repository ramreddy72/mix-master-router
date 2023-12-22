import axios from 'axios'
import React from 'react'
import { Form, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const result = await axios.post(newsletterUrl, data)
    toast.success(result.data.msg)
    return redirect('/')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }
  return null
}

const NewsLetter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Our News Letter
      </h4>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          defaultValue="ram"
        />
      </div>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          LastName
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          defaultValue="palnati"
        />
      </div>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-input"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
      >
        submit
      </button>
    </Form>
  )
}

export default NewsLetter
