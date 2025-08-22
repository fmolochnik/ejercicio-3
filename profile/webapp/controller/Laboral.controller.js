sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/Text"
], (Controller,History,Text) => {
    "use strict";

    return Controller.extend("profile.controller.Laboral", {
        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteLaboral").attachPatternMatched(this._onPatternMatch,this);
        },
        _onPatternMatch: function (oEvent) {
            let sCompany = oEvent.getParameter("arguments").company;
            this.byId("companyText").setText(sCompany);
        },
        onNavBack: function(oEvent) {
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getOwnerComponent().getRouter().navTo("RouteApp", {}, true);
            }
        }
    });
});