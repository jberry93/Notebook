# HTML Notes

### Create a text field:
```HTML
<input type='text' required placeholder='text'>
```
**placeholder** is text that appears in your text field before your user has inputted anything

**required** will require the user to input text into your filed before submitting


### Anchor element:
```HTML
<a href='(link or #)'>(Text you want to click on)</a>
```
You can build web forms that submit data to a server using pure HTML

Wrap an input element with a form element to get the desired effect:
```HTML
<form action='/submit-something'>
	<input type='text' placeholder='some text'>
</form>
```

### Adding a submit button to form:
```HTML
<form action='/submit-something'>
	<button type='submit'>Submit</button>
	<input type='text' placeholder='some text'>
</form>
```
Clicking the button will send the data from your form to the path you specified with your form's `action` attribute

### Creating Radio buttons:
```HTML
<label><input type='radio' name='text'>Text</label>
```
Radio buttons are a type of input; Like bubbles on a multiple choice test

All related radio buttons should have the same `name` attribute

Use radio buttons for questions where you want the user to give only one answer

### Creating Checkboxes:
```HTML
<label><input type='checkbox' name='text'>Text</label>
```
Same as the radio buttons except there are multiple answers you want the user to submit

### Clean the page with Line breaks:
```HTML
<br>
```
**<br>** will add spacing between elements on your page

### Check buttons by default:
```HTML
<input type='radio' name='text' checked>
<input type='checkbox' name='text' checked>