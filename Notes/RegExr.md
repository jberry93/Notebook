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

How would we do that? Use `()` to campture the text. Since `\w` accounts for all words and we need to ensure that there is at least 1 word given what we need capture, our answer to this problem is:

`^(\w+).pdf$` which will capture the all text up to the file extension and ensure that `.pdf` are the only characters present

