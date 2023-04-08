class calculator{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    sum(x,y){
        return this.x + this.y;
    }
}
const result = new calculator(10,5);
console.log(result.sum());