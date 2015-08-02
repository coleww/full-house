full-house
----------------

... WHERE EVERYBODY KNOWS YOUR NAME *dun nun nun nun - nuh nuh* :saxophone:

make an element or group of elements or a canvas take up as much of the window as possible

[![NPM](https://nodei.co/npm/full-house.png)](https://nodei.co/npm/full-house/) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) 

### EXAMPLE

```

var fullHouse = require('full-house')
fullHouse(document.querySelectorAll('.slideShow'))

fullHouse(document.getElementById('canvas'))

fullHouse(document.getElementById('my-selfie'))
```

the www/demo.js is a good example for layering a bunch of images on top of each other. [I use this technique to build a slideshow here](https://github.com/coleww/open-plan-office-simulator)

### API

`fullHouse(nodelist || element || canvas)`

given a node list like that returned by querySelectorAll/getElementsByTagName/etc., OR an individual html element like that returned by getElementById, OR a canvas element, fullHouse will resize that/those element(s) to be the size of the window/screen/browser-thing. When the browser is resized, the function will call itself again. 

If working with a canvas, the resize event will wipe the screen clear, so hopefully you are drawing to it absolutely constantly and that does not matter much.
