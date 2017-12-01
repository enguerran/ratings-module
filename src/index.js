import "./style";
import { Component, render } from "preact";
import Ratings from "./Ratings";
import Star from "./Star";

export default class App extends Component {
  componentDidMount() {}

  render(props, { results = [] }) {
    return (
      <div>
        <div>ratings</div>
        <Ratings max={5} rate={3} />
        <Ratings
          max={5}
          onChange={rate => {
            console.log(rate);
          }}
        />
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
