import { useState } from "react";

function About(props) {
  //   let myStyle = {2
  //     color: "white",
  //     backgroundColor: "black",
  //   };
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#b19595",
    backgroundColor: props.mode === "dark" ? "#b19595" : "white",
    // border: "2px solid",
    // borderColor: props.mode === "dark" ? "white" : "#b19595",
  };
  // const [btntext, setBtnText] = useState("Enable Light Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     // setMyStyle({
  //     //   color: "black",
  //     //   backgroundColor: "white",
  //     // });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     // setMyStyle({
  //     //   color: "white",
  //     //   backgroundColor: "black",
  //     // });
  //     setBtnText("Enable Light Mode");
  //   }
  // };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#b19595" }}
    >
      <h1 className="mb-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and
              eficiently .
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              chrome ,firfox,Internet explorer ,safari ,opera.It suits to count
              character in facebook,blog,books,excel document , pdf document ,
              essays ,etc
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary my-3"
        >
          {btntext}
        </button>
      </div> */}
    </div>
  );
}

export default About;
