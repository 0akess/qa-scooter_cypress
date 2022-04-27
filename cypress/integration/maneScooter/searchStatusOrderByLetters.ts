import {TrackPage} from "../../pageObject/OrderTrackPage";

it('Проверка поиска заказа со страницы Track с невалидным номером', () => {

    TrackPage
        .openTrackPage()
        .inputSearchNumberOrderInOrderStatusPage('sdfsd')
        .buttonWatchSearchNumberOrder()
        .imgNotFound()
})