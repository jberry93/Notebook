# Regular Expressions Notes

**Regular Expressions** are useful for extracting information from text such as code, log files, spreadsheets, or documents

Everything is essentially a character. Characters include both letters and numbers. 

### \d
`\d` is used to replace any digit from 0~9. the `\` is what distinguishes it from the character `d`

### The 'Wildcard' Dot (.)
The `.` matches any single character whether it be a letter, digit, whitespace, etc. In order to match a period, use a slash: `\.`

### Specificity
Say you had this list of text:

`can man fan dan ran pan`

You want to match: `can man fan`

You want to skip: `dan ran pan`

How do we do this? We use `[]` to specify exactly which characters we want to choose:

`[cmf]`

We use `[^abc]` to match any single character *except* for the letters `abc`

### Ranges
Use bracket notation with a dash to specify your range of characters in either bracket notation:

`[2-6]` matches any digit from 2~6
`[^a-e]` matches any character except letters from a~e

### Repetitions
What is a good way to match character repetition? Use `{}` notation:

`a{1,3}` will match the character `a` for no more than 3 times but no less than 1 time

'f{1,}' will match 1 or more characters of `f`

`z{2,4}` will match the character `z` for no more than 4 times but no less than 2 times 

### Kleen Star v Kleene Plus
`\d*` will match any number of digits 

`\d+` will ensure that there is at least 1 digits

More examples:

`a+` will match 1 or more `a` characters

`[abc]+` will match 1 or more of any characters `abc`

`.*` will match 0 or more of any character

How would we match all the text here?:

`aaaabcc aabbbbc aacc`

`a+b*c+` will match all the characters there!

### Optional
`ab?c` will match either the `abc` or `ac` since `b` is made optional with the `?` next to it

`\?` will match a plain question mark character

### Whitespace
`_` accounts for spaces

`\t` accounts for tabs

`\n` accounts for a new line

`\r` accounts for carriage return which is mostly used in Windows

`\s` will match any of the specific whitespaces noted above

### More Specificity
Define a pattern that describes both the start and the end of the line by using `^` at the beginning and `$` at the end

Example:

`^successful$` will match exactly a line that contains only the word `successful` and not `unsuccessful`

### Grouping
Say you had these files:

```
file_a_record_file.pdf
file_yesterday.pdf
testfile_fake.pdf.tmp
```

You have to capture:

```
file_a_record_file
file_yesterday
```

How would we do that? Use `()` to capture the text. Since `\w` accounts for all words and we need to ensure that there is at least 1 word, given what we need capture. Our answer to this problem is:

`^(\w+).pdf$` which will capture all alphanumeric text up to the file extension and ensure that `.pdf` are the only characters present

`\w` will capture all alphanumeric characters which match: `[a-zA-Z0-9_]` so basically; all lower and upper-case letters as well as numbers and spaces are fair game

Here's another problem:

```
Jan 1987
May 1969
Aug 2011
```

Capture this text:

```
Jan 1987, 1987
May 1969, 1969
Aug 2011, 2011
```

Basically, we need to capture both the full data as well as the year which will require a nested capture:

`(\w+ (\d+))` will satisfy both constraints since we have more than 1 character and more than 1 digit we are capturing

Another problem:

```
1280x720
1920x1600
1024x768
```

We want to capture:

```
1280, 720
1920, 1600
1024, 768
```

We need to capture 2 groups of digits:

`(\d+)x(\d+)`

### Conditional
We use `|` to specify x 'or' y:

Example:

```
I love cats
I love dogs
I love logs
```

Match `I love cats I love dogs`
Skip `I love logs`

Use `|`:

`I love (cats|dogs)`

### Special characters
`\b` will match the boundary between a word and a non-word character. It's most useful when paired with `\w` like so: `\w+\b`

`\D` matches any non-digit character

`\S` matches any non-whitespace character

`\W` matches any non-alphanumeric character like punctuation

`\0` will allow you to reference your captured groups (full matched text)

`\1` matches group 1

`\2` matches group 2 and etc..