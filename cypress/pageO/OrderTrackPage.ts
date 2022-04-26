export class TrackPage{

    static openMainePage(){
        return cy.visit('https://qa-scooter.praktikum-services.ru/')
    }

    static openTrackPage(){
        return cy.visit('https://qa-scooter.praktikum-services.ru/track/')
    }

    static buttonOrderStatus(){
        return cy.xpath("//*[text()='Статус заказа']")
    }

    static inputSearchNumberOrderInHeader(){
        return cy.xpath("//input[@class='Input_Input__1iN_Z Header_Input__xIoUq']")
    }

    static buttonGoSearchNumberOrder(){
        return cy.xpath("//button[text()='Go!']")
    }

    static inputSearchNumberOrderInOrderStatusPage(){
        return cy.xpath("//input[@class='Input_Input__1iN_Z Track_Input__1g7lq Input_Responsible__1jDKN']")
    }

    static buttonWatchSearchNumberOrder(){
        return cy.xpath("//button[text()='Посмотреть']")
    }

    static imgNotFound(){
        return cy.xpath("//img[@src='/assets/not-found.png']")
    }
}