# HTML Notes

### Create a text field:
```HTML
<input type='text' required placeholder='text'>
```
*placeholder* is text that appears in your text field before your user has inputted anything

*required* will require the user to input text into your filed before submitting


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

