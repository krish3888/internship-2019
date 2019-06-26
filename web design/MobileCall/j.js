$(document).ready(function(){
	
	$(".userinfo").click(function(){
		var name=$(this).html()
			$("#usrname").html(name)
		$("#usrno").css("display","none");
		$("#usrname").css("display","block")
	
		$("#front").css("display","none");
		$("#next").css("display","block");
	})
	$("#cut").click(function(){

		$("#front").css("display","block");
		$("#next").css("display","none");
	})
	$(".key").on("click",function(){
		if ($(this).is("#btn1")){
			$("#in").val(($("#in").val()+"1"));
		}
		else if ($(this).is("#btn2")){
			$("#in").val(($("#in").val()+"2"));
		}
		else if ($(this).is("#btn3")){
			$("#in").val(($("#in").val()+"3"));
		}
		else if ($(this).is("#btn4")){
		$("#in").val(($("#in").val()+"4"));
		}
		else if ($(this).is("#btn5")){
		    $("#in").val(($("#in").val()+"5"));
		}
		else if ($(this).is("#btn6")){
		    $("#in").val(($("#in").val()+"6"));
		}
		else if ($(this).is("#btn7")){
		    $("#in").val(($("#in").val()+"7"));
		}
		else if ($(this).is("#btn8")){
		    $("#in").val(($("#in").val()+"8"));
		}
		else if ($(this).is("#btn9")){
		    $("#in").val(($("#in").val()+"9"));
		}

		else if ($(this).is("#btn11")){
		    $("#in").val(($("#in").val()+"*"));
		}
		else if ($(this).is("#btn0")){
		    $("#in").val(($("#in").val()+"0"));
		}
		else if ($(this).is("#btn12")){
		    $("#in").val(($("#in").val()+"#"));
		}
	})
	$("#callbtn").click(function(){
		$("#front").css("display","none");
		$("#next").css("display","block");
		$("#usrname").css("display","none");
			$("#usrno").css("display","block");
		$("#usrno").text($("#in").val());
		}) 
	$("#").click(function(){

	})

});