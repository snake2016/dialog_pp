require(['jquery','dialog'],function($,d){
	var alertDialog=new d.dialog();
	$('#btn').on('click',function(){
	 	alertDialog.confirm({
	 		width:400,
	 		height:300,
	 		content:"自定义内容。。。",
	 		type:"confirm",
			d_confirmBtn_event:function(){
				var alertDialog1=new d.dialog();
				alertDialog1.alert({
					width:400,
			 		height:300,
			 		content:"自定义alert内容。。。",
			 		type:"alert",
			 		 d_alertBtn_event:function(){
			 		 	alert('alert ok');
			 		 }
				})
			}
	 	});
		// alertDialog.prompt({
		// 	width:500,
	 // 		height:260,
	 // 		content:'<input type="text" maxlength="10" id="inp"></input>',
	 // 		type:"prompt",
	 // 		d_promptBtn_event:function(){
	 // 			alert('the value is：'+$('#inp').val());
	 // 		}
		// })
	})
})