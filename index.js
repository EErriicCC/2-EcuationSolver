

const ecuationSolver = function(){
    const a = document.getElementById("a")
    const b = document.getElementById("b")
    const c = document.getElementById("c")
    let s1 = document.getElementById("solution1")
    let s2 = document.getElementById("solution2")
    let discriminant = Math.sqrt(b.value ** 2- 4 * a.value * c.value);
    let x1 = (-b.value + discriminant) / (2*a.value); 
    let x2 = (-b.value - discriminant) / (2*a.value);
    s1.innerText = x1;
    s2.innerText = x2;
}


