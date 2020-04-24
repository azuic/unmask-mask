<template>
  <div>
    <div class="bg">
      <div class="mask"></div>
      <div class="slide-cover">
        <div class="slide-arrow"></div>
      </div>
      <h1 class="title">
        Unmask Masks
      </h1>

    </div>
  </div>
</template>

<script>
/*  export default {
    mounted() {
      // Make the DIV element draggable:
      slideLeft(document.getElementById("slide-cover"));

      function slideLeft(elem) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById("slide-arrow")) {
          // if present, the header is where you move the DIV from:
          document.getElementById("slide-arrow").onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          elem.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }


      }
    }
  }*/

</script>

<style>
 body{
    overflow-x:hidden;
    
    
    background-repeat: no-repeat;
 }
.bg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url('/mask-front.png');
  background-size: contain;
  background-position:center;
  background-repeat: no-repeat;
  z-index: 0;
}


.slide-cover{
  position:absolute;
  width:50vw;
  height: 100vh;
  margin-left:50vw;
  display: block;
  background: black;
  z-index:10;
}

.slide-arrow{
  width:50px;
  height:50px;
  background-image:url('/swipe.gif');
  background-size: contain;
  background-repeat: no-repeat;
  margin-left:0;
  margin-top: 50vh;
}
.title {
  position:absolute;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: black;
  letter-spacing: 1px;
  z-index:5;
  margin:40vh 25vw;
  
}

</style>
