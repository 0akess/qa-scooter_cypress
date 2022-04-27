import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it('Проверка без значения для поля фимилия', () => {

    CreateOrderPage
        .orderPage()
        .buttonNextStep()
        .errorMassageLastName()
})