define(["jquery","jquery-ui","widget"],function($,$u,w){
	function dialog(){
		this.cnf={
			width:500,
			height:300,
			content:"默认内容",
			// title:"默认标题",
			type:"alert",
			alertBtnName:"alert确定",
			confirmBtnName:"confirm确定",
			confirmcancelName:"confirm取消",
			promptBtnName:"prompt确定",
			promptcancelName:"prompt取消",
			hasmask:true,
			hascloseBtn:false,
			d_closeBtn_event:function(){},
			d_alertBtn_event:function(){},
			d_confirmBtn_event:function(){},
			d_confirmcancel_event:function(){},
			d_promptBtn_event:function(){},
			d_promptcancel_event:function(){},
			skiName:'red'
		}
	}
	dialog.prototype=$.extend({},new w.widget(),{
		renderUI:function(){
			var footercotent;
			switch(this.cnf.type){
				case "alert":
				       footercotent='<button class="d_btn d_alertBtn" id="d_alertBtn">'+this.cnf.alertBtnName+'</button>';
				break;
				case "confirm":
				       footercotent='<button class="d_btn d_confirmBtn" id="d_confirmBtn">'+this.cnf.confirmBtnName+'</button><button class="d_btn d_confirmBtn" id="d_confirmcancel">'+this.cnf.confirmcancelName+'</button>';
				break;
				case "prompt":
				      footercotent='<button class="d_btn d_promptBtn" id="d_promptBtn">'+this.cnf.promptBtnName+'</button><button class="d_btn d_promptBtn" id="d_promptcancel">'+this.cnf.promptcancelName+'</button>';
				break;
			}
			this.boundingbox=$('<div class="d_bouningbox">'+
							// '<div class="d_title">'+this.cnf.title+'</div>'+
							'<div class="d_content">'+this.cnf.content+'</div>'+
							'<div class="d_footer">'+footercotent+'</div>'+
						'</div>')
			if (this.cnf.hasmask) {
				this._mask=$('<div class="d_mask"></div>');
				this._mask.appendTo('body');
			};
			if (this.cnf.hascloseBtn) {
				this.boundingbox.append('<div class="d_closeBtn">X</div>');
			};
			this.boundingbox.appendTo('body');
		},
		bindUI:function(){
			var that=this;
			this.boundingbox.delegate('.d_btn','click',function(){
				var id=$(this).attr('id');
				that.fire(id+'_event');
				that.destroy();
			})

			// if (this.cnf.d_closeBtn_event) {
			// 	this.on('d_closeBtn_event',this.cnf.d_closeBtn_event)
			// };
			if (this.cnf.d_alertBtn_event) {
				this.on('d_alertBtn_event',this.cnf.d_alertBtn_event)
			};
			if (this.cnf.d_confirmBtn_event) {
				this.on('d_confirmBtn_event',this.cnf.d_confirmBtn_event)
			};
			if (this.cnf.d_confirmcancel_event) {
				this.on('d_confirmcancel_event',this.cnf.d_confirmcancel_event)
			};
			if (this.cnf.d_promptBtn_event) {
				this.on('d_promptBtn_event',this.cnf.d_promptBtn_event)
			};
			if (this.d_promptcancel_event) {
				this.on('d_promptcancel_event',this.cnf.d_promptcancel_event)
			};
		},
		syncUI:function(){
			this.boundingbox.css({
				width:this.cnf.width+'px',
				height:this.cnf.height+'px',
				left:(this.cnf.x ||(window.innerWidth-this.cnf.width)/2)+'px',
				top:(this.cnf.y||(window.innerHeight-this.cnf.height)/2)+'px'
			})
			if (this.cnf.skiName) {
				this.boundingbox.addClass(this.cnf.skiName)
			};
		},
		destructor:function(){
			this._mask && this._mask.remove();
		},
		alert:function(conf){
			$.extend(this.cnf,conf);
			this.render();
			return this;
		},
		confirm:function(conf){
			$.extend(this.cnf,conf);
			this.render();
			return this;
		},
		prompt:function(conf){
			$.extend(this.cnf,conf);
			this.render();
			return this;
		}
	})
	return {
		dialog:dialog
	}
})