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