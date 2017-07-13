/**
 * Created by lenovo on 2017/7/13.
 */
function before(elem,newNode){
    elem.parentNode.insertBefore(newNode,elem);}
function after(elem,newNode){
    if(elem.nextSibling){
        before(elem.nextSibling,newNode);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}
function first(elem){
    elem=elem.firstChild;
    return elem && elem.nodeType ==1 ? elem :next(elem)
}

function prev(elem){
    do{
        elem=elem && elem.previousSibling;
    }while(elem && elem.nodeType !=1);
    return elem;
}

function next(elem){
    do{
        elem = elem && elem.nextSibling;
    }while(elem && elem.nodeType !=1);
    return elem;
}