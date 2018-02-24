sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("progresstoolsTeam4progresstools.controller.mainlayout", {
		onUserNamePress: function(event) {
			sap.m.MessageToast.show("This message should appear in the message toast", {
			});
		}
	});
});