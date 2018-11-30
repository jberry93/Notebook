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
echo $[ $x + $y ]
echo $[ $x - $y ]
echo $[ $x * $y ]
echo $[ $x / $y ]

# Comparing Numbers
read x
read y
if [ $x -gt $y ]
then
    echo "X is greater than Y"
elif [ $x -lt $y ]
    echo "X is less than Y"
else
    echo "X is equal to Y"
fi

# Getting started with conditionals
read input
if [ "$input" = "Y" ]
then
	echo "YES"
elif [ "$input" = "N" ]
then
	echo "NO"
elif [ "$input" = "y" ]
then
	echo "YES"
elif [ "$input" = "n" ]
then
	echo "NO"
else
	echo "Yes and No?"
fi

# More on conditionals
read a
read b
read c
if [ $a = $b ]
then
	if [ $b = $c ]
	then
		echo "EQUILATERAL"
	elif [ $b -gt $c ]
	then
		echo "ISOSCELES"
	elif [ $b -lt $c ]
	then
		echo "ISOSCELES"
	fi
elif [ $b = $c ]
then
	if [ $c = $a ]
	then
		echo "EQUILATERAL"
	elif [ $c -gt $a ]
	then
		echo "ISOSCELES"
	elif [ $c -lt $a ]
	then
		echo "ISOSCELES"
	fi
elif [ $a = $c ]
then
	if [ $c = $b ]
	then
		echo "EQUILATERAL"
	elif [ $c -gt $b ]
	then
		echo "ISOSCELES"
	elif [ $c -lt $b ]
	then
		echo "ISOSCELES"
	fi
else
	echo "SCALENE"
fi