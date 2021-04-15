// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    // Me quedo horrible pero funciona.
    nums.sort((a, b) => b - a);
    if(!nums.every(num => num === nums[0]) && nums.length >= 3){
        // Queria ver si podia usar filter o algo más performante pero no me salió nada...
        for(let i = 0; i < 2; i++){
            let acum = 0;
            nums.forEach(num => {if(num == nums[0]){acum++;}});
            nums = nums.slice(acum);
        }
        return nums[0];
    }
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);