sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	'jquery.sap.global'
], function(Controller, MessageToast, jQuery) {
	"use strict";
	
	var boi;

	
	return Controller.extend("progresstoolsTeam4progresstools.controller.profile", {
		onAfterRendering: function(){
			boi = this.getView().byId("box_a");
			$(window).resize(function(){
				if($(this).width()<=1000){
					boi.setDirection("Column");
				}
			});
			$(window).on('resize',function(){
				var win = $(this);
				if(win.width()>=1000){
					boi.setDirection("Row");
				}
				if(win.width()<1000){
					boi.setDirection("Column");
				}
				
			}); 
			
		},
		onUserNamePress: function(event) {
			sap.m.MessageToast.show("This message should appear in the message toast", {
			});
		
		}
		
	});
});