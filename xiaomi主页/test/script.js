/*
* @Author: Administrator
* @Date:   2017-12-16 15:21:09
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-26 16:38:32
*/

function $(id){
			return document.getElementById(id);
		}
		window.onload = function(){
			/**********************************轮播图*************************/

		$("scroll").onmouseover = function(){
        			var arrs = this.getElementsByTagName("span");//获取到左右箭头
        			for (var i = 0; i < arrs.length; i++) {
        				arrs[i].style.display = "block";
        			};
        		}
        		//鼠标移出轮播图区域时，左右箭头隐藏
        		$("scroll").onmouseout = function(){
        			var arrs = this.getElementsByTagName("span");//获取到左右箭头
        			for (var i = 0; i < arrs.length; i++) {
        				arrs[i].style.display = "none";
        			};
        		}
				//动态生成轮播图对应的导航条选项
	        	var imgCount = $("sl").getElementsByTagName("img").length;//获取图片个数
	        	// imgCount = $("scroll").children[0].children[0].children.length
	        	for (var i = 0; i < imgCount; i++) {
	        		var li = document.createElement("li");//创建1给个li标签
	        		li.innerHTML = i+1;
	        		//设置初始选中项
	        		if(i == 0){
	        			li.setAttribute("class", "current");
	        		}
	        		li.setAttribute("index", i);
	        		//注册每个选项的onclick事件。排他思想
	        		li.onclick = function(){
	        			var lis = $("sc_nav").getElementsByTagName("li");
	        			for (var i = 0; i < lis.length; i++) {
	        				lis[i].className = "";
	        			};
	        			this.className = "current";
	        			//点击导航选项时，修改target的值，让图片滚动起来
	        			target = this.getAttribute("index") * -1226;
	        		}
	        		$("sc_nav").appendChild(li);
	        	};

	        	//缓动动画
	        	var leader = 0;
	        	var target = 0;
	        	setInterval(function(){
	        		leader = leader + (target - leader) / 10;
	        		$("sl_ul").style.left = leader + "px";
	        	}, 30);

	        	//左箭头点击事件
	        	$("prev").onclick = function(){
	        		if(target < 0){
	        			target += 1226;
	        		}
	        		setCurrent();
	        	}

	        	//右箭头点击事件
	        	$("next").onclick = function(){
	        		if(target > -4904){
	        			target -= 1226;
	        		}
	        		else{
	        			target = 0;//如果已经是最后一张图(第5张图),就直接回到首图
	        		}
	        		setCurrent();
	        	}

	        	//修改对应的nav栏中的按钮为被选中项
	        	function setCurrent(){
	        		var index = Math.abs(target / 1226);//取绝对值
	        		var lis = $("sc_nav").getElementsByTagName("li");
	        		for (var i = 0; i < lis.length; i++) {
	        			lis[i].className = "";
	        		};
	        		lis[index].className = "current";
	        	}
	        
/**********************************仿京东搜索框*************************/
        var	hotKey = "高清无码";
		var search = document.getElementById("txtSearch");
		search.value = hotKey;
		search.onfocus = function(){
			if(search.value == hotKey){
				search.value = "";
			}
			search.style.color = "#111";
		}
		search.onblur = function(){
			if(search.value == ""){
				search.value = hotKey;
				this.style.color = "#888";
			}
		}



		/************************************JD********************************/

		var img = document.getElementById("entryImg");
			var img2 = document.getElementById("entryImg2");
			var img3 = document.getElementById("entryImg3");
			var img4 = document.getElementById("entryImg4");
			var img5 = document.getElementById("entryImg5");
			var img6 = document.getElementById("entryImg6");
			var timer;
			img.onmouseover = function(){
				var that = this;
				var left = 1;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 10){
						that.style.left = "-" + left + "px";
						left++;
					}
				}, 30);
			}
				img2.onmouseover = function(){
				var that = this;
				var left = 1;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 10){
						that.style.left = "-" + left + "px";
						left++;
					}
				}, 30);
			}
			img3.onmouseover = function(){
				var that = this;
				var left = 1;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 10){
						that.style.left = "-" + left + "px";
						left++;
					}
				}, 30);
			}
			img4.onmouseover = function(){
				var that = this;
				var left = 1;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 10){
						that.style.left = "-" + left + "px";
						left++;
					}
				}, 30);
			}
			img5.onmouseover = function(){
				var that = this;
				var left = 1;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 10){
						that.style.left = "-" + left + "px";
						left++;
					}
				}, 30);
			}
			img6.onmouseover = function(){
				var that = this;
				var left = 1;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 10){
						that.style.left = "-" + left + "px";
						left++;
					}
				}, 30);
			}
			

			img.onmouseleave = function(){
				var that = this;
				var left = -10;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 0){
						that.style.left = left + "px";
						left++;
					}
				}, 30);
			}
			img2.onmouseleave = function(){
				var that = this;
				var left = -10;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 0){
						that.style.left = left + "px";
						left++;
					}
				}, 30);
			}
			img3.onmouseleave = function(){
				var that = this;
				var left = -10;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 0){
						that.style.left = left + "px";
						left++;
					}
				}, 30);
			}
			img4.onmouseleave = function(){
				var that = this;
				var left = -10;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 0){
						that.style.left = left + "px";
						left++;
					}
				}, 30);
			}
			img5.onmouseleave = function(){
				var that = this;
				var left = -10;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 0){
						that.style.left = left + "px";
						left++;
					}
				}, 30);
			}
			img6.onmouseleave = function(){
				var that = this;
				var left = -10;
				if(timer){
					clearInterval(timer);
				}
				timer = setInterval(function(){
					if(left <= 0){
						that.style.left = left + "px";
						left++;
					}
				}, 30);
			}
	}

	//顶部图片点击//
	function open_win() 
		{
		window.open("test2.html")
		}

		//function open_won(){
		//	window.open("dingbu.html")
		//}
	//JD//