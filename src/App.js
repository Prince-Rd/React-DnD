import React, { useState } from "react";
import Board from "./components/Board";
import Circle from "./components/Circle";

function App() {
  const [isCircleDragged, setIsCircleDragged] = useState(false);
  const [isCircleDroppedOnBoard2, setIsCircleDroppedOnBoard2] = useState(false);

  const handleCircleDragStart = () => {
    setIsCircleDragged((isCircleDragged) => !isCircleDragged);
    setIsCircleDroppedOnBoard2(
      (isCircleDroppedOnBoard2) => !isCircleDroppedOnBoard2
    ); // Reset the dropped flag
  };

  const handleCircleDragEnd = (e) => {
    setIsCircleDragged(false);

    // Get the drop target ID
    const dropTargetId = e.target.parentElement.id;

    // Check if the circle was dropped onto board-2
    if (dropTargetId === "board-2") {
      setIsCircleDroppedOnBoard2(true);
    }
  };

  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Circle
            id="circle-1"
            className="circle "
            draggable="true"
            onDragStart={handleCircleDragStart}
            onDragEnd={handleCircleDragEnd}
          >
            <p>الحـــــرم</p>
            <div
              // className="arrow"
              // style={{
              //   left: "80px",
              //   display: isCircleDroppedOnBoard2 ? "inline" : "inline",
              // }}
            >
              {/* <span></span>
              <span></span>
              <span></span> */}
            </div>
          </Circle>

          <Circle id="circle-2" className="circle" draggable="true">
            <p>مكــــــــة</p>
          </Circle>

          <Circle id="circle-3" className="circle" draggable="true">
            <p>منـــــــى</p>
          </Circle>
          <Circle id="circle-4" className="circle" draggable="true">
            <p>الجمرات</p>
          </Circle>
          <Circle id="circle-5" className="circle" draggable="true">
            <p>عرفـــــات</p>
          </Circle>
          <Circle id="circle-6" className="circle" draggable="true">
            <p>مــزدلفة</p>
          </Circle>
        </Board>
        <Board id="board-2" className="board"></Board>
      </main>
    </div>
  );
}

export default App;
