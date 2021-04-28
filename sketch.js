//Declaring Variables
var alien,alienImage,alienGroup;
var monster,monsterImage,monsterGroup
var player,playerImage;
var bossAlien , bossAlienImage;
var bgSound;
var shooterSound;
var bgImage;
var bulletImg;
var bulletGroup;

//------------------------------------------------------------------------------------------------------------------------------------------//

function preload(){
    // Declaring images for game
     alienImage = loadImage("./images/alien.png");
     playerImage = loadImage("./images/SpaceShip.png");
     bossAlienImage = loadImage("./images/boss_alien.png");
     bgImage = loadImage("./images/bgImage.jpg");
     bulletImg = loadImage("./images/bulletImg.png");
     monsterImage = loadImage("./images/alien2.jpg");

    // Declaring Sound Files of the game
     bgSound = loadSound("./Sounds/bgm.mp3");
     shooterSound = loadSound("./Sounds/GunshotSound.mp3");


    }


// Declaring Groups and Player
function setup(){
    createCanvas(displayWidth , displayHeight);
    player = createSprite(displayWidth/2,displayHeight/2 + 100,100,50);
    player.addImage(playerImage);
    player.scale = 0.2;
    alienGroup = new Group();
    monsterGroup = new Group();
    bulletGroup = new Group();
}

// Declaring Functions
function draw(){
    background(bgImage);
    // bgSound.play();
    spawnAliens();
    killAliens();
    spawnMonsters();
    killMonsters();
    drawSprites();

}


//Spawn Enemies
function spawnAliens(){
    if(frameCount % 80 == 0){
        aliens = createSprite(0,0,50,50);
        aliens.addImage(alienImage);
        aliens.scale = 0.21;
        aliens.x = Math.round(random(50,1150));
        aliens.velocityY = 3;
        aliens.lifetime = 200;
        alienGroup.add(aliens);
    }
}

function spawnMonsters(){
    if(frameCount % 80 == 0){
        monters = createSprite(0,0,50,50);
        monters.addImage(alienImage);
        monters.scale = 0.21;
        monters.x = Math.round(random(50,1150));
        monters.velocityY = 3;
        monters.lifetime = 200;
        monsterGroup.add(monsters);
    }
}




//Defines the movement of the players
function keyPressed(){
    if(keyCode == LEFT_ARROW){
        player.velocityX = -6;
    }

    if(keyCode == RIGHT_ARROW){
        player.velocityX = 6;
    }

    if(keyCode == 32){
        createBullet();
    }
}


//Spawn Bullets for shooting the aliens
function createBullet(){
    bullet = createSprite(displayWidth/2,displayHeight/2 + 100,50,10);
    bullet.addImage(bulletImg);
    bullet.x = player.x;
    bullet.velocityY = -6;
    bullet.lifetime = 100;
    bullet.scale = 0.1;
    bulletGroup.add(bullet);
    // shooterSound.play();
}


// Function to kill enemies 
function killAliens(){
    if(bulletGroup.isTouching(alienGroup)){
        alienGroup.destroyEach();
    }
}

// Function to kill the other enemies
function killMonsters(){
    if(bulletGroup.isTouching(monsterGroup)){
        monsterGroup.destroyEach();
    }
}