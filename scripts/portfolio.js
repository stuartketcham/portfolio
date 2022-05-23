<!--Collapsable sections-->
 var coll = document.getElementsByClassName("collapsible");
 var i;

 for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var content = this.nextElementSibling;
     if (content.style.display === "block") {
       content.style.display = "none";
     } else {
       content.style.display = "block";
     }
   });
 }
<!--Tableau loading-->
var divElement = document.getElementById('viz1652213297597');
var vizElement = divElement.getElementsByTagName('object')[0];
if (divElement.offsetWidth > 500) {
  vizElement.style.minWidth = '1000px';
  vizElement.style.maxWidth = '100%';
  vizElement.style.minHeight = '850px';
  vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px';
} else {
  vizElement.style.width = '100%';
  vizElement.style.minHeight = '750px';
  vizElement.style.maxHeight = (divElement.offsetWidth * 1.77) + 'px';
}
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);