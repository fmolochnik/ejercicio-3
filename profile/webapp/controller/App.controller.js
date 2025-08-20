sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("profile.controller.App", {
        onInit() {
            
            this._setupTableModel();
            this._setupFormModel();

        },
        _setupTableModel: function () {

            let oTableModel = [];

            const refactor = (label, value) => {
                return { label, value };
            };

            oTableModel.push(refactor(this._getResourceBundle("firstNameLabel"),"Fernando"));
            oTableModel.push(refactor(this._getResourceBundle("lastNameLabel"),"López Molochnik"));
            oTableModel.push(refactor(this._getResourceBundle("eMailLabel"),"fernandolopezmolochnik@gmail.com"));
            oTableModel.push(refactor(this._getResourceBundle("gitHubLabel"),"fmolochnik"));
            
            console.log(oTableModel);

            let oJM = new JSONModel(oTableModel);

            console.log(oJM);

            this.getView().setModel(new JSONModel(oTableModel), "oTableModel");

        },
        _setupFormModel: function () {

            let oFormModel = "";

            console.log("oFormModel 1");
            console.log(oFormModel);
            const refactor2 = (firstName, lastName, eMail, gitHub) => {
                return { firstName, lastName, eMail, gitHub };
            };

            oFormModel = refactor2(
                "Fernando",
                "López Molochnik",
                "fernandolopezmolochnik@gmail.com",
                "fmolochnik");

            console.log("oFormModel 2");
            console.log(oFormModel);

            let oJM = new JSONModel(oFormModel);

            console.log(oJM);

            this.getView().setModel(new JSONModel(oFormModel), "oFormModel");


        },
        _getResourceBundle: function (key, p1) {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(key, [p1 || null]);
        },
        goToPersonal: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RoutePersonal");
        },
        goToLaboral: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteLaboral", {company:"ArTech"});
        }
    });
});