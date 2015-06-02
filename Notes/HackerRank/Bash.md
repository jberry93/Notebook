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
