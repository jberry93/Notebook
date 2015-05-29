# Regular Expressions Notes

**Regular Expressions** are useful for extracting information from text such as code, log files, spreadsheets, or documents

Everything is essentially a character. Characters include both letters and numbers. 

### \d
`\d` is used to replace any digit from 0~9. the `\` is what distinguishes it from the character `d`

### The 'Wildcard' Dot (.)
The `.` matches any single character whether it be a letter, digit, whitespace, etc. In order to match a period, use a slash: `\.`

### Specificity
Say you had this list of text:

```
can man fan dan ran pan
```

You want to match: `can man fan`

You want to skip: `dan ran pan`

How do we do this? We use `[]` to specify exactly which characters we want to choose:

```Regular Expression
[cmf]
```