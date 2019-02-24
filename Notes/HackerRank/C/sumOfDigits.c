int main()
{
    int n;
    scanf("%d", &n);

    // Complete the code to calculate sum of 5 digits of n

    // Brute force:
    int fifthInt = n % 10,
        fourthInt = (n / 10) % 10,
        thirdInt = (n / 100) % 10,
        secondInt = (n / 1000) % 10,
        firstInt = (n / 10000) % 10;

    printf("%d", fifthInt + fourthInt + thirdInt + secondInt + firstInt);

    // Elegant:
    /*
     While n is not equal to 0:
     - Using modulo, add last digit to `sum` and set to `sum`
     - Divide `n` by 10 and set to `n` to get to the next number in sequence
     */
    int sum = 0;
    while (n != 0) {
        sum += (n % 10);
        n /= 10;
    }

    printf("%d", sum);
    return 0;
}
