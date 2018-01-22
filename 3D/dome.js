var nodes  = document.querySelectorAll('li');
    _nodes = [].slice.call(nodes, 0);
var getDirection = function (ev, obj) {
    //ev//鼠标位置
    //obj=>this//当前li
    var w = obj.offsetWidth,//当前对象到其上级层左边的距离
        h = obj.offsetHeight,
        x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
        y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
    console.log(ev.pageX);//鼠标指针的位置相对于文档的左边缘
    return d;
};
var addClass = function ( ev, obj, state ) {
    var direction = getDirection( ev, obj ),
        class_suffix = "";
    
    obj.className = "";
    
    switch ( direction ) {
        case 0 : class_suffix = '-top';    break;
        case 1 : class_suffix = '-right';  break;
        case 2 : class_suffix = '-bottom'; break;
        case 3 : class_suffix = '-left';   break;
    }
    
    obj.classList.add( state + class_suffix );
};

_nodes.forEach(function (el) {
    console.log(el);
    el.addEventListener('mouseover', function (ev) {
        addClass( ev, this, 'in' );
        
    }, true);
    
    el.addEventListener('mouseout', function (ev) {
        addClass( ev, this, 'out' );
    }, true);
});