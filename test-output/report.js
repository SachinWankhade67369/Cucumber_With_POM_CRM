$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Test WorkSpace/Cucumber_With_POM_CRM/src/main/java/com/CRM/qa/features/4_NewContactsPage.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Application Feature",
  "description": "",
  "id": "crm-application-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "CRM Application HomePage Test",
  "description": "",
  "id": "crm-application-feature;crm-application-homepage-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters credentials and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on the New button to fill the new user details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user fill the details about the new users \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003ccompany\u003e\" and \"\u003cemail\u003e\" and \"\u003ccountry\u003e\" and \"\u003cphone\u003e\" and click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the currunt browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "crm-application-feature;crm-application-homepage-test;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "company",
        "email",
        "country",
        "phone"
      ],
      "line": 14,
      "id": "crm-application-feature;crm-application-homepage-test;;1"
    },
    {
      "cells": [
        "sachin",
        "wankhade",
        "sw technologies pvt ltd",
        "sb@gmail.com",
        "India",
        "123456789"
      ],
      "line": 15,
      "id": "crm-application-feature;crm-application-homepage-test;;2"
    },
    {
      "cells": [
        "nilesh",
        "mulekar",
        "nm technologies pvt ltd",
        "nm@gmail.com",
        "India",
        "122342389"
      ],
      "line": 16,
      "id": "crm-application-feature;crm-application-homepage-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "CRM Application HomePage Test",
  "description": "",
  "id": "crm-application-feature;crm-application-homepage-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters credentials and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on the New button to fill the new user details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user fill the details about the new users \"sachin\" and \"wankhade\" and \"sw technologies pvt ltd\" and \"sb@gmail.com\" and \"India\" and \"123456789\" and click on save button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the currunt browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_open_browser()"
});
formatter.result({
  "duration": 44098812444,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_credentials_and_click_on_login_button()"
});
formatter.result({
  "duration": 576300916,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_on_Contacts_link()"
});
formatter.result({
  "duration": 7184357143,
  "status": "passed"
});
formatter.match({
  "location": "ContactPageSteps.user_click_on_the_New_button_to_fill_the_new_user_details()"
});
formatter.result({
  "duration": 619886715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sachin",
      "offset": 43
    },
    {
      "val": "wankhade",
      "offset": 56
    },
    {
      "val": "sw technologies pvt ltd",
      "offset": 71
    },
    {
      "val": "sb@gmail.com",
      "offset": 101
    },
    {
      "val": "India",
      "offset": 120
    },
    {
      "val": "123456789",
      "offset": 132
    }
  ],
  "location": "NewContactsPageSteps.user_fill_the_details_about_the_new_users_and_click_on_save_button(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1101008267,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027SACHU-PC\u0027, ip: \u0027192.168.1.223\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\SACHU\\AppData\\Local\\Temp\\scoped_dir4960_1246103754}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54025}, acceptInsecureCerts\u003dfalse, browserVersion\u003d76.0.3809.132, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: a30b48a3d56972395bdbe9786a25d0ce\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:99)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat com.CRM.qa.pages.NewContactsPage.fillTheUserDetailsOfNewUser(NewContactsPage.java:48)\r\n\tat com.CRM.qa.stepDefinitions.NewContactsPageSteps.user_fill_the_details_about_the_new_users_and_click_on_save_button(NewContactsPageSteps.java:23)\r\n\tat ✽.Then user fill the details about the new users \"sachin\" and \"wankhade\" and \"sw technologies pvt ltd\" and \"sb@gmail.com\" and \"India\" and \"123456789\" and click on save button(D:/Test WorkSpace/Cucumber_With_POM_CRM/src/main/java/com/CRM/qa/features/4_NewContactsPage.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.close_the_currunt_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "CRM Application HomePage Test",
  "description": "",
  "id": "crm-application-feature;crm-application-homepage-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters credentials and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on the New button to fill the new user details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user fill the details about the new users \"nilesh\" and \"mulekar\" and \"nm technologies pvt ltd\" and \"nm@gmail.com\" and \"India\" and \"122342389\" and click on save button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the currunt browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_open_browser()"
});
formatter.result({
  "duration": 9648684515,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"No target with given id\"}\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027SACHU-PC\u0027, ip: \u0027192.168.1.223\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\SACHU\\AppData\\Local\\Temp\\scoped_dir6356_1351103598}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54099}, acceptInsecureCerts\u003dfalse, browserVersion\u003d76.0.3809.132, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 63b9d2592986c767273d20f2c7896bb9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:934)\r\n\tat com.CRM.qa.utils.TestBase.initialization(TestBase.java:50)\r\n\tat com.CRM.qa.stepDefinitions.LoginSteps.user_open_browser(LoginSteps.java:18)\r\n\tat ✽.Given user open browser(D:/Test WorkSpace/Cucumber_With_POM_CRM/src/main/java/com/CRM/qa/features/4_NewContactsPage.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_enters_credentials_and_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_on_Contacts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactPageSteps.user_click_on_the_New_button_to_fill_the_new_user_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "nilesh",
      "offset": 43
    },
    {
      "val": "mulekar",
      "offset": 56
    },
    {
      "val": "nm technologies pvt ltd",
      "offset": 70
    },
    {
      "val": "nm@gmail.com",
      "offset": 100
    },
    {
      "val": "India",
      "offset": 119
    },
    {
      "val": "122342389",
      "offset": 131
    }
  ],
  "location": "NewContactsPageSteps.user_fill_the_details_about_the_new_users_and_click_on_save_button(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_currunt_browser()"
});
formatter.result({
  "status": "skipped"
});
});