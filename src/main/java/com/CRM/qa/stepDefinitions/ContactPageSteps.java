package com.CRM.qa.stepDefinitions;

import com.CRM.qa.pages.ContactPage;
import com.CRM.qa.pages.NewContactsPage;
import com.CRM.qa.utils.TestBase;

import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class ContactPageSteps extends TestBase{
	
	ContactPage contactpage;
	NewContactsPage newcontactspage;
	
	
	
	@Then("^user validate the header of page$")
	public void user_validate_the_header_of_page() throws Throwable {
	  
		contactpage= new ContactPage();
		String headerlabel=contactpage.verifyHeaderOfThePage();
		Assert.assertEquals("Contacts", headerlabel);
	}

	@Then("^user click on the New button to fill the new user details$")
	public void user_click_on_the_New_button_to_fill_the_new_user_details() throws Throwable {
		
		contactpage= new ContactPage();
		newcontactspage=contactpage.clickOnNewlinkBtn();
		
	}

}
