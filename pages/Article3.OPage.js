const { number } = require("joi");
const testdataProperties = require("../resources/testdata.properties");

const { I, expectedAssertionsPage } = inject();

module.exports = {

  //Elements--------------------------------------------------------------------------
  txttabarticleandblog: "//a[text()='Article And Blogs']",
  txtabarticle3O: "//p[text()='AI Article Writer 3.0']",
  txttopic: "//input[@placeholder='Artificial Intelligence in Copywriting']",
  txtqualitytype: "//input[@class='capitalize pl-3  bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']",
  txteconomy: "//span[text()='economy']",
  txtlanguage: "//input[@class='pl-10 bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']",
  txtenglish: "//span[text()='English']",
  txtoutput: "//input[@class='customArrows flex items-center w-full lg:w-fit h-12 appearance-none block w-full px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-1 focus:border-transparent text-sm pr-16 sm:pr-0 sm:px-0 sm:min-w-[52px] sm:pl-[10px] smd:pr-8 !w-full']",
  btngenerate: "//p[text()='Generate']",
  dropdown: "//button[@id='headlessui-combobox-button-:r2t:']",
  rdotitle: "//span[@class='rounded-full w-3 h-3 bg-white']",
  btnregenerate: "//p[text()='Regenerate']",
  rdooutline: "//span[@class='h-5 w-5 mt-0.5 cursor-pointer rounded-full flex items-center justify-center border-gray-300 border']",
  gettxteditthisarticle: "//div[text()='Edit this article with']",
  gettxtValueisnotavalidinteger: "//div[text()='Value is not a valid integer']",
  txttitle: "//input[@placeholder='How Artificial Intelligence Will Change The World Of Copywriting']",
  txtarticleintro: "//div[@class='mt-1 relative']//child::textarea",
  btnclearoutline: "svg[letxxpath=letX]",
  tabgetanarticle: "//p[text()='GET AN ARTICLE']",
  tabgetideas: "//p[text()='GET IDEAS']",
  tabgetanintro: "//p[text()='GET AN INTRO']",
  tabgetanoutline: "//p[text()='GET AN OUTLINE']",
  btnsave: "//div[@class='sticky ml-8 left-4 bottom-4 gap-2 items-center hidden sm:flex tabletStars:sticky']//child::div//child::button",
  btncopy: "//button[@aria-label='Copy to clipboard']",
  //Methods----------------------------------------------------------------------------------

  clickOnArticle3Ofeature() {
    I.waitForVisible(this.txttabarticleandblog, 50);
    I.click(this.txttabarticleandblog);
    I.click(this.txtabarticle3O);
  },
  clickOnGenerateButton() {
    I.click(this.btngenerate);
  },
  clickOnGetIdeasTab() {
    I.click(this.tabgetideas);
  },
  clickOnGetAnOutlineTab() {
    I.click(this.tabgetanoutline);
  },
  clickOnGetAnIntroab() {
    I.click(this.tabgetanintro);
  },
  clickOnGetAnArticleTab() {
    I.click(this.tabgetanarticle);
  },
  setTopicField(topic) {
    I.fillField(this.txttopic, topic);
  },
  setQualityTypeAsEconomy(economy) {
    I.fillField(this.txtqualitytype, economy);
    I.click(this.txteconomy);
  },
  setLanguageAsEnglish(english) {
    I.fillField(this.txtlanguage, english);
    I.click(this.txtenglish);
  },
  setOutputs(outputvalue) {
    I.fillField(this.txtoutput, outputvalue);
  },
  clickOnRadioBtn() {
    I.click(this.rdotitle);
  },
  clickOnRadioBtnForOutline() {
    I.waitForVisible(this.rdooutline, 10);
    I.click(this.rdooutline);
  },
  clickOnSaveBtn() {
    I.waitForVisible(this.btnsave, 100);
    I.click(this.btnsave);
  },
  clickOnCopyBtn() {
    I.moveCursorTo(this.btncopy);
    I.waitForVisible(this.btncopy, 10);
    I.click(this.btncopy);
  },
}