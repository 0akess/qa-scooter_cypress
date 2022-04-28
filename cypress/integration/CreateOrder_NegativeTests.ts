import {CreateOrderPage} from "../support/pageObject/CreateOrderPage";

beforeEach(()=>{

    CreateOrderPage
        .openOrderPage();
});

it('Проверка ошибки при пустом поле номер телефона', () => {

    CreateOrderPage
        .clickButtonNextStep()
        .checkErrorMassageNumberPhone();
});

it('Проверка ошибки, при попытки передать некоректный номер телефона', () => {

    CreateOrderPage
        .inputNumberPhone('we4d234d2d')
        .clickButtonNextStep()
        .checkErrorMassageNumberPhone();
});

it('Проверка ошибки при передачи в поле даты пустого значения', () => {

    CreateOrderPage
        .clickButtonNextStep()
        .checkErrorMassageMetro();
});

it('Проверка без значения для поля фимилия', () => {

    CreateOrderPage
        .clickButtonNextStep()
        .checkErrorMassageLastName();
});

it('Проверка валидации с неверными параметрами для поля фамилия', () => {

    CreateOrderPage
        .inputLastName('sdfs23e')
        .clickButtonNextStep()
        .checkErrorMassageLastName();
});

it("Проверка ошибки для поля имя при отсутствии значения", () => {

    CreateOrderPage
        .clickButtonNextStep()
        .checkErrorMassageFirstName();
});

it("тест валидации ферстнейм с невалидными данными", () => {

    CreateOrderPage
        .inputFirstName('ndsd123s')
        .clickButtonNextStep()
        .checkErrorMassageFirstName();
});

it('Проверка ошибки для поля адрес с неверными значениями', () => {

    CreateOrderPage
        .inputAddress('dsf34da')
        .clickButtonNextStep()
        .checkErrorMassageAddress();
});