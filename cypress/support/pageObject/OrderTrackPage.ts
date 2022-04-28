export class TrackPage{

    static openMainePage(){
        cy
            .visit('https://qa-scooter.praktikum-services.ru/');

        return this;
    }

    static openTrackPage(){
        cy
            .visit('https://qa-scooter.praktikum-services.ru/track/');

        return this;
    }

    static clickButtonOrderStatus(){
        cy
            .xpath("//*[text()='Статус заказа']")
            .click();

        return this;
    }

    static inputSearchNumberOrderInHeader(NumberOrder: string){
        cy
            .xpath("//input[@class='Input_Input__1iN_Z Header_Input__xIoUq']")
            .type(NumberOrder)

        return this;
    }

    static clickButtonGoSearchNumberOrder(){
        cy
            .xpath("//button[text()='Go!']")
            .click();

        return this;
    }

    static inputSearchNumberOrderInOrderStatusPage(NumberOrder: string){
        cy
            .xpath("//input[@class='Input_Input__1iN_Z Track_Input__1g7lq Input_Responsible__1jDKN']")
            .type(NumberOrder);

        return this;
    }

    static clickButtonWatchSearchNumberOrder(){
        cy
            .xpath("//button[text()='Посмотреть']")
            .click();

        return this;
    }

    static checkImgNotFound(){
        cy
            .xpath("//img[@src='/assets/not-found.png']")
            .should("be.visible");

        return this;
    }
}