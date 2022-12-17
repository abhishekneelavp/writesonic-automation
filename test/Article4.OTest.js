
Feature('Article4.OTest');

Before(({ I, loginPage, testDataPage }) => {
    I.amOnPage(testDataPage.home.baseUrl);
    loginPage.loginUserforallfeatures(testDataPage.login.email, testDataPage.login.password);

})

Scenario('@ mandatory validation for all input fields', ({ I,article4OPage, article3OPage, expectedAssertionsPage }) => {
    I.wait(5);
    article4OPage.clickOnArticle4Ofeature();
    I.see(expectedAssertionsPage.Article4O.gettxtaiarticle4o);
    article4OPage.clickOnSearchKeywords();
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertatopic);
    article3OPage.clickOnGetIdeasTab();
    article3OPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertatopic);
    I.see(expectedAssertionsPage.Article4O.gettxtpleaseinsertkeywords);
    article3OPage.clickOnGetAnOutlineTab();
    article3OPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.Article4O.gettxtpleaseinsertkeywords);
    article3OPage.clickOnGetAnArticleTab();
    article3OPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.Article4O.gettxtpleaseinsertkeywords);
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseaddatleast4outlines);
});

Scenario('@Article 4.O feature', ({ I, article3OPage, article4OPage, testDataPage, expectedAssertionsPage }) => {
    article4OPage.clickOnArticle4Ofeature();
    article3OPage.setTopicField(testDataPage.Article3Otest.empty);
    article4OPage.clickOnSearchKeywords();
    I.see(expectedAssertionsPage.Article3O.gettxtPleaseinsertatopic);
    article3OPage.setTopicField(testDataPage.Article3Otest.topic);
    article4OPage.clickOnSearchKeywords();
    I.wait(15);
    article4OPage.clickOnKeywordCheckBox();
    article4OPage.clickOnNextButton();
    article4OPage.setToneOfVoice(testDataPage.Article4o.excited);
    article4OPage.clickOnExcited();
    article4OPage.setPointOfView(testDataPage.Article4o.firstPerson);
    article4OPage.clickOnFirstPerson();
    article3OPage.setOutputs(testDataPage.Article3Otest.outputs);
    article3OPage.clickOnGenerateButton();
    article3OPage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.Article3O.gettxttexthasbeencopiedtoclipboard);
    article4OPage.clickOnRadioButtonFortitle();
    article4OPage.setToneOfVoice(testDataPage.Article4o.encouraging);
    article4OPage.clickOnEncouraging();
    article4OPage.setPointOfView(testDataPage.Article4o.thirdperson);
    article4OPage.clickOnThirdPerson();
    article3OPage.setOutputs(testDataPage.Article3Otest.outputs);
    article3OPage.clickOnGenerateButton();
    article3OPage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.Article3O.gettxttexthasbeencopiedtoclipboard);
    article3OPage.clickOnRadioBtnForOutline();
    article4OPage.setToneOfVoice(testDataPage.Article4o.witty);
    article4OPage.clickOnWitty();
    article3OPage.clickOnGenerateButton();
    article3OPage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.Article3O.gettextCopyhasbeensavedsuccessfully);
    article3OPage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.Article3O.gettextCopyhasbeenunsavedsuccessfully);
});
