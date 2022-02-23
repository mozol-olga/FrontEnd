function drawImage1(){
    var canvas = document.getElementById('image1');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.rect(20, 150, 310, 220);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(40, 180, 55, 30);
    ctx.rect(40, 215, 55, 30);
    ctx.rect(100, 180, 55, 30);
    ctx.rect(100, 215, 55, 30);

    ctx.rect(190, 180, 55, 30);
    ctx.rect(190, 215, 55, 30);
    ctx.rect(250, 180, 55, 30);
    ctx.rect(250, 215, 55, 30);

    ctx.rect(190, 270, 55, 30);
    ctx.rect(190, 305, 55, 30);
    ctx.rect(250, 270, 55, 30);
    ctx.rect(250, 305, 55, 30);

    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.closePath();

   
    ctx.beginPath();
    ctx.moveTo(20,150);
    ctx.lineTo(175,30);
    ctx.lineTo(330,150);
    ctx.fillStyle = "lightgreen";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(260, 60, 5, 20, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(240, 60);
    ctx.lineTo(240, 120);
    ctx.moveTo(280, 60);
    ctx.lineTo(280, 120);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath()
    ctx.moveTo(40, 280)
    ctx.lineTo(40, 370)
    ctx.moveTo(120, 280)
    ctx.lineTo(120, 370)
    ctx.moveTo(40, 280)
    ctx.quadraticCurveTo(80, 250, 120, 280);
    ctx.moveTo(80, 264)
    ctx.lineTo(80, 370)
    ctx.moveTo(70, 330)
    ctx.arc(70, 330, 5, 0, 2*Math.PI, false);
    ctx.moveTo(90, 330)
    ctx.arc(90, 330, 5, 0, 2*Math.PI, false);
    ctx.stroke()

}

function drawImage2(){
    let canvas = document.getElementById('image2')
    let ctx = canvas.getContext('2d')

    ctx.beginPath()
    //face
    ctx.arc(225, 200, 80, 0, 2 * Math.PI)
    ctx.fillStyle = 'lightblue'
    ctx.fill()

    //eyes
    ctx.moveTo(250,190);
    ctx.ellipse(250, 181, 9, 15, Math.PI / 2, 0, 2 * Math.PI);
    ctx.moveTo(180,190);
    ctx.ellipse(180, 181, 9, 15, Math.PI / 2, 0, 2 * Math.PI);
    ctx.moveTo(200,245);
    //mouth
    ctx.ellipse(215, 240, 9, 25, Math.PI / 1.8, 0, 2 * Math.PI);

    //pupils
    ctx.moveTo(248,190);
    ctx.ellipse(248, 182, 7, 5, Math.PI / 1.8, 0, 2 * Math.PI);
    ctx.moveTo(180,190);
    ctx.ellipse(178, 182, 7, 5, Math.PI / 1.8, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    //nose
    ctx.moveTo(215, 180)
    ctx.lineTo(202, 208)
    ctx.lineTo(212, 208)
    ctx.stroke()
    ctx.closePath();
    ctx.beginPath();

        ctx.moveTo(280,50);
        ctx.rect(180, 50, 100, 70); 
        ctx.moveTo(180,50); 
        ctx.ellipse(230,50,50,20, Math.PI, 0, Math.PI * 2);
        ctx.moveTo(150,130);
        ctx.ellipse(230,130,80,20, Math.PI, 0, Math.PI * 2);
       
        ctx.fillStyle = 'black'
        ctx.fill()
       
        ctx.stroke();
        ctx.closePath();
}

function drawImage3() {
    let canvas = document.getElementById('image3')
    let ctx = canvas.getContext('2d')
    
    ctx.beginPath()
    ctx.arc(105,195,50,0,Math.PI*2,true);   
    ctx.moveTo(395,195);
    ctx.arc(345,195,50,0,Math.PI*2,true);
    ctx.fillStyle = 'lightblue'
    ctx.fill()
    ctx.moveTo(220,200);
    ctx.arc(200,200,20,0,Math.PI*2,true);
    ctx.moveTo(100, 200)
    ctx.lineTo(200, 200)
    ctx.lineTo(170, 100)
    ctx.moveTo(100, 200)
    ctx.lineTo(180, 130)
    ctx.moveTo(150, 100)
    ctx.lineTo(190, 100)
    ctx.moveTo(180, 130)
    ctx.lineTo(330, 130)
    ctx.lineTo(200, 200)
    ctx.moveTo(350, 200)
    ctx.lineTo(320, 90)
    ctx.lineTo(285, 100)
    ctx.moveTo(320, 90)
    ctx.lineTo(345, 70)
    ctx.stroke()
}

drawImage1()
drawImage2()
drawImage3()