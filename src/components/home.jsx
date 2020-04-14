import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section id="header">
          <div className="container-fluid">
            <nav className="row navbar">
              <div id="navbar-brand">
                <a href="/">Bin Abass Faisal</a>
              </div>

              <ul id="navlinks">
                <li>
                  <a href="/travel">Travel</a>
                </li>
                <li>
                  <a href="/poetry">Poetry</a>
                </li>
                <li>
                  <a href="/poetry">Entertainment</a>
                </li>
              </ul>
            </nav>

            <div className="row quote">
              <div className="col-12">
                <p className="quote-text">
                  Life is beatiful, but it takes beauty to see beauty. I know
                  this doesn't make sense but i had to fill this space. Life is
                  beatiful, but it takes beauty to see beauty. I know this
                  doesn't make sense but i had to fill this space. Life is
                  beatiful, but it takes beauty to see beauty. I know this
                  doesn't make sense but i had to fill this space.
                </p>
                <span>~ </span>
                <span className="reference">Prof. Akwasi Nyantakyi</span>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
