let r = 0;
document.getElementById("btn").addEventListener("click",()=>{
	let first = `Первое худи:${document.getElementById("field1").value}`
	let second = `Второе худи:${document.getElementById("field2").value}`
	let name = `Имя:${document.getElementById("name").value}`
	let tel = `Телефон:${document.getElementById("tel").value}`
	document.getElementById("btn").href = `mailto:modernbiz321@gmail.com?subject=Заказ худи&body=${first}%0D%0A${second}%0D%0A${name}%0D%0A${tel}`
	document.getElementById("btn").click()
	if(r==1){
	document.getElementById("btn").href=""
	r=0
	}else{
		r=1;
	}
})
let i = 0;
setInterval(() => {
	if(i<4){
		document.getElementById("screen").src = document.getElementsByClassName("slide-img")[i].src;
i++;
	}else{
		i=0;
	  document.getElementById("screen").src = document.getElementsByClassName("slide-img")[i].src;
	}
}, 1000);
$(document).ready(function() {
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var target = $(this).attr("href");
		var product = $(this).parent().find("h3").text();
        $("#order_form select[name='comment'] option[value='"+product+"']").prop("selected", true);
		$("html, body").animate({scrollTop: $(target).offset().top+"px"});
		return false;
	});
	
	/* timer */
	
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").html( pad(hrs));
		$(".timer .minutes").html( pad(min));
		$(".timer .seconds").html( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) {
		s = ("00"+s).substr(-2);
		return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
	}
	update();
	
	
	/* validate form */
	
	$(".order_form").submit(function(){
		if ($(this).find("input[name='name']").val() == "" && $(this).find("input[name='phone']").val() == "") {
			alert("Введите Ваши имя и телефон");
			$(this).find("input[name='name']").focus();
			return false;
		}
		else if ($(this).find("input[name='name']").val() == "") {
			alert("Введите Ваше имя");
			$(this).find("input[name='name']").focus();
			return false;
		}
		else if ($(this).find("input[name='phone']").val() == "") {
			alert("Введите Ваш телефон");
			$(this).find("input[name='phone']").focus();
			return false;
		}
		return true;
	});
	
	/* sliders */
	
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: true,
		pullDrag: true,
		dots: false,
		nav: true,
		autoplay:false,
		margin: 5,
		navText: ""
	});
});
