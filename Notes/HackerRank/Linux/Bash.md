# Bash Notes

### Basics
The 3 main commands that are utilized the most are `pwd`, `cd` and `ls`:

```Shell
pwd
```

### Echo
All `echo` does is output something. For instance:

```BASH
echo Hello
```

This simple script will output `Hello` into the command line. Simple enough?

### $USER and $PWD
Say we wanted the script to be a little more specific and user friendly. We can utilize `$USER` and `$PWD` to print out the name of the current user as well as the present working directory (PWD) the user is currently in:

```BASH
echo "Hey $USER! Your current working directory is $PWD. Have fun!"
```

### For loop
For the purpose of learning, say we wanted to make a script that prints out all of the odd numbers between 1 and 99. We need to iterate through all of the numbers between 1 and 99 inclusive and spit out the odd ones. We can accomplish this with a for loop:

```BASH
for i in {1..99..2}
do
	echo $i
done
```

The `{1..99..2}` format will tell the for loop to iterate between the numbers 1 and 99 and increment twice. So `1,3,5,7..`

Also if we need to print all then numbers between 1 and 99 we use `{1..99}` instead:

```BASH
for i in {1..99}
do
	echo $i
done
```

### Read
Say we want a script that takes in a personalized input and prints that input. We utilize `read` to accomplish this:

```BASH
read name
echo "Welcome $name"
```

This will take an input from you and assign that input value to `name`. You call `name` within `echo` using `$name` and it will print `Welcome (your input)`. Cool right?

### Math
Let's do some math by `read`ing in 2 numbers given by a user, then add, subtract, multiply, and divide those 2 numbers together and finally print out those results. This can be done in 1 of 3 ways:

```BASH
read x
read y
echo $(($x+$y))
echo `expr "$x" - "$y"`
echo $[$x*$y]
echo $[$x/$y]
```

If you wish to be more accurate with your answers such as rounding to the nth decimal, we can utilize `printf "%.#f"` to round an expression to the nearest `#`th decimal:

```BASH
read input
printf "%.4f" $(echo "scale = 10; $input"| bc)
```

`scale` refers to the number of decimal points while `print "%.4f` will round the `input` down to 4 decimal places. `bc` is a language that supports arbitrary precision numbers with interactive execution of statements. So what this script is doing is taking an `input`, which is any numerical expression, and output the first 10 decimal points but round it down to only 4 decimal points

### If statements
Let's compare 2 numbers and see if they are greater than, less than, or equal to each other using an if statement. Since we are testing 3 conditions, we need to utilize the if/elif/else structure like so:

```BASH
read x
read y
if [ $x -gt $y ]
then
	echo "X is greater than Y"
elif [ $x -lt $y ]
then
	echo "X is less than Y"
else
	echo "X is equal to Y"
fi
```

`-gt` = Indicates `>` or greater than

`-lt` = Indicates `<` or less than

Here's another problem:

Let's `read` in an input and output `YES` or `NO` based on the input. Let's restrain the input to either `Y`, `y`, `N`, or `n` so that it's easier to construct the if statement:

```BASH
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
```

And another problem:

Triangles are either equilateral, isosceles, or scalene:

**Equilateral** = All 3 sides are equal to each other

**Isosceles** = 2 of the 3 sides are equal to each other

**Scalene** = All 3 sides are different values

We need to create an if statement that will crunch through any input of 3 sides and spit out `EQUILATERAL`, `ISOSCELES`, or `SCALENE`. So for instance, an input of `1,2,2`, `2,1,2` and `2,2,1` should each output `ISOSCELES` when tested in the if statement:

```BASH
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
```