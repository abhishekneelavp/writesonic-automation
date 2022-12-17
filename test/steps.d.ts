/// <reference types='codeceptjs' />
type steps_file = typeof import('../steps_file.js');
type loginPage = typeof import('../pages/WritesonicLogin.js');
type testDataPage = typeof import('../resources/testdata.properties.js');
type expectedAssertionsPage = typeof import('../resources/expectedassertions.properties.js');
type article3OPage = typeof import('../pages/Article3.OPage');
type article4OPage = typeof import('../pages/Article4.OPage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, testDataPage: testDataPage, expectedAssertionsPage: expectedAssertionsPage, article3OPage: article3OPage,article4OPage: article4OPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
