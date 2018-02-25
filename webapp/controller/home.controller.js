sap.ui.define([
	'jquery.sap.global',
	'sap/m/MessageToast',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter',
	'sap/ui/model/json/JSONModel',
	'sap/m/CheckBox',
	'sap/m/MessageBox',
	'sap/m/TextArea',
	'sap/m/Dialog',
	'sap/m/Button'
], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel, CheckBox, MessageBox, TextArea, Dialog, Button) {
	"use strict";
	var queryModel = null;
	var CController = Controller.extend("progresstoolsTeam4progresstools.controller.home", {

		onInit: function() {
			this.getSplitAppObj().setHomeIcon({
				'phone': 'phone-icon.png',
				'tablet': 'tablet-icon.png',
				'icon': 'desktop.ico'
			});

			// create model
			var oModel = new JSONModel();
			oModel.setData({
				startDate: new Date("2017", "0", "08", "8", "0"),
				people: [{
					name: "John Miller",
					appointments: [{
						start: new Date("2016", "10", "15", "10", "0"),
						end: new Date("2016", "11", "25", "12", "0"),
						title: "Team collaboration",
						info: "room 1",
						type: "Type01",
						pic: "sap-icon://sap-ui5",
						tentative: false
					}, {
						start: new Date("2016", "09", "13", "9", "0"),
						end: new Date("2016", "01", "09", "10", "0"),
						title: "Reminder",
						type: "Type06"
					}, {
						start: new Date("2016", "07", "10", "0", "0"),
						end: new Date("2016", "09", "16", "23", "59"),
						title: "Vacation",
						info: "out of office",
						type: "Type04",
						tentative: false
					}, {
						start: new Date("2016", "07", "1", "0", "0"),
						end: new Date("2016", "09", "31", "23", "59"),
						title: "New quarter",
						type: "Type10",
						tentative: false
					}, {
						start: new Date("2017", "0", "03", "0", "01"),
						end: new Date("2017", "0", "04", "23", "59"),
						title: "Workshop",
						info: "regular",
						type: "Type07",
						pic: "sap-icon://sap-ui5",
						tentative: false
					}, {
						start: new Date("2017", "0", "05", "08", "30"),
						end: new Date("2017", "0", "05", "09", "30"),
						title: "Meet Donna Moore",
						type: "Type02",
						tentative: false
					}, {
						start: new Date("2017", "0", "08", "10", "0"),
						end: new Date("2017", "0", "08", "12", "0"),
						title: "Team meeting",
						info: "room 1",
						type: "Type01",
						pic: "sap-icon://sap-ui5",
						tentative: true
					}, {
						start: new Date("2017", "0", "09", "0", "0"),
						end: new Date("2017", "0", "09", "23", "59"),
						title: "Vacation",
						info: "out of office",
						type: "Type02",
						tentative: false
					}, {
						start: new Date("2017", "0", "11", "0", "0"),
						end: new Date("2017", "0", "12", "23", "59"),
						title: "Education",
						info: "",
						type: "Type03",
						tentative: false
					}, {
						start: new Date("2017", "0", "16", "00", "30"),
						end: new Date("2017", "0", "16", "23", "30"),
						title: "New Product",
						info: "room 105",
						type: "Type04",
						tentative: true
					}, {
						start: new Date("2017", "0", "18", "11", "30"),
						end: new Date("2017", "0", "18", "13", "30"),
						title: "Lunch",
						info: "canteen",
						type: "Type03",
						tentative: true
					}, {
						start: new Date("2017", "0", "20", "11", "30"),
						end: new Date("2017", "0", "20", "13", "30"),
						title: "Lunch",
						info: "canteen",
						type: "Type03",
						tentative: true
					}, {
						start: new Date("2017", "0", "18", "0", "01"),
						end: new Date("2017", "0", "19", "23", "59"),
						title: "Working out of the building",
						type: "Type07",
						pic: "sap-icon://sap-ui5",
						tentative: false
					}, {
						start: new Date("2017", "0", "23", "08", "00"),
						end: new Date("2017", "0", "24", "18", "30"),
						title: "Discussion of the plan",
						info: "Online meeting",
						type: "Type04",
						tentative: false
					}, {
						start: new Date("2017", "0", "25", "0", "01"),
						end: new Date("2017", "0", "26", "23", "59"),
						title: "Workshop",
						info: "regular",
						type: "Type07",
						pic: "sap-icon://sap-ui5",
						tentative: false
					}, {
						start: new Date("2017", "2", "30", "10", "0"),
						end: new Date("2017", "4", "33", "12", "0"),
						title: "Working out of the building",
						type: "Type07",
						pic: "sap-icon://sap-ui5",
						tentative: false
					}, {
						start: new Date("2017", "8", "1", "00", "30"),
						end: new Date("2017", "10", "15", "23", "30"),
						title: "Development of a new Product",
						info: "room 207",
						type: "Type03",
						tentative: true
					}, {
						start: new Date("2017", "1", "15", "10", "0"),
						end: new Date("2017", "2", "25", "12", "0"),
						title: "Team collaboration",
						info: "room 1",
						type: "Type01",
						pic: "sap-icon://sap-ui5",
						tentative: false
					}, {
						start: new Date("2017", "2", "13", "9", "0"),
						end: new Date("2017", "3", "09", "10", "0"),
						title: "Reminder",
						type: "Type06"
					}, {
						start: new Date("2017", "03", "10", "0", "0"),
						end: new Date("2017", "05", "16", "23", "59"),
						title: "Vacation",
						info: "out of office",
						type: "Type04",
						tentative: false
					}, {
						start: new Date("2017", "07", "1", "0", "0"),
						end: new Date("2017", "09", "31", "23", "59"),
						title: "New quarter",
						type: "Type10",
						tentative: false
					}],
					headers: [{
						start: new Date("2017", "0", "08", "0", "0"),
						end: new Date("2017", "0", "08", "23", "59"),
						title: "National holiday",
						type: "Type04"
					}, {
						start: new Date("2017", "0", "10", "0", "0"),
						end: new Date("2017", "0", "10", "23", "59"),
						title: "Birthday",
						type: "Type06"
					}, {
						start: new Date("2017", "0", "17", "0", "0"),
						end: new Date("2017", "0", "17", "23", "59"),
						title: "Reminder",
						type: "Type06"
					}]
				}]
			});
			queryModel = oModel;
			this.getView().setModel(oModel);

		},

		handleIntervalSelect: function(oEvent) {
			var vb = this.getView().byId("checkboxes");
			vb.removeAllItems();
			var sd = oEvent.getParameter("startDate");
			var stringCompare = sd.getDate() + sd.getMonth() + sd.getYear();
			var appointments = queryModel.oData.people[0].appointments;
			var dailyTask = [];
			for (var a in appointments) {
				var s = appointments[a].start;
				var string = s.getDate() + s.getMonth() + s.getYear();
				if (string === stringCompare) {
					//do stuff
					var ch = new CheckBox();
					ch.setText(appointments[a].title);
					vb.addItem(ch);
				}
			}
			//var nModel = new JSONModel();
			//nModel.setData(JSON.stringify(dailyTask));
			//this.getView().setModel(nModel, "nModel");
		},

		onOrientationChange: function(oEvent) {
			var bLandscapeOrientation = oEvent.getParameter("landscape"),
				sMsg = "Orientation now is: " + (bLandscapeOrientation ? "Landscape" : "Portrait");
			MessageToast.show(sMsg, {
				duration: 5000
			});
		},

		onPressNavToDetail: function(oEvent) {
			this.getSplitAppObj().to(this.createId("detailDetail"));
		},

		onPressDetailBack: function() {
			this.getSplitAppObj().backDetail();
		},

		onPressMasterBack: function() {
			this.getSplitAppObj().backMaster();
		},

		onPressGoToMaster: function() {
			this.getSplitAppObj().toDetail(this.getSplitAppObj("master1"));
		},

		onListItemPress: function(oEvent) {
			var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

			this.getSplitAppObj().toDetail(this.createId(sToPageId));
		},

		onPressModeBtn: function(oEvent) {
			var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

			this.getSplitAppObj().setMode(sSplitAppMode);
			MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, {
				duration: 5000
			});
		},

		getSplitAppObj: function() {
			var result = this.byId("SplitAppDemo");
			if (!result) {
				jQuery.sap.log.info("SplitApp object can't be found");
			}
			return result;
		},
		onMessageSuccessDialogPress: function(oEvent) {
			var dialog = new Dialog({
				title: 'Send a Message',
				type: 'Message',
				content: new TextArea({
					growing: true
				}),
				beginButton: new Button({
					text: 'SEND',
					press: function() {
						dialog.close();
						MessageToast.show("Message Sent Correctly!");
					}
				}),
				afterClose: function() {
					dialog.destroy();

				}
			});

			dialog.open();
		},
		press: function(oEvent) {

		}

	});

	return CController;

});