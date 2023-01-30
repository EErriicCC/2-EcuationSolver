const EcuationSolver = () => {
    let aInput = document.getElementById("a");
    let bInput = document.getElementById("b");
    let cInput = document.getElementById("c");
    const solver = () => {

        let s1 = document.getElementById("solution1");
        let s2 = document.getElementById("solution2");
        const aValue = parseFloat(aInput.value);
        const bValue = parseFloat(bInput.value);
        const cValue = parseFloat(cInput.value);


        if(isNaN(aValue) || isNaN(bValue) || isNaN(cValue)){
            s1.innerText = "Por favor ingrese valores numéricos válidos";
            s2.innerText = '';
            return;
        }

        if(aValue == 0){
            s1.innerText = "El valor de a no puede ser cero";
            s2.innerText = '';
            return;
        }

        let discriminant = (bValue * bValue - 4 * aValue * cValue);
        if (discriminant<0){
            let x1 = -bValue / (2*aValue);
            let x2 = Math.sqrt(-discriminant) / (2*aValue);
            s1.innerHTML = `Soluciones imaginarias: <br> x1= ${x1.toFixed(3)} + <i>${x2.toFixed(3)}i</i>, <br> x2= ${x1.toFixed(3)} - <i>${x2.toFixed(3)}i</i>`;
            s2.innerText = '';
        } else {
            discriminant = Math.sqrt(discriminant);
            let x1 = (-bValue + discriminant) / (2*aValue); 
            let x2 = (-bValue - discriminant) / (2*aValue);
            s1.innerText = `x1 = ${x1.toFixed(3)}`;
            s2.innerText = `x2 = ${x2.toFixed(3)}`;
        }
    }
    aInput.addEventListener('input',solver);
    bInput.addEventListener('input',solver);
    cInput.addEventListener('input',solver);
}
