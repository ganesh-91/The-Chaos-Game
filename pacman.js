
let func = function () {
    let canvas = document.getElementById('c').getContext('2d');
    canvas.strokeStyle = '#e1e1e1';
    canvas.fillStyle = 'cadetblue';


    let count = 0;
    let randomPoint = [256, 256];
    let pointA = [256, 0];
    let pointB = [0, 511];
    let pointC = [511, 511];
    let endPints = [];

    endPints.push(pointA, pointB, pointC, randomPoint)

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let init = () => {

        let cells = [];
        for (let i = 0; i < 512; i++) {
            cells[i] = [];
            for (let j = 0; j < 512; j++) {
                cells[i][j] = 0;
            }
        }

        endPints.forEach((point) => {
            cells[point[0]][point[1]] = 1;
        });

        draw(cells);

    }

    update = () => {
        let randomNum = getRandomInt(6);
        let plotPint = []
        switch (randomNum) {
            case 0:
            case 1:
                plotPint[1] = Math.round((pointA[1] + randomPoint[1]) / 2);
                plotPint[0] = Math.round((pointA[0] + randomPoint[0]) / 2);
                // arr = []
                break;

            case 2:
            case 3:
                plotPint[1] = Math.round((pointB[1] + randomPoint[1]) / 2);
                plotPint[0] = Math.round((pointB[0] + randomPoint[0]) / 2);
                break;

            case 4:
            case 5:
                plotPint[1] = Math.round((pointC[1] + randomPoint[1]) / 2);
                plotPint[0] = Math.round((pointC[0] + randomPoint[0]) / 2);
                break;

            default:

                break;
        }

        randomPoint = plotPint;

        drawSquare(randomPoint);
    }

    drawSquare = (args) => {
        canvas.beginPath();
        canvas.rect(args[0] * 1, args[1] * 1, 1, 1);
        canvas.fill();
        setTimeout(function () { update(); }, 0.01);
    }

    draw = (args) => {

        args.forEach((row, x) => {
            row.forEach((cell, y) => {
                canvas.beginPath();
                canvas.rect(x * 1, y * 1, 1, 1);

                if (cell) {
                    canvas.fill();
                // } else {
                //     canvas.stroke();
                }
            });
        });
        update();
    }

    init();

}();