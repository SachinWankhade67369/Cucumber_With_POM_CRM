package com.CRM.qa.stepDefinitions;

import com.CRM.qa.pages.HomePage;
import com.CRM.qa.pages.LoginPage;
import com.CRM.qa.utils.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class LoginSteps extends TestBase{
	
	 LoginPage loginpage;	
	 HomePage homepage;
	
	@Given("^user open browser$")
	public void user_open_browser() throws Throwable {
	    initialization();
	}
	
	@Then("^user validate the loginPage title$")
	public void validate_the_loginpage_title(){
		loginpage = new LoginPage();
		String title=loginpage.verifyLoginPageTitle();
		Assert.assertEquals("CRM", title);
		
	}

	@Then("^user enters credentials and click on login button$")
	public void user_enters_credentials_and_click_on_login_button() throws Throwable {
	    loginpage= new LoginPage();
		homepage=loginpage.verifyLoginCredentials(prop.getProperty("username"), prop.getProperty("password"));
		
	}

	@Then("^user is on the homePage$")
	public void user_is_on_the_homePage() throws Throwable {
	   
		boolean flag=loginpage.verifyUserNameDisplay();
		System.out.println(flag);
		Assert.assertTrue(flag);
	}

	@Then("^close the currunt browser$")
	public void close_the_currunt_browser() throws Throwable {
	    driver.close();
	}


}
