import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Banner from "./Banner";
import reactImg from "./images/react.png";

function App() {
  return (
    <div>
      <Banner />
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                title="React"
                description="Lorem ipsum dolor sit amet"
                image={reactImg}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
