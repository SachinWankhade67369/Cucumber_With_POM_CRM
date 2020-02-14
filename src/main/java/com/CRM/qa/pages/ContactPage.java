package com.CRM.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.CRM.qa.utils.TestBase;

public class ContactPage extends TestBase{

	//Page Factory
	@FindBy(xpath="//div[@class='ui header item mb5 light-black']")
	WebElement contactHeaderLabel;
	
	@FindBy(xpath="//button[@class='ui linkedin button']//i[@class='edit icon']")
	WebElement newLinkbutton;
	
	//Page Object initialization
	public ContactPage() {
		
		PageFactory.initElements(driver, this);
		
	}
	
	//Actions
	
	public String verifyHeaderOfThePage() {
		return contactHeaderLabel.getText();
	}
	
	public NewContactsPage clickOnNewlinkBtn() {
		newLinkbutton.click();
		return new NewContactsPage();
	}
	
	
	
	
}
