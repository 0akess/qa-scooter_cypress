import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it("Создание заказа со входом из хедера", () => {

    CreateOrderPage.mainPage()

    CreateOrderPage.buttonOrderScooter().click()

    CreateOrderPage.inputFirstName().type("самсоненко")

    CreateOrderPage.inputLastName().type("ываыва")

    CreateOrderPage.inputAddress().type("ываыва")

    CreateOrderPage.inputMetro().click().type("Сокольники")

    cy.xpath("//*[text()='Сокольники']").click()

    CreateOrderPage.inputNumberPhone().click().type("89172057433")

    CreateOrderPage.buttonNextStep().click()

    CreateOrderPage.inputDateForDelivery().type("10.03.2022")

    CreateOrderPage.chooseColorForScooterBlack().click()

    CreateOrderPage.selectorRentalPeriod().click()
    CreateOrderPage.dropDawnSelectDayForRent().click()

    CreateOrderPage.inputCommentForDelivery().type("аываыва")

    CreateOrderPage.buttonFinishOrder().click()

    CreateOrderPage.buttonYesPlaceAnOrder().click()

    CreateOrderPage.orderCreatedSuccessful().should

});