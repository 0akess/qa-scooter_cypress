import {TrackPage} from "../../pageObject/OrderTrackPage";

it('Проверка поиска заказа со страницы Maine с невалидным номером', () => {

    TrackPage
        .openMainePage()
        .buttonOrderStatus()
        .inputSearchNumberOrderInHeader('234')
        .buttonGoSearchNumberOrder()
        .imgNotFound()
})