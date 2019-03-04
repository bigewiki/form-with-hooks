import React, { useState } from 'react';

function RequestPictures(messageFromState) {

  const [getMessageFromState, setMessageFromState] = useState(messageFromState);

  return (
    <div>
      <form>
        <label for="frmNameA">Name</label><br/>
        <input className="_3919_input" type="name" name="name" id="frmNameA" placeholder="Full name" required autocomplete="name"/><br/>
        <label for="frmEmailA">Email</label><br/>
        <input className="_3919_input" type="email" name="email" id="frmEmailA" placeholder="name@example.com" required autocomplete="email"/><br/>
        <label for="frmEmailC">Confirm Email</label><br/>
        <input className="_3919_input" type="email" name="emailC" id="frmEmailC" placeholder="name@example.com" required autocomplete="email"/><br/>
        <label for="whichPics">Which pictures did you want?</label><br/>
        <textarea name="whichPics">{getMessageFromState.props}</textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RequestPictures;
