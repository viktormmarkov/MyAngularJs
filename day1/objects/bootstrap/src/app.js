/* global Video: false, document: false */

var vid = new Video(document.getElementById('video'),
    document.getElementById('canvas'));
vid.start();

/* Solution 1*/

function BWFilter() {
    Filter.apply(this, arguments);
}

BWFilter.prototype = Object.create(Filter.prototype);

BWFilter.prototype.applyFilter = function (data, current){
    var r = data[current],
        g = data[current + 1],
        b = data[current + 2],
        v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    data[current] = data[current + 1] = data[current + 2] = v;
};
/* Solution 2 */

/**/
