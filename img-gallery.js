(function(){

var pswpElement = document.querySelectorAll('.pswp')[0];

var openPhotoSwipe = function(id, num_iter) {
    console.log(id)
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    items = [];
    for (var i = 0; i < num_iter/50; i++) {
        var iter = (i*50).toString();

        var img_src = `/assets/deep-image-prior/process/${id}/${iter}.png`
        items.push({
            html: `<div class="centeredd"><h2>Iteration ${iter}</h2><img src="${img_src}"></img></div>`

        });
    };

    // define options (if needed)
    var options = {
        history: false,
        focus: true,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

// openPhotoSwipe();

document.getElementById('process-vase').onclick = function () { openPhotoSwipe("vase", 5000); };
document.getElementById('process-library').onclick = function () { openPhotoSwipe("library", 3000); };
document.getElementById('process-snail').onclick = function () { openPhotoSwipe("snail", 3000); };
document.getElementById('process-zebra').onclick = function () { openPhotoSwipe("zebra", 2000); };
document.getElementById('process-F16').onclick = function () { openPhotoSwipe("F16", 2000); };
document.getElementById('process-kate').onclick = function () { openPhotoSwipe("kate", 6000); };


 })
();
