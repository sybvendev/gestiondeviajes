// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("sybvensapui5.gestiondeviajes1.controller.Main", {

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

                // Carga de empleados...

                var oJSONModelCountries = new sap.ui.model.json.JSONModel();
                oJSONModelCountries.loadData("./model/json/Employees.json", false);
                oView.setModel(oJSONModelCountries, "jsonEmployees");

                // Solicitudes de Viajes...

                var oJSONModelSolViajes = new sap.ui.model.json.JSONModel();
                oJSONModelSolViajes.loadData("./model/json/SolViajes.json", false);
                oView.setModel(oJSONModelSolViajes, "oJSONModelSolViajes");

                // Relaciones de Viajes...

                var oJSONModelRelViajes = new sap.ui.model.json.JSONModel();
                oJSONModelRelViajes.loadData("./model/json/RelViajes.json", false);
                oView.setModel(oJSONModelRelViajes, "oJSONModelRelViajes");

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