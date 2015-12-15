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
- Think of it as a way to assign a string value to a placeholder/variable which can be used later on in the code

Here is an example of string interpolation in action:
```Ruby
puts('2*3 = #{2*3}') # 2*3 = #{2*3}
puts("2*3 = #{2*3}") # 2*3 = 6
```
We embed the value of `2*3` thanks to string interpolation, double quotes, and `#{}`. 
