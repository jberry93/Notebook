// Add `int max_of_four(int a, int b, int c, int d)` here:
int max_of_four(int a, int b, int c, int d)
{
    // Readable & completely logical
    int greatest = 0;

    greatest = greatest < a ? a : greatest;
    greatest = greatest < b ? b : greatest;
    greatest = greatest < c ? c : greatest;
    greatest = greatest < d ? d : greatest;

    return greatest;
}

int max_of_four_oof(int a, int b, int c, int d)
{
    // Less readability yet still logical
    int aOrb, cOrd;

    aOrb = a < b ? b : a;
    cOrd = c < d ? d : c;

    return aOrb < cOrd ? cOrd : aOrb;
}

int max_of_four_super_oof(int a, int b, int c, int d)
{
    // Unreadable yet slightly logical
    return (a < b ? b : a) < (c < d ? d : c) ? (c < d ? d : c) : (a < b ? b : a);
}

int main()
{
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);

    return 0;
}
