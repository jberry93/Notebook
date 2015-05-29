# RegExr Practice

### Problem 1
Matching scientific or decimal number

Match Text:

```
3.14529
-255.34
128
1.9e10
123,340.00
```

Skip Text: `720p`

### Problem 2
Matching phone numbers

Match Text:

```
415-555-1234
650-555-2345
(416)555-3456
202 555 4567
4035555678
1 416 555 9292
```

Capture:

```
415
650
416
202
403
416
```

### Problem 3
Matching emails

Match:

```
tom@hogwarts.com
tom.riddle@hogwarts.com
tom.riddle+regexone@hogwarts.com
tom@hogwarts.eu.com
potter@hogwarts.com
harry@hogwarts.com
hermione+regexone@hogwarts.com
```

Capture:

```
tom
tom.riddle
tom.riddle
tom
potter
harry
hermione
```

### Problem 4
Matching HTML

Match:

```
<a>This is a link</a>
<a href='http://regexone.com'>Link</a>
<div class='test_style'>Test</div>
<div>Hello <span>world</span></div>
```

### Problem 5
Matching specific filenames

### Problem 6
Trimming whitespace from start and end of line

### Answers:

**Problem 1** = `^-?\d+(,\d+)*(\.\d+(e\d+)?)?$`

**Problem 2** = `\W?(\d{3})` will capture everything but to match everything too: `1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}`

**Problem 3** = `(\w+\.?\w+)\W?\w+@?\.?\w+\.?\w+` but `^([\w.]*)` works to capture everything

**Problem 4** = `<(\w+)\>?\s?\w+\=?\W\S+\s?\w\s?\w+\<?\>?\/?\a?>` to capture the tag content: `<(\w+)`, to capture attribute values: `>([\w\s]*)<` or even `='([\w://.]*)`

**Problem 5** = 

**Problem 6** = 