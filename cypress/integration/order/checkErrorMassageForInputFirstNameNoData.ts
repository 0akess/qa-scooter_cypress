import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it("Проверка ошибки для поля имя при отсутствии значения", () => {

    CreateOrderPage
        .orderPage()
        .buttonNextStep()
        .errorMassageFirstName()
})