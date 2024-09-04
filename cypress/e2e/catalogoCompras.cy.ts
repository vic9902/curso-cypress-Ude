import cartMethods from "../pages/cart/cartMethods";
import commonData from "../pages/common/commonData";
import commonMethods from "../pages/common/commonMethods";
import homeMethods from "../pages/home/homeMethods";
import loginData from "../pages/login/loginData";
import loginMethods from "../pages/login/loginMethods";
import { placeOrderData } from "../pages/place-order/placeOrderData";
import placeOrderMethods from "../pages/place-order/placeOrderMethods";
import productDetailsMethods from "../pages/product-details/productDetailsMethods";
import Logger from "../utils/logger";

describe(commonData.testSuites.catalogoYCompra, () => {

    const datos = loginData.validCredentials;
    const orderData = placeOrderData.testData;
    const product = "ASUS Full HD";

    it("Navegación por categorias", () => {

        Logger.stepNumber(1);
        Logger.step("Iniciar sesión como un usuario registrado");
        Logger.subStep("Hacer click en el botón de 'log in'");
        commonMethods.clickOnLogInOption();
        Logger.step("Hacer login");
        loginMethods.login(datos.username, datos.password);

        Logger.stepNumber(2);
        Logger.step("Navegar a la página de inicio");
        commonMethods.clickOnhomeOption();

        Logger.stepNumber(3);
        Logger.step("Seleccionar una categoria de productos en el menú de navegación");
        homeMethods.clickOnMonitorsOption();
        Logger.verification("Verificar que se muestra la lista de productos correspondientes a la categoria seleccionada");
        homeMethods.verifyProductDisplayed('Apple monitor 24');
        homeMethods.verifyProductDisplayed('ASUS Full HD');
    });

    it("Agregar un producto al carrito", () => {

        Logger.stepNumber(1);
        Logger.step("Iniciar sesión como un usuario registrado");
        Logger.subStep("Hacer click en el botón de 'log in'");
        commonMethods.clickOnLogInOption();
        Logger.step("Hacer login");
        loginMethods.login(datos.username, datos.password);

        Logger.stepNumber(2);
        Logger.step("Navegar a la página de inicio");
        commonMethods.clickOnhomeOption();

        Logger.stepNumber(3);
        Logger.step("Seleccionar una categoria de productos en el menú de navegación");
        homeMethods.clickOnMonitorsOption();

        Logger.stepNumber(4);
        Logger.step("Hacer clic en un producto");
        homeMethods.clickOnProductLink(product);
        Logger.verification("Verificar que se muestre los detalles del producto seleccionado.");
        productDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(5);
        Logger.step("Hacer clic en el botón 'Add to cart' ");
        productDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7);
        Logger.verification("Verificar que se muestre un mensaje de confirmación y el producto se haya agregado al carrito.");
        productDetailsMethods.verifyProductAddedMessage();
        commonMethods.clickOnCartOption();
        cartMethods.verifyProductAdded(product);

        Logger.postCondition("Empty cart and logout");
        cartMethods.deleteProducts();
        commonMethods.logOut();
    });

    it("Realizar una compra", () => {

        Logger.stepNumber(1);
        Logger.step("Iniciar sesión como un usuario registrado");
        Logger.subStep("Hacer click en el botón de 'log in'");
        commonMethods.clickOnLogInOption();
        Logger.step("Hacer login");
        loginMethods.login(datos.username, datos.password);

        Logger.stepNumber(2);
        Logger.step("Navegar a la página de inicio");
        commonMethods.clickOnhomeOption();

        Logger.stepNumber(3);
        Logger.step("Seleccionar una categoria de productos en el menú de navegación");
        homeMethods.clickOnMonitorsOption();

        Logger.stepNumber(4);
        Logger.step("Hacer clic en un producto");
        homeMethods.clickOnProductLink(product);
        Logger.verification("Verificar que se muestre los detalles del producto seleccionado.");
        productDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(5);
        Logger.step("Hacer clic en el botón 'Add to cart' ");
        productDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7);
        Logger.verification("Verificar que se muestre un mensaje de confirmación y el producto se haya agregado al carrito.");
        productDetailsMethods.verifyProductAddedMessage();
        commonMethods.clickOnCartOption();
        cartMethods.verifyProductAdded(product);

        Logger.stepNumber(8);
        Logger.step("Verificar que se muestre la página de carrito de compras");
        cartMethods.verifyCartPageIsShow();

        Logger.stepNumber(9);
        Logger.step("Hacer clic en el botón 'place order' ");
        cartMethods.clickOnPlaceOrderButton();
        
        Logger.stepNumber(10);
        Logger.step("Completar los campos obligatorios en la página de información de envio.");
        placeOrderMethods.insertOrderInformation(orderData);

        Logger.stepNumber(11);
        Logger.step("Hacer clic en el botón 'Purchase'");
        placeOrderMethods.clickOnPurcharseButton();

        Logger.stepNumber(12);
        Logger.step("Verificar que se muestra un mensaje de confirmación y se redirije el usario a la página de inicio");
        placeOrderMethods.iconVerify();
        placeOrderMethods.clickOnOkButton();
        homeMethods.verifyHomePageIsShow();
        commonMethods.logOut();
    });
});