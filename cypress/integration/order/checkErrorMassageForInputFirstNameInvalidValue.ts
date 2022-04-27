import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it("тест валидации ферстнейм с невалидными данными", () => {

    CreateOrderPage
        .orderPage()
        .inputFirstName('ndsd123s')
        .buttonNextStep()
        .errorMassageFirstName()
})