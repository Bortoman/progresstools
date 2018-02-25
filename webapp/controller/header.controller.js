sap.ui.define([
	'jquery.sap.global',
	'sap/m/MessageToast',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter',
	'sap/ui/model/json/JSONModel',
	'sap/m/CheckBox'
], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel, CheckBox) {
	"use strict";
	var CController = Controller.extend("progresstoolsTeam4progresstools.controller.header", {
		onHomePress: function(oEvent) {
			var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("home");
		},
		onSelectTab: function(oEvent) {
			var key = oEvent.getParameter("selectedKey");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if (key === '1') {
				oRouter.navTo("courses");
			} else if (key === '0') {
				oRouter.navTo("home");
			} else if (key === '2'){
				oRouter.navTo("progressionplan");
			}
		},
		goToEdit: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("profile");
		}
	});
	return CController;

});