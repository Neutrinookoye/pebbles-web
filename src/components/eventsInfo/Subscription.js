import React from "react";

const Subscription = () => {
  return (
    <aside className='subscription'>
      <div className='subscription-wrapper'>
        <h2>
          Want to get more information
          <br /> on Apartments?
        </h2>

        <p>Signup and stay in the know</p>

        <form className='sub-form'>
          <div className='form-input-group'>
            <input
              className='form-input-email'
              type='email'
              name='email'
              placeholder='Email'
              required
            />
            <button type='submit'>Signup</button>
          </div>
        </form>
      </div>
    </aside>
  );
};

export default Subscription;
