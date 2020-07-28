// Get age and convert it to a Number (prompt always returns a string)
var age = Number(prompt("What is your age?"));

// If age is negative
if(age < 0)
{
    console.log("Come back when you see the light from the womb");
}

// If age is 21
if(age === 21)
{
    console.log("Happy 21st Birthday!");
}

// If age is an odd number
if(age % 2 !== 0 )
{
    console.log("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0)
{
    console.log("Your age is a perfect square!");
}