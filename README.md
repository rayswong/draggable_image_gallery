# gallery_of_images
Create a webpage that displays a gallery of images, given a JSON array containing a list of image URLs

## Requirements
  1. Do not use any Javascript libraries or frameworks for your web page.
  2. ES5 or above is preferred.
  3. The basic layout should be a grid of pictures.
  4. The images should be reorder-able by dragging and dropping. Dragging an image to a new position should insert that image at the new position, and maintain order of other images. It should not swap images.
  5. Any other functionality is not expected.

### Installing
  - Right click on the index.html file and open with a browser application

### Code Walk-through
There are two main parts in the app.js code:

1. The Handler object contains all the drag functions
```
var Handler = {
    DragStart:  function (e) { ... },
    DragOver:   function (e) { ... },
    DragLeave:  function (e) { ... },
    DragEnter:  function (e) { ... },
    DragDrop:   function (e) { ... },
    DragEnd:    function (e) { ... }
};
```

2. The loadPics function sets up the DOM elements dynamically and load the pictures
```
loadPics = function () { ... };
```

The app.css file contains some simple styles.

The pictures directly holds the 12 photos provided by SigFig.

### What does the code do?
You can drag a picture from any location and drop on top of another; this will insert the dragging picture in front of the other picture.
