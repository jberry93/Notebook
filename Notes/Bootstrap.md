# Fun with Bootstrap

### Mobile Responsive Images:
```HTML
<a href='#'><img src='(URL)' class='img-responsive'/></a>
```
**img-responsive** is a Bootstrap class that resizes a photo based on the dimensions of the web page on a device

### Centering text:
```HTML
<h2 class='text-center'>Text</h2>
```
**text-center** is a Bootstrap class that centers text on a page

### Create a button:
```HTML
<button class='btn'>Text</button>
```
**btn** is a Bootstrap class which makes the button more presentable

### Create block element button:
```HTML
<button class='btn btn-block'>Text</button>
```
**btn-block** is a Bootstrap class which styles the button to stretch as far as the page's entire horizontal space

**btn** is still needed to retain the Bootstrap button style

### Changing block element button color:
```HTML
<button class='btn btn-block btn-primary'>Text</button>
```
**btn-primary** is a Bootstrap class which highlights an action you wish the user to take

### Optional actions w/button info:
```HTML
<button class="btn-info btn-block">Info</button>
```
**btn-info** is a Bootstrap class used to call attention to optional actions that the user can take

### Warn users of a dangerous action button:
```HTML
<button class='btn-danger'>Delete</button>
```
**btn-danger** is a Bootstrap class that notifies the user that the button performs a destructive action like deleting something

### Using Bootstrap grid to position elements:
```HTML
<div class='row'>
	<div class='col-xs-4'>
		<button class='btn btn-primary'>Like</button>
	</div>
	<div class='col-xs-4'>
		<button class='btn btn-info'>Info</button>
	</div>
	<div class='col-xs-4'>
		<button class='btn btn-danger'>Delete</button>
	</div>
</div>
```
**col-xs-#** is a Bootstrap class where the '#' is a number specifying how many columns wide the element should be. 'xs' means 'extra small' referring to a mobile phone screen

**row** is applied to a `div` and the buttons themselves are wrapped within it

### Create a custom heading:
```HTML
<div class='row'>
	<div class='col-xs-8'>
		<h2 class='text-primary text-center'>BerryApp</h2>
	</div>
	<div class='col-xs-4'>
		<a href='#'><img class='img-responsive' src='(URL)'/></a>
	</div>
</div>
```

### Add Font Awesome icons to buttons:
```HTML
<button class='btn btn-primary'><i class='fa fa-thumbs-up'></i> Like</button>
```
**Font Awesome** is a library of icons stored in .svg file format

**<i>** is used to add the icon to the button

Example classes for `<i>` element to get Font Awesome icons are: `fa-thumbs-up`, `fa-trash`, `fa-info-circle`, and `fa-paper-plane`