import {CreateOrderPage} from "../../pageObject/CreateOrderPage";

it("Создание заказа со входом из хедера", () => {

    CreateOrderPage
        .mainPage()
        .buttonOrderScooter()
        .inputFirstName("самсоненко")
        .inputLastName("ываыва")
        .inputAddress("ываыва")
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