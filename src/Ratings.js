import { Component } from "preact";
import Kinto from "kinto";
import Star from "./Star";

const KINTO_BACKEND = "https://ratings-codesandbox.herokuapp.com/v1/";

var db = new Kinto();
console.log(db);

export default class Ratings extends Component {
  state = {
    readonly: false,
    stars: []
  };

  componentWillMount() {
    this.updateStars(this.props.rate || 0);
    this.readonly(this.props.rate);
  }

  updateStars = rate => {
    if (this.state.readonly) {
      return;
    }
    const stars = [];
    for (let i = 0; i < this.props.max; i++) {
      stars.push(rate - i > 0);
    }
    this.setState(state => ({ ...state, stars }));
  };

  readonly = readonly => {
    this.setState(state => ({ ...state, readonly }));
  };

  onChange = rate => {
    this.props.onChange(rate);
  };

  render() {
    return (
      <div
        style={{ display: "flex" }}
        onMouseLeave={() => {
          this.updateStars(0);
        }}
      >
        {this.state.stars.map((val, index) => (
          <Star
            fill={val ? "yellow" : "transparent"}
            onMouseOver={e => {
              this.updateStars(index + 1);
            }}
            onClick={e => {
              this.updateStars(index + 1);
              this.readonly(true);
              this.onChange(
                this.state.stars.reduce((acc, val) => acc + (val ? 1 : 0), 0)
              );
            }}
          />
        ))}
      </div>
    );
  }
}
