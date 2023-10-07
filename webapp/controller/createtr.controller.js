// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
], function (Controller, History, MessageBox) {

    function _onObjectMatched(oEvent) {

        // Seteo de modelos...

        var oView = this.getView();

        // Tipos de Viajes ...

        var ojsonTripType = new sap.ui.model.json.JSONModel();
        ojsonTripType.loadData("./model/json/TipoViajes.json", false);
        oView.setModel(ojsonTripType, "jsonTripType");

        // Motivos de viajes ...

        var ojsonReasonTripKey = new sap.ui.model.json.JSONModel();
        ojsonReasonTripKey.loadData("./model/json/TripReason.json", false);
        oView.setModel(ojsonReasonTripKey, "ojsonReasonTripKey");

        // Tipo de imputacion ...

        var ojsonTipoImputacionKey = new sap.ui.model.json.JSONModel();
        ojsonTipoImputacionKey.loadData("./model/json/TipoImputacion.json", false);
        oView.setModel(ojsonTipoImputacionKey, "ojsonTipoImputacionKey");

        // Valores Tipo de imputacion ...

        var ojsonValTipoImputacionKey = new sap.ui.model.json.JSONModel();
        ojsonValTipoImputacionKey.loadData("./model/json/ValoresTipoImputacion.json", false);
        oView.setModel(ojsonValTipoImputacionKey, "ojsonValTipoImputacionKey");

        // Valores Agencia de Viajes...

        var ojsonAgenciaViajesKey = new sap.ui.model.json.JSONModel();
        ojsonAgenciaViajesKey.loadData("./model/json/AgenciaViajes.json", false);
        oView.setModel(ojsonAgenciaViajesKey, "ojsonAgenciaViajesKey");

        // Paises ...

        var ojsonPaisesKey = new sap.ui.model.json.JSONModel();
        ojsonPaisesKey.loadData("./model/json/Paises.json", false);
        oView.setModel(ojsonPaisesKey, "ojsonPaisesKey");

        // Regiones ...

        var ojsonRegionesKey = new sap.ui.model.json.JSONModel();
        ojsonRegionesKey.loadData("./model/json/Regiones.json", false);
        oView.setModel(ojsonRegionesKey, "ojsonRegionesKey");

        // Destinations ...

        var ojsonDestionationsKey = new sap.ui.model.json.JSONModel();

        ojsonDestionationsKey.setData({

            "ListDestinations": [
                {

                    "Pais": "00007",
                    "Region": "00001",
                    "Ciudad": "Guatire",
                    "Fecha_Ini": new Date(),
                    "Hora_Ini": "18:25",
                    "FVuelo": "",
                    "Fhotel": "",
                    "FAuto": "",
                    "Hotel": {
                        "llegada": new Date(),
                        "salida": new Date(),
                        "Moneda": "VEF",
                        "Monto": 0.00,
                        "Localizador": "",
                        "Comentarios": ""
                    },

                    "Auto": {

                        "llegada": new Date(),
                        "salida": new Date(),
                        "Moneda": "VEF",
                        "Monto": 0.00,
                        "Localizador": "",
                        "Comentarios": ""

                    },

                    "Vuelo": {
                        "llegada": new Date(),
                        "salida": new Date(),
                        "Moneda": "VEF",
                        "Monto": 0.00,
                        "Localizador": "",
                        "Comentarios": ""
                    },

                },
                {
                    "Pais": "00007",
                    "Region": "00003",
                    "Ciudad": "Bronx",
                    "Fecha_Ini": new Date(),
                    "Hora_Ini": "17:25",
                    "FVuelo": "",
                    "Fhotel": "",
                    "FAuto": "",
                    "Hotel": {

                        "llegada": new Date(),
                        "salida": new Date(),
                        "Moneda": "VEF",
                        "Monto": 0.00,
                        "Localizador": "",
                        "Comentarios": ""

                    },

                    "Auto": {

                        "llegada": new Date(),
                        "salida": new Date(),
                        "Moneda": "VEF",
                        "Monto": 0.00,
                        "Localizador": "",
                        "Comentarios": ""

                    },

                    "Vuelo": {
                        "llegada": new Date(),
                        "salida": new Date(),
                        "Moneda": "VEF",
                        "Monto": 0.00,
                        "Localizador": "",
                        "Comentarios": ""
                    },

                }

            ]
        });

        //        var ojsonDestionationsKey = new sap.ui.model.json.JSONModel();
        //          ojsonDestionationsKey.loadData("./localService/mockdata/Destinations.json", false);
        oView.setModel(ojsonDestionationsKey, "ojsonDestionationsKey");

        var ojsonAdvancesKey = new sap.ui.model.json.JSONModel();

        ojsonAdvancesKey.setData({

            "ListAdvances": [
                {

                    "Pais": "00007",
                    "Region": "00001",
                    "Concepto": "",
                    "Cantidad": 0,
                    "Importe": 0.00,
                    "Moneda": "VEF",
                    "Total": 0.00,
                    "InfoAdi": ""

                }

            ]
        });

        oView.setModel(ojsonAdvancesKey, "ojsonAdvancesKey");

        // Conceptos ...

        var ojsonConceptosKey = new sap.ui.model.json.JSONModel();
        ojsonConceptosKey.loadData("./model/json/Conceptos.json", false);
        oView.setModel(ojsonConceptosKey, "ojsonConceptosKey");


        // Monedas...

        var ojsonMonedasKey = new sap.ui.model.json.JSONModel();
        ojsonMonedasKey.loadData("./model/json/Monedas.json", false);
        oView.setModel(ojsonMonedasKey, "ojsonMonedasKey");


    }

    return Controller.extend("sybvensapui6.gestiondeviajes3.controller.createtr", {

        onInit: function () {

            this._wizard = this.byId("CreateTRWizard");
            this._oNavContainer = this.byId("wizardNavContainer");
            this._oWizardContentPage = this.byId("wizardContentPage");
            this._wizard = this.byId("CreateTRWizard");

            // Seteo de modelos...

            var oView = this.getView();

            // Tipos de Viajes ...

            var ojsonTripType = new sap.ui.model.json.JSONModel();
            ojsonTripType.loadData("./model/json/TipoViajes.json", false);
            oView.setModel(ojsonTripType, "jsonTripType");

            // Motivos de viajes ...

            var ojsonReasonTripKey = new sap.ui.model.json.JSONModel();
            ojsonReasonTripKey.loadData("./model/json/TripReason.json", false);
            oView.setModel(ojsonReasonTripKey, "ojsonReasonTripKey");

            // Tipo de imputacion ...

            var ojsonTipoImputacionKey = new sap.ui.model.json.JSONModel();
            ojsonTipoImputacionKey.loadData("./model/json/TipoImputacion.json", false);
            oView.setModel(ojsonTipoImputacionKey, "ojsonTipoImputacionKey");

            // Valores Tipo de imputacion ...

            var ojsonValTipoImputacionKey = new sap.ui.model.json.JSONModel();
            ojsonValTipoImputacionKey.loadData("./model/json/ValoresTipoImputacion.json", false);
            oView.setModel(ojsonValTipoImputacionKey, "ojsonValTipoImputacionKey");

            // Valores Agencia de Viajes...

            var ojsonAgenciaViajesKey = new sap.ui.model.json.JSONModel();
            ojsonAgenciaViajesKey.loadData("./model/json/AgenciaViajes.json", false);
            oView.setModel(ojsonAgenciaViajesKey, "ojsonAgenciaViajesKey");

            // Paises ...

            var ojsonPaisesKey = new sap.ui.model.json.JSONModel();
            ojsonPaisesKey.loadData("./model/json/Paises.json", false);
            oView.setModel(ojsonPaisesKey, "ojsonPaisesKey");

            // Regiones ...

            var ojsonRegionesKey = new sap.ui.model.json.JSONModel();
            ojsonRegionesKey.loadData("./model/json/Regiones.json", false);
            oView.setModel(ojsonRegionesKey, "ojsonRegionesKey");

            // Destinations ...

            var ojsonDestionationsKey = new sap.ui.model.json.JSONModel();

            ojsonDestionationsKey.setData({

                "ListDestinations": [
                    {

                        "Pais": "00007",
                        "Region": "00001",
                        "Ciudad": "Guatire",
                        "Fecha_Ini": new Date(),
                        "Hora_Ini": "18:25",
                        "FVuelo": "",
                        "Fhotel": "",
                        "FAuto": "",
                        "Hotel": {
                            "llegada": new Date(),
                            "salida": new Date(),
                            "Moneda": "VEF",
                            "Monto": 0.00,
                            "Localizador": "",
                            "Comentarios": ""
                        },

                        "Auto": {

                            "llegada": new Date(),
                            "salida": new Date(),
                            "Moneda": "VEF",
                            "Monto": 0.00,
                            "Localizador": "",
                            "Comentarios": ""

                        }

                    },
                    {
                        "Pais": "00007",
                        "Region": "00003",
                        "Ciudad": "Bronx",
                        "Fecha_Ini": new Date(),
                        "Hora_Ini": "17:25",
                        "FVuelo": "",
                        "Fhotel": "",
                        "FAuto": "",
                        "Hotel": {

                            "llegada": new Date(),
                            "salida": new Date(),
                            "Moneda": "VEF",
                            "Monto": 0.00,
                            "Localizador": "",
                            "Comentarios": ""

                        },

                        "Auto": {

                            "llegada": new Date(),
                            "salida": new Date(),
                            "Moneda": "VEF",
                            "Monto": 0.00,
                            "Localizador": "",
                            "Comentarios": ""

                        }

                    }

                ]
            });

            //        var ojsonDestionationsKey = new sap.ui.model.json.JSONModel();
            //          ojsonDestionationsKey.loadData("./localService/mockdata/Destinations.json", false);
            oView.setModel(ojsonDestionationsKey, "ojsonDestionationsKey");

            var ojsonAdvancesKey = new sap.ui.model.json.JSONModel();

            ojsonAdvancesKey.setData({

                "ListAdvances": [
                    {

                        "Pais": "00007",
                        "Region": "00001",
                        "Concepto": "",
                        "Cantidad": 0,
                        "Importe": 0.00,
                        "Moneda": "VEF",
                        "Total": 0.00,
                        "InfoAdi": ""

                    }

                ]
            });

            oView.setModel(ojsonAdvancesKey, "ojsonAdvancesKey");

            // Conceptos ...

            var ojsonConceptosKey = new sap.ui.model.json.JSONModel();
            ojsonConceptosKey.loadData("./model/json/Conceptos.json", false);
            oView.setModel(ojsonConceptosKey, "ojsonConceptosKey");


            // Monedas...

            var ojsonMonedasKey = new sap.ui.model.json.JSONModel();
            ojsonMonedasKey.loadData("./model/json/Monedas.json", false);
            oView.setModel(ojsonMonedasKey, "ojsonMonedasKey");


            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("RoutecreateTR").attachPatternMatched(_onObjectMatched, this);

        },


        handleWizardCancel: function (oEvent) {

            this.getView().getModel("jsonTripType").setProperty("/TripTypeKey", "");
            this.getView().getModel("ojsonReasonTripKey").setProperty("/ReasonTripKey", "");
            this.getView().getModel("ojsonTipoImputacionKey").setProperty("/TipoImputacionKey", "");
            this.getView().getModel("ojsonValTipoImputacionKey").setProperty("/ValoresTipoImputacionKey", "");
            this.getView().getModel("ojsonAgenciaViajesKey").setProperty("/AgenciaViajesKey", "");
            this.getView().getModel("ojsonPaisesKey").setProperty("/PasiesKey", "");
            this.getView().getModel("ojsonRegionesKey").setProperty("/RegionesKey", "");
            this.getView().getModel("ojsonDestionationsKey").setProperty("/ListDestinations", []);
            this.getView().getModel("ojsonAdvancesKey").setProperty("/ListAdvances", []);
            this.getView().getModel("ojsonConceptosKey").setProperty("/ConceptosKey", "");
            this.getView().getModel("ojsonMonedasKey").setProperty("/MonedasKey", "");

            this._wizard.discardProgress(this.byId("TrGeneralDataStep"));
            this._wizard.discardProgress(this.byId("TrCheckStep"));
            this._wizard.discardProgress(this.byId("TrServicesStep"));
            this._wizard.discardProgress(this.byId("TrCheckStep"));

            this._handleNavigationToStep(0);

            var oHistory = History.getInstance();

            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteApp", true);
            }
        },

        backToWizardContent: function () {
            this._oNavContainer.backToPage(this._oWizardContentPage.getId());
        },

        _handleNavigationToStep: function (iStepNumber) {

            //                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //                oRouter.navTo("RoutecreateEmployee");

            var fnAfterNavigate = function () {

                this._wizard.goToStep(this._wizard.getSteps()[iStepNumber]);
                this._oNavContainer.detachAfterNavigate(fnAfterNavigate);


                //                   var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //                   oRouter.navTo("RoutecreateEmployee");

            }.bind(this);

            this._oNavContainer.attachAfterNavigate(fnAfterNavigate);

            //                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //                oRouter.navTo("RoutecreateEmployee");
            this.backToWizardContent();


        },

        handleChange: function (oEvent) {



        },

        onDeleteDestination: function (oEvent) {

            var that = this;
            var sData = oEvent.getSource().getModel("ojsonDestionationsKey").getData();
            var oTable = this.byId("idDestionationsTable");
            var selectedRowData = oTable.getSelectedContexts();//get the selected contexts 
            if (selectedRowData.length === 0) {
                MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("AdvBorrar"));
                return;
            } else {

                for (var i = selectedRowData.length - 1; i >= 0; i--) {
                    var oThisObj = selectedRowData[i].getObject();
                    var index = $.map(sData.ListDestinations, function (obj, index) {
                        if (obj === oThisObj) {
                            return index;
                        }
                    });
                    sData.ListDestinations.splice(index, 1);//delete  record by using Splice
                }
                that.getView().getModel("ojsonDestionationsKey").setData(sData);//after deleting set the data
                // this._oTable.getModel().setData(sData);
                oTable.removeSelections(true);
            }

        },

        onAddDestination: function (oEvent) {

            var that = this;

            var newRecord = {//create a dummy record to push when user click on Add
                "Pais": "00007",
                "Region": "",
                "Ciudad": "",
                "Fecha_Ini": new Date(),
                "Hora_Ini": "",
                "FVuelo": "",
                "Fhotel": "",
                "FAuto": "",
                "Hotel": {
                    "llegada": new Date(),
                    "salida": new Date(),
                    "Moneda": "VEF",
                    "Monto": 0.00,
                    "Localizador": "",
                    "Comentarios": ""
                },

                "Auto": {

                    "llegada": new Date(),
                    "salida": new Date(),
                    "Moneda": "VEF",
                    "Monto": 0.00,
                    "Localizador": "",
                    "Comentarios": ""

                },

                "Vuelo": {

                    "llegada": new Date(),
                    "salida": new Date(),
                    "Moneda": "VEF",
                    "Monto": 0.00,
                    "Localizador": "",
                    "Comentarios": ""

                }
            };

            var oTableData = oEvent.getSource().getModel("ojsonDestionationsKey").getData();//get table data
            oTableData.ListDestinations.push(newRecord);//push this new record in model
            that.getView().getModel("ojsonDestionationsKey").setData(oTableData);//set data to the view
            //       that.getView().getModel("ojsonDestionationsKey").refresh();
        },

        handleChange: function (oEvent) {

            var oValidatedComboBox = oEvent.getSource(),
                objContext = oEvent.getSource().getBindingContext("ojsonAdvancesKey"),
                sSelectedKey = oValidatedComboBox.getSelectedKey();
            //            sValue = oValidatedComboBox.getValue();

            //        objData = objContext.getData();

            var contexjObj = objContext.getObject();
            var ConceptosId = contexjObj.Concepto;
            var sData = oEvent.getSource().getModel("ojsonConceptosKey").getData();
            var Precio = $.map(sData.ListConceptos, function (obj, index) {
                if (ConceptosId === obj.ConceptosId) {
                    return obj.Precio;
                }
            });

            contexjObj.Importe = Precio;

            var lv_total = contexjObj.Importe * contexjObj.Cantidad;
            var lv_total_dec = parseFloat(lv_total).toFixed(2);

            // var num2 = parseFloat("10.547892").toFixed(2)

            contexjObj.Total = lv_total_dec;
            //         if (!sSelectedKey && sValue) {
            //             oValidatedComboBox.setValueState(ValueState.Error);
            //             oValidatedComboBox.setValueStateText("Please enter a valid country!");
            //         } else {
            //             oValidatedComboBox.setValueState(ValueState.None);
            //         }
        },

        changeCant: function (oEvent) {

            var objContext = oEvent.getSource().getBindingContext("ojsonAdvancesKey");
            var contexjObj = objContext.getObject();
            var cant = oEvent.getSource().getValue();
            var lv_total = contexjObj.Importe * cant;
            var lv_total_dec = parseFloat(lv_total).toFixed(2);

            // var num2 = parseFloat("10.547892").toFixed(2)

            contexjObj.Total = lv_total_dec;

            //             sSelectedKey = oValidatedComboBox.getSelectedKey();


        },

        onDeleteAdvances: function (oEvent) {

            var that = this;
            var sData = oEvent.getSource().getModel("ojsonAdvancesKey").getData();
            var oTable = this.byId("idAdvancesTable");
            var selectedRowData = oTable.getSelectedContexts();//get the selected contexts 
            if (selectedRowData.length === 0) {
                MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("AdvBorrar"));
                return;
            } else {

                for (var i = selectedRowData.length - 1; i >= 0; i--) {
                    var oThisObj = selectedRowData[i].getObject();
                    var index = $.map(sData.ListAdvances, function (obj, index) {
                        if (obj === oThisObj) {
                            return index;
                        }
                    });
                    sData.ListAdvances.splice(index, 1);//delete  record by using Splice
                }
                that.getView().getModel("ojsonAdvancesKey").setData(sData);//after deleting set the data
                // this._oTable.getModel().setData(sData);
                oTable.removeSelections(true);
            }

        },

        onAddAdvances: function (oEvent) {

            var that = this;

            var newRecord = {//create a dummy record to push when user click on Add
                "Pais": "00007",
                "Region": "00001",
                "Concepto": "",
                "Cantidad": 0,
                "Importe": 0.00,
                "Moneda": "VEF",
                "Total": 0.00,
                "InfoAdi": ""
            };

            var oTableData = oEvent.getSource().getModel("ojsonAdvancesKey").getData();//get table data
            oTableData.ListAdvances.push(newRecord);//push this new record in model
            that.getView().getModel("ojsonAdvancesKey").setData(oTableData);//set data to the view

        },
        onCopyAdvances: function (oEvent) {

            var that = this;

            //            var objContext = oEvent.getSource().getBindingContext("ojsonAdvancesKey");
            var oTable = this.byId("idAdvancesTable");

            var selectedRowData = oTable.getSelectedContexts();//get the selected contexts 

            var oTableData = oEvent.getSource().getModel("ojsonAdvancesKey").getData();

            for (var i = selectedRowData.length - 1; i >= 0; i--) {

                var oThisObj = selectedRowData[i].getObject();

                var newRecord = {//create a dummy record to push when user click on Add
                    "Pais": oThisObj.Pais,
                    "Region": oThisObj.Region,
                    "Concepto": oThisObj.Concepto,
                    "Cantidad": oThisObj.Cantidad,
                    "Importe": oThisObj.Importe,
                    "Moneda": oThisObj.Moneda,
                    "Total": oThisObj.Total,
                    "InfoAdi": oThisObj.InfoAdi
                }

                oTableData.ListAdvances.push(newRecord);

            }

            //           var contexjObj = objContext.getObject();

            //    var newRecord = ;

            //           var oTableData = oEvent.getSource().getModel("ojsonAdvancesKey").getData();//get table data
            //            oTableData.ListAdvances.push(contexjObj);//push this new record in model
            that.getView().getModel("ojsonAdvancesKey").setData(oTableData);//set data to the view

        },

        onItemPress: function (oEvent) {

            var context = oEvent.getSource().getBindingContext("ojsonDestionationsKey").getPath();

            var hotelpageid = this.getView().byId("hotelpageid");

            hotelpageid.bindElement({
                path: context + "/" + "Hotel",
                model: "ojsonDestionationsKey"
            });

            var autopageid = this.getView().byId("Autopageid");

            autopageid.bindElement({
                path: context + "/" + "Auto",
                model: "ojsonDestionationsKey"
            });

            var vuelopageid = this.getView().byId("Vuelospageid");

            vuelopageid.bindElement({
                path: context + "/" + "Vuelo",
                model: "ojsonDestionationsKey"
            });

        },
        onAddHotel: function (oEvent) {

        },

        onAddCotizacion: function (oEvent) {

            var that = this;

            MessageBox.success(this.getView().getModel("i18n").getResourceBundle().getText("CotizacionEnviada"), {

                actions: MessageBox.Action.CLOSE,
                //          emphasizedAction: "Manage Products",

                onClose: function (sAction) {

                    that.getView().getModel("jsonTripType").setProperty("/TripTypeKey", "");
                    that.getView().getModel("ojsonReasonTripKey").setProperty("/ReasonTripKey", "");
                    that.getView().getModel("ojsonTipoImputacionKey").setProperty("/TipoImputacionKey", "");
                    that.getView().getModel("ojsonValTipoImputacionKey").setProperty("/ValoresTipoImputacionKey", "");
                    that.getView().getModel("ojsonAgenciaViajesKey").setProperty("/AgenciaViajesKey", "");
                    that.getView().getModel("ojsonPaisesKey").setProperty("/PasiesKey", "");
                    that.getView().getModel("ojsonRegionesKey").setProperty("/RegionesKey", "");
                    that.getView().getModel("ojsonDestionationsKey").setProperty("/ListDestinations", []);
                    that.getView().getModel("ojsonAdvancesKey").setProperty("/ListAdvances", []);
                    that.getView().getModel("ojsonConceptosKey").setProperty("/ConceptosKey", "");
                    that.getView().getModel("ojsonMonedasKey").setProperty("/MonedasKey", "");

                    that._wizard.discardProgress(that.byId("TrGeneralDataStep"));
                    that._wizard.discardProgress(that.byId("TrCheckStep"));
                    that._wizard.discardProgress(that.byId("TrServicesStep"));
                    that._wizard.discardProgress(that.byId("TrCheckStep"));

                    that._handleNavigationToStep(0);

                    var oHistory = History.getInstance();

                    var sPreviousHash = oHistory.getPreviousHash();
                    //       MessageBox.information("Your booking will be reserved for 24 hours.");
                    if (sPreviousHash !== undefined) {
                        window.history.go(-1);
                    } else {
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                        oRouter.navTo("RouteApp", true);
                    }
                    //MessageToast.show("Action selected: " + sAction);
                }
            });


        },

        onEnd: function (oEvent) {

            that._wizard.discardProgress(that.byId("TrGeneralDataStep"));
            that._wizard.discardProgress(that.byId("TrCheckStep"));
            that._wizard.discardProgress(that.byId("TrServicesStep"));
            that._wizard.discardProgress(that.byId("TrCheckStep"));

            that._handleNavigationToStep(0);

            var oHistory = History.getInstance();

            var sPreviousHash = oHistory.getPreviousHash();
            //       MessageBox.information("Your booking will be reserved for 24 hours.");
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                oRouter.navTo("RouteApp", true);
            }

        },

        onAddSolLiberar: function (oEvent) {

            var that = this;

            //            MessageBox.success(this.getView().getModel("i18n").getResourceBundle().getText("Liberacion"), {

            //               actions: MessageBox.Action.CLOSE,
            //          emphasizedAction: "Manage Products",

            //             onClose: function (sAction) {

            //                 if (that._wizard.getCurrentStep().includes("TrCheckStep")) {
            //      that._wizard.nextStep();
            //                 }

            //             }
            //         });

            MessageBox.confirm(this.getView().getModel("i18n").getResourceBundle().getText("Liberacion"), {
                actions: ["Si", MessageBox.Action.CLOSE],
                emphasizedAction: "Si",
                onClose: function (sAction) {

                    if (sAction == "Si") {
                        if (that._wizard.getCurrentStep().includes("TrCheckStep")) {
                            that._wizard.nextStep();
                        }

                    }

                }
            });


        },

        handleWizardCancel1: function (oEvent) {

            that = this;

            //        MessageBox.success(this.getView().getModel("i18n").getResourceBundle().getText("Guardar"));

            //         MessageBox.alert(this.getView().getModel("i18n").getResourceBundle().getText("Guardar"));
            //     sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("Guardar"));
            MessageBox.success(this.getView().getModel("i18n").getResourceBundle().getText("Guardar"), {

                actions: MessageBox.Action.CLOSE,
                //          emphasizedAction: "Manage Products",

                onClose: function (sAction) {


                    that.getView().getModel("jsonTripType").setProperty("/TripTypeKey", "");
                    that.getView().getModel("ojsonReasonTripKey").setProperty("/ReasonTripKey", "");
                    that.getView().getModel("ojsonTipoImputacionKey").setProperty("/TipoImputacionKey", "");
                    that.getView().getModel("ojsonValTipoImputacionKey").setProperty("/ValoresTipoImputacionKey", "");
                    that.getView().getModel("ojsonAgenciaViajesKey").setProperty("/AgenciaViajesKey", "");
                    that.getView().getModel("ojsonPaisesKey").setProperty("/PasiesKey", "");
                    that.getView().getModel("ojsonRegionesKey").setProperty("/RegionesKey", "");
                    that.getView().getModel("ojsonDestionationsKey").setProperty("/ListDestinations", []);
                    that.getView().getModel("ojsonAdvancesKey").setProperty("/ListAdvances", []);
                    that.getView().getModel("ojsonConceptosKey").setProperty("/ConceptosKey", "");
                    that.getView().getModel("ojsonMonedasKey").setProperty("/MonedasKey", "");

                    that._wizard.discardProgress(that.byId("TrGeneralDataStep"));
                    that._wizard.discardProgress(that.byId("TrCheckStep"));
                    that._wizard.discardProgress(that.byId("TrServicesStep"));
                    that._wizard.discardProgress(that.byId("TrCheckStep"));

                    that._handleNavigationToStep(0);

                    var oHistory = History.getInstance();

                    var sPreviousHash = oHistory.getPreviousHash();
                    //       MessageBox.information("Your booking will be reserved for 24 hours.");
                    if (sPreviousHash !== undefined) {
                        window.history.go(-1);
                    } else {
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                        oRouter.navTo("RouteApp", true);
                    }
                    //MessageToast.show("Action selected: " + sAction);
                }
            });

            //this._wizard.discardProgress(this.byId("TrGeneralDataStep"));
            // this._wizard.discardProgress(this.byId("TrCheckStep"));
            // this._wizard.discardProgress(this.byId("TrServicesStep"));
            //  this._wizard.discardProgress(this.byId("TrCheckStep"));

            //  this._handleNavigationToStep(0);

            //  var oHistory = History.getInstance();

            //   var sPreviousHash = oHistory.getPreviousHash();
            //       MessageBox.information("Your booking will be reserved for 24 hours.");
            //    if (sPreviousHash !== undefined) {
            //         window.history.go(-1);
            //     } else {
            //         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //         oRouter.navTo("RouteApp", true);
            //     }
        },

        onSearch: function (oEvent) {

        }

    });
}); 