import Component from '@ember/component';

export default Component.extend({
  test: "null",

  robot: {
    coordinateX: 0,
    coordinateY: 0,
    face: 'NORTH', //N,S,W,E
  },

  model: {
    code: null,
    output: null
  },



  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);
    let space = 1;
    for (let r = 4; r >= 0; r--) {
      let col = "";
      for (let c = 0; c < 5; c++) {
        let position = c + "," + r;
        col += "<td data-pos='" + position + "'></td>";
        space++;
      }
      $(".board").append("<tr>" + col + "</tr>");
    }
  },

  clearRobot(){
    let temp = {
      coordinateX: 0,
      coordinateY: 0,
      face: 'NORTH',
    };
    this.set('model.output',null);
    this.set('robot',temp);
  },

  placeRobot() {
    let find = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');
    $("td[data-pos='" + find + "']").addClass("robot");
  },

  clearScreen() {

  },

  moveWest(robot) {
    if (robot.coordinateX == 0 && robot.face == "WEST") {
      return false;
    }
    this.set('robot.coordinateX', --robot.coordinateX);
    let coordinates = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');

    $("td[data-pos='" + coordinates + "']").addClass("robot");
    return true;
  },
  moveEast(robot) {
    if (robot.coordinateX == 4 && robot.face == "EAST") {
      return false;
    }
    this.set('robot.coordinateX', ++robot.coordinateX);
    let coordinates = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');

    $("td[data-pos='" + coordinates + "']").addClass("robot");
    return true;
  },

  moveNorth(robot) {
    if (robot.coordinateY == 4 && robot.face == "NORTH") {
      return false;
    }
    this.set('robot.coordinateY', ++robot.coordinateY);
    let coordinates = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');

    $("td[data-pos='" + coordinates + "']").addClass("robot");
    return true;
  },

  moveSouth(robot) {
    if (robot.coordinateY == 0 && robot.face == "SOUTH") {
      return false;
    }
    this.set('robot.coordinateY', --robot.coordinateY);
    let coordinates = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');

    $("td[data-pos='" + coordinates + "']").addClass("robot");
    return true;
  },

  renderMovements(face) {
    let that = this;
    $("td").removeClass("robot");
    if (face == "NORTH") {
      that.moveNorth(that.get('robot'));

    } else if (face == "SOUTH") {
      that.moveSouth(that.get('robot'));

    } else if (face == "WEST") {
      that.moveWest(that.get('robot'));

    } else if (face == "EAST") {
      that.moveEast(that.get('robot'));

    }
  },



  actions: {
    parseCode(code) {
      this.clearRobot();
      let clock = ["WEST", "NORTH", "EAST", "SOUTH"];
      let splitedLines = code.split('\n');
      //MUST BE PLACE Command
      let firstLine = splitedLines[0];
      if (firstLine.startsWith('PLACE')) {
        let placeCommand = firstLine.split(" ");
        let directions = placeCommand[1].split(",");
        let face = directions[2];
        this.set('robot.coordinateX', directions[0]);
        this.set('robot.coordinateY', directions[1]);
        this.set('robot.face', face);
        this.placeRobot();
        let that = this;
        for (let i = 1; i < splitedLines.length; i++) { //skip first line
          setTimeout(function timer() {
            if (splitedLines[i] === "MOVE") {
              // setTimeout( function timer(){
              that.renderMovements(that.get('robot.face'));
              // }, i*1000 );

            } else if (splitedLines[i] === "LEFT") {
              let indexOfFace = clock.findIndex(direction => direction === face);
              if (indexOfFace - 1 < 0) {
                that.set('robot.face', clock[3]);
              } else {
                that.set('robot.face', clock[indexOfFace - 1]);
              }
              // this.renderMovements(this.get('robot.face'));
            } else if (splitedLines[i] === "RIGHT") {
              let indexOfFace = clock.findIndex(direction => direction === face);
              if (indexOfFace + 1 > 3) {
                that.set('robot.face', clock[0]);
              } else {
                that.set('robot.face', clock[indexOfFace + 1]);
              }
              // this.renderMovements(this.get('robot.face'));
            } else if (splitedLines[i] === "REPORT") {
              let output =that.get('robot.coordinateX') + "," + that.get('robot.coordinateY') + "," + that.get('robot.face');
              that.set('model.output',output);
            }

          }, i * 1000);
        }
        console.log(this.get('robot'));
      } else {
        console.log("code must start with PLACE command!")
      }
    }
  }









});
