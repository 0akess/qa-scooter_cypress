import {CreateOrderPage} from "../../pageO/CreateOrderPage";

it('Проверка ошибки при пустом поле номер телефона', () => {

    CreateOrderPage.orderPage()
    CreateOrderPage.buttonNextStep().click()
    CreateOrderPage.errorMassageNumberPhone().should("be.visible")
})