# Answers to all the "Easy" challenges in Bash

# Let's Echo
echo "HELLO"

# Looping with Numebrs
for i in {1..50}
do
    echo $i
done

# Looping and Skipping
for i in {1..99..2}
do
    echo $i
done

# A Personalized Echo
read name
echo "Welcome $name"

# The World of Numbers
read x
read y
echo $[$x + $y]
echo $[$x - $y]
echo $[$x * $y]
echo $[$x / $y]

# Comparing Numbers
read x
read y
if [$x -gt $y]
then
    echo "X is greater than Y"
elif [$x -lt $y]
    echo "X is less than Y"
else
    echo "X is equal to Y"
fi