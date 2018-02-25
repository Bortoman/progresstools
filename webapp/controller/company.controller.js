sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	'jquery.sap.global'
], function(Controller, MessageToast, jQuery) {
	"use strict";

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var expand = false;
	var vista;
	var vistaflex;
	var vistaflexx;
	
	var cambioVista=1000;

	return Controller.extend("progresstoolsTeam4progresstools.controller.company", {

		onAfterRendering: function() {
			vista = this.getView().byId('sideNavigation');
			vistaflex = this.getView().byId('flex');
			vistaflexx = this.getView().byId('flexx');
			
			$(window).resize(function() {

				if ($(this).width() <= cambioVista) {
					expand=false;
					vista.setExpanded(expand);
				}

			});	
			vista.setExpanded(true);

			$(window).on('resize', function() {
				var win = $(this); //this = window
				if (win.width() >= cambioVista) {
					expand = true;
					vista.setExpanded(expand);
					vistaflex.setDirection("Row");
					vistaflex.addStyleClass("sapUiTinyMargin");
					vistaflex.setAlignItems("Center");
					vistaflexx.setAlignItems("Center");
					vistaflexx.setDirection("Row");
					vistaflexx.addStyleClass("sapUiTinyMargin");
				}
				if (win.width() < cambioVista) {
					vistaflex.setDirection("Column");
					vistaflex.addStyleClass("sapUiTinyMargin");
					vistaflexx.setDirection("Column");
					vistaflexx.addStyleClass("sapUiTinyMargin");
					vistaflex.setAlignItems("Stretch");
					vistaflexx.setAlignItems("Stretch");
					expand = false;
					vista.setExpanded(expand);
				}
			});

		},
		changePage: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("evaluation");
		},

		changeValues: function(oEvent) {

			var newValue;
			for (var x in this.getView().byId('2c').getPoints()) {
				newValue = getRandomInt(-50, 50);
				this.getView().byId('2c').getPoints()[x].setValue(newValue);
				newValue = getRandomInt(-50, 50);
				this.getView().byId('5c').getPoints()[x].setValue(newValue);
			}
			newValue = getRandomInt(-100, 100);
			this.getView().byId('1c').setValue1(newValue);
			this.getView().byId('1c').setDisplayValue1(newValue);
			newValue = getRandomInt(-100, 100);
			this.getView().byId('1c').setValue2(newValue);
			this.getView().byId('1c').setDisplayValue2(newValue);

			newValue = getRandomInt(-100, 100);
			this.getView().byId('11c').setValue1(newValue);
			this.getView().byId('11c').setDisplayValue1(newValue);
			newValue = getRandomInt(-100, 100);
			this.getView().byId('11c').setValue2(newValue);
			this.getView().byId('11c').setDisplayValue2(newValue);

			newValue = getRandomInt(0, 100);
			this.getView().byId('3c').setFraction(newValue);
			this.getView().byId('3c').setFractionLabel(newValue);

			newValue = getRandomInt(-100, 100);
			this.getView().byId('6c').setValue1(newValue);
			this.getView().byId('6c').setDisplayValue1(newValue);
			newValue = getRandomInt(-100, 100);
			this.getView().byId('6c').setValue2(newValue);
			this.getView().byId('6c').setDisplayValue2(newValue);

			for (var x in this.getView().byId('4c').getData()) {
				newValue = getRandomInt(-50, 50);
				this.getView().byId('4c').getData()[x].setValue(newValue);
			}

			sap.m.MessageToast.show(oEvent.getParameter("item").getParent().getText() + "   -   " + oEvent.getParameter("item").getText(), {});

		},
	});
});