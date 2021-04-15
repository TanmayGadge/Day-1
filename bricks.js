class Brick{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.body = createSprite(x, y);
        this.body.addImage(brickImg);
        this.body.scale = 0.5;
        this.body.setCollider("rectangle", 0, 0, this.body.width, this.body.height+20);
        
    }
}