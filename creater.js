var LivingCreature = require("./living_creature.js");
var Grass = require("./grass.js");
var Xotaker = require("./grass_eater.js");
var Gishatich = require("./gishatich.js");
var Amenaker = require("./amenaker.js");

module.exports = class Creater extends LivingCreature{
    constructor(x, y) {
        super(x, y, 4);
        this.energy = 25;
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.chooseCell(ch);
    }

    poxakerpel() {
        var datark = this.yntrelVandak(0)
        var norVandak = this.random(datark)
        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            if (amenakerArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 5;
                    var nor = new Amenaker(norx, nory);
                    amenakerArr.push(nor);
                    stat.amenaker.created++;
                    stat.amenaker.count++;
                    this.energy--;
                }
            }
            else if (xotakerArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 2;
                    var nor = new Xotaker(norx, nory);
                    xotakerArr.push(nor);
                    stat.grassEater.created++;
                    stat.grassEater.count++;
                    this.energy--;
                }
            }
            else if (gishatichArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 3;
                    var nor = new Gishatich(norx, nory);
                    gishatichArr.push(nor);
                    stat.gishatich.created++;
                    stat.gishatich.count++;
                    this.energy--;
                }
            }
            else if (grassArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 1;
                    var nor = new Grass(norx, nory);
                    grassArr.push(nor);
                    stat.grass.created++;
                    stat.grass.count++;
                    this.energy--;
                }
            }
        }
    }

    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = this.random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
        }
    }
    
    mahanal(t) {

if (t){this.energy = 1}

        for (var i in createrArr) {
            if (this.energy <= 0 && createrArr[i].x == this.x && createrArr[i].y == this.y) {
                createrArr.splice(i, 1);
                stat.creater.count--;
                stat.creater.died++;
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}