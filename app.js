/**
 * Created by rwong on 11/18/16.
 */

window.onload = function () {
  'use strict';

  var pics = document.getElementById("pics"); // set up main div
  var dragSource = null; // temporary storage of image being dragged

  var Handler = { // set up object with drag functions
    DragStart: function (e) {
      this.style.opacity = '0.4';
      dragSource = this;

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    },
    
    DragOver: function (e) {
      if (e.preventDefault)   {e.preventDefault(); }

      e.dataTransfer.dropEffect = 'move';
    },

    DragEnter: function(e) {
      this.classList.add('over');
    },

    DragLeave: function(e) {
      this.classList.remove('over');
    },

    DragDrop: function(e) {
      if (e.preventDefault)   {e.preventDefault(); }
      if (e.stopPropagation)  {e.stopPropagation();}

      pics.insertBefore(dragSource, this );
    },

    DragEnd: function(e) {
      e.preventDefault();
      this.style.opacity = '1';

      [].forEach.call(pics, function (pic) {
        pic.classList.remove('over');
      });
    }
  };

  var loadPics = function () { // loads images from JSON and set up DOM elements dynamically
    var path = "pictures/";
    var images = { // JSON object with array of pic file names
      array: [
        "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png"
      ]
    };

    [].forEach.call(images.array, function(image) { // line up picture cells in div
      var newSpan = document.createElement("span");
      newSpan.className = "pic";
      newSpan.setAttribute("draggable", "true");

      var newImg = newSpan.cloneNode();
      newImg.innerHTML = "<img class='img' src="+path+image+"/>";
      pics.appendChild(newImg);
    });

    var Handle = Object.create(Handler); // create a copy of Handler
    var pictures = document.querySelectorAll('#pics .pic'); // set up the div

    [].forEach.call(pictures, function(picture) {
      picture.addEventListener('dragstart', Handle.DragStart, false);
      picture.addEventListener('dragenter', Handle.DragEnter, false);
      picture.addEventListener('dragover' , Handle.DragOver , false);
      picture.addEventListener('dragleave', Handle.DragLeave, false);
      picture.addEventListener('drop'     , Handle.DragDrop , false);
      picture.addEventListener('dragend'  , Handle.DragEnd  , false);
    });

  };

  loadPics(); // run the function
};
