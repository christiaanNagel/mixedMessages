let randomNumber = (val) =>
{
    return Math.floor(Math.random()*val);
}




let wisdom = 
{
    name: ["Pieter","Sarie"],
    surname: ["Pretorius", "Roux"],
    kleur: ["blank", "bruin", "swart"]
}

let randomPerson = (arrayObj) =>
{
    let saying = [];
    for(element in arrayObj)
    {
        let option = randomNumber(arrayObj[element].length);
        saying.push(arrayObj[element][option]);
    }
    console.log(`Your name is ${saying[0]} and your surname is ${saying[1]} and your ethnicity is ${saying[2]}`)
}

randomPerson(wisdom);