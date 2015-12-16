## Humble Beginnings
Notes:
- Here is a link to the communal [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide)
- I am still learning Ruby so I am prone to make mistakes!
- These files are for documenting my own learning experience with Ruby!

#### Stringy Situations
To make the simplest Ruby program in existence (Print 'Hello World'), we write the following Ruby code:
```Ruby
# hello.rb
puts("Hello World!")
puts "Hello World!"
puts 'Hello World!'
```
Here are 3 different ways of executing the same `puts` method which will print a string to the console. I personally recommend using parenthesis to keep possible bugs out of the code but you are free to include them or not.

To execute the code to see if it will print `Hello World!` simply open up a terminal, go to the directory your ruby file is located and type:
```BASH
ruby hello.rb
```
Where `hello.rb` contains the Ruby code above. The output should be 3 `Hello World!`s in the console

---

#### Double vs Single Quotes
The key difference between double and single quotes is this:

**Are we utilizing string interpolation?**
- If we are:
  - Use double quotes `" "`
- If we are not:
  - Use single quotes `' '`

So now you may be wondering what is string interpolation in the first place?
- Think of it as a way to assign a value to a placeholder/variable

Here is an example of string interpolation in action:
```Ruby
puts('2*3 = #{2*3}') # 2*3 = #{2*3}
puts("2*3 = #{2*3}") # 2*3 = 6
```
We embed the value of `2*3` thanks to string interpolation, double quotes, and `#{}`.

Here is another example:
```Ruby
print('Please enter your name: ')
yourName = gets()
puts("Hi #{yourName}") # Hi (value of 'yourName')
```
Couple things going on here:
- We are using the `print` method to print the above prompt to ask the user for a name.
  - The main difference between `print` and `puts` is:
    - `puts` = Adds a new line
    - `print` = No new line
- We have `yourName` set equal to a `gets` method which will read whatever comes after the `print` method and set it equal to `yourName`
- Finally, we have string interpolation in play with the double quotes and `#{}` thereby printing in the console `Hi (your name)` using the `puts` method

---

### Objects and Methods
So how do we make an object in Ruby with a method? Here is an example:
```Ruby
class ANewClass
  def aNewMethod
    print("Hey!")
  end
end
```
So technically all we did here was create the class definition of an object with a method that will print `Hey!` but we did not actually create an object to reference the class to use the method. Here's how:
```Ruby
class ANewClass
  def aNewMethod
    print('Hey!')
  end
end
aNewObject = ANewClass.new
aNewObject.aNewMethod
```
Here's what is happening here:
- We are using the constructor `class` to create a new instance of `class` and naming it `ANewClass`
  - Since classes need to be assigned a *global constant* (key word **constant**), the name of the new class must start with a capital letter
  - To end defining the `class`, we use the keyword `end` to signify the end of our `class`
- We create a method using the constructor `def` and the name of the method of our choice. In this case, I chose `aNewMethod` to be the name of `ANewClass`'s method.
  - Within `aNewMethod`, we will print the string `Hey!`
  - Similar to `class`, we end defining the method by using keyword `end`
- We create an object by setting `aNewObject` equal to a reference of the `ANewClass` class thanks to the `new` method. This way we have access to `ANewClass`'s method(s)
- All we have to do now is call the method using dot notation and `Hey!` should print in the console
