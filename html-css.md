
# Apprentice

already passed off :) I'll fill in later

# Journeyman

## Suggested Tasks

1. Build out the responsive page you created for the apprentice badge
by adding more pages, improved navigation, and better styling.  You
will need to use media queries rather than a framework such as the one
found in bootstrap.
2. Implement your navigation as a stylized list. Use event handling
with minimal wiring.  The current page should be indicated in the
list.  You should demonstrate that you can create this navigation by
hand rather than use a ui component found in many libraries.
3. Improve your responsive design to include scaling/loading images
and more interesting content flow.  It is acceptable if some features
are not available for smaller sizes. For a great example, see Notre
Dame's responsive site at: nd.edu
4. Add a form on one of your pages.  Use CSS to layout the labels and
fields.  Use a text box, text area, check box, and a pick list.
5. Style your pages using CSS, stored in a separate file, using the
minimum number of IDs and class attributes in your markup.  Use at
least 4 kinds of selectors. Provide an example of using multiple
backgrounds.  Include a custom font.  Use opacity, drop shadow, and
CSS gradient.  Use a transition, transform or an animation.
6. Use 8 of the 28 HTML5 features found at:
http://net.tutsplus.com/tutorials/html-css-techniques/25-html5-features-tips-and-techniques-you-must-know/

## Skills to demonstrate

### CSS3

- use media queries
  [ex](https://github.com/jabapyth/jfcom-hyde/blob/master/content/media/styl/fluid-blocks.styl#L26)
- have complex styling not just using build-in styles provided by bootstrap or
  some other library
  [ex](https://github.com/jabapyth/jfcom-hyde/blob/master/content/media/styl/about.styl#L9)
  [ex2](https://github.com/jabapyth/jfcom-hyde/blob/master/content/media/styl/general.styl#L117)
- change content flow / page complexity based on display size. an example would be to have
  images scale, change the columns displayed, or hide some parts for mobile devices. [look at example in different sizes](http://jaredforsyth.com/blog/)
- CSS selectors, using a variety of different types
  - generality over specificity is preferred
    [ex](https://github.com/jabapyth/jfcom-hyde/blob/master/content/media/styl/general.styl)
- store the CSS in a separate file &#10004;
- show advanced knowledge of several modern CSS3 features, for example:
  - custom font
    [ex](https://github.com/fs-webdev/reference/commit/2604aeb197ee2874b9c5dc020369b574c24a5f92)
  - opacity
    [ex](https://github.com/jabapyth/jfcom-hyde/blob/f92b977ada9b06a172b0cfbd79e6bc10e2853ab6/content/media/styl/general.styl#L110)
  - box-sizing
    [ex](https://github.com/jabapyth/jfcom-hyde/blob/f92b977ada9b06a172b0cfbd79e6bc10e2853ab6/content/media/styl/general.styl#L89)
  - drop-shadow or text-shadow
    [ex](https://github.com/jabapyth/jfcom-hyde/blob/f92b977ada9b06a172b0cfbd79e6bc10e2853ab6/content/media/styl/general.styl#L130)
  - :last-child or :nth-child
    [ex](https://github.com/jabapyth/jfcom-hyde/blob/f92b977ada9b06a172b0cfbd79e6bc10e2853ab6/content/media/styl/macros.styl#L6)
  - multiple backgrounds
  - :before, :after, and content:
  - CSS gradient
  - transition, transform or animation

### HTML5

- use semantic HTML tags, such as
  [<section>](https://github.com/jabapyth/jfcom-hyde/blob/f92b977ada9b06a172b0cfbd79e6bc10e2853ab6/content/index.html#L21),
  [<article>](https://github.com/jabapyth/jfcom-hyde/blob/f92b977ada9b06a172b0cfbd79e6bc10e2853ab6/layout/macros.j2#L3),
  and
  [<nav>](https://github.com/jabapyth/jfcom-hyde/blob/f92b977ada9b06a172b0cfbd79e6bc10e2853ab6/layout/macros.j2#L60)
- include the HTML5 doctype &#10004;
- more powerful form input features, for example:
  - [contenteditable](https://github.com/notablemind/note/blob/master/template.jade#L4)
  - [placeholders](https://github.com/jabapyth/skillBuilding/blob/master/index.html)
  - [required](https://github.com/jabapyth/skillBuilding/blob/master/index.html)
  - [autofocus](https://github.com/jabapyth/skillBuilding/blob/master/index.html)
  - [regex validation](https://github.com/jabapyth/skillBuilding/blob/master/index.html)
  - [email inputs](https://github.com/jabapyth/skillBuilding/blob/master/index.html)

#### Javascript

One of the following

- [localStorage](https://github.com/jabapyth/spa/blob/57d5309b5d491d9a0d3723dcaaeaf6930ae29a84/assets/index.js#L93)
- IndexedDB
- feature detection for backwards compatibility

# Master

