import {CreateOrderPage} from "../support/pageObject/CreateOrderPage";

beforeEach(()=>{

    CreateOrderPage
        .openMainePage();
});

it("Создание заказа со входом из главной страницы", () => {

    CreateOrderPage
        .clickButtonOrderScooterMane()
        .inputFirstName("самсон")
        .inputLastName("Аываыва")
        .inputAddress("ЫВАЫыва")
        .inputMetro("Сокольники")
        .inputNumberPhone("89172057433")
        .clickButtonNextStep()
        .inputDateForDelivery("10.03.2022")
        .clickChooseColorForScooterBlack()
        .clickSelectorRentalPeriod()
        .clickDropDawnSelectDayForRent()
        .inputCommentForDelivery("аываыва")
        .clickButtonFinishOrder()
        .clickButtonYesPlaceAnOrder()
        .checkOrderCreatedSuccessful();
});

it("Создание заказа со входом из хедера", () => {

    CreateOrderPage
        .clickButtonOrderScooter()
        .inputFirstName("самсоненко")
        .inputLastName("ываыва")
        .inputAddress("ываыва")
        .inputMetro("Сокольники")
        .inputNumberPhone("89172057433")
        .clickButtonNextStep()
        .inputDateForDelivery("10.03.2022")
        .clickChooseColorForScooterBlack()
        .clickSelectorRentalPeriod()
        .clickDropDawnSelectDayForRent()
        .inputCommentForDelivery("аываыва")
        .clickButtonFinishOrder()
        .clickButtonYesPlaceAnOrder()
        .checkOrderCreatedSuccessful()
});