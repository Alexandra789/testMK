import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

 
$(document).ready(()=>{  var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
  });})
