import dateTimeISO = CypressCommandLine.dateTimeISO;

export class CreateOrderPage{

    static mainPage(){
        cy
            .visit('https://qa-scooter.praktikum-services.ru/');

        return this;
    }

    static orderPage(){
        cy
            .visit('https://qa-scooter.praktikum-services.ru/order');

        return this;
    }

    static buttonOrderScooter(){
        cy
            .get('.Header_Nav__AGCXC > .Button_Button__ra12g')
            .click();

        return this;
    }

    static buttonFinishOrder(){
        cy
            .get('.Order_Buttons__1xGrp > :nth-child(2)')
            .click();

        return this;
    }

    static buttonOrderScooterMane(){
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

    static errorMassageFirstName(){
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

    static errorMassageAddress(){
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

    static errorMassageMetro(){
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

    static errorMassageNumberPhone(){
        cy
            .xpath("//div[text()='Введите корректный номер']")
            .should("be.visible");

        return this;
    }

    static buttonNextStep(){
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

    static selectorRentalPeriod(){
        cy
            .xpath("//div[text()='* Срок аренды']")
            .click();

        return this;
    }

    static dropDawnSelectDayForRent(){
        cy
            .get('.Dropdown-menu > :nth-child(3)')
            .click();

        return this;
    }

    static chooseColorForScooterBlack(){
        cy
            .xpath("//input[@id='black']")
            .click();

        return this;
    }

    static chooseColorForScooterGrey(){
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

    static buttonStepBack(){
        cy
            .xpath("//button[text()='Назад']")
            .click();

        return this;
    }

    static buttonNoPlaceAnOrder(){
        cy
            .xpath("//*[text()='Нет']")
            .click();

        return this;
    }

    static buttonYesPlaceAnOrder(){
        cy
            .xpath("//div[@class='Order_Buttons__1xGrp']/child::button[text()='Да']")
            .click();

        return this;
    }

    static orderCreatedSuccessful(){
        cy
            .xpath("//*[text()='Заказ оформлен']")
            .should("be.visible");

        return this;
    }

    static errorMassageLastName(){
        cy
            .xpath("//div[text()='Введите корректную фамилию']")
            .should("be.visible");

        return this;
    }
}