class User {
    constructor(name, password) {
    this.name = name;
    this.password = password;
    }
   get password(){
    return this.pw;
    
   }

   set password(n){
    if(n.length < 8){
      console.log("password is too short");
        return;
    }
    this.pw = n
   }
  }
  const p = new User("gsfgu", "ffddasfazh")
  console.log(p);
 