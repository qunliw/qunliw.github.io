import React from "react";

function Contact() {
  return (
    <section id="showcase">
      <div className="container">
        <h2>A friendly hello, a business proposal</h2>
        <h2>a new opportunity or kind suggestions</h2>
        <form className="my-form">
          <div class="form-group">
            <label>Name: </label>
            <input type="text" name="name" />
            <label>Email: </label>
            <input type="text" name="email" />
            <label>Message: </label>
            <textarea name="message"></textarea>
          </div>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
