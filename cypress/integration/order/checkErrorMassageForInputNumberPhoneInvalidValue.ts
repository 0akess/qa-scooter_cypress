import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it('Проверка ошибки, при попытки передать некоректный номер телефона', () =>{

    CreateOrderPage.orderPage()
    CreateOrderPage.inputNumberPhone().type('we4d234d2d')
    CreateOrderPage.buttonNextStep().click()
    CreateOrderPage.errorMassageNumberPhone().should("be.visible")
})