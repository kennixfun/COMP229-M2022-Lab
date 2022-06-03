// IIFE -- Immediately Invoked Function Expression
// AKA - Anonymous Self-Executing Function

(function()
{
    // named function
    // let Start = function()
    
    function Start()
    {
        console.log("App Started!...");

        for (let index = 0; index < 10; index++){

            console.log(index);
        }

        console.log("wrong! " + index);
    }

    window.addEventListener("load", Start);

})();