import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it('Проверка ошибки для поля адрес с неверными значениями', () =>{

    CreateOrderPage.orderPage()
    CreateOrderPage.inputAddress().type('dsf34da')
    CreateOrderPage.buttonNextStep().click()
    CreateOrderPage.errorMassageAddress().should("be.visible")
})