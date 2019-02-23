// "Hello World!" in C
int helloWorld()
{
    char s[100];
    scanf("%[^\n]%*c", &s);

    /* Enter you code here. Read input from STDIN. Print output to STDOUT */
    printf("Hello, World!\n");
    puts(s);
    return 0;
}
