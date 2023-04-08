class employee{

    constructor(n,p,r){
        
        this.name = n;
        this.position = p;
        this.salary = r;
    }
    display(){
        console.log(this.salary);
    }
}

const p = new employee("sarbajit","manager", 50000);
console.log(p);
p.display();