/*
Had to refer to discussion thread for answer >:(
Also checked out documentation on scanf: http://www.cplusplus.com/reference/cstdio/scanf/

Sample Input:
C
Language
Welcome To C!!

Sample Output:
C
Language
Welcome To C!!
*/
int main()
{
    /*
        Option 1 (Hacky):
        - Create obnoxiously huge char variable
        - While gets() reads from stdin
            - Write to stdout with new line (\n)
    */
    char line[9999];
    while(gets(line)) {
        puts(line);
    }

    /*
        Option 2 (Legit):
        - Create `ch`, `s`, and `sen` char variables
        - Read character "C" and store in `ch`
        - Read string "Language" and store in `s`
        - Read sentence "Welcome To C!!" and store in `sen`
        - Print each variable
    */
    char ch, s[9], sen[15];

    // scanf("%c\n%s%*c%[^\n]", &ch, &s, &sen); // Works

    // Read character and store in `ch`
    scanf("%c", &ch);

    // Read string AND new line (but ignore new line character/whitespace with '*') and store in `s`
    scanf("%s%*c", &s);

    // Read everything that is NOT a new line and store in `sen`
    scanf("%[^\n]", &sen);

    printf("%c\n", ch);
    printf("%s\n", s);
    printf("%s", sen);

    return 0;
}
