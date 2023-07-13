function isPrime(num) {
    //if (num <= 1): This condition checks if the input number num is less than or equal to 1.
    // Prime numbers are defined as numbers greater than 1 that are divisible only by 1 and themselves.
    // If the input number is less than or equal to 1, it cannot be a prime number, so the function immediately returns false.
    if (num <= 1) {
        return false;
    }
    //The for loop is used to iterate over a range of numbers from 2 to the square root of the input number (Math.sqrt(num)).
    // It starts at 2 because all numbers are divisible by 1, and it goes up to the square root of the input number because any factor larger than the square root would already have a corresponding factor smaller than the square root.
    for (let i = 2; i <= Math.sqrt(num); i++) {
        //if (num % i === 0): This condition checks if the input number num is divisible evenly by the current number i in the loop.
        // If num is divisible by i without leaving a remainder, it means num has a factor other than 1 and itself, and therefore, it is not a prime number.
        // In such cases, the function immediately returns false.
        if (num % i === 0) {
            //If none of the numbers in the loop divide num evenly, the loop completes without returning false, indicating that num is only divisible by 1 and itself.
            // In this case, the function returns true, indicating that the input number is a prime number.
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
//Finally, console.log(isPrime(7)); calls the isPrime function, passing the number 7 as an argument.
// Since 7 is only divisible by 1 and itself, the function determines that it is a prime number and returns true, which is then printed to the console.
//In summary, the code checks whether a given number is a prime number by iterating through a range of numbers from 2 to the square root of the number and checking for any factors other than 1 and itself.
