import React from "react";

function Home() {
  return (
    <div>
      <section id="showcase">
        <div className="container">
          <h1>
            <p>Through my eyes,</p>
            <p>Living my life,</p>
            <p>Coding with me and</p>
            <p>Welcome to my world</p>
          </h1>
        </div>
      </section>

      <div className="container">
        <section id="main">
          <h1>What brings you here?</h1>
          <p>{new Date().toLocaleString()}</p>
          <h5 textAlign="center">
            Note: This website is converting to a Single Page Application (SPA)
          </h5>
        </section>
        <aside id="sidebar">
          <p>
            Please stay Safe, and have fun to play a fun Meme Generator game.
            <button
              onClick={() => {
                window.open(
                  "https://qunliw.github.io/meme-generator/",
                  "Popup",
                  "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                );
              }}
            >
              Play Game!
            </button>
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Home;
