import {TrackPage} from "../support/pageObject/OrderTrackPage";

it('Проверка поиска заказа со страницы Track с невалидным номером', () => {

    TrackPage
        .openTrackPage()
        .inputSearchNumberOrderInOrderStatusPage('sdfsd')
        .buttonWatchSearchNumberOrder()
        .imgNotFound();
});

it('Проверка поиска заказа со страницы Maine с невалидным номером', () => {

    TrackPage
        .openMainePage()
        .buttonOrderStatus()
        .inputSearchNumberOrderInHeader('234')
        .buttonGoSearchNumberOrder()
        .imgNotFound();
});

it('Проверка поиска заказа со страницы Track с невалидным номером', () => {

    TrackPage
        .openTrackPage()
        .inputSearchNumberOrderInOrderStatusPage('1231')
        .buttonWatchSearchNumberOrder()
        .imgNotFound();
});