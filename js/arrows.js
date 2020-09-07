let canvas = document.getElementById('canvasArrows')
// let bodySize = document.getElementById('arrows')
const ctx = document.getElementById('canvasArrows').getContext('2d')
let canvasMarks = document.getElementById('canvasMarks').getContext('2d')
let canvasDots = document.getElementById('canvasDots').getContext('2d')
let centerX = canvas.width / 2
let centerY = canvas.height / 2

function draw() {
  // canvas.setAttribute('width', bodySize.width * 0.8);
  // canvas.setAttribute('height', bodySize.height * 0.65);
  // if (canvas.getContext) {

    //drawing the zoning space
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0,148,215,0.5)'
    ctx.fillRect(centerX * 0.4, centerY, centerX * 0.6, -centerY * 0.3)

    ctx.moveTo(centerX * 0.7, centerY)
    ctx.lineTo(centerX, centerY)
    ctx.lineTo(centerX, centerY * 1.6)
    ctx.fill()

    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, centerX * 0.3, 0, Math.PI / 2, false)
    ctx.strokeStyle = 'rgba(0,148,215,0.5)'
    ctx.stroke()
    ctx.fill()

    ctx.strokeStyle = '#000000'

    //drawing a horizontal line in center
  	ctx.beginPath()
    ctx.moveTo(centerX  * 0.1, centerY)
    ctx.lineTo(centerX  * 1.9, centerY)
  	ctx.stroke()
    //drawing a vertical line in center
    ctx.moveTo(centerX, centerY * 0.1)
    ctx.lineTo(centerX, centerY * 1.9)
  	ctx.stroke()

    //creating cells
    scalling()

    ctx.moveTo(centerX * 1.85, centerY - 3)
    ctx.lineTo(centerX * 1.9, centerY)
    ctx.lineTo(centerX * 1.85, centerY + 3)
    ctx.stroke()

    ctx.moveTo(centerX - 3, centerY * 0.15)
    ctx.lineTo(centerX , centerY  * 0.1)
    ctx.lineTo(centerX + 3, centerY * 0.15)
    ctx.stroke()


    // ctx.clearRect(45,45,60,60);
    // ctx.strokeRect(50,50,50,50);
  // }
}

function markUp(char) {
  canvasMarks.fillStyle = '#000000'
  canvasMarks.clearRect(0, 0, canvas.width, canvas.height)
  canvasMarks.fillText(`-${char}`, centerX * 0.4, centerY - 5)
  canvasMarks.fillText(`${char}`, centerX * 1.6, centerY - 5)
  canvasMarks.fillText(`-${char}/2`, centerX * 0.7, centerY - 5)
  canvasMarks.fillText(`${char}/2`, centerX * 1.3, centerY - 5)

  canvasMarks.fillText(`${char}`, centerX + 5, centerY * 0.4)
  canvasMarks.fillText(`-${char}`, centerX + 5, centerY * 1.6)
  canvasMarks.fillText(`${char}/2`, centerX + 5, centerY * 0.7)
  canvasMarks.fillText(`-${char}/2`, centerX + 5, centerY * 1.3)

  canvasMarks.fillText("X", centerX * 1.9, centerY - 5)
  canvasMarks.fillText("Y", centerX + 5, centerY * 0.1)
}

function scalling() {
  for (let i = -2; i <= 2; i++) {
    if (i !== 0) {
      ctx.moveTo(centerX + (centerX * 0.3 * i), centerY + 2)
      ctx.lineTo(centerX + (centerX * 0.3 * i), centerY - 2)
      ctx.stroke()
      ctx.moveTo(centerX + 2, centerY + (centerY * 0.3 * i))
      ctx.lineTo(centerX - 2, centerY + (centerY * 0.3 * i))
      ctx.stroke()
    }
  }
}
function drawPoint(x, y, r) {
  canvasDots.clearRect(0, 0, canvas.width, canvas.height)
  canvasDots.moveTo(centerX + (centerX * `${x}`/`${r}`), centerY + (centerY * `${y}`/`${r}`))
  canvasDots.strokeStyle = '#de1e1e'
  canvasDots.stroke()
}

draw()
markUp("R")