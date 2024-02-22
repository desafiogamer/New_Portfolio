var card = document.querySelector('.card');
//var reflection = document.querySelector('.reflection');
//var reflectionCard = reflection.querySelector('.card');
var rotateClass = 'rotate'; // demo
var updateProperies = function (ratioX, ratioY) {
    card.style.setProperty('--ratio-x', ratioX);
    card.style.setProperty('--ratio-y', ratioY);
    //reflection.style.setProperty('--ratio-x', ratioX);
    //reflection.style.setProperty('--ratio-y', ratioY);
    //reflectionCard.style.setProperty('--ratio-x', ratioX);
    //reflectionCard.style.setProperty('--ratio-y', ratioY);
};
var updatePointerPosition = function (_a) {
    var x = _a.x, y = _a.y;
    card.classList.remove(rotateClass);
    //reflectionCard.classList.remove(rotateClass);
    var rect = card.getBoundingClientRect();
    var hw = rect.width / 2;
    var hh = rect.height / 2;
    var ratioX = (x - (rect.x + hw)) / hw;
    var ratioY = (y - (rect.y + hh)) / hh;
    updateProperies(ratioX, ratioY);
};
card.addEventListener('pointermove', updatePointerPosition);
card.addEventListener('pointerleave', function () { return updateProperies(0, 0); });
