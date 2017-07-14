function $(selector, context) {
    context = context || document;
    switch(selector.charAt(0)){
        case '#': //id
            return [document.getElementById(selector.substring(1))];
            break;
        case '.': //class
            return getByClass(selector.substring(1), context);
            break;
        default: //tag
            return context.getElementsByTagName(selector);
            break;
    }
}
/**
 * ���ҷ���className��Ԫ��
 * @param className
 * @param context
 * @return {Array}
 */
function getByClass(className, context) {
    context = context || document;
    var result = [];
    var arr = context.getElementsByTagName('*');
    var re = new RegExp("\\b"+className+"\\b");
    for(var i=0; i<arr.length; i++){
        if(re.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}
/**
 * ����ָ����Ԫ�ص���һ��Ԫ���ֵ�
 * @param elem
 * @return ָ����Ԫ�ص���һ��Ԫ���ֵ�
 */
function next(elem) {
    do{
        elem = elem && elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}
/**
 * ����ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�
 * @param elem
 * @return ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�
 */
function prev(elem) {
    do{
        elem = elem && elem.previousSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}

/**
 * ����ָ��Ԫ�صĵ�һ�����ӽڵ�
 * @param elem
 */
function first(elem) {
    elem = elem.firstChild;
    return elem && elem.nodeType == 1 ? elem : next(elem);
}

/**
 * ����ָ��Ԫ�ص����һ�����ӽڵ�,
 * @param elem
 */
function last(elem) {
    elem = elem.lastChild;
    return elem && elem.nodeType == 1 ? elem : prev(elem);
}

/**
 * �ڸ����ĵ�ǰԪ�ص�ǰ�����һ����Ԫ��
 * @param elem
 */
function before(elem, newNode) {
    elem.parentNode.insertBefore(newNode, elem);
}

//        before(oH1, oSpan);
/**
 * �ڸ����ĵ�ǰԪ�صĺ��������һ����Ԫ��
 * @param elem
 * @param newNode
 */
function after(elem, newNode) {
    if(elem.nextSibling){
        before(elem.nextSibling, newNode);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}

/**
 * ɾ��������Ԫ��
 * @param elem
 */
function remove(elem) {
    elem.parentNode.removeChild(elem);
}

/**
 * @param elem ��ǰԪ��
 * @return {Array} ���ص�ǰԪ�ص�Ԫ�ؽڵ�
 */
function siblings(elem) {
    var arr = [];
    var elements = elem.parentNode.children;
    for(var i=0; i<elements.length; i++){
        if(elements[i] != elem){
            arr.push(elements[i]);
        }
    }
    return arr;
}

function cloneObj(obj) {
    var newObj = {};
    for(var p in obj){
        if(typeof obj[p] === 'object'){
            newObj[p] = arguments.callee(obj[p]);
        }else{
            newObj[p] = obj[p];
        }
    }
    return newObj;
}

/**
 * @param target ���ϲ���Ŀ�����
 * @param obj Ҫ�ϲ��Ķ���
 * @return ���غϲ����µĶ���
 */
function extend(target, obj) {
    for(var p in obj){
        if(typeof obj[p] === 'object'){
            target[p] = cloneObj(obj[p]);
        }else{
            target[p] = obj[p];
        }
    }
    return target;
}

/**
 * ȥ���ַ�����β�ո�
 * @param str
 * @return {string}
 */
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

/**
 * ��ȡ��ǰԪ����ʽ
 * @param elem
 * @param attr
 * @return {*}
 */
function getStyle(elem, attr) {
    //�������
    if(elem.currentStyle){//IE
        return elem.currentStyle[attr];
    }else if(window.getComputedStyle){//��׼�����
        return getComputedStyle(elem, false)[attr];
    }else{
        return elem.style[attr];
    }
}

function addEvent(elem, type, fn) {
    if(elem.addEventListener){//��׼
        elem.addEventListener(type, fn, false);
    }else if(elem.attachEvent){
        elem[type+fn] = function () {
            fn.call(elem);
        };
        elem.attachEvent('on'+type, elem[type+fn]);
    }else{
        elem['on' + type] = fn;
    }
}

function 2removeEvent(elem, type, fn) {
    if(elem.removeEventListener){
        elem.removeEventListener(type, fn, false);
    }else if(elem.detachEvent){
        elem.detachEvent('on'+type, elem[type+fn]);
    }else{
        elem['on' + type] = null;
    }
}