void update(int *a, int *b)
{
    int sum, absDiff;

    sum = *a + *b;
    absDiff = abs(*a - *b);

    *a = sum;
    *b = absDiff;
}

int main()
{
    int a, b;
    int *pa = &a; // Assign memory address of `a` to pointer `pa`
    int *pb = &b; // Assign memory address of `b` to pointer `pb`

    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}
