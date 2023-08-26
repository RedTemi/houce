import "./App.css";
import HouceSVG from "./HouceSVG";
function App() {
  return (
    <>
      <main>
        <div className="container">
        <HouceSVG></HouceSVG>
          <form action="">
            <div className="input-container">
              <div className="input-field">
                <input
                  className="email-field"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                />
                <button className="submit-arrow" type="submit">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 -6.5 36 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>right-arrow</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="ui-gambling-website-lined-icnos-casinoshunter"
                        transform="translate(-212.000000, -159.000000)"
                        fill="#252528"
                        fillRule="nonzero"
                      >
                        <g
                          id="square-filled"
                          transform="translate(50.000000, 120.000000)"
                        >
                          <path
                            d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                            id="right-arrow"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <div className="text">
            <div className="COME_CRUISE_WITH_US">COME CRUISE WITH US</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
