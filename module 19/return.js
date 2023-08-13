/* function add(num1, num2) {
    console.log('going to add:', num1,num2)
    var sum = num1 + num2;
    console.log(sum)
    return sum;
}

// add();
// add(50, 60);

var total = add(80, 20);
console.log('total', total); */

function bringSingaras(money) {
    var singaraPrice = 10;
    var singerQuantity = money / singaraPrice;
    return singerQuantity;
}
var mytaka = 100;
var singara = bringSingaras(mytaka);
console.log("i get singaras", singara)

