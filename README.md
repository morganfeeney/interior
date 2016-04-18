# Interior

Interior is a CSS grid system built with Sass; aimed towards front-end developers, web designers, plus anyone else in-between. There are a host of useful features to combat every-day scenarios effectively; _such as layouts for eCommerce web sites_ which have pesky uneven column heights.

## Examples

* [Interior home-page](http://interiorsystem.co.uk)
* [Simple 2 column layout](http://interiorsystem.co.uk/examples/simple-2-column-layout.html)
* [Flipped 2 column layout](http://interiorsystem.co.uk/examples/flipped-2-column-layout.html)
* [Product lister page layout](http://interiorsystem.co.uk/examples/product-lister.html)

## Features

* Fluid layout, modify the grid at different breakpoints for responsive layouts.
* Customize the class names e.g. `.i-col-lg` can be `.i-col-banana` if you see fit.
* Easy to configure with predefined settings that are disabled by default; which are easy to enable.
* Lots of design / layout scenarios catered for.
* Nesting columns is about as straight-forward as it gets.
* Demo files, documentation & examples in the form of a microsite built with Interior yet customized.
* Comes bundled with a Gruntfile & package.json file for compiling Sass & running watch tasks with live reload.

## You'll need

* Sass
* node.js
* npm

## Installation

* Download: [zip](https://github.com/morganfeeney/interior/archive/gh-pages.zip)
* Git: `git clone https://github.com/morganfeeney/interior.git`

Install with npm.

```
npm install interior
```

## How to use

The `interior()` mixin comes preconfigured with settings to create your desired grid system. The amount of columns you want, whether or not you will use with media queries, and whether you want to output classes to change the visual source order of elements, are all catered for.

#### Create a default grid

```scss
// Create your default grid by including
@include interior(
    $grid-cols: 3
);
```
#### Set a breakpoint width for use with a media query

```scss
// Set your media query width as a variable in the file: `partials/_variables.scss`.
$sm: 600px;
```
#### Create a grid for use with the media query

```scss
// Wrap your interior mixin in your media query of choice
@media(min-width: $sm) {
    @include interior(
        $grid-cols: 3,
        $vert-space: 0,
        // Reference the variable name. It can be anything you want, 
        // for the sake of your sanity match the one used in the media query.
        $mq: sm
    );  
}
```

#### Write some HTML

```html
<div class="i-outer">
    <div class="i-row">
        <div class="i-col-3 i-sm-1">
            <div class="i-inner">
                ...
            </div>
        </div>
        <div class="i-col-3 i-sm-2">
            <div class="i-inner">
                ...
            </div>
        </div>
        <div class="i-col-3 i-sm-3">
            <div class="i-inner">
                ...
            </div>
        </div>
    </div>
</div>
```
## Classes explained

##### `.i-outer`
Allows styling of the wrapping tag, e.g. adding a background-color behind, and around your columns.

##### `.i-row`
Maintains vertical rythm. You can add margin: bottom for example to all of these classes, so you maintain a consistent vertical space between content sections.

##### `.i-col-#{$column}`
Is the default column width with or without gutter. You should always at-least use this default, unless you want the default column width to be 100%, if so use `.i-col-#{$mq}-#{$column}` and set your media queries up accordingly.

##### `.i-col-#{$mq}-#{$column}`
Is a modifying class which changes column width or/and gutter width within a media query. This overrides the default: `.i-col-#{$column}`.

##### `.i-fl-#{$column}`
Flip left changes the visual order from right to left by the number of columns specified.

##### `.i-fr-#{$column}`
Flip right changes the visual order from left to right by the number of columns specified. Use in conjunction with either `.i-col-#{$column}` or `.i-col-#{$mq}-#{$column}`.

##### `.i-fl-#{$mq}-#{$column}`
Is a modifying class which changes the visual order from right to left by the number of columns specified within a media query. Use in conjunction with either `.i-col-#{$column}` or `.i-col-#{$mq}-#{$column}`.

##### `.i-fr-#{$mq}-#{$column}`
Is a modifying class which changes the visual order from left to right by the number of columns specified within a media query. Use in conjunction with either `.i-col-#{$column}` or `.i-col-#{$mq}-#{$column}`.

##### `.i-inner`
Is a wrapping class for the content within a column. The main use-case for this class is so that you maintain a visual gutter when you say apply a background-color to the column, yet want the content within the column to have a background or visa-versa.

##### `.i-gup`
Removes floats on all direct column children e.g. `.i-gup > [class*=i-col]` adds `display: inline-block` and `vertical-align: top`. The purpose of this class is to allow columns with uneven heights, which don't clear each other using floats, to clear. The great thing with this is that no matter what order the columns are in, and no matter how much content differs between columns they always clear and align properly.

## Customization

You can go straight in and add more partial / mixin references to the file `style.scss` and run grunt to compile. However, if you intend to upgrade Interior later you may be better off importing `style.scss` into your own project file; then compiling. If you go down that road and intend to use `gruntfile.js` to compile you'll need to do some restructuring. Doing this will avoid rework if you upgrade.

Head over to the variables file to make any changes you desire, for example I have used `rem` units whereas you may prefer `px`. The default amount of grid columns is 12, this can be any number you like.

You can use `interior()` as many times as you need, in as many variations as desired. For further clarity on how this can be achieved I have included several demo files. The demo has been created using interior, serves as working documentation, and has been customized; _feel free to rip apart and put back together again_. A working example of the demo files can be found [here](http://interiorsystem.co.uk).

The variables in the file: `partials/_variables.scss` are suitable for production use, with the exception of the widths; unless they work for you `¯\_(ツ)_/¯`.

```scss
$xs: 400px;
$sm: 600px;
$md: 800px;
$lg: 1000px;
$xl: 1200px;
```
Feel free you change them to suit your project, and to change the names of each breakpoint to ANYTHING you like.

## Browser support

* Google Chrome
* Firefox
* Safari
* Opera - untested
* Internet Explorer

## License

MIT License

## Acknowledgements

Inspiration came from working with [Bootstrap](http://getbootstrap.com), [Griddle](http://necolas.github.io/griddle/) and [Skeleton](http://getskeleton.com/) (in a previous life).
