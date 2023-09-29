// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, MessageBox) {
        "use strict";

        return Controller.extend("sybvensapui5.gestiondeviajes1.controller.createrg", {


            onInit: function () {

                this._wizard = this.byId("CreateTRWizard");
                this._oNavContainer = this.byId("wizardNavContainer");
                this._oWizardContentPage = this.byId("wizardContentPage");
                this._wizard = this.byId("CreateTRWizard");
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


                // Paises ...

                var ojsonPaisesKey = new sap.ui.model.json.JSONModel();
                ojsonPaisesKey.loadData("./model/json/Paises.json", false);
                oView.setModel(ojsonPaisesKey, "ojsonPaisesKey");

                // Regiones ...

                var ojsonRegionesKey = new sap.ui.model.json.JSONModel();
                ojsonRegionesKey.loadData("./model/json/Regiones.json", false);
                oView.setModel(ojsonRegionesKey, "ojsonRegionesKey");

                // Trip Header....


                var ojsonHeaderTripKey = new sap.ui.model.json.JSONModel();

                ojsonHeaderTripKey.setData({

                    // Header Trip Data ...

                    "Fecha_Ini": new Date(),
                    "Hora_Ini": "18:26",
                    "Fecha_Fin": new Date(),
                    "Hora_Fin": "17:40",
                    "TypeId": "01",
                    "ReasonId": "001",
                    "ImputId": "0002",
                    "ValorId": "00002",
                    "PaisId": "00007",
                    "ReginoId": "00002",
                    "Ciudad": "Elorza",
                    "Comentarios": "El viaje que sera realizado por empleado es por motivos de emergencia operativa"

                });

                oView.setModel(ojsonHeaderTripKey, "ojsonHeaderTripKey");

                var ojsonReturnsKey = new sap.ui.model.json.JSONModel();

                ojsonReturnsKey.setData({

                    "ListReturns": [

                        {

                            "Pais": "00007",
                            "Region": "00001",
                            "ConceptosId": "001",
                            "ValorAnt": 10.00,
                            "CantAnt": 2.00,
                            "TotalAnt": 20.00,
                            "ValorAct": 10.00,
                            "CantAct": 2.00,
                            "TotalAct": 20.00,
                            "Moneda": "VEF",

                        },

                        {

                            "Pais": "00007",
                            "Region": "00001",
                            "ConceptosId": "002",
                            "ValorAnt": 60.00,
                            "CantAnt": 2.00,
                            "TotalAnt": 120.00,
                            "ValorAct": 60.00,
                            "CantAct": 2.00,
                            "TotalAct": 120.00,
                            "Moneda": "VEF",

                        }

                    ]

                });

                oView.setModel(ojsonReturnsKey, "ojsonReturnsKey");

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

                oView.setModel(ojsonDestionationsKey, "ojsonDestionationsKey");

                // Advances for the whole Trip ...

                var ojsonTotalAdvancesKey = new sap.ui.model.json.JSONModel();

                ojsonTotalAdvancesKey.setData({

                    "ListAdvances": [
                        {
                            "Moneda": "VEF",
                            "Monto": 654,
                        },

                        {
                            "Moneda": "USD",
                            "Monto": 10,
                        }

                    ]
                });

                oView.setModel(ojsonTotalAdvancesKey, "ojsonTotalAdvancesKey");

                //          oView.setModel(ojsonAdvancesKey, "ojsonAdvancesKey");

                // Conceptos ...

                var ojsonConceptosKey = new sap.ui.model.json.JSONModel();
                ojsonConceptosKey.loadData("./model/json/Conceptos.json", false);
                oView.setModel(ojsonConceptosKey, "ojsonConceptosKey");


                // Monedas...

                var ojsonMonedasKey = new sap.ui.model.json.JSONModel();
                ojsonMonedasKey.loadData("./model/json/Monedas.json", false);
                oView.setModel(ojsonMonedasKey, "ojsonMonedasKey");


                var ojsonTotalesKey = new sap.ui.model.json.JSONModel();

                ojsonTotalesKey.setData({

                    "ListTotal": [
                        {

                            "Moneda": "VEF",
                            "AOTOR": "654",
                            "GREALI": "1.215,6",
                            "DEPOSI": "0",
                            "NETO": "561,6",

                        }

                    ]
                });

                oView.setModel(ojsonTotalesKey, "ojsonTotalesKey");

            },

            toCreateTrip: function (oEvent) {
                //            var orderID = oEvent.getSource().getBindingContext("odataNorthwind").getObject().OrderID;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //            oRouter.navTo("RouteOrderDetails", {
                //                OrderID: orderID
                //            });

                oRouter.navTo("RoutecreateTR");
            },

            onSearch: function (oEvent) {

                // Build Filter...

                var aFilter = [];
                var sQuery = oEvent.getParameter("query");

                if (sQuery) {
                    // @ts-ignore
                    aFilter.push(new Filter("Via_NroViaje", FilterOperator.Contains, sQuery));
                    //                   aFilter.push(new Filter("Dni", FilterOperator.Contains, sQuery));
                }


                //Filter binding Over the list

                const Olist = this.byId("tableViajes");
                const oBinding = Olist.getBinding("items");
                // @ts-ignore

                oBinding.filter(aFilter);

            },


            onAddReturns: function (oEvent) {

                var that = this;

                var newRecord = {//create a dummy record to push when user click on Add
                    "Pais": "00007",
                    "Region": "00003",
                    "ConceptosId": "004",
                    "ValorAnt": 50.00,
                    "CantAnt": 2.00,
                    "TotalAnt": 100.00,
                    "ValorAct": 50.00,
                    "CantAct": 2.00,
                    "TotalAct": 100.00,
                    "Moneda": "VEF",
                };

                var oTableData = oEvent.getSource().getModel("ojsonReturnsKey").getData();//get table data
                oTableData.ListReturns.push(newRecord);//push this new record in model
                that.getView().getModel("ojsonReturnsKey").setData(oTableData);//set data to the view

            },

            onCopyReturns: function (oEvent) {

                var that = this;

                //            var objContext = oEvent.getSource().getBindingContext("ojsonAdvancesKey");
                var oTable = this.byId("idReembolsosTable"); // Give me the table...

                var selectedRowData = oTable.getSelectedContexts();//get the selected contexts 

                var oTableData = oEvent.getSource().getModel("ojsonReturnsKey").getData();

                for (var i = selectedRowData.length - 1; i >= 0; i--) {

                    var oThisObj = selectedRowData[i].getObject();

                    var newRecord = {//create a dummy record to push when user click on Add

                        "Pais": oThisObj.Pais,
                        "Region": oThisObj.Region,
                        "ConceptosId": oThisObj.ConceptosId,
                        "ValorAnt": oThisObj.ValorAnt,
                        "CantAnt": oThisObj.CantAnt,
                        "TotalAnt": oThisObj.TotalAnt,
                        "ValorAct": oThisObj.ValorAct,
                        "CantAct": oThisObj.CantAct,
                        "TotalAct": oThisObj.TotalAct,
                        "Moneda": "oThisObj.Moneda"
                    }

                    oTableData.ListReturns.push(newRecord);

                }

                //           var contexjObj = objContext.getObject();

                //    var newRecord = ;

                //           var oTableData = oEvent.getSource().getModel("ojsonAdvancesKey").getData();//get table data
                //            oTableData.ListAdvances.push(contexjObj);//push this new record in model
                that.getView().getModel("ojsonReturnsKey").setData(oTableData);//set data to the view

            },

            onDeleteReturns: function (oEvent) {

                var that = this;
                var sData = oEvent.getSource().getModel("ojsonReturnsKey").getData();
                var oTable = this.byId("idReembolsosTable");
                var selectedRowData = oTable.getSelectedContexts();//get the selected contexts 
                if (selectedRowData.length === 0) {
                    MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("AdvBorrar"));
                    return;
                } else {

                    for (var i = selectedRowData.length - 1; i >= 0; i--) {
                        var oThisObj = selectedRowData[i].getObject();
                        var index = $.map(sData.ListReturns, function (obj, index) {
                            if (obj === oThisObj) {
                                return index;
                            }
                        });
                        sData.ListReturns.splice(index, 1);//delete  record by using Splice
                    }
                    that.getView().getModel("ojsonReturnsKey").setData(sData);//after deleting set the data
                    // this._oTable.getModel().setData(sData);
                    oTable.removeSelections(true); // Borrar lo que se marco...
                }

            },

            handleWizardCancel1: function (oEvent) {

                //         that = this;

                //        MessageBox.success(this.getView().getModel("i18n").getResourceBundle().getText("Guardar"));

                //         MessageBox.alert(this.getView().getModel("i18n").getResourceBundle().getText("Guardar"));
                //     sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("Guardar"));
                MessageBox.success(this.getView().getModel("i18n").getResourceBundle().getText("GuardarRG"), {

                    actions: MessageBox.Action.CLOSE,
                    //          emphasizedAction: "Manage Products",

                    onClose: function (sAction) {


                        //    that.getView().getModel("jsonTripType").setProperty("/TripTypeKey", "");
                        //    that.getView().getModel("ojsonReasonTripKey").setProperty("/ReasonTripKey", "");
                        //    that.getView().getModel("ojsonTipoImputacionKey").setProperty("/TipoImputacionKey", "");
                        //    that.getView().getModel("ojsonValTipoImputacionKey").setProperty("/ValoresTipoImputacionKey", "");
                        //    that.getView().getModel("ojsonAgenciaViajesKey").setProperty("/AgenciaViajesKey", "");
                        //    that.getView().getModel("ojsonPaisesKey").setProperty("/PasiesKey", "");
                        //    that.getView().getModel("ojsonRegionesKey").setProperty("/RegionesKey", "");
                        //    that.getView().getModel("ojsonDestionationsKey").setProperty("/ListDestinations", []);
                        //    that.getView().getModel("ojsonAdvancesKey").setProperty("/ListAdvances", []);
                        //      that.getView().getModel("ojsonConceptosKey").setProperty("/ConceptosKey", "");
                        //      that.getView().getModel("ojsonMonedasKey").setProperty("/MonedasKey", "");

                        //      that._wizard.discardProgress(that.byId("TrGeneralDataStep"));
                        //      that._wizard.discardProgress(that.byId("TrCheckStep"));
                        //  that._wizard.discardProgress(that.byId("TrServicesStep"));
                        //    that._wizard.discardProgress(that.byId("TrCheckStep"));

                        //      that._handleNavigationToStep(0);

                        //        var oHistory = History.getInstance();

                        //          var sPreviousHash = oHistory.getPreviousHash();
                        //       MessageBox.information("Your booking will be reserved for 24 hours.");
                        //         if (sPreviousHash !== undefined) {
                        //             window.history.go(-1);
                        //       } else {
                        //           var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                        //             oRouter.navTo("RouteApp", true);
                        //           }
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

            onAddRelLiberar: function (oEvent) {

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
                            if (that._wizard.getCurrentStep().includes("RGVerificarDataStep")) {
                                that._wizard.nextStep();
                            }

                        }

                    }
                });


            }


            //          toCreateRelation: function (oEvent) {
            //            var orderID = oEvent.getSource().getBindingContext("odataNorthwind").getObject().OrderID;
            //              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //            oRouter.navTo("RouteOrderDetails", {
            //                OrderID: orderID
            //            });
            //           oRouter.navTo("RoutecreateGR");
            //    }

            //            onCreateEmployee: function (oEvent) {

            //                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //               oRouter.navTo("RoutecreateEmployee");


            //            },

            //            onSearchEmployee: function () {

            //                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //    sap.ui.getCore().byId("ViewEmployee").getModel("finalProjectModel").refresh(true);
            //                oRouter.navTo("RouteshowEmployee");

            //            },

            //            onSignSalesOrder: function (oEvent) {

            //                window.open("https://workspaces-ws-pncld-app5.us10.trial.applicationstudio.cloud.sap/logaligroup10Employees/index.html");

            //          }

        });



    });