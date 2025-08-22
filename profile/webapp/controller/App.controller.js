sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "profile/model/models"
], (Controller,JSONModel,models) => {
    "use strict";

    return Controller.extend("profile.controller.App", {
        onInit() {

            this.getView().setModel(models.createProfileModel(), "oProfileModel");

        },
        _getResourceBundle: function (key, p1) {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(key, [p1 || null]);
        },
        goToEmail: function () {
            const oViewModel = this.getView().getModel("oProfileModel").getData();
            console.log(oViewModel);
            sap.m.URLHelper.triggerEmail(oViewModel["eMail"],"Subject","Content");
        },
        goToGitHub: function () {
            const oViewModel = this.getView().getModel("oProfileModel").getData();
            console.log(oViewModel);
            sap.m.URLHelper.redirect(oViewModel["gitHubURL"],true);
        },
        goToAboutMe: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteAboutMe");
        },
        goToLaboral: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteLaboral", {company:"ArTech"});
        }
    });
});