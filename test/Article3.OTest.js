Feature('Article3.OTest.js');

Before(({ I, loginPage, testDataPage }) => {
    I.amOnPage(testDataPage.home.baseUrl);
    loginPage.loginUserforallfeatures(testDataPage.login.email, testDataPage.login.password);

})

Scenario('@ mandatory validation for all input fields', ({ I, article3OPage, expectedAssertionsPage }) => {
    I.wait(5);
    article3OPage.clickOnArticle3Ofeature();
    I.see(expectedAssertionsPage.Article3O.txtaiarticle3o);
    article3OPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertatopic);
    article3OPage.clickOnGetAnIntroab();
    article3OPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertatopic);
    article3OPage.clickOnGetAnOutlineTab();
    article3OPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertaintro);
    I.see(expectedAssertionsPage.Article3O.gettxtEnsurethisvaluehasatleast2charactersensurethisvaluehasatleast2characters);
    article3OPage.clickOnGetAnArticleTab();
    article3OPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertanintro);
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseaddatleast4outlines);
});

Scenario('@Verify Article 3.O feature', ({ I, article3OPage, testDataPage, expectedAssertionsPage }) => {
    I.wait(5);
    article3OPage.clickOnArticle3Ofeature();
    I.see(expectedAssertionsPage.Article3O.txtaiarticle3o);
    article3OPage.setTopicField(testDataPage.Article3Otest.topic);
    article3OPage.setQualityTypeAsEconomy(testDataPage.Article3Otest.qualitytype);
    article3OPage.setLanguageAsEnglish(testDataPage.Article3Otest.language);
    article3OPage.setOutputs(testDataPage.Article3Otest.outputs);
    article3OPage.clickOnGenerateButton();
    article3OPage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.Article3O.gettxttexthasbeencopiedtoclipboard);
    article3OPage.clickOnRadioBtn();
    I.see(expectedAssertionsPage.Article3O.getanintrotabtitlefield);
    article3OPage.setQualityTypeAsEconomy(testDataPage.Article3Otest.qualitytype);
    article3OPage.setLanguageAsEnglish(testDataPage.Article3Otest.language);
    article3OPage.setOutputs(testDataPage.Article3Otest.outputs);
    article3OPage.clickOnGenerateButton();
    article3OPage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.Article3O.gettxttexthasbeencopiedtoclipboard);
    article3OPage.clickOnRadioBtn();
    I.see(expectedAssertionsPage.Article3O.gettxtarticleintro);
    article3OPage.setQualityTypeAsEconomy(testDataPage.Article3Otest.qualitytype);
    article3OPage.setOutputs(testDataPage.Article3Otest.outputs);
    article3OPage.clickOnGenerateButton();
    article3OPage.clickOnRadioBtnForOutline();
    article3OPage.setQualityTypeAsEconomy(testDataPage.Article3Otest.qualitytype);
    article3OPage.setLanguageAsEnglish(testDataPage.Article3Otest.language);
    article3OPage.clickOnGenerateButton();
    article3OPage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.Article3O.gettextCopyhasbeensavedsuccessfully);
    article3OPage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.Article3O.gettextCopyhasbeenunsavedsuccessfully);
});
