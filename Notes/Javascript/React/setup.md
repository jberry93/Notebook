# Welcome!

#### NOTE: If you prefer using the Chrome browser then continue reading on. If you use Safari or Firefox then you can continue straight to the next section but knowing this material is super useful so I recommend you still reading it (Up to you!).

With React, you are going to need to know a little bit of JavaScript so that you can...
- Create a local web server using [NodeJS](https://nodejs.org/en/) and [Express](http://expressjs.com/)
- Set up routes to your web server
- Use [npm](https://www.npmjs.com/) to import packages (not JavaScript but need it!!)
- Understand the basics of using objects and functions in JavaScript

Fear not! I will go through the process of setting up a local web server using NodeJS and Express for React. The only instance you need to use this is if you want to use the Chrome browser to view your site.

**Reason being: Chrome does not allow you to load files using XHR (XMLHttpRequest)**

On the other hand, Safari and Firefox work just fine!

##### Are you ready for some fun?
![Excited](images/excited.gif)

I hope you are just as excited as this guy

### Node and Express
First thing's first, install NodeJS using the link I provided above in the first bullet point. The NodeJS package you install comes with both NodeJS and npm which is what we will be using to set up our local web server.

Let's answer some questions before going further:

#### What is NodeJS?
Think of it as a place to execute server-side JavaScript code. If you like to litter your JS file with `console.log()` then running the JS file in Node will output the results of all your `console.log()`s. Of course, refer to the NodeJS site for more details!

#### What is npm?
npm stands for Node Package Manager. It does exactly what its name implies which is manage Node packages. Use it to install and update packages containing code for your own projects.

#### What is Express?
According to their website (linked in the first bullet point above), Express is a server framework for NodeJS. Essentially, it allows you to implement the MVC (Model View Controller) architecture.

So now that we have an idea of what we are using for making our server, let's start with installing the necessary node packages to build it:

Open up a terminal and run this:
```BASH
npm install -save express
```

What this is doing is using `npm` to `install` `express` globally using `-g`.
