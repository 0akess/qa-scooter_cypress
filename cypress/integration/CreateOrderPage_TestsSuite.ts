import {CreateOrderPage} from "../pageObject/CreateOrderPage";

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
        .orderCreatedSuccessful();
});

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

it('Проверка ошибки при пустом поле номер телефона', () => {

    CreateOrderPage
        .orderPage()
        .buttonNextStep()
        .errorMassageNumberPhone();
});

it('Проверка ошибки, при попытки передать некоректный номер телефона', () => {

    CreateOrderPage
        .orderPage()
        .inputNumberPhone('we4d234d2d')
        .buttonNextStep()
        .errorMassageNumberPhone();
});

it('Проверка ошибки при передачи в поле даты пустого значения', () => {

    CreateOrderPage
        .orderPage()
        .buttonNextStep()
        .errorMassageMetro();
});

it('Проверка без значения для поля фимилия', () => {

    CreateOrderPage
        .orderPage()
        .buttonNextStep()
        .errorMassageLastName();
});

it('Проверка валидации с неверными параметрами для поля фамилия', () => {

    CreateOrderPage
        .orderPage()
        .inputLastName('sdfs23e')
        .buttonNextStep()
        .errorMassageLastName();
});

it("Проверка ошибки для поля имя при отсутствии значения", () => {

    CreateOrderPage
        .orderPage()
        .buttonNextStep()
        .errorMassageFirstName();
});

it("тест валидации ферстнейм с невалидными данными", () => {

    CreateOrderPage
        .orderPage()
        .inputFirstName('ndsd123s')
        .buttonNextStep()
        .errorMassageFirstName();
});

it('Проверка ошибки для поля адрес с неверными значениями', () => {

    CreateOrderPage
        .orderPage()
        .inputAddress('dsf34da')
        .buttonNextStep()
        .errorMassageAddress();
});