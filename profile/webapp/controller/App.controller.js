sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("profile.controller.App", {
        onInit() {
            let oModel = [];

            const refactor = (label, value) => {
                return { label, value };
            };

            oModel.push(refactor(this._getResourceBundle("firstNameLabel"),"Fernando"));
            oModel.push(refactor(this._getResourceBundle("lastNameLabel"),"López Molochnik"));
            oModel.push(refactor(this._getResourceBundle("eMail"),"fernandolopezmolochnik@gmail.com"));
            oModel.push(refactor(this._getResourceBundle("gitHub"),"fmolochnik"));

            console.log(oModel);
            
            this.getView().setModel(new JSONModel(oModel), "oModel");
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