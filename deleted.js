let a;
let b ;
let c ;
let flag = 0;
function operation(){
    if (flag == 0) {
        b = Number(document.querySelector("#input").value);
        console.log("value of b = ", b)

        document.querySelector("#input").value = null
        flag = 1
    } else {
        c = Number(document.querySelector("#input").value);
        console.log("value of c= ", c)
        document.querySelector("#input").value = null

    }
}
function add() {

    a = document.querySelector(".add");
    console.log(a)
    operation();
    
}
function sub() {
    a = document.querySelector(".sub");
    operation();
    
}
function div() {
    a = document.querySelector(".div");
    operation();

}
function multi() {
    a = document.querySelector(".multi");
    operation();

}
function equal() {
    switch (a) {
        case document.querySelector(".add"):
            add();
            b=b+c
            document.querySelector("#ans").innerHTML = b;
            document.querySelector("#input").value = b
            break;
        case document.querySelector(".sub"):
                sub();
                b=b-c
                document.querySelector("#ans").innerHTML = b;
                document.querySelector("#input").value = b
                break;
        case document.querySelector(".div"):
                    div();
                    b=b/c
                    document.querySelector("#ans").innerHTML = b;
                    document.querySelector("#input").value = b
                    break;
        case document.querySelector(".multi"):
                        multi();
                        b=b*c
                        document.querySelector("#ans").innerHTML = b;
                        document.querySelector("#input").value = b
                        console.log(b*c)
                        break;
        default:
            console.log(not);
            
                        
    }
}
function reset(){
    b=null;
    document.getElementById("ans").innerHTML = `Ans= ${b}`;
    document.getElementById("input").value = null;
    flag=0

}