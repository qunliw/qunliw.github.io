import React from "react";

function Projects() {
  return (
    <div>
      <section id="showcase">
        <div className="container">
          <h1>Coding is poetry, Coding is fun</h1>
          <br />
          <ul>
            <li>
              A meme generator, built on React
              <button
                onClick={() => {
                  window.open(
                    "https://qunliw.github.io/meme-generator",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  );
                }}
              >
                Play
              </button>
            </li>
            <li>
              Track US Corona Virus, built on React
              <button
                onClick={() => {
                  window.open(
                    "https://qunliw.github.io/us-covid19/",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  );
                }}
              >
                Watch
              </button>
            </li>
            <li>
              Track US CORONA Virus by State/County, , A pure Spring Boot App
              <button
                onClick={() => {
                  window.open(
                    "https://qunli-covid19-tracker.herokuapp.com/",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  );
                }}
              >
                Track
              </button>
            </li>
            <li>
              Converted this website into a single page application (SPA) on
              4/12/20
            </li>
            <li>Building an web application on Angular</li>
            <li>More coming soon</li>
          </ul>
        </div>
      </section>

      <div className="container">
        <section id="main">
          <h1>What are good projects?</h1>
          <p></p>
        </section>
        <aside id="sidebar">
          <p>Useful, Chanlleging and Lots of Fun</p>
        </aside>
      </div>
    </div>
  );
}

export default Projects;
