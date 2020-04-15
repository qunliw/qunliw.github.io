import React from "react";
import Chess from "./Chess";

function Sample() {
  const sampleCode = `fetch('https://qunliw.github.io/json/chess-'
    + pageCounter + ".json") .then((resp) => resp.json())
    .then((ourData) => { //rendering JSON... }`;
  return (
    <div>
      <Chess />
      <div className="container">
        <section id="main">
          <h1>Sample JS code</h1>
          <p>{sampleCode}</p>
        </section>
        <aside id="sidebar">
          <p>
            Ajax- Asynchronous Javascript And Json, a technique of loading data
            from the server and selectively updating parts of a web page without
            reloading the whole page.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Sample;
