import React from "react";
let pageCounter = 1;
let htmlString;

function showDemo() {
  fetch("https://qunliw.github.io/json/chess-" + pageCounter + ".json")
    .then((resp) => resp.json())
    .then((ourData) => {
      htmlString = renderHTML(ourData);
    });

  // pageCounter++;
  // if (pageCounter > 3) {
  // }
}

function renderHTML(data) {
  let htmlString = "";
  for (let i = 0; i < data.length; i++) {
    htmlString +=
      "<li>" + data[i].name + " is a " + data[i].age + " years old that plays ";

    for (let ii = 0; ii < data[i].openings.white.length; ii++) {
      if (ii === 0) {
        htmlString += data[i].openings.white[ii];
      } else {
        htmlString += " & " + data[i].openings.white[ii];
      }
    }

    htmlString += " as white, and plays ";

    for (let ii = 0; ii < data[i].openings.black.length; ii++) {
      if (ii === 0) {
        htmlString += data[i].openings.black[ii];
      } else {
        htmlString += " & " + data[i].openings.black[ii];
      }
    }

    htmlString += " as black.</li>";
  }
  return htmlString;
}

function Chess() {
  return (
    <section id="showcase">
      <div className="container">
        <p>Let's find out what chess openings they play</p>
        <button id="btn" onClick={showDemo}>
          Fetch Opening Info for A New Chess Player
        </button>
        <br />
        <p>Not working now while my website is converting to SPA</p>
        <p>{htmlString}</p>
      </div>
      <div id="chess-info"></div>
    </section>
  );
}

export default Chess;
