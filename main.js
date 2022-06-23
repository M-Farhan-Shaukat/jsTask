

        function getinpforCrammer() {

            var num1 = document.getElementById('first').value;
            var num2 = document.getElementById('second').value;
            // console.log(num1);
            num11 = num1.match(/^([\d]*\.{1,}[\d]+|[\d]+)|([-+*/](?=\.|[\d]))|\.[\d]+|[\d]+/g)
            num22 = num2.match(/^([\d]*\.{1,}[\d]+|[\d]+)|([-+*/](?=\.|[\d]))|\.[\d]+|[\d]+/g)
console.log(num11);
            const arrayA = num11.filter(Number);
            const arrA = arrayA.map(Number);

            const arrayB = num22.filter(Number);
            const arrB = arrayB.map(Number);
            console.log(arrB);
            let array1 = arrA;
            let array2 = arrB;
            console.log(array1);

            let x0 = array1[0];
            let y0 = array1[1];
            let z0 = array1[2];

            let x1 = array2[0];
            let y1 = array2[1];
            let z1 = array2[2];


            let Ax;
            let Ay;

            let x;
            let y;
            //determinent
            let dit = (x0 * y1) - (x1 * y0);
            if (dit == 0) {
                document.write("No Longer Available")
            } else {
                Ax = (z0 * y1) - (z1 * y0);
                Ay = (x0 * z1) - (x1 * z0);
                x = Ax / dit;
                y = Ay / dit;

                document.getElementById("output").innerHTML = (
                    "Your First Expression is " + num1 +
                    "<br> Your Second Expression is " + num2 +
                    "<br> Your Diterminant of Expression is " + dit +
                    "<br>Value Of " + `Ax = ${Ax}` +
                    "<br>Value Of " + `Ay = ${Ay}` +
                    "<br>Value Of " + "x = " + x +
                    "<br>Value Of " + "y = " + y
                );
            }
        }
        function getinpforInverse() {
            var num3 = document.getElementById('first').value;
            var num4 = document.getElementById('second').value;
            num33 = num3.match(/[^\d()]+|[\d.]+/g)
            num44 = num4.match(/[^\d()]+|[\d.]+/g)

            const arrayC = num33.filter(Number);
            const arrC = arrayC.map(Number);
            console.log(arrC);

            const arrayD = num44.filter(Number);
            const arrD = arrayD.map(Number);
            console.log(arrD);
            let array3 = arrC;
            let array4 = arrD;

            let a0 = array3[0];
            let b0 = array3[1];
            let c0 = array3[2];

            let a1 = array4[0];
            let b1 = array4[1];
            let c1 = array4[2];
            let a;
            let b;
            //determinent
            let diter = (a0 * b1) - (a1 * b0);

            if (diter == 0) {
                document.write("No Longer Available")
            } else {



                let Res = a0;
                a0 = b1;
                b0 = (-b0);
                b1 = Res;
                a1 = (-a1);
                a = (a0 * c0) + (b0 * c1);
                b = (a1 * c0) + (b1 * c1);
                let x = a / diter;
                let y = b / diter

                document.getElementById("output").innerHTML = (
                    "Your First Expression is " + num3 +
                    "<br>Your Second Expression is " + num4 +
                    "<br>Your Diterminant of Expression is " + diter +
                    "<br>The Value of x = " + x +
                    "<br>The Value of y = " + y
                );

            }

        }





   