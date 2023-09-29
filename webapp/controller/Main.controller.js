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

            toCreateRelation: function (oEvent) {
                //            var orderID = oEvent.getSource().getBindingContext("odataNorthwind").getObject().OrderID;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //            oRouter.navTo("RouteOrderDetails", {
                //                OrderID: orderID
                //            });

                oRouter.navTo("RoutecreateGR");
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