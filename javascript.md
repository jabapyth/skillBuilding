# Apprentice

## Suggested Tasks

1. Create a module with its own name space and place all of your JavaScript functions and objects in it.
2. Objects:  Create an object using object literals and containing methods to hold the contents of your form fields.  (Work completed as part of the HTML/CSS Journeyman Skill).  Populate the form with values from the object.  Update the object with values from the form.  
3. Functions: Define at least 2 functions, one inside an object and one in the global name space.  Add an inner function to both.  Demonstrate the proper use of "this".  Demonstrate the use and value of the "closures" that were created when you defined inner functions.  Demonstrate the use of prototypes by adding and using a custom method on a library function.
4. Events:  Demonstrate the use of event handling in your form so that the object you created in number 1 above is automatically updated when a change is made to a form field.  Minimize the number of event handlers you create.
5. Exceptions: Demonstrate catching and throwing an exception.
6. Regular Expressions: Demonstrate the use of regular expressions in your form validation on at least 3 fields.

## Skills to Demonstrate

- namespacing; don't pollute the global namespace
  - I use [components](http://github.com/component/component)
- object literals; use an object to store information
  - https://github.com/notablemind/angular-settings/blob/master/index.js#L15
- functions and scope
  - [inner function](https://github.com/notablemind/angular-settings/blob/master/index.js#L70) using a variable from a higher scope
- Prototypal OO; define an object using a function constructor and modify the
  prototype to add methods
  - understanding of "this"
  - understanding of closures
  - https://github.com/notablemind/settings/blob/master/index.js
- [DOM Event handling](https://github.com/notablemind/socketio-monitor/blob/master/index.js#L27)
- Exception handling
  - [throw](https://github.com/notablemind/socketio-monitor/blob/master/index.js#L20)/[catch](https://github.com/jabapyth/component-loader/blob/master/index.js#L34)
  - [async pass (err, data)](https://github.com/notablemind/notablemind/blob/master/routes/settings.js#L9)
- [regex](https://github.com/notablemind/settings/blob/master/index.js#L2)

<!-- use "target" to add handlers to parent elements -->

## Questions

- is regex mission critical? I mean, it's useful once in a while, but I
  wouldn't think it's a core element.

# Journeyman

## Suggested Tasks

1. AJAX: Use AJAX to retrieve and save your form data back to the server.  Your server-side controller can mock sending and receiving JSON data. Demonstrate the use of closures to make state available to your AJAX call back functions.
2. JSON: Pass back and forth a JSON structure containing the field values.
3. Web Worker: Create a web worker that communicates to the server in the background.  Set the worker's "onmessage" property to an event handler.  Demonstrate passing messages thru this mechanism to/from the server. https://developer.mozilla.org/en-US/docs/DOM/Using_web_workers
4. Web Sockets:  Open up a web socket with the server.  Demonstrate sending/receiving messages to/from the server.  http://www.developerfusion.com/article/143158/an-introduction-to-websockets/

## Skills to Demonstrate

- use ajax
  - [client-side](https://github.com/notablemind/notablemind/blob/master/assets/angular.js#L27)
  - [server-side](https://github.com/notablemind/notablemind/blob/master/routes/index.js#L24)
  - we already covered closures in the apprentice level
- use json. see ajax
- [web
  workers](https://github.com/jabapyth/skillBuilding/blob/master/client.js)
- [web sockets](https://github.com/jabapyth/skillBuilding/blob/master/client.js)




