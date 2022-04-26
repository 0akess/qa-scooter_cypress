import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it('Проверка ошибки при передачи в поле даты пустого значения', () => {

    CreateOrderPage.orderPage()
    CreateOrderPage.buttonNextStep().click()
    CreateOrderPage.errorMassageMetro().should("be.visible")
})