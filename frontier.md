
# Apprentice

## Suggested Tasks

1. Build a simple "Hello World" web app in the Frontier web stack.  See the guides at: Frontier (Front-end Engineering App Framework)
2. Check the application into your own GitHub repository. (NOTE: In order for them to create a private repository they have to pay.  Do we want to make a way for them to make the repository private, or are we ok with them to making the repository public?)
3. Deploy your app outside of your local development environment.
4. Enhance your application by adding content to your page and learn how to pass data to your EJS page.
5. Add more pages.  Wire them to different routes and/or separate controllers.
6. Learn how to configure a different header.
7. Using Angular, create a simple list of items.  You should be able to view the list and add/edit/delete items.  You can find training videos [here](http://www.youtube.com/watch?v=4EVBg1pNdtc&list=PL1w1q3fL4pmgqpzb-XhG7Clgi67d_OHXz )

## Reference

- frontier stack
  - server-side
    - [node.js](http://nodejs.org/)
    - [express](http://expressjs.com/)
    - [EJS](https://github.com/visionmedia/ejs)
    - [strong](https://github.com/fs-webdev/strong)
    - [asset manager](https://github.com/fs-webdev/asset-manager)
    - experiments
  - client-side
    - [jquery](http://jquery.com/)
    - [inject.js](http://www.injectjs.com/docs/)
    - [twitter bootstrap](http://twitter.github.io/bootstrap/)
    - [angular.js](http://angularjs.org/)
    - [TJ's components]https://github.com/component/component/)

## Skills to demonstrate

- [express app](https://github.com/notablemind/notablemind/blob/master/app.js)
  - [multiple
    routes](https://github.com/notablemind/notablemind/blob/master/app.js#L44)
    - [serve
      HTML](https://github.com/notablemind/notablemind/blob/master/app.js#L41)
    - [serve
      JSON](https://github.com/notablemind/notablemind/blob/master/routes/index.js#L23)
- host on github
- [deploy to heroku](http://notablemind.herokuapp.com/)
- use EJS to pass dynamic content
  - I don't prefer EJS, and so don't use it in my personal projects. [Here's an
    example](https://github.com/fs-webdev/theme-engage/commit/57cbc128dddeda33c1d5b6503b68b905eb53b32e#L2L79)
    of me using it in theme-engage
- not sure what "configure a different header" means. [Here's a configurable
  header](https://github.com/notablemind/notablemind/blob/master/assets/jade/bootstrap.jade#L22). Using the block `extra-nav`, I add the connectivity monitor.
- angular
  [forthewin](https://github.com/notablemind/note/blob/master/template.jade)

# Journeyman

## Suggested Tasks

1. Async Programming:  Using the "full parallel" control flow pattern, make three simultaneous calls to an api service.  Learn about flow control patterns here: http://book.mixu.net/ch7.html
2. Experiments: Create a feature and wrap it into an experiment.
3. Localizations:  Localize your page(s) by creating a language specific file, moving your strings into it, and adding calls to your page that substitute in the localized strings. 
4. Angular Directives: Build a simple directive for a new HTML tag called "the-time" that displays the current time; "The time is: xxxx". Use a separate template file.  Here is an example: http://www.youtube.com/watch?v=Yg-R1gchccg Alternatively, suggest your own directive to implement with similar functionality.

## Skills to demonstrate

- async programming
  - [example1](https://github.com/notablemind/notablemind/blob/master/app.js#L52)
  - [example2](https://github.com/notablemind/runner/blob/master/setup.js#L58)
  - [example3](https://github.com/notablemind/runner/blob/master/setup.js#L22)
- experimentalization
  - [in
    EJS](https://github.com/fs-webdev/theme-engage/blob/master/assets/views/partials/header.ejs#L3)
  - [experiment_config](https://github.com/fs-webdev/shared-ui/blob/master/experiment_config.json#L7)
- localization
  - [in
    EJS](https://github.com/fs-webdev/theme-engage/blob/master/assets/views/partials/singleDropDown.ejs#L35)
  - [in
    locale.json](https://github.com/fs-webdev/theme-engage/blob/master/locales/layout_en.json#L20)
- [so directive](https://github.com/notablemind/note/blob/master/index.js#L24)

# Master

