import {TrackPage} from "../../pageO/OrderTrackPage";

it('Проверка поиска заказа со страницы Track с невалидным номером', () => {

    TrackPage.openTrackPage()
    TrackPage.inputSearchNumberOrderInOrderStatusPage().type('1231')
    TrackPage.buttonWatchSearchNumberOrder().click()
    TrackPage.imgNotFound().should("be.visible")
})