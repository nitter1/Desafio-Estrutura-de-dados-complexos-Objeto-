//01 - Crie um array que receba 5 itens e exiba no console.
let myCars = ['Lamborghini Gallardo', 'Lamborghini Aventador', 'Lamborghini Veneno', 'Lamborghini Diablo', 'Lamborghini Huracan']
console.log(myCars)

//02 - Utilize um método para adicionar um nome ao inicio do array.
myCars.unshift('Ferrari 458 Italia')
console.log(myCars)

//03 - Utilize um método para remover o último nome do array.
myCars.pop()
console.log(myCars)

//04 - Utilize um método para adicionar dois nomes ao fim do array.
myCars.push("Ferrari LaFerrari", "Ferrari 288 GTO")
console.log(myCars)

//05 - Utilize um método para remover o primeiro nome do array.
myCars.shift()
console.log(myCars)

//06 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)

//07 - Crie um objeto que receba ao menos três propriedades sobre você.
const myProfile = {
    name: "Daniel Roger Nitter",
    birthDate: "19/04/2001",
    state: "Rio De Janeiro",
    city: "Iguaba Grande"
}
console.log(myProfile)

//08 - Adicione uma nova propriedade sem alterar seu objeto inicial.
myProfile.maritalStatus = "Single"
console.log(myProfile)

//09 - Remova uma propriedade desse objeto.
delete myProfile.city
console.log(myProfile)

//10 - Mostre no console todas as propriedades desse objeto.
//console.log(myProfile)
Object.keys(myProfile).forEach((name) => {
    console.log(name + " = " + myProfile[name]);
  });
  

//11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
   {
        name: "Dominic Toretto",
        birthDate: "29/08/1976",
        phoneNumber: "+1(323)039-1984",
        friends: ["Brian O'Conner", "Mia Toretto", "Letty Ortiz", "Roman Pearce"],

},
    { 
        name: "Brian O'Conner",
        birthDate: "14/07/1978",
        phoneNumber: "+1(323)780-7851",
        friends: ["Dominic Toretto", "Mia Toretto", "Roman Pearce", "Letty Ortiz"]
    },
    {
        name: "Mia Toretto",
        birthDate: "26/04/1982",
        phoneNumber: "+1(323)694-9707",
        friends: ["Dominic Toretto", "Brian O'Conner", "Letty Ortiz", "Roman Pearce"]
    },
    {
        name: "Letty Ortiz",
        birthDate: "07/09/1983",
        phoneNumber: "+1(323)011-7229",
        friends: ["Dominic Toretto", "Mia Toretto", "Brian O'Conner", "Roman Pearce"]
    },
    {
        name: "Roman Pearce",
        birthDate: "14/07/1977",
        phoneNumber: "+1(323)694-5890",
        friends: ["Brian O'Conner", "Dominic Toretto", "Mia Toretto", "Letty Ortiz"]
    }
]
console.log(cadastro)

//12 - Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].friends[0]) //Primeiro amigo da lista de Dominic Toretto = Brian
console.log(cadastro[1].friends[0]) //Primeiro amigo da lista de Brian O'Conner = Dominic
console.log(cadastro[2].friends[1]) //Segundo amigo da lista de Mia Toretto = Brian
console.log(cadastro[3].friends[0]) //Primeiro amigo da lista de Letty Ortiz = Dominic
console.log(cadastro[4].friends[0]) //Primeiro amigo da lista de Roman Pierce = Brian