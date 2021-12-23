function is_snt(n){
    if(n<2) return false;
    for(let i = 2; i<= Math.sqrt(n); i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

let a = document.getElementById("a");
let b = document.getElementById("b");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
      let number1 = Number(a.value);
      let number2 = Number(b.value);
  
      for (let i = number1; i < number2; i++) {
        if (is_snt(i)){
          let result = document.getElementById("return").innerHTML += i + " ";
      }
      }
  });
