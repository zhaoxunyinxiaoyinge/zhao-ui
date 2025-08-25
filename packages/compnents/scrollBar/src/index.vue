<template>
    <div :class="scrollClass" ref="scroll">
        <!-- 这是父容器，必须支持高度和 -->
        <div  ref="wrap" :class="scrollWrapClass" :style="wrapStyle">
            <component :is="props.tag" :class="scrollViewClass">
                <slot></slot>
            </component>
        </div>
        <!-- 设置滚动栏 这是横向-->
         <div :class="[scrollBarClass,horizontalBarClass]" :style="{display: scrollBarHorizontalShow&&isShowScrollBar? 'block' : 'none'}">
            <div class="el-scrollbar__thumb" ref="scrollThumLeft" :style="{width:scrollBarHorizontalWidth+'px',transform: 'translateX('+scrollBarLeft+'px)'}"></div></div>
        <!-- 设置滚动栏 这是纵向-->
         <div :class="[scrollBarClass,verticalBarClass] "  :style="{display: scrollBarVerticalShow&&isShowScrollBar? 'block' : 'none'}">
            <div class="el-scrollbar__thumb" ref="scrollThumTop" :style="{height:scrollBarVerticalHeight+'px',transform: 'translateY('+scrollBarTop+'px)'}"></div></div>
    </div>
</template>

<script lang="ts" >
import {computed, defineComponent,onMounted,ref} from "vue";
import { getPassProps } from "./types";
import  {createNamespace} from "@zhao/utils"
export default defineComponent({
    name: "ScrollBar",
    props: getPassProps,
    setup(props,{emit}) {
        const wrap=ref();
        const scroll=ref();
        const scrollThumTop=ref();
        const scrollThumLeft=ref();

        const topScroll=ref(0);
        const leftScroll=ref(0);

        const scrollBarHorizontalShow = ref(false);
        const scrollBarVerticalShow = ref(false);
        const isShowScrollBar=ref(false)
        const scrollBarVerticalHeight=ref(0);
        const scrollBarHorizontalWidth=ref(0);
        const verticalTopScroll=ref(0);
        const horizontalLeftScroll=ref(0);
        const scrollBarTop=ref(0)
        const scrollBarLeft=ref(0);

        const  nb=createNamespace("scrollBar");
        const scrollClass= nb.b();
        const scrollWrapClass= nb.e("wrap");
        const scrollViewClass= nb.e("view");
        const scrollBarClass= nb.e("bar");
        const horizontalBarClass= nb.is("horizontal",true);
        const verticalBarClass= nb.is("vertical",true);
    
        const wrapStyle =computed(() => {
            return {
                height: typeof props.height==='string' ? `${props.height}` : props.height+"px",

            }
        });

        // 当组件挂载时，加载内容，判断一下试图的高度，也就是获取当前页面的高度，如果页面高度大于父容器的高度，获取宽度，分别会导致，滚动条的显示，需要两个变量进行控制
        onMounted(() => {
            const contentHeight = wrap.value.scrollHeight;
            const contentWidth=wrap.value.scrollWidth;
            const height=typeof props.height === 'number' ? props.height : parseInt(props.height);
            const width=wrap.value.offsetWidth;

            scrollBarHorizontalShow.value = contentWidth > width;
            scrollBarVerticalShow.value = contentHeight > height;

            scrollBarVerticalHeight.value=(height*(height-4))/contentHeight;
            scrollBarHorizontalWidth.value=width*(width-4)/contentWidth;
            //绑定导航栏是否显示
            scroll.value.addEventListener("mouseover",bindMouseOverEventScroll);
            scroll.value.addEventListener("mouseleave",bindMouseLeaveEventScroll);

            wrap.value.addEventListener("wheel",(event)=>wheelEventScroll(event,contentHeight,height,width,contentWidth));

          
            
        })

        // 当鼠标经过页面上面时，触发显示滚动条
        const bindMouseOverEventScroll=function(){
            isShowScrollBar.value=true;
            scrollThumTop.value&&scrollThumTop.value.addEventListener("mousedown",mouseenterScrollThumTop)
            //横向滚动条
            scrollThumLeft.value&&scrollThumLeft.value.addEventListener("mousedown",mouseenterScrollThumTop)
        };

        //当鼠标经过离开页面时触发,
        const bindMouseLeaveEventScroll=function(){
            scrollThumTop.value&&scrollThumTop.value.removeEventListener("mousedown",mouseenterScrollThumTop);
            scrollThumLeft.value&&scrollThumLeft.value.removeEventListener("mousedown",mouseenterScrollThumTop);
            document.removeEventListener("mouseup",mouseupScrollThumTop);
            isShowScrollBar.value=false;
        };

        //内容区域的内容滚动事件
        const wheelEventScroll=function(event,contentHeight,height,width,contentWidth){
            verticalTopScroll.value+=event.deltaY;
            horizontalLeftScroll.value+=event.deltaX;
            event.preventDefault()
            setScrollTop(verticalTopScroll,contentHeight,height);
            setScrollLeft(horizontalLeftScroll,width,contentWidth);
            runingScrollTo(horizontalLeftScroll,verticalTopScroll);
        }
        
        //鼠标点击事件函数
        const mouseenterScrollThumTop=(event)=>{
               const {top,left}=wrap.value.getBoundingClientRect();
               //这个要偏差的距离
               let y=event.clientY-top-scrollBarTop.value;
               let x=event.clientX-left-scrollBarLeft.value;
                topScroll.value=y;
                leftScroll.value=x;
               document.addEventListener("mousemove",mouseMoveScrollTumTop);
               document.addEventListener("mouseup",mouseupScrollThumTop)
        }



        // 按下滚动条，移动事件
        const mouseMoveScrollTumTop=function(event){
            event.preventDefault();
            const {top,left}=wrap.value.getBoundingClientRect();
            let tops=event.clientY-top-topScroll.value;
            scrollBarTop.value=tops<=0?0:tops>=scrollBarVerticalHeight.value-4?scrollBarVerticalHeight.value-4:tops;

            let lefts=event.clientX-left-leftScroll.value;
            scrollBarLeft.value=lefts<=0?0:lefts>=scrollBarHorizontalWidth.value-4?scrollBarHorizontalWidth.value-4:lefts;

            // 计算页面要滚动的距离/ /计算滚动条要移动的距离 滚动条滚动距离/滚动槽剩余的高度=页面滚动距离/容器隐藏的高度
            const contentHeight = wrap.value.scrollHeight;
            const height=typeof props.height === 'number' ? props.height : parseInt(props.height);
            let leaveBarHeight=(height-4-scrollBarVerticalHeight.value);
            let hiddenContentHeight=contentHeight-height;
            verticalTopScroll.value=Math.ceil((tops*hiddenContentHeight)/leaveBarHeight);

            //计算横向滚动的时候，滚动条的距离
            const contentWidth = wrap.value.scrollWidth;
            const widths=wrap.value.offsetWidth;
            let leaveBarWidth=widths-4-scrollBarVerticalHeight.value;
            let hiddenContentWidth=contentWidth-widths;
            horizontalLeftScroll.value=Math.ceil((lefts*hiddenContentWidth)/leaveBarWidth);

            runingScrollTo(horizontalLeftScroll,verticalTopScroll);
        }

        //鼠标向上松开触事件函数
        const mouseupScrollThumTop=(event)=>{
            //清楚ennter事件，和move事件,但是要触发页面离开时，再清除页面移动事件
            document.removeEventListener("mousemove",mouseMoveScrollTumTop);
        }

         const setScrollTop=(verticalTopScroll,contentHeight,height)=>{
                //计算滚动条要移动的距离 滚动条滚动距离/滚动槽剩余的高度=页面滚动距离/容器隐藏的高度
                 let leaveBarHeight=(height-4-scrollBarVerticalHeight.value);
                 let hiddenContentHeight=contentHeight-height;
                 let leaveMustBarTop=(verticalTopScroll.value*leaveBarHeight)/hiddenContentHeight;
                 leaveMustBarTop>=leaveBarHeight?scrollBarTop.value=leaveBarHeight:leaveMustBarTop<=0?scrollBarTop.value=0:scrollBarTop.value=leaveMustBarTop;
                 endReachedEvent("top",leaveMustBarTop,leaveBarHeight);
         }


        const setScrollLeft=(horizontalLeftScroll,width,contentWidth)=>{
                //计算滚动条要移动的距离 滚动条滚动距离/滚动槽剩余的高度=页面滚动距离/容器隐藏的高度
                 let leaveBarWidth=(width-4-scrollBarHorizontalWidth.value);
                 let hiddenContentWidth=contentWidth-width;
                 let leaveMustBarLeft=hiddenContentWidth==0?0:(horizontalLeftScroll.value*leaveBarWidth)/hiddenContentWidth;
                 leaveMustBarLeft>=leaveBarWidth?scrollBarLeft.value=leaveBarWidth:leaveMustBarLeft<=0?scrollBarLeft.value=0:scrollBarLeft.value=leaveMustBarLeft;
                 endReachedEvent("left",leaveMustBarLeft,leaveBarWidth);
         }

         const runingScrollTo=function(horizontalLeftScroll,verticalTopScroll){
                wrap.value.scrollTo({
                left:horizontalLeftScroll.value,
                top:verticalTopScroll.value,
                behavior: "smooth",
            })

            // 当触发页面滚动的时候，触发的事件
                emit("scroll",horizontalLeftScroll,verticalTopScroll);
         }

         const endReachedEvent=(top, end,start)=>{
            if(top==='left'){
            if(end>=start|| end<=0){
                emit("end-reached",end<=0?'left':"rigtht");
              }
            }else{
            if(end>=start|| end<=0){
                 console.log(end,start)
                emit("end-reached",end<=0?'top':"bottom");
              } 
            }
         }

        return {
            scrollBarHorizontalShow,
            scrollBarVerticalShow,
            scrollBarVerticalHeight,
            scrollBarHorizontalWidth,
            scrollBarTop,
            scrollBarLeft,

            isShowScrollBar,
            scrollClass,
            scrollWrapClass,
            scrollViewClass,
            scrollBarClass,
            horizontalBarClass,
            verticalBarClass,
            wrapStyle,
            props,
            wrap,
            scroll,
            scrollThumTop
        }
    }
})

</script>