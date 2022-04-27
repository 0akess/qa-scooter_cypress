import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it("Создание заказа со входом из главной страницы", () => {

    CreateOrderPage
        .mainPage()
        .buttonOrderScooterMane()
        .inputFirstName("самсон")
        .inputLastName("Аываыва")
        .inputAddress("ЫВАЫыва")
        .inputMetro("Сокольники")
        .inputNumberPhone("89172057433")
        .buttonNextStep()
        .inputDateForDelivery("10.03.2022")
        .chooseColorForScooterBlack()
        .selectorRentalPeriod()
        .dropDawnSelectDayForRent()
        .inputCommentForDelivery("аываыва")
        .buttonFinishOrder()
        .buttonYesPlaceAnOrder()
        .orderCreatedSuccessful()
});