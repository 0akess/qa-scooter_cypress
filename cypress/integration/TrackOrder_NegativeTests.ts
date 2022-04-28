import {TrackPage} from "../support/pageObject/OrderTrackPage";


it('Проверка поиска заказа со страницы Track с невалидным номером', () => {

    TrackPage
        .openTrackPage()
        .inputSearchNumberOrderInOrderStatusPage('sdfsd')
        .clickButtonWatchSearchNumberOrder()
        .checkImgNotFound();
});

it('Проверка поиска заказа со страницы Maine с невалидным номером', () => {

    TrackPage
        .openMainePage()
        .clickButtonOrderStatus()
        .inputSearchNumberOrderInHeader('234')
        .clickButtonGoSearchNumberOrder()
        .checkImgNotFound();
});

it('Проверка поиска заказа со страницы Track с невалидным номером', () => {

    TrackPage
        .openTrackPage()
        .inputSearchNumberOrderInOrderStatusPage('1231')
        .clickButtonWatchSearchNumberOrder()
        .checkImgNotFound();
});