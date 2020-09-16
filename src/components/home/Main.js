import React from "react";

import Woman1 from "../../images/woman1.jpg";

const Main = () => {
  return (
    <div className="main">
      <div className="main-intro">
        <img src={Woman1} alt="anna" />
        <h1>Hi, I'm Anna Kuvira</h1>
        <p>
          I am an entrepreneur and a nutritionist who runs the Kuvira
          International Fitness Center that provides advice and resources to
          those who truly want to live a healthy lifestyle.
        </p>
      </div>
      <small>
        <i className="fa fa-arrow-circle-down"></i> Notable people I've worked
        with include <i className="fa fa-arrow-circle-down"></i>
      </small>
      <ul>
        <li>
          <i className="fa fa-user-md"></i> Dr. Walter Willett
        </li>
        <li>
          <i className="fa fa-user"></i> Lebron James
        </li>
        <li>
          <i className="fa fa-user"></i> Kendall Jenner
        </li>
        <li>
          <i className="fa fa-facebook-f"></i> Mark Zuckerberg
        </li>
        <li>
          <i className="fa fa-user"></i> President Trump
        </li>
        <li>and many more...</li>
      </ul>
      <div className="main-contact">
        <h1>Send me a message!</h1>
        <form className="main-contact-form">
          <input type="text" name="firstname" placeholder="First Name" />

          <input type="text" name="lastname" placeholder="Last Name" />

          <input type="text" name="email" placeholder="Email" />
          <select name="country">
            <option value="usa">USA</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">France</option>
            <option value="usa">Germany</option>
            <option value="usa">UK</option>
            <option value="usa">Other</option>
          </select>
          <textarea placeholder="Write something.."></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
