import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it('Проверка без значения для поля фимилия', () =>{

    CreateOrderPage.orderPage()
    CreateOrderPage.buttonNextStep().click()
    CreateOrderPage.errorMassageLastName().should("be.visible")
})