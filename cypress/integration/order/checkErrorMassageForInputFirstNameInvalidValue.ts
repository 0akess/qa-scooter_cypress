import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it("тест валидации ферстнейм с невалидными данными", () =>{

    CreateOrderPage.orderPage()

    CreateOrderPage.inputFirstName().type('ndsd123s')
    CreateOrderPage.buttonNextStep().click()
    CreateOrderPage.errorMassageFirstName().should("be.visible")
})