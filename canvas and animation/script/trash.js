var Moving = new function() {
    var draggableElement = {};
    var self = this;

    function selectElement(event) {
        var elem = event.target.closest("img[name*='tr']");
        draggableElement.elem = elem;
        draggableElement.downX = event.pageX;
        draggableElement.downY = event.pageY;

        return false;
    }

    function movingElemenet(event) {

      if (!draggableElement.element) 
      {
            draggableElement.element = draggableElement.elem;
            var coords = getCoordinates(draggableElement.element);
            draggableElement.shiftX = draggableElement.downX - coords.left;
            draggableElement.shiftY = draggableElement.downY - coords.top;
        }
        draggableElement.element.style.left = event.pageX - draggableElement.shiftX + 'px';
        draggableElement.element.style.top = event.pageY - draggableElement.shiftY + 'px';

        return false;
    }

    function notSelectedElement(e) {
        if (draggableElement.element) {
            moveOver(e);
        }
        draggableElement = {};
    }

    function moveOver(event) {
        var dropElement = findDroppable(event);

        if (!dropElement) {
            self.onDragCancel(draggableElement);
        } 
        else {
            self.onDragEnd(draggableElement, dropElement);
        }
    }

    function findDroppable(event) {
        draggableElement.element.hidden = true;
        var elem = document.elementFromPoint(event.clientX, event.clientY);
        draggableElement.element.hidden = false;
        return elem.closest('.trashCan');
    }

    document.onmousemove = movingElemenet;
    document.onmouseup = notSelectedElement;
    document.onmousedown = selectElement;

    self.onDragCancel = function() {};

};

function getCoordinates(element) {
    var el = element.getBoundingClientRect();
    return {
        top: el.top + pageYOffset,
        left: el.left + pageXOffset
    };
}