int main()
{
    // Declare variables
    int a, b, intSum, intDiff;
    float x, y, floatSum, floatDiff;

    // Read input
    scanf("%d %d", &a, &b);
    scanf("%f %f", &x, &y);

    // Calculate sum/difference for integers
    intSum = a + b;
    intDiff = a - b;

    // Calculate sum/difference for floats
    floatSum = x + y;
    floatDiff = x - y;

    // Output sum/difference for integers with new line
    printf("%d %d\n", intSum, intDiff);

    // Output sum/difference for floats and show only 1 number after decimal
    printf("%.1f %.1f", floatSum, floatDiff);

    return 0;
}

