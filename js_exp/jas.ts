
type User = {
    name: string;
    age: number;
}

function isAdult(user: User): boolean {
    return user.age >= 18;
}

const jas: User = {
    name: 'Jasper', 
    age: 3
}

const isJasAdult = isAdult(jas);
console.log(`Jas is ${ isJasAdult ? '' : 'not ' }an adult!`);