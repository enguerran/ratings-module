/**
  Created by Tom Walsh 
  from the Noun Project
*/

export default ({
  fill = "yellow",
  onClick = () => {
    console.log("click");
  },
  onMouseOver = () => {
    console.log("over");
  }
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    onClick={onClick}
    onMouseOver={onMouseOver}
  >
    <g stroke="black" fill={fill}>
      <polygon points="50,77.4 23.7,91.2 28.8,62 7.5,41.3 36.9,37 50,10.4 63.1,37 92.5,41.3 71.2,62 76.3,91.2  " />
    </g>
  </svg>
);
