# Interior

Interior is a Sass based grid system aimed towards front-end developers and web designers, and anyone else in-between. There are a host of useful features to combat every-day scenarios effectively; such as layouts for eCommerce sites.

[Project page](http://morganfeeney.github.io/interior/)

## Installation

* Download: [zip](https://github.com/morganfeeney/interior/archive/gh-pages.zip)
* Git: `git clone https://github.com/morganfeeney/interior.git`

## Features

* Fluid layout, modify the grid at different breakpoints for responsive layouts.
* Customized class names e.g. `.i-col-lg` can be `.i-col-mahoosive` if you see fit.
* Easy to configure with predefined settings that are disabled by default; which are easy to enable.
* Lots of design / layout possibilities catered for.
* Nesting is about as straight-forward as it gets.
* Comes bundled with a Gruntfile & package.json file for easy setup.

## How it works

The `interior()` mixin comes preconfigured with settings to create your desired grid system. The amount of columns you want, whether or not you will use with media queries, and whether you want to output classes to change the visual source order of elements, are all catered for.

**Markup example**

```
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

## Customization

Head over to the variables file to make any changes you desire, for example I have used `rem` units whereas you may prefer `px`. The default amount of grid columns is 12, this can be any number you like.

You can use `interior()` as many times as you need, in as many variations as desired. For further clarity on how this can be achieved I have included several demo files. The demo has been created using interior, serves as working documentation, and has been customized; _feel free to rip apart and put back together again_. A working example of the demo files can be found [here](http://morganfeeney.github.io/interior/).

The variables in the file entitled: _variables.scss are suitable for production use, with the exception of the widths:

```
$xs: 400px;
$sm: 600px;
$md: 800px;
$lg: 1000px;
$xl: 1200px;
```
Well, they are but would you want to? A break-point should be exactly that, I didn't intend them for anything other than to use in my demos so feel free you change them to suit your project.

Feel free to change the names of each breakpoint to anything you like.

## Browser support

* Google Chrome
* Firefox
* Safari
* Opera - untested
* Internet Explorer - untested

## License

MIT License
