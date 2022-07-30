/* Conteúdo de Aula */

const myString = 'Hello world';

myString.length = 8;
console.log(myString.length);



/* Exercícios */

const objTiago = {
    name: 'Tiago',
    age: 42,
    height: 1.82,

};


const objMarcos = {
    name: 'Marcos',
    age: 35,
    height: 1.80,
};


const listedString = "Banana, apple, pear, orange";

const myObject = {
    location: {
        country: 'Brasil',
        state: 'Rio de Janeiro',
        address: {
            street: 'Avenida Brasil',
            number: 1
        }
    }
}



// 1. Use os 2 objetos acima (objTiago, objMarcos) e crie uma função que retorne a multiplicação das idades.

function multiplicação(objeto1, objeto2) {

    var multiplicação = objeto1.age * objeto2.age
    console.log(multiplicação)
}

multiplicação(objMarcos, objTiago)






// 2. Crie uma função que necessite de um argumento. Ela retornará a string ‘Positive’, se seu argumento for zero ou positivo, e ‘Negative’, se seu argumento negativo.

function teste(argumento) {

    const resultado = argumento >= 0 ? "positivo" : "negativo"
    console.log(resultado)
}

teste(21)


// 3. Crie um objeto com seu nome e dados que tenha os seguintes parâmetros:
/*
- nome completo (pode ser 1 só sobrenome)
- idade
- interesses (pode ser uma lista pequena)
*/

const eu = {
    nome: "rodrigo",
    idade: 23,
    intereses: [
        "Banana", "apple", "pear", "orange"]
}

// 4. Usando o objeto acima (myObject) retorne o campo country usando desestruturação.

const { location } = myObject
const { country } = location
console.log(country);


// 5. Usando o objeto acima (myObject) retorne o campo street usando desestruturação.
const {address} = country
console.log(address);

/* IGNOREM POR HOJE */

// 6. Crie uma função que recebe a string acima (listedString) como parâmetro e separe suas palavras, adicionando-as a um novo array.

function organizar(listaFruta){

 let fruta =listaFruta.split(',')
console.table(fruta);
    
}

organizar(listedString)
