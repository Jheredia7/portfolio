import React from "react";
import PropTypes from "prop-types";

export default class Matrix extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fullscreen: PropTypes.bool,
    colSize: PropTypes.number,
    fontSize: PropTypes.number,
    interval: PropTypes.number,
    color: PropTypes.string,
    frequency: PropTypes.number,
    speed: PropTypes.number,
    style: PropTypes.object,
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    fullscreen: true,
    colSize: 13,
    fontSize: 20,
    interval: 30,
    color: "#39FF13",
    frequency: 0.005,
    speed: 1.8,
  };

  constructor(props) {
    super(props);

    this.state = {
      canvas: null,
    };

    this.draw = this.draw.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.setState({ canvas: this.refs.canvas }, () => {
      let columns = [];
      let context = this.state.canvas.getContext("2d");
      let size = this.props.colSize;
      let source =
        "o n i h c a b c d e f g h i j k l m n ñ o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ";
      let width = this.props.fullscreen ? window.innerWidth : this.props.width;
      let height = this.props.fullscreen
        ? window.innerHeight
        : this.props.height;
      let canvas = this.state.canvas;
      canvas.width = width;
      canvas.height = height;

      let numberOfColumns = Math.floor((width / size) * 3);

      this.setState(
        { canvas, columns, context, size, source, numberOfColumns },
        () => {
          for (let i = 0; i < numberOfColumns; i++) {
            columns.push(0);
          }

          this.draw();
          let interval = setInterval(this.draw, 50 / this.props.speed);
          this.setState({ interval });

          if (this.props.fullscreen)
            window.addEventListener("resize", this.updateDimensions);
        }
      );
    });
  }

  draw() {
    let context = this.state.context;
    let columns = this.state.columns;
    let numberOfColumns = this.state.numberOfColumns;

    context.fillStyle = "rgba(0,0,0,0.08)";
    context.fillRect(0, 0, this.state.canvas.width, this.state.canvas.height);
    context.fillStyle = this.props.color;
    context.font =
      "700 " + this.props.fontSize + "px Consolas,monaco,monospace";

    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      let index = Math.floor(Math.random() * this.state.source.length);
      let character = this.state.source[index];
      let positionX = columnIndex * this.state.size;
      let positionY = columns[columnIndex] * this.state.size;

      context.fillText(character, positionX, positionY);
      if (
        positionY >= this.state.canvas.height &&
        Math.random() > 1 - this.props.frequency
      ) {
        columns[columnIndex] = 0;
      }
      columns[columnIndex]++;
    }

    this.setState({ context, columns });
  }

  updateDimensions() {
    let canvas = this.state.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  render() {
    let style = this.props.style ? this.props.style : {};
    return (
      <div
        style={{
          ...style,
        }}
      >
        <canvas ref="canvas" />
      </div>
    );
  }
}
