using System;

class Program
{
    static void Main()
    {
        int result = Factorial(5);
        Console.WriteLine("Factorial of 5 is: " + result);

        int fibResult = Fibonacci(10);
        Console.WriteLine("Fibonacci of 10th number is: " + fibResult);
    }

    // Example of a recursive function to calculate factorial
    static int Factorial(int n)
    {
        if (n == 0)
            return 1;
        else
            return n * Factorial(n - 1);
    }

    // Example of a recursive function to calculate Fibonacci numbers
    static int Fibonacci(int n)
    {
        if (n <= 1)
            return n;
        else
            return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}
