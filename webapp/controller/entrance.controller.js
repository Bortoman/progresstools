sap.ui.define([
	'jquery.sap.global',
	'sap/m/MessageToast',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter',
	'sap/ui/model/json/JSONModel',
	'sap/m/Image'
], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel, Image) {
	"use strict";

	var CController = Controller.extend("progresstoolsTeam4progresstools.controller.entrance", {
		onInit: function() {
			
		},
		press: function(oEvent) {
			
			var nombre = oEvent.getSource().mProperties.text;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if(nombre === "Employee"){
				oRouter.navTo("header");
			}
			else{
				oRouter.navTo("company");
			}
		}
		
	});
	return CController;
});