import { useRef, useState } from "react";
import "./Contact.css";
import MapChart from "./MapChart";
import emailjs from "@emailjs/browser";
import Test from "./Test";

const Contact = () => {
  const [mailSent, setMailSent] = useState(null);
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [message1, setMessage1] = useState("");
  const ref = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name1) {
      alert("Enter the name..!");
    } else if (!email1) {
      alert("Enter the mail");
    } else if (!message1) {
      alert("enter the message");
    } else {
      emailjs
        .sendForm("service_9v4homg", "template_tjt03h8", ref.current, {
          publicKey: "wylUJTQKL25vF60nT",
        })
        .then(
          () => {
            console.log("Success");
            setMailSent(true);
            setEmail1("");
            setMessage1("");
            setName1("");
          },
          (err) => {
            console.log(err);
            setMailSent(false);
          }
        );
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <h1>Contact</h1>
      <div className="flex-display">
        <div className="left">
          <form className="form" ref={ref} onSubmit={submitHandler}>
            <div className="form-name">
              <label>Name:</label>
              <input
                placeholder="name..."
                name="name"
                autoComplete={true}
                value={name1}
                type="text"
                onChange={(e) => setName1(e.target.value)}
              />
            </div>
            <div className="form-name">
              <label>Email:</label>
              <input
                placeholder="e-mail..."
                name="email"
                type="email"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
              />
            </div>
            <div className="form-message">
              <textarea
                placeholder="Type the message here..."
                name="message"
                rows={4}
                value={message1}
                onChange={(e) => setMessage1(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {mailSent && (
            <span style={{ color: "green" }}>Mail sent successfully :)</span>
          )}
        </div>
        <div className="right">
          <MapChart />
        </div>
      </div>
    </div>
  );
};

export default Contact;
