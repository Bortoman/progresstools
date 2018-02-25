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

	var CController = Controller.extend("progresstoolsTeam4progresstools.controller.progressionplan", {
		onInit: function() {
			var vb= this.getView().byId("progress");
			vb.removeAllItems();
			var image= new Image({
				src: "/webapp/images/Nivel1.png"
			});
			image.addStyleClass("progressimg");
			vb.addItem(image);
			
		}
		
	});
	return CController;
});