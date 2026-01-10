/*This File sets up the main game objects and their default properties
You can edit any of these values to tweak the defaults but keep in mind,
some properties like speed and position get rewritten by the game.
You probably don't want to add new classes.
*/
export class Game {
  constructor(
    size,
    padding,
    htmlElement,
    mousePosition,
    mute,
    volume,
    computerstate,
    computerDifficulty,
    computerDifficultySpeed
  ) {
    this.size = { x: 600, y: 500 };                        // Container for entire game
    this.padding = { x: 10, y: 10 };                       // White space inside game border
    this.htmlElement = null;                               // Element on HTML page
    this.mousePosition = { x: 0, y: 0 };                   // Default mouse position
    this.mute = false;                                     // Default mute state
    this.volume = 6;                                       // Default volume output 0-10
    this.computerState = 0;                                // Default computer control amount
    this.computerDifficultySpeed = [0, 2, 4, 8, 100];      // Sets the computer difficulty speeds
    this.computerDifficulty = [
      "off",
      "easy",
      "medium",
      "hard",
      "impossible"
    ]; //Sets the computer difficulty names
  }
}

export class Ball {
  constructor(
    size,
    position,
    direction,
    interval,
    acceleration,
    initial,
    intertialTransfer,
    htmlElement
  ) {
    this.size = { x: 20, y: 20 };                          // Default ball size
    this.position = { x: 50, y: 50 };                      // Default ball position
    this.direction = { x: 0, y: 0 };                       // Ball speed when game starts
    this.acceleration = 10;                                 // X speed multipler on successful block
    this.initial = { x: 2, y: 0 };                         // Speed reset on point score
    this.maximum = { x: 2, y: 1 };                         // Maximum speed
    this.inertialTransfer = 0.25;                          // Multiplier for velocity.y transfer from paddle
    this.htmlElement = null;                               // Element on HTML page
  }
}

export class Paddle {
  constructor(
    size,
    position,
    oldPosition,
    direction,
    velocity,
    speed,
    hasHit,
    htmlElement
  ) {
    this.size = { x: 10, y: 75 };                          // Default paddle size
    this.position = { x: 50, y: 50 };                      // Paddle position, (Y is top)
    this.oldPosition = { x: 50, y: 50 };                   // Paddle position 1 frame ago
    this.velocity = { x: 0, y: 0 };                        // Calculated velocity
    this.direction = { x: 0, y: 0 };                       // Position offset
    this.speed = 10;                                       // Rate that paddle moves with keyboard
    this.hasHit = false;                                   // Keep track of wheter paddle hit ball or not
    this.htmlElement = null;                               // Element on HTML page
  }
}
