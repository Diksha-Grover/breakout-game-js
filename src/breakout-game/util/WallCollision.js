export default function WallCollision(
  ballObj,
  canvas,
  player,
  paddleProps,
  setLives
) {
  if (ballObj.y + ballObj.rad > canvas.height) {
    // when ball collides bottom, one live will be reduced
    player.lives--;
    ballObj.x = paddleProps.x;
    ballObj.y = paddleProps.y - 30;
    ballObj.dx = 6 * (Math.random() * 2 - 1);
    ballObj.dy = -6;
  }
  if (ballObj.y - ballObj.rad < 0) {
    // when ball collides the top wall it will retrace it's path
    ballObj.dy *= -1;
  }

  if (ballObj.x + ballObj.rad > canvas.width || ballObj.x - ballObj.rad < 0) {
    // when ball collides the left and right wall it will retrace it's path
    ballObj.dx *= -1;
  }
}
