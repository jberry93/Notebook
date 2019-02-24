int main()
{
    // <insert random code from exercise>

    // Brute force method:
    if (n == 1) printf("%s", "one");
    if (n == 2) printf("%s", "two");
    if (n == 3) printf("%s", "three");
    if (n == 4) printf("%s", "four");
    if (n == 5) printf("%s", "five");
    if (n == 6) printf("%s", "six");
    if (n == 7) printf("%s", "seven");
    if (n == 8) printf("%s", "eight");
    if (n == 9) printf("%s", "nine");
    if (n > 9) printf("%s", "Greater than 9");

    // Pointer method:
    /*
     Create an array of pointers to strings
     where each pointer points to the base
     address of a string stored in memory
     */
    char *strings[9] = {
        "one", "two", "three",
        "four", "five", "six",
        "seven", "eight", "nine",
    };

    if (n <= 9) {
        printf("%s", strings[n - 1]);
    } else {
        printf("%s", "Greater than 9");
    }

    return 0;
}
