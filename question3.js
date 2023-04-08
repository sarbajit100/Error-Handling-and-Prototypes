class product{

    constructor(n,p,r){
        
        this.year = n;
        this.name = p;
        this.model = r;
    }
    display(){
        console.log("This is a", this.year, this.name, this.model);
    }
}

const p = new product(2022, "Skoda", "rapid");
p.display();
