define(["jquery"],function($){
     function widget(){
     	this.boundingbox=null;
     }
     widget.prototype={
     	on:function(type,handler){
     		if (typeof this.handlers[type]=="undefined") {
     			this.handlers[type]=[];
     		};
     		this.handlers[type].push(handler);
     		return this;
     	},
     	fire:function(type,data){
     		if (this.handlers[type] instanceof Array) {
     			var handlers=this.handlers[type];
     			for(var i=0;i<handlers.length;i++){
     				handlers[i](data);
     			}
     		};
     	},
     	renderUI:function(){},
     	bindUI:function(){},
     	syncUI:function(){},
     	render:function(){
     		this.renderUI();
     		this.handlers={};
     		this.bindUI();
     		this.syncUI();
     	},
     	destructor:function(){},
     	destroy:function(){
     		this.destructor();
     		this.boundingbox.off();
     		this.boundingbox.remove();
     	}
     }
     return {
     	widget:widget
     }
})