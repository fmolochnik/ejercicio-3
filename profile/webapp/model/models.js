sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
        createProfileModel: function () {

            let oProfileModel = {
                "photoURL": "https://avatars.githubusercontent.com/u/41380386?v=4",
                "firstName": "Fernando",
                "lastName": "López Molochnik", 
                "eMail": "fmolochnik@artech-consulting.com", 
                "gitHub": "fmolochnik",
                "gitHubImage": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                "gitHubURL": "https://github.com/fmolochnik"
            };

            return new JSONModel(oProfileModel);

        }
    };

});