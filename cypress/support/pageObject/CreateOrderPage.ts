export class CreateOrderPage{

    static openMainePage(){
        cy
            .visit('https://qa-scooter.praktikum-services.ru/');

        return this;
    }

    static openOrderPage(){
        cy
            .visit('https://qa-scooter.praktikum-services.ru/order');

        return this;
    }

    static clickButtonOrderScooter(){
        cy
            .get('.Header_Nav__AGCXC > .Button_Button__ra12g')
            .click();

        return this;
    }

    static clickButtonFinishOrder(){
        cy
            .get('.Order_Buttons__1xGrp > :nth-child(2)')
            .click();

        return this;
    }

    static clickButtonOrderScooterMane(){
        cy
            .get('.Home_FinishButton__1_cWm > .Button_Button__ra12g')
            .click();

        return this;
    }

    static inputFirstName(FirstName: string){
        cy
            .xpath("//input[@placeholder='* Имя']")
            .type(FirstName);

        return this;
    }

    static checkErrorMassageFirstName(){
        cy
            .xpath("//div[text()='Введите корректное имя']")
            .should("be.visible");

        return this;
    }

    static inputLastName(LastName: string){
        cy
            .xpath("//input[@placeholder='* Фамилия']")
            .type(LastName);

        return this;
    }

    static inputAddress(Address: string){
        cy
            .xpath("//input[@placeholder='* Адрес: куда привезти заказ']")
            .type(Address);

        return this;
    }

    static checkErrorMassageAddress(){
        cy
            .xpath("//div[text()='Введите корректный адрес']")
            .should("be.visible");

        return this;
    }

    static inputMetro(Metro: string){
        cy
            .xpath("//input[@placeholder='* Станция метро']")
            .type(Metro);
        cy
            .xpath("//*[text()='Сокольники']")
            .click()

        return this;
    }

    static checkErrorMassageMetro(){
        cy
            .xpath("//div[text()='Выберите станцию']")
            .should("be.visible");

        return this;
    }

    static inputNumberPhone(NumberPhone: string){
        cy
            .xpath("//input[@placeholder='* Телефон: на него позвонит курьер']")
            .type(NumberPhone);

        return this;
    }

    static checkErrorMassageNumberPhone(){
        cy
            .xpath("//div[text()='Введите корректный номер']")
            .should("be.visible");

        return this;
    }

    static clickButtonNextStep(){
        cy
            .xpath("//button[text()='Далее']")
            .click();

        return this;
    }

    static inputDateForDelivery(DateForDelivery: string){
        cy
            .xpath("//input[@placeholder='* Когда привезти самокат']")
            .type(DateForDelivery);

        return this;
    }

    static clickSelectorRentalPeriod(){
        cy
            .xpath("//div[text()='* Срок аренды']")
            .click();

        return this;
    }

    static clickDropDawnSelectDayForRent(){
        cy
            .get('.Dropdown-menu > :nth-child(3)')
            .click();

        return this;
    }

    static clickChooseColorForScooterBlack(){
        cy
            .xpath("//input[@id='black']")
            .click();

        return this;
    }

    static clickChooseColorForScooterGrey(){
        cy
            .xpath("//input[@id='grey']")
            .click();

        return this;
    }

    static inputCommentForDelivery(CommentForDelivery: string){
        cy
            .xpath("//input[@placeholder='Комментарий для курьера']")
            .type(CommentForDelivery)

        return this;
    }

    static clickButtonStepBack(){
        cy
            .xpath("//button[text()='Назад']")
            .click();

        return this;
    }

    static clickButtonNoPlaceAnOrder(){
        cy
            .xpath("//*[text()='Нет']")
            .click();

        return this;
    }

    static clickButtonYesPlaceAnOrder(){
        cy
            .xpath("//div[@class='Order_Buttons__1xGrp']/child::button[text()='Да']")
            .click();

        return this;
    }

    static checkOrderCreatedSuccessful(){
        cy
            .xpath("//*[text()='Заказ оформлен']")
            .should("be.visible");

        return this;
    }

    static checkErrorMassageLastName(){
        cy
            .xpath("//div[text()='Введите корректную фамилию']")
            .should("be.visible");

        return this;
    }
}