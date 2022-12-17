const { number } = require("joi");
const testdataProperties = require("../resources/testdata.properties");

const { I, expectedAssertionsPage } = inject();
module.exports = {
    //Elements--------------------------------------------------  
    btnsearchkeywords: "//div[text()='Search Keywords']",
    txttabarticleandblog: "//a[text()='Article And Blogs']",
    txttoneofvoice: "(//input[contains(@class,'pl-3 ')])[1]",
    txtexcited: "//span[text()='Excited']",
    txtprofessional: "//span[text()='Professional']",
    txtencouraging: "//span[text()='Encouraging']",
    txtfunny: "//span[text()='Funny']",
    txtdramatic: "//span[text()='Dramatic']",
    txtwitty: "//span[text()='Witty']",
    txtfirstperson: "//span[text()='First Person']",
    txtsecondperson: "//span[text()='Second Person']",
    txtthirdperson: "//span[text()='Third Person']",
    txtarticle4o: "//p[text()='AI Article Writer 4.0']",
    chkkeyword: "(//input[@type='checkbox'])[2]",
    btnnext: "//div[text()='Next']",
    rdotitle4o: "//div[@class='flex flex-col w-full']",
    txtpointofview: "(//input[contains(@class,'pl-3 ')])[2]",


    //Methods---------------------------------------------------

    clickOnSearchKeywords() {

        I.click(this.btnsearchkeywords);
    },
    setToneOfVoice(toneofvoice) {

        I.fillField(this.txttoneofvoice, toneofvoice);
    },
    setPointOfView(pointofview) {

        I.fillField(this.txtpointofview, pointofview);
    },
    clickOnProfessional() {

        I.click(this.txtprofessional);
    },
    clickOnExcited() {

        I.click(this.txtexcited);
    },
    clickOnEncouraging() {

        I.click(this.txtencouraging);
    },
    clickOnFunny() {

        I.click(this.txtfunny);
    },
    clickOnDramatic() {

        I.click(this.txtdramatic);
    },
    clickOnWitty() {

        I.click(this.txtwitty);
    },
    clickOnArticle4Ofeature() {
        I.waitForVisible(this.txttabarticleandblog, 50);
        I.click(this.txttabarticleandblog);
        I.click(this.txtarticle4o);
    },
    clickOnKeywordCheckBox() {
        
        I.waitForVisible(this.chkkeyword,50);
        I.click(this.chkkeyword);

    },
    clickOnKeywordCheckBox() {
        I.click(this.chkkeyword);
    },
    clickOnNextButton() {
        I.click(this.btnnext);
    },
    clickOnFirstPerson() {

        I.click(this.txtfirstperson);
    },
    clickOnSecondPerson() {

        I.click(this.txtsecondperson);
    },
    clickOnThirdPerson() {

        I.click(this.txtthirdperson);
    },
    clickOnRadioButtonFortitle() {

        I.click(this.rdotitle4o);
    },
}