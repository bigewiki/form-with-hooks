import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const RequestPictures = () => {

  //setting initial state
  let [captchaState, setCaptchaState] = useState();

  // // // // //
  // RECAPTCHA
  // // // // //

  const SITE_KEY = "6LfXwJUUAAAAAA6goGerxF04zaKfpK1JzDnvlib8";

  const onChange = (value) => {
    setCaptchaState(value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    fetch('http://3919.muniz.dev/wp-content/themes/astra-child/recaptcha.php',{
      method: 'post',
      body: captchaState,
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  return (
    <div>
      <form>
        <label htmlFor="frmNameA">Name</label><br/>
        <input className="_3919_input" type="name" name="name" id="frmNameA" placeholder="Full name" required autoComplete="name"/><br/>
        <label htmlFor="frmEmailA">Email</label><br/>
        <input className="_3919_input" type="email" name="email" id="frmEmailA" placeholder="name@example.com" required autoComplete="email"/><br/>
        <label htmlFor="frmEmailC">Confirm Email</label><br/>
        <input className="_3919_input" type="email" name="emailC" id="frmEmailC" placeholder="name@example.com" required autoComplete="email"/><br/>
        <label htmlFor="whichPics">Which pictures did you want?</label><br/>
        <textarea name="whichPics"></textarea><br/><br/>
        <ReCAPTCHA
          sitekey={SITE_KEY}
          onChange={onChange}
        /><br/>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default RequestPictures;
