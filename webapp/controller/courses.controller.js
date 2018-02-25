sap.ui.define(['jquery.sap.global', 'sap/ui/core/mvc/Controller', 'sap/ui/base/Event'],
	function(jQuery, Controller, MessageToast) {
		"use strict";

		var PageController = Controller.extend("progresstoolsTeam4progresstools.controller.courses", {
			press1: function() {
				sap.m.URLHelper.redirect("https://www.coursera.org/learn/construction-project-management", true);
			},
			press2: function() {
				sap.m.URLHelper.redirect("https://www.opencolleges.edu.au/courses/building-and-construction/certificate-i-construction", true);
			},
			press3: function() {
				sap.m.URLHelper.redirect("https://www.opencolleges.edu.au/courses/building-and-construction/certificate-ii-construction-pathways",
					true);
			},
			press4: function(evt) {
				sap.m.URLHelper.redirect("https://www.openpolytechnic.ac.nz/qualifications-and-courses/construction/", true);
			},
			press5: function(evt) {
				sap.m.URLHelper.redirect("https://www.myskills.gov.au/courses/details?Code=CPP30411", true);
			},
			press6: function(evt) {
				sap.m.URLHelper.redirect("https://security-training-uk.co.uk/cscs-green-card-course/", true);
			}

		});

		return PageController;
	});