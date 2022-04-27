import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it('Проверка ошибки для поля адрес с неверными значениями', () => {

    CreateOrderPage
        .orderPage()
        .inputAddress('dsf34da')
        .buttonNextStep()
        .errorMassageAddress()
})