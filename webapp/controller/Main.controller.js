// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, MessageBox) {
        "use strict";

        return Controller.extend("sybvensapui6.gestiondeviajes3.controller.Main", {

            //            onAfterRendering: function () {
            // Error en el framework : Al agregar la dirección URL de "Firmar pedidos", el componente GenericTile debería navegar directamente a dicha URL,
            // pero no funciona en la version 1.78. Por tanto, una solución  encontrada es eliminando la propiedad id del componente por jquery
            // var genericTileFirmarPedido = this.byId("linkFirmarPedido");
            //Id del dom
            // var idGenericTileFirmarPedido = genericTileFirmarPedido.getId();
            //Se vacia el id
            //jQuery("#" + idGenericTileFirmarPedido)[0].id = "";
            // },

            onInit: function () {

                var oView = this.getView();

                // Solicitudes de Viajes Por Cotizar...

                var oJSONModelCotizar_Sol = new sap.ui.model.json.JSONModel();
                oJSONModelCotizar_Sol.loadData("./model/json/Cotizar_Sol.json", false);
                oView.setModel(oJSONModelCotizar_Sol, "oJSONModelCotizar_Sol");


                // Solicitudes de Viajes Cotizadas...

                var oJSONModelCotizadas_Sol = new sap.ui.model.json.JSONModel();
                oJSONModelCotizadas_Sol.loadData("./model/json/Cotizadas_Sol.json", false);
                oView.setModel(oJSONModelCotizadas_Sol, "oJSONModelCotizadas_Sol");



                // Solicitudes de Viajes por reservar...

                var oJSONModelReservar_Sol = new sap.ui.model.json.JSONModel();
                oJSONModelReservar_Sol.loadData("./model/json/Reservar_Sol.json", false);
                oView.setModel(oJSONModelReservar_Sol, "oJSONModelReservar_Sol");


                // Solicitudes de Viajes no aprobadas...

                var oJSONModelRechazadas_Sol = new sap.ui.model.json.JSONModel();
                oJSONModelRechazadas_Sol.loadData("./model/json/Rechazadas_Sol.json", false);
                oView.setModel(oJSONModelRechazadas_Sol, "oJSONModelRechazadas_Sol");



                // Solicitudes de Viajes aprobadas...

                var oJSONModelAprobadas_Sol = new sap.ui.model.json.JSONModel();
                oJSONModelAprobadas_Sol.loadData("./model/json/Aprobadas_Sol.json", false);
                oView.setModel(oJSONModelAprobadas_Sol, "oJSONModelAprobadas_Sol");


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

            onSearchRel: function (oEvent) {

                // Build Filter...

                var aFilter = [];
                var sQuery = oEvent.getParameter("query");

                if (sQuery) {
                    // @ts-ignore
                    aFilter.push(new Filter("Via_NroViaje", FilterOperator.Contains, sQuery));
                    //                   aFilter.push(new Filter("Dni", FilterOperator.Contains, sQuery));
                }


                //Filter binding Over the list

                const Olist = this.byId("tableRelaciones");
                const oBinding = Olist.getBinding("items");
                // @ts-ignore

                oBinding.filter(aFilter);

            },

            toCreateRelation: function (oEvent) {
                //            var orderID = oEvent.getSource().getBindingContext("odataNorthwind").getObject().OrderID;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //            oRouter.navTo("RouteOrderDetails", {
                //                OrderID: orderID
                //            });

                oRouter.navTo("RoutecreateGR");
            },

            onShowRelation: function (oEvent) {
                //            var orderID = oEvent.getSource().getBindingContext("odataNorthwind").getObject().OrderID;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //            oRouter.navTo("RouteOrderDetails", {
                //                OrderID: orderID
                //            });

                oRouter.navTo("RoutecreateGR");
            },

            onCopyRequest: function (oEvent) {

                var that = this;

                //            var objContext = oEvent.getSource().getBindingContext("ojsonAdvancesKey");
                var oTable = this.byId("tableViajes");

                var selectedRowData = oTable.getSelectedContexts();//get the selected contexts 

                var oTableData = oEvent.getSource().getModel("oJSONModelSolViajes").getData();

                for (var i = selectedRowData.length - 1; i >= 0; i--) {

                    var oThisObj = selectedRowData[i].getObject();

                    var newRecord = {//create a dummy record to push when user click on Add

                        "Via_NroViaje": oThisObj.Via_NroViaje,
                        "Via_CentroCosto": oThisObj.Via_CentroCosto,
                        "Via_ElementoPEP": oThisObj.Via_ElementoPEP,
                        "Via_Periodo": oThisObj.Via_Periodo,
                        "Via_Destion": oThisObj.Via_Destion,
                        "Via_Tipo": oThisObj.Via_Tipo,
                        "Via_Motivo": oThisObj.Via_Motivo,
                        "Via_Estatus": oThisObj.Via_Estatus,
                        "Via_Alert": oThisObj.Via_Alert,
                        "Via_Aprobadores": oThisObj.Via_Aprobadores

                    }

                    oTableData.ListTravels.push(newRecord);

                }

                //           var contexjObj = objContext.getObject();

                //    var newRecord = ;

                //           var oTableData = oEvent.getSource().getModel("ojsonAdvancesKey").getData();//get table data
                //            oTableData.ListAdvances.push(contexjObj);//push this new record in model
                that.getView().getModel("oJSONModelSolViajes").setData(oTableData);//set data to the view

            },

            onCopyRelation: function (oEvent) {

                var that = this;

                //            var objContext = oEvent.getSource().getBindingContext("ojsonAdvancesKey");
                var oTable = this.byId("tableRelaciones");

                var selectedRowData = oTable.getSelectedContexts();//get the selected contexts 

                var oTableData = oEvent.getSource().getModel("oJSONModelRelViajes").getData();

                for (var i = selectedRowData.length - 1; i >= 0; i--) {

                    var oThisObj = selectedRowData[i].getObject();

                    var newRecord = {//create a dummy record to push when user click on Add

                        "Via_NroViaje": oThisObj.Via_NroViaje,
                        "Via_CentroCosto": oThisObj.Via_CentroCosto,
                        "Via_ElementoPEP": oThisObj.Via_ElementoPEP,
                        "Via_Periodo": oThisObj.Via_Periodo,
                        "Via_Destion": oThisObj.Via_Destion,
                        "Via_Tipo": oThisObj.Via_Tipo,
                        "Via_Motivo": oThisObj.Via_Motivo,
                        "Via_DateRelease": oThisObj.Via_DateRelease,
                        "Via_Estatus": oThisObj.Via_Estatus,
                        "Via_Alert": oThisObj.Via_Alert,
                        "Via_Aprobadores": oThisObj.Via_Aprobadores

                    }

                    oTableData.ListRelaciones.push(newRecord);

                }

                //           var contexjObj = objContext.getObject();

                //    var newRecord = ;

                //           var oTableData = oEvent.getSource().getModel("ojsonAdvancesKey").getData();//get table data
                //            oTableData.ListAdvances.push(contexjObj);//push this new record in model
                that.getView().getModel("oJSONModelRelViajes").setData(oTableData);//set data to the view

            },

            onCancelRequest: function (oEvent) {

                var that = this;
                var sData = oEvent.getSource().getModel("oJSONModelSolViajes").getData();
                var oTable = this.byId("tableViajes");
                var selectedRowData = oTable.getSelectedContexts();//get the selected contexts 
                if (selectedRowData.length === 0) {
                    MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("AdvBorrar"));
                    return;
                } else {

                    for (var i = selectedRowData.length - 1; i >= 0; i--) {
                        var oThisObj = selectedRowData[i].getObject();
                        var index = $.map(sData.ListTravels, function (obj, index) {
                            if (obj === oThisObj) {
                                return index;
                            }
                        });
                        sData.ListTravels.splice(index, 1);//delete  record by using Splice
                    }
                    that.getView().getModel("oJSONModelSolViajes").setData(sData);//after deleting set the data
                    // this._oTable.getModel().setData(sData);
                    oTable.removeSelections(true);
                }

            },

            onCancelRelation: function (oEvent) {

                var that = this;
                var sData = oEvent.getSource().getModel("oJSONModelRelViajes").getData();
                var oTable = this.byId("tableRelaciones");
                var selectedRowData = oTable.getSelectedContexts();//get the selected contexts 
                if (selectedRowData.length === 0) {
                    MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("AdvBorrar"));
                    return;
                } else {

                    for (var i = selectedRowData.length - 1; i >= 0; i--) {
                        var oThisObj = selectedRowData[i].getObject();
                        var index = $.map(sData.ListTravels, function (obj, index) {
                            if (obj === oThisObj) {
                                return index;
                            }
                        });
                        sData.ListRelaciones.splice(index, 1);//delete  record by using Splice
                    }
                    that.getView().getModel("oJSONModelRelViajes").setData(sData);//after deleting set the data
                    // this._oTable.getModel().setData(sData);
                    oTable.removeSelections(true);
                }

            },

            onShowRequest: function (oEvent) {
                //            var orderID = oEvent.getSource().getBindingContext("odataNorthwind").getObject().OrderID;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //            oRouter.navTo("RouteOrderDetails", {
                //                OrderID: orderID
                //            });

                oRouter.navTo("RoutecreateTR");
            },

            onItemPress: function (oEvent) {

                var context = oEvent.getSource().getBindingContext("oJSONModelCotizar_Sol").getPath();

                var DatosViajeroID = this.getView().byId("DatosViajeroID");

                DatosViajeroID.bindElement({
                    path: context,
                    model: "oJSONModelCotizar_Sol"
                });

                //             var ServiciosID = this.getView().byId("idServicesTable2");



                //              ServiciosID.bindElement({
                //                  path: context + "/" + "Servicios",
                //                  model: "oJSONModelCotizar_Sol"
                //              });

                var oTable = this.getView().byId("idServicesTable2");

                var oTemplate = new sap.m.ColumnListItem({

                    cells: [

                        new sap.m.Text({ text: "{oJSONModelCotizar_Sol>Servicio}" }),
                        new sap.m.Text({ text: "{oJSONModelCotizar_Sol>Ruta}" }),
                        new sap.m.Text({ text: "{oJSONModelCotizar_Sol>Fecha_Ini}" }),
                        new sap.m.Text({ text: "{oJSONModelCotizar_Sol>Hora_Ini}" }),
                        new sap.m.Text({ text: "{oJSONModelCotizar_Sol>Fecha_Fin}" }),
                    ]



                });

                oTable.bindAggregation("items", "oJSONModelCotizar_Sol>" + context + "/" + "Servicios", oTemplate);

                var CotizacionID = this.getView().byId("CotizacionID");

                CotizacionID.bindElement({
                    path: context,
                    model: "oJSONModelCotizar_Sol"
                });

            },

            onAddCotizacion: function (oEvent) {

                var that = this;

                MessageBox.success(this.getView().getModel("i18n").getResourceBundle().getText("GuardarCotizacion"), {

                    actions: MessageBox.Action.CLOSE,
                    //          emphasizedAction: "Manage Products",

                    onClose: function (sAction) {



                        //MessageToast.show("Action selected: " + sAction);
                    }
                });


            },

            onReleaseCoti: function (oEvent) {

                var that = this;

                MessageBox.success(this.getView().getModel("i18n").getResourceBundle().getText("LiberarCotizacion"), {

                    actions: MessageBox.Action.CLOSE,
                    //          emphasizedAction: "Manage Products",

                    onClose: function (sAction) {


                        //            var oHistory = History.getInstance();

                        //            var sPreviousHash = oHistory.getPreviousHash();
                        //       MessageBox.information("Your booking will be reserved for 24 hours.");
                        //            if (sPreviousHash !== undefined) {
                        //                window.history.go(-1);
                        //            } else {
                        //                var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                        //                oRouter.navTo("RouteApp", true);
                        //          }
                        //MessageToast.show("Action selected: " + sAction);
                    }
                });


            },

            toCreateRelation: function (oEvent) {
                //            var orderID = oEvent.getSource().getBindingContext("odataNorthwind").getObject().OrderID;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //            oRouter.navTo("RouteOrderDetails", {
                //                OrderID: orderID
                //            });

                oRouter.navTo("RoutecreateTR");
            }

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