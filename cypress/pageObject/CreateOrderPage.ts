export class CreateOrderPage{

    static mainPage(){
        cy.visit('https://qa-scooter.praktikum-services.ru/')
    }

    static orderPage(){
        return cy.visit('https://qa-scooter.praktikum-services.ru/order')
    }

    static buttonOrderScooter(){
        return cy.get('.Header_Nav__AGCXC > .Button_Button__ra12g')
    }

    static buttonFinishOrder(){
        return cy.get('.Order_Buttons__1xGrp > :nth-child(2)')
    }

    static buttonOrderScooterMane(){
        return cy.get('.Home_FinishButton__1_cWm > .Button_Button__ra12g')
    }

    static inputFirstName(){
        return cy.xpath("//input[@placeholder='* Имя']");
    }

    static errorMassageFirstName(){
        return cy.xpath("//div[text()='Введите корректное имя']");
    }

    static inputLastName(){
        return cy.xpath("//input[@placeholder='* Фамилия']");
    }

    static inputAddress(){
        return cy.xpath("//input[@placeholder='* Адрес: куда привезти заказ']");
    }

    static errorMassageAddress(){
        return cy.xpath("//div[text()='Введите корректный адрес']");
    }

    static inputMetro(){
        return cy.xpath("//input[@placeholder='* Станция метро']");
    }

    static errorMassageMetro(){
        return cy.xpath("//div[text()='Выберите станцию']");
    }

    static inputNumberPhone(){
        return cy.xpath("//input[@placeholder='* Телефон: на него позвонит курьер']");
    }

    static errorMassageNumberPhone(){
        return cy.xpath("//div[text()='Введите корректный номер']");
    }

    static buttonNextStep(){
        return cy.xpath("//button[text()='Далее']")
    }

    static inputDateForDelivery(){
        return cy.xpath("//input[@placeholder='* Когда привезти самокат']");
    }

    static selectorRentalPeriod(){
        return cy.xpath("//div[text()='* Срок аренды']");
    }

    static dropDawnSelectDayForRent(){
        return cy.get('.Dropdown-menu > :nth-child(3)');
    }

    static chooseColorForScooterBlack(){
        return cy.xpath("//input[@id='black']");
    }

    static chooseColorForScooterGrey(){
        return cy.xpath("//input[@id='grey']");
    }

    static inputCommentForDelivery(){
        return cy.xpath("//input[@placeholder='Комментарий для курьера']");
    }

    static buttonStepBack(){
        return cy.xpath("//button[text()='Назад']");
    }

    static buttonNoPlaceAnOrder(){
        return cy.xpath("//*[text()='Нет']");
    }

    static buttonYesPlaceAnOrder(){
        return cy.xpath("//div[@class='Order_Buttons__1xGrp']/child::button[text()='Да']");
    }

    static orderCreatedSuccessful(){
        return cy.xpath("//*[text()='Заказ оформлен']");
    }

    static errorMassageLastName(){
        return cy.xpath("//div[text()='Введите корректную фамилию']");
    }
}