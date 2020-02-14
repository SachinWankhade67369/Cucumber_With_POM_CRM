package com.CRM.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.CRM.qa.utils.TestBase;

public class HomePage extends TestBase{
	
	//Page Factory
	
	@FindBy(xpath="//div[@class='header item']")
	WebElement homePageHeader;
	
	@FindBy(linkText="Contacts")
	WebElement contactLink;
	
	
	
	public HomePage() {
	
		PageFactory.initElements(driver, this);
		
	}
	
	
	public boolean VerifyHeaderOfHomePage() {
		return homePageHeader.isDisplayed();
				
	}
	
	public ContactPage clickOnContactLink() {
		contactLink.click();
		return new ContactPage();
	}
	

}
