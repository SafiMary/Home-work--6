let p = new Car('Lamborgini',200, 230,120,100);
console.log(p);
move(p,130,200);
console.log(p);
beep(p);


function Vehicle( name, speed, x,y){
    if(!new.target){
        throw new Error('Invalid initialisation.')
    }
    this.name = name;
    this.speed = speed;
    this.x = x;
    this.y = y;
  
}
  function  move(obj,a,b){
 obj.x = a;
 obj.y = b;
}

function Car(name, speed, x,y,horsePower){
    if(!new.target){
        throw new Error('Invalid initialisation.')
    }
    this. horsePower =  horsePower;
    this.__proto__ = new Vehicle(name, speed, x,y);
}
function beep(){
    console.log("beeeeeeeeeep!!!!!!!!");
    
}