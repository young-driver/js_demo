/**
 * Created by hp_pc on 2017/6/20.
 */

/**
 * 功能：给定元素移动到目标位置(纵向)
 * @param ele,target
 */
function animate_Y(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetTop)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },20);
}

/**
 * 功能：给定元素移动到目标位置(横向)
 * @param ele,target
 */
function animate_X(ele,target){
    //要用定时器，先清除定时器
    //一个盒子只能有一个定时器，这样儿的话，不会和其他盒子出现定时器冲突
    //而定时器本身讲成为盒子的一个属性
    clearInterval(ele.timer);
    //我们要求盒子既能向前又能向后，那么我们的步长就得有正有负
    //目标值如果大于当前值取正，目标值如果小于当前值取负
    var speed = target>ele.offsetLeft?10:-10;
    ele.timer = setInterval(function () {
        //在执行之前就获取当前值和目标值之差
        var val = target - ele.offsetLeft;
        ele.style.left = ele.offsetLeft + speed + "px";
        //目标值和当前值只差如果小于步长，那么就不能在前进了
        //因为步长有正有负，所有转换成绝对值来比较
        if(Math.abs(val)<Math.abs(speed)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },10)
}

/**
 * 功能：兼容的scroll写法封装
 */
function scroll() {
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

/**
 * 功能：通过传递不同的参数获取不同的元素
 * @param str
 * @returns {*}
 */
function $(str){
    var str1 = str.charAt(0);
    if(str1==="#"){
        return document.getElementById(str.slice(1));
    }else if(str1 === "."){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断，如果不是传递过来的元素本身，那么添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/**
 * 功能：显示和隐藏元素
 * @param ele
 */
function show(ele){
    ele.style.display = "block";
}
function hide(ele){
    ele.style.display = "none";
}