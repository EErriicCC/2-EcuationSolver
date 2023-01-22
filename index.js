const ecuationSolver = function(){
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    let s1 = document.getElementById("solution1");
    let s2 = document.getElementById("solution2");

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        s1.innerText = "Por favor ingrese valores numéricos válidos";
        s2.innerText = '';
        return;
    }
    if(a == 0){
        s1.innerText = "El valor de a no puede ser cero";
        s2.innerText = '';
        return;
    }

    let discriminant = (b * b- 4 * a * c);
    if (discriminant<0){
        let x1 = -b / (2*a);
        let x2 = Math.sqrt(-discriminant) / (2*a);
        s1.innerHTML = `Soluciones imaginarias: <br> x1= ${x1} + <i>${x2}i</i>, <br> x2= ${x1} - <i>${x2}i</i>`;
        s2.innerText = '';
    } else {
        discriminant = Math.sqrt(discriminant);
        let x1 = (-b + discriminant) / (2*a); 
        let x2 = (-b - discriminant) / (2*a);
        s1.innerText = x1;
        s2.innerText = x2;
    }
}
