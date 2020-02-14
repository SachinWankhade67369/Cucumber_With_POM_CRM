package com.CRM.qa.stepDefinitions;

import com.CRM.qa.pages.ContactPage;
import com.CRM.qa.pages.HomePage;
import com.CRM.qa.pages.LoginPage;
import com.CRM.qa.pages.NewContactsPage;
import com.CRM.qa.utils.TestBase;

import cucumber.api.java.en.Then;

public class NewContactsPageSteps extends TestBase {

	NewContactsPage newcontactspage = new NewContactsPage();
	
	LoginPage loginPage = new LoginPage();
	HomePage homePage = new HomePage();
	ContactPage contactPage = new ContactPage();

	@Then("^user fill the details about the new users \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and click on save button$")
	public void user_fill_the_details_about_the_new_users_and_click_on_save_button(String first, String last,
			String comp, String mail, String count, String ph) throws Throwable {
		
		newcontactspage.fillTheUserDetailsOfNewUser(first, last, comp, mail, count, ph);
	}

}
