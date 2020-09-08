let cArrows = document.getElementById('canvasArrows')
let cMarks = document.getElementById('canvasMarks')
let cDots = document.getElementById('canvasDots')
let bodySize = document.getElementById('arrows')
const ctx = cArrows.getContext('2d')
let canvasMarks = cMarks.getContext('2d')
let canvasDots = cDots.getContext('2d')
cArrows.setAttribute('width', bodySize.width);
cArrows.setAttribute('height', bodySize.height);
cMarks.setAttribute('width', bodySize.width);
cMarks.setAttribute('height', bodySize.height);
cDots.setAttribute('width', bodySize.width);
cDots.setAttribute('height', bodySize.height);
let centerX = cArrows.width / 2
let centerY = cArrows.height / 2
cMarks.setAttribute('position:', 'fixed')
cMarks.setAttribute('top', '500px')

function draw() {
  // if (canvas.getContext) {

    //drawing the zoning space
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0,148,215,0.7)'
    ctx.fillRect(centerX * 0.2, centerY, centerX * 0.8, -centerY * 0.4)

    ctx.moveTo(centerX * 0.6, centerY)
    ctx.lineTo(centerX, centerY)
    ctx.lineTo(centerX, centerY * 1.8)
    ctx.fill()

    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, centerX * 0.8, 0, Math.PI / 2, false)
    ctx.strokeStyle = 'rgba(0,148,215,0.5)'
    ctx.stroke()
    ctx.fill()

    ctx.strokeStyle = '#000000'

    //drawing a horizontal line in center
  	ctx.beginPath()
    ctx.moveTo(centerX  * 0, centerY)
    ctx.lineTo(centerX  * 2, centerY)
  	ctx.stroke()
    //drawing a vertical line in center
    ctx.moveTo(centerX, centerY * 0)
    ctx.lineTo(centerX, centerY * 2)
  	ctx.stroke()

    //creating cells
    scalling()

    ctx.moveTo(centerX * 1.9, centerY - 3)
    ctx.lineTo(centerX * 2, centerY)
    ctx.lineTo(centerX * 1.9, centerY + 3)
    ctx.stroke()

    ctx.moveTo(centerX - 3, centerY * 0.1)
    ctx.lineTo(centerX , centerY  * 0)
    ctx.lineTo(centerX + 3, centerY * 0.1)
    ctx.stroke()


    // ctx.clearRect(45,45,60,60);
    // ctx.strokeRect(50,50,50,50);
  // }
}

function markUp(char) {
  canvasMarks.font = "14px Verdana"
  canvasMarks.fillStyle = '#ece07c'
  canvasMarks.clearRect(0, 0, cArrows.width, cArrows.height)
  canvasMarks.fillText(`-${char}`, centerX * 0.2, centerY - 10)
  canvasMarks.fillText(`${char}`, centerX * 1.8, centerY - 10)
  canvasMarks.fillText(`-${char}/2`, centerX * 0.6, centerY - 10)
  canvasMarks.fillText(`${char}/2`, centerX * 1.4, centerY - 10)

  canvasMarks.fillText(`${char}`, centerX + 10, centerY * 0.2)
  canvasMarks.fillText(`-${char}`, centerX + 10, centerY * 1.8)
  canvasMarks.fillText(`${char}/2`, centerX + 10, centerY * 0.6)
  canvasMarks.fillText(`-${char}/2`, centerX + 10, centerY * 1.4)

  canvasMarks.fillText("X", centerX * 1.9, centerY - 10)
  canvasMarks.fillText("Y", centerX + 10, centerY * 0.1)
}

function scalling() {
  for (let i = -2; i <= 2; i++) {
    if (i !== 0) {
      ctx.moveTo(centerX + (centerX * 0.4 * i), centerY + 5)
      ctx.lineTo(centerX + (centerX * 0.4 * i), centerY - 5)
      ctx.stroke()
      ctx.moveTo(centerX + 5, centerY + (centerY * 0.4 * i))
      ctx.lineTo(centerX - 5, centerY + (centerY * 0.4 * i))
      ctx.stroke()
    }
  }
}
function drawPoint(x, y, r) {
  let canvasX = centerX + ((centerX - centerX * 0.2) * `${x}`/`${r}`)
  let canvasY = centerY - ((centerY -centerY * 0.2) * `${y}`/`${r}`)
  canvasDots.beginPath()
  canvasDots.clearRect(0, 0, cArrows.width, cArrows.height)
  canvasDots.moveTo(canvasX, canvasY)
  canvasDots.arc(canvasX, canvasY, 2, 0, 2 * Math.PI, false)
  canvasDots.fillStyle = '#ff0033'
  canvasDots.fill()
}

draw()
markUp("R")