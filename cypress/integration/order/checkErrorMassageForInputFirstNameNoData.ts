import {CreateOrderPage} from "../../pageO/CreateOrderPage";

it("Проверка ошибки для поля имя при отсутствии значения", () =>{

    CreateOrderPage.orderPage()

    CreateOrderPage.buttonNextStep().click()
    CreateOrderPage.errorMassageFirstName().should("be.visible")
})