import './App.css'

function App() {

  return (
    <>
    <main>
      <div className="container">
        <object data="./path.svg" type="" id="ctasvg"></object>
        <form action="">
          <div className="input-container">
            <div className="input-field">
              <input
                className="email-field"
                name="email"
                type="email"
                placeholder="Enter Email"
              />
              <button className="submit-arrow" type="submit">→</button>
            </div>
          </div>
        </form>
        <div className="text">
          <div className="COME_CRUISE_WITH_US">COME CRUISE WITH US</div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
