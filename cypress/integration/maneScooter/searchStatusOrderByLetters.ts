import {TrackPage} from "../../pageObject/OrderTrackPage";

it('Проверка поиска заказа со страницы Track с невалидным номером', () =>{

    TrackPage.openTrackPage()
    TrackPage.inputSearchNumberOrderInOrderStatusPage().type('sdfsd')
    TrackPage.buttonWatchSearchNumberOrder().click()
    TrackPage.imgNotFound().should("be.visible")
})