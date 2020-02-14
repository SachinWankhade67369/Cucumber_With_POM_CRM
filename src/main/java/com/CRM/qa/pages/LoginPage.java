package com.CRM.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.CRM.qa.utils.TestBase;

public class LoginPage extends TestBase{
	
	//Page Factory:OR
	
	@FindBy(name="email")
	WebElement email;
	
	@FindBy(name="password")
	WebElement password;
	
	@FindBy(xpath="//div[@class='ui fluid large blue submit button']")
	WebElement loginBtn;
	
	@FindBy(xpath="//span[contains(text(),'sachin wankhade')]")
	WebElement userNameLebal;
	
	
	//initialization Page Object
	public LoginPage() {
	
		PageFactory.initElements(driver, this);
		
	}
	
	//Actions
	
	public String verifyLoginPageTitle() {
		return driver.getTitle();
	}
	
	public HomePage verifyLoginCredentials(String un,String pwd) {
		
		email.clear();
		email.sendKeys(un);
		password.clear();
		password.sendKeys(pwd);
		loginBtn.click();
		
		return new HomePage();
		
	}
	
	
	public boolean verifyUserNameDisplay() {
		return userNameLebal.isDisplayed();
	}
	
	

}
