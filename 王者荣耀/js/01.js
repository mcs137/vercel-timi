// window.onload = function () {
//     //窗体加载时，当鼠标移入一级导航时，二级导航要显示
//     //当鼠标移出二级导航时，二级导航要隐藏
//     //步骤:
//     //1.获取一级导航里面的li
//     var libox = document.getElementById("level1").getElementsByTagName("li");
//     //3、获取二级导航的元素
//     var level2 = document.getElementById("level2");
//     //2.触发1i里面的鼠标移入事件
//     for (var i = 0; i < libox.lengh; i++) {
//         libox[i].onmousemove = function () {
//             //3.1 让二级导航显示
//             level2.style.display = "block";
//         }
//     }
//     //4.当鼠标移出二级导航的时候
//     level2.onmouseout = function () {
//         //4.让二级导航隐藏
//         level2.style.display = "none";
//     }

// }

//使用jQuery,jquery开头$
//实现的一级二级导航
$(function(){
    //id选择器 jQuery
    $("#level1").mouseenter(function () { 
        $("#level2").slideDown(500);
    });
    $("#level2").mouseleave(function () { 
        $("#level2").slideUp(500);
    });
    //实现轮播图效果
    $(".slidebox").slide(function(){
        autoplay:true;
        effect:leftloop;
    });

    $(".title").slide(function(){
        effect:leftloop;
    });
});


var xhr = new XMLHttpRequest;

xhr.open('post','http://www.baidu.com');

xhr.send();

xhr.onload=function(){
    console.log(xhr.responseText());
}




