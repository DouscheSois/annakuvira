import React from "react";

import Person1 from "../../images/person1.jpg";
import Person2 from "../../images/person2.jpg";
import Person3 from "../../images/person3.jpg";
import Person4 from "../../images/person4.jpg";
import Person5 from "../../images/person5.jpg";
import Person6 from "../../images/person6.jpg";

const Right = () => {
  return (
    <div className="right">
      <h1>Feedback</h1>
      <div className="box">
        <img src={Person1} alt="person-1" />
        <br />
        <small>April Knope</small>
        <br />
        <small>Regional Manager @ The Michael Scott Paper Company</small>
        <p>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <br />I had a problem eating at the right schedule. I worked with Anna
          for a few weeks and my life has changed completely. My husband loves
          what I cook and now I am looking better than ever!
        </p>
      </div>
      <div className="box">
        <img src={Person2} alt="person-2" />
        <br />
        <small>Chris Rock</small>
        <br />
        <small>Vice President @ Dousche Sois</small>
        <p>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <br />I was overweight and did not have the motivation to do anything
          about it. I contacted Anna and she completely change my lifestyle.
          Just after a weeks working with her, I was able to fit to a size 32
          from a size 36. I highly recommend her!
        </p>
      </div>
      <div className="box">
        <img src={Person3} alt="person-3" />
        <br />
        <small>Linda Xao</small>
        <br />
        <small>Chinese Model @ Victoria Secret</small>
        <p>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <br />I started working with Anna way before I started modeling. She
          guided me in adopting a more healthy lifestyle and even showed me how
          to cook healthy foods. I still work with her whenever I have questions
          but she's my go to gal for nutrition advice.
        </p>
      </div>
      <div className="box">
        <img src={Person4} alt="person-4" />
        <br />
        <small>Tatiana Smith</small>
        <br />
        <small>Data Scientist @ Google</small>
        <p>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <br /> I had a rough year in 2015 and gained over 100 pounds in just
          one year! I couldn't stop eating. I contacted Anna and she got my life
          back on track. I now go to the gym and eat healthy every single day. I
          am motivated and it's all thanks to Anna!
        </p>
      </div>
      <div className="box">
        <img src={Person5} alt="person-5" />
        <br />
        <small>Tina May</small>
        <br />
        <small>Producer @ Walt Disney</small>
        <p>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <br /> I work long hours all year to produce the very best movies for
          disney. I often don't have time for things like worrying about what I
          eat at all times. I heard about Anna through my friend Michael Bay and
          he recommended her to me. I messaged Anna and she has changed my life!
        </p>
      </div>
      <div className="box">
        <img src={Person6} alt="person-6" />
        <br />
        <small>Capt. Fred Washington</small>
        <br />
        <small>Helicopter Pilot @ The US Army </small>
        <p>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <br /> The army prepares you for anything. I needed to be in top shape
          at all times. I tried army techniques to stay is shape and I have been
          successful with it but I felt I could do more. I contacted Anna and
          she showed me a more optimize way to live a healthy lifestyle.
        </p>
      </div>
    </div>
  );
};

export default Right;
