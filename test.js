// this is 0% written by ai
// lets dtaw
function drawRectangleInCircle(rectLength) {
    if (typeof rectLength !== "number" || rectLength < 2) {
        console.log("Invalid input");
        return;
    }

    let rect_length = rectLength;
    let CircleRadius = Math.ceil(rect_length);
    let RECTWIDTH = rect_length;
    let rectHeight = Math.floor(rect_length / 2);

    for (let row= -CircleRadius; row <= CircleRadius; row++) {
        let lineStr = "";
        for (let col = -CircleRadius; col <= CircleRadius; col++) {
            let isInsideCircle = row * row + col * col <= CircleRadius * CircleRadius;
            let inside_rectangle = 
                Math.abs(row) <= rectHeight / 2 &&
                Math.abs(col) <= RECTWIDTH / 2;
            
            if (inside_rectangle) {
                lineStr += "*";
            } else if (isInsideCircle) {
                lineStr += "*";
            } else {
                lineStr += " ";
            }
        }
        console.log(lineStr);
    }
}
