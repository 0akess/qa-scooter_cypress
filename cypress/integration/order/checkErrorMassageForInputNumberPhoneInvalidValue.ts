import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it('Проверка ошибки, при попытки передать некоректный номер телефона', () => {

    CreateOrderPage
        .orderPage()
        .inputNumberPhone('we4d234d2d')
        .buttonNextStep()
        .errorMassageNumberPhone()
})