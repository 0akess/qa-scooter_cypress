import {TrackPage} from "../../pageO/OrderTrackPage";

it('Проверка поиска заказа со страницы Maine с невалидным номером', () =>{

    TrackPage.openMainePage()
    TrackPage.buttonOrderStatus().click()
    TrackPage.inputSearchNumberOrderInHeader().type('234')
    TrackPage.buttonGoSearchNumberOrder().click()
    TrackPage.imgNotFound().should("be.visible")
})