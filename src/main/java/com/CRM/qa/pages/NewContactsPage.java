package com.CRM.qa.pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.CRM.qa.utils.TestBase;

public class NewContactsPage extends TestBase{

	//Page Factory
	@FindBy(name="first_name")
	WebElement firstNameTextBox;
	
	@FindBy(name="last_name")
	WebElement lastNameTextBox;
	
	@FindBy(name="company")
	WebElement companyTextBox;
	
	
	@FindBy(xpath="//div[@class='ui right corner labeled input']//input[@name='value']")
	WebElement email;
	
	@FindBy(xpath="//div[@class='ui input']//input[@name='value' and @placeholder='Number']")
	WebElement phoneNumberText;
	
	@FindBy(xpath="//div[@name='hint']//input[@class='search']")
	WebElement countrytext;
	
	@FindBy(xpath="//button[@class='ui linkedin button']")
	WebElement saveButton;
	
	
	//Page Object initialization of all web element present on the current page.
	public NewContactsPage() {
		
		PageFactory.initElements(driver, this);
	}
	
	
	public void fillTheUserDetailsOfNewUser(String firstName,String lastName,String companyName,String emailText,String countryName,String phoneNumber) {
		
		firstNameTextBox.sendKeys(firstName);
		lastNameTextBox.sendKeys(lastName);
		companyTextBox.sendKeys(companyName);
		
//		JavascriptExecutor js=(JavascriptExecutor)driver;
//		js.executeScript("document.getElementById('value').value='emailText';");
//		
		email.sendKeys(emailText);
		
		//countrytext.click();
		Select select = new Select(countrytext);
		select.selectByVisibleText(countryName);
		
		phoneNumberText.sendKeys(phoneNumber);
		
		saveButton.click();
		
		
	}
	
}
