/**
 * Created by Administrator on 2016/8/16.
 */
//获取样式
function getStyle(Odiv,str) {
    if (Odiv.currentStyle) {   //ie
        return obj.currentStyle[str];
    } else {
        return window.getComputedStyle(Odiv, false)[str];  //非ie
    }
}
function Move(Odiv,target,fn) {
    clearInterval(Odiv.timer);
    Odiv.timer=setInterval(function () {
    	var isClear=true;
        for(var attr in target) {
            if (attr == "opacity") {
                var brr = Math.round(parseFloat(getStyle(Odiv, attr)) * 100);

            } else {
                var brr = Math.round(parseFloat(getStyle(Odiv, attr)));
            }
            if (!brr) {
                brr = 0;
            }
            var speed=(target[attr]-brr)/10;
            if(speed>0){
                speed=Math.ceil(speed);
            }else{
                speed=Math.floor(speed);
            }
            if(target[attr]==brr){

            }else {
                isClear = false;
                if (attr == "opacity") {
                    Odiv.style.opacity = (brr + speed) / 100;
                    Odiv.style.filter = "alpha(opacity:" + parseInt(brr + speed) + ")";
                } else {
                    Odiv.style[attr] = brr + speed + "px"
                }
            }
        }
        if(isClear){
            clearInterval(Odiv.timer);
            if(fn){
                fn();
            }
        }
    },30)
}

