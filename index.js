/**
 * Creates a square for a N number of blocks.
 * A block is understood as 4 linked points in the cartesian plane 
 * that result in a shape with identical sides.
 */
class Square {
  constructor(N) {
    this._blocks = N;
    this._coordinates = this.generateCoordinates(this.getNumberOfRowsAndColumns(N));
  }

  /**
   * @description Gets the number of rows/columns a square will have for a given number of blocks.
   * @param {Number} n Number of blocks.
   * @returns {Number} Number of rows and columns.
   */
  getNumberOfRowsAndColumns(n) {
    let x = 1;

    do {
      x += 1;   
    } while (x * x !== n && x * x < n);

    if (x * x !== n) {
      throw new Error(`It's not possible to create a square with ${n} blocks`);
    }

    return x;
  }

  /**
   * @description Gets the pairs of coordinates for a square with i rows/columns.
   * @param {Number} i Number of rows and columns the square must have.
   * @returns {Array} Coordinates; 
   */
  generateCoordinates(i) {
    const coordinates = [];

    for (let x = 1; x <= i; x += 1) {
      for (let y = 1; y <= i + 1; y += 1) {
        coordinates.push([x, y]);
      } 
    }
    
    return coordinates;
  }

  // GETTERS
  getCoordinates() {
    return this._coordinates;
  }s
}

// SETUP

const square = new Square(100);
const container = document.querySelector('.container');

container.innerHTML = `
  ${
    square.getCoordinates()
      .map((point) => {
        return `
          <div class="point" style="left: ${point[0] * 50}px; top: ${point[1] * 50}px;"></div>
        `
      })
      .join('')
  }
`;
