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
             let companyId = oEvent.getParameter("arguments").company;
             console.log(companyId);
            //  let oText = new Text({ id:"companyName", text:companyId });
            //  this.byId("VBox").addItem(oText);
            this.byId("companyText").setText(companyId);
        },
        onNavBack: function(oEvent) {
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            // console.log(sPreviousHash);
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getOwnerComponent().getRouter().navTo("RouteApp", {}, true);
                // this.getRouter().navTo("app", {}, true);
            }
        }
    });
});