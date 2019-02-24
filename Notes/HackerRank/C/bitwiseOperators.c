// Complete the following function
void calculate_the_maximum(int n, int k)
{
    /*
      Conditions:
      - Maximum value of a & b but less than integer k
      - Maximum value of a | b but less than integer k
      - Maximum value of a ^ b but less than integer k
     */
    int maximumAND = 0,
        maximumOR = 0,
        maximumXOR = 0;

    // Iterate through every possible combination of integers in sequence {1..n}
    for (int i = 1; i <= n; i++) {
        for(int j = i + 1; j <= n; j++) {
            // Set values of bitwise operations
            int iANDj = i & j,
                iORj = i | j,
                iXORj = i ^ j;

            // Compare and set if conditions are met
            if (iANDj > maximumAND && iANDj < k) {
                maximumAND = iANDj;
            }

            if (iORj > maximumOR && iORj < k) {
                maximumOR = iORj;
            }

            if (iXORj > maximumXOR && iXORj < k) {
                maximumXOR = iXORj;
            }
        }
    }

    printf("%d\n%d\n%d", maximumAND, maximumOR, maximumXOR);
}

int main()
{
    int n, k;
    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);

    return 0;
}
