import React from "react";

function Board(props) {
  const drop = (e) => {
    e.preventDefault();
    const circle_id = e.dataTransfer.getData("circle_id");

    const circle = document.getElementById(circle_id);
    circle.style.display = "block";

    e.target.appendChild(circle);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Board;
