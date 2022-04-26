import {CreateOrderPage} from "../../pageO/CreateOrderPage";

it('Проверка валидации с неверными параметрами для поля фамилия', () =>{

    CreateOrderPage.orderPage()

    CreateOrderPage.inputLastName().type('sdfs23e')
    CreateOrderPage.buttonNextStep().click()
    CreateOrderPage.errorMassageLastName().should("be.visible")
})