import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it('Проверка валидации с неверными параметрами для поля фамилия', () => {

    CreateOrderPage
        .orderPage()
        .inputLastName('sdfs23e')
        .buttonNextStep()
        .errorMassageLastName()
})