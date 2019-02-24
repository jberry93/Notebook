/*
 Sample Input:
 8
 11

 Sample Output:
 eight
 nine
 even
 odd

 Conditions:
 - if 1 <= n <= 9 then print English representation of it in lowercase
 - if n > 9 and even, print "even"
 - if n > 9 and odd, print "odd"
 */
int main()
{
    int a, b;
    scanf("%d\n%d", &a, &b);

    // Complete the code:
    /*
     Same idea as before; array of pointers to strings
     that point to the base address of a string
     */
    char *strings[9] = {
        "one", "two", "three",
        "four", "five", "six",
        "seven", "eight", "nine",
    };

    for (a; a <= b; a++) {
        if (a <= 9) {
            printf("%s\n", strings[a - 1]);
        } else {
            if (a % 2 == 0) {
                printf("%s\n", "even");
            } else {
                printf("%s\n", "odd");
            }
        }
    }
}
