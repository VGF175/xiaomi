window.onload=function () {
    function fun(a, b, c, d) {
        var boxs = document.querySelectorAll(a);
        var imgs = document.querySelectorAll(b);
        boxs.forEach(function (domobj, index) {
            domobj.onmousemove = function () {
                for (var i = 0; i < boxs.length; i++) {
                    boxs[i].classList.remove(c);
                    imgs[i].classList.remove(d);
                }
                boxs[index].classList.add(c);
                imgs[index].classList.add(d);
            }

        })
    }

    function fu(a, b, c, d) {
        var boxs = document.querySelectorAll(a);
        var imgs = document.querySelectorAll(b);
        boxs.forEach(function (domobj, index) {
            domobj.onmouseleave = function () {
                imgs.forEach(function (a, b) {
                    a.onmousemove = function () {
                        boxs[b].classList.add(c);
                        imgs[b].classList.add(d);
                    }
                    for (var i = 0; i < boxs.length; i++) {
                        boxs[i].classList.remove(c);
                        imgs[i].classList.remove(d);
                    }
                })
            }
            imgs.forEach(function (a, b) {
                a.onmouseleave = function () {
                    for (var i = 0; i < boxs.length; i++) {
                        boxs[i].classList.remove(c);
                        imgs[i].classList.remove(d);
                    }
                }
            })
        })
    }
// 左边列表卡和轮播图
    fun('.jiadiank .jiadianyou div', '.jiadiank .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
    fun('.zhinengk .jiadianyou div', '.zhinengk .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
    fun('.dapeik .jiadianyou div', '.dapeik .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
    fun('.peijiank .jiadianyou div', '.peijiank .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
    fun('.zhoubiank .jiadianyou div', '.zhoubiank .jiadiantuyou ul', 'jiadianyouzi1', 'jiadiantuyouxian')
    fun('.liebiao11 ul li', '.liebiao2 ul', 'liebian11bian', 'liexian')
    fu('.liebiao11 ul li', '.liebiao2 ul', 'liebian11bian', 'liexian')
    var imgs = document.querySelectorAll('.ban li')
    var left = document.querySelector('.hua1')
    var right = document.querySelector('.hua2')
    var circles = document.querySelectorAll('.lunbo ul li')
    var now = 0;
    text = 0;
    circles.forEach(function (a, b) {
        a.onclick = function () {
            circles[now].classList.remove('lunbodian1')
            circles[b].classList.add('lunbodian1')
            imgs[now].classList.remove('banxian')
            imgs[b].classList.add('banxian')
            now = b
        }
    })
    left.onclick = function () {
        text = now - 1
        if (text < 0) {
            text = imgs.length - 1
        }
        circles[now].classList.remove('lunbodian1')
        circles[text].classList.add('lunbodian1')
        imgs[now].classList.remove('banxian')
        imgs[text].classList.add('banxian')
        now = text
    }
    right.onclick = function () {
        text = now + 1
        if (text >= imgs.length) {
            text = 0
        }
        circles[now].classList.remove('lunbodian1')
        circles[text].classList.add('lunbodian1')
        imgs[now].classList.remove('banxian')
        imgs[text].classList.add('banxian')
        now = text
    }
    var danpin=document.querySelector('.danpin')
    var danpinc=document.querySelector('.danpinchang')
    var width=danpin.clientWidth
    var jian=document.querySelector('.xinpinzuoyou')
    var left=jian.firstElementChild
    var right=jian.lastElementChild
    console.log(right)
    var flag=true
    function move() {
        var lef = danpinc.offsetLeft
        if (lef == 0) {
            animate(danpinc, {left: -width}, 2000, function () {
                flag = true
            })
            right.classList.remove('you')
            left.classList.add('you')
        } else {
            animate(danpinc, {left: 0}, 2000, function () {
                flag = true
            })
            left.classList.remove('you')
            right.classList.add('you')
        }

        left.onclick = function () {
            var lef = danpinc.offsetLeft
            if (lef != 0) {
                if (flag) {
                    flag = false
                    move()
                }
            }
        }
    }
        right.onclick=function () {
            var lef=danpinc.offsetLeft
            if(lef==0){
                if(flag){
                    flag=false
                    move()
                }
            }
        }
    var t=setInterval(move,6000)
    danpin.onmousemove=function () {
        clearInterval(t)
    }
    danpin.onmouseleave=function () {
        t=setInterval(move,6000)
    }




    // 下拉卡效果
    fun1('.repingb .neirongzi1','.repingb .neironghuan','.repingb .neironghuan li','.repingb .neirongzi16 div','.repingb .neironghuadong div')
    fun1('.repinga .neirongzi1','.repinga .neironghuan','.repinga .neironghuan li','.repinga .neirongzi16 div','.repinga .neironghuadong div')
    fun1('.repingc .neirongzi1','.repingc .neironghuan','.repingc .neironghuan li','.repingc .neirongzi16 div','.repingc .neironghuadong div')
    fun1('.repingd .neirongzi1','.repingd .neironghuan','.repingd .neironghuan li','.repingd .neirongzi16 div','.repingd .neironghuadong div')
    function fun1(a,b,c,d,e) {
        var banner=document.querySelector(a)
        var img=document.querySelector(b)
        var imgs=document.querySelectorAll(c)
        var cirs=document.querySelectorAll(d)
        var jians=document.querySelectorAll(e)
        var width=parseFloat(getComputedStyle(banner,null).width)
        var n=0,f=true;
        var tule=img.offsetLeft
        function mo(moren='r') {
            if(moren=='r'){
                n++
                if(n>=imgs.length){
                    n=0
                }
            }else {
                n--
                if(n<0){
                    n=imgs.length-1
                }
            }
            animate(img,{left:-width*n},function () {
                f=true
            })
            for (var i=0;i<imgs.length;i++){
                cirs[i].classList.remove('neirongzi162')
            }
            cirs[n].classList.add('neirongzi162')
        }
        jians[0].onclick=function () {
            var tule=img.offsetLeft
            if(tule!=0){
                f=false
                mo('l')
            }
        }
        jians[1].onclick=function () {
            var tule=img.offsetLeft
            if(tule!=-width*2){
                f=false
                mo()
            }
        }
        cirs.forEach(function(a,b){
            cirs[b].onclick=function () {
                animate(img,{left:-width*b},function () {
                    f=true
                })
                for (var i=0;i<imgs.length;i++){
                    cirs[i].classList.remove('cxuan')
                }
                cirs[b].classList.add('cxuan')
                n=b;
            }
        })
    }
    
    var tan=document.querySelectorAll('.spl')
    var zo=document.querySelector('.spfl')
    var tanchu =document.querySelectorAll('.spl ul')
    tanchu.forEach(function (value,index) {
        tan[index].onmouseover=function () {
            tanchu.forEach(function (val,index) {
                animate(val,{height:230},500)
            })
        }
        tan[index].onmouseout=function () {
            for(var i=0;i<tanchu.length;i++){
                animate(tanchu[i],{height:0},500)
            }
        }
    })


        let gwc=document.getElementsByClassName('gwc')[0];
        let gjxg=document.getElementsByClassName('gjxg')[0];
        gwc.onmouseover=function(){
            gjxg.style.display='block';
        }
        gwc.onmouseout=function(){
            gjxg.style.display='none';
        }

}