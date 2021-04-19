let randomNumber = (val) =>
{
    return Math.floor(Math.random()*val);
}




let wisdom = 
{
    name: ["Silly","Crazy","Insane","Nasty"],
    surname: ["Dog", "Pig","Hippo"],
    kleur: ["Lazy", "Fat", "Stupid"]
}

let randomPerson = (arrayObj) =>
{
    let saying = [];
    for(element in arrayObj)
    {
        let option = randomNumber(arrayObj[element].length);
        saying.push(arrayObj[element][option]);
    }
    console.log(`You are a ${saying[0]} ${saying[1]} and your best trait is being ${saying[2]}`)
}

randomPerson(wisdom);