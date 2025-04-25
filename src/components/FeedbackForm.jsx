import React from 'react'

const FeedbackForm = () => {
  return (
    <div className='bg-dark-subtle bg-gradient'>
      <div className='container d-flex justify-content-center align-items-center gap-1 flex-column'>

        <h2 style={{ color: "darkorange" }} className='mt-3'>Feedback Fom</h2>

        <form style={{ width: "500px" }} >
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">Your Feedback</label>
            <textarea class="form-control" id="exampleInputName" rows="4" placeholder="Enter your feedback here..."></textarea>

          </div>
          <div class="my-4 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Want updates on Whatsapp</label>
          </div>
          <div class="d-flex justify-content-center my-4">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default FeedbackForm