package com.CRM.qa.stepDefinitions;

import com.CRM.qa.pages.ContactPage;
import com.CRM.qa.pages.HomePage;
import com.CRM.qa.utils.TestBase;

import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class HomePageSteps extends TestBase{
	
	HomePage homepage = new HomePage();
	ContactPage contactpage;
	
	@Then("^user validate the HomePage header$")
	public void user_validate_the_HomePage_header() throws Throwable {
	    boolean header=homepage.VerifyHeaderOfHomePage();
	    Assert.assertTrue(header);
	}

	@Then("^user clicks on Contacts link$")
	public void user_clicks_on_Contacts_link() throws Throwable {
		Thread.sleep(4000);
	   contactpage=homepage.clickOnContactLink();
	   Thread.sleep(3000);
	}

}
