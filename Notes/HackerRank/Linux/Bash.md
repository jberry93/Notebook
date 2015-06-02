# Bash Notes

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
Let's do some math by `read`ing in 2 numbers given by a user and then add, subtract, multiply, and divide those 2 numbers together and print out those results. This can be done in 1 of 3 ways:

```BASH
read x
read y
echo $(($x+$y))
echo `expr "$x" - "$y"`
echo $[$x*$y]
echo $[$x/$y]
```

If you are lazy like me, I would urge the bracket notation since it takes less key strokes but if you like to make everything complicated then use the `expr` or expression notation. The choice is yours! 