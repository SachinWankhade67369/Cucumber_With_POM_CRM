Feature: CRM Application Feature

Scenario Outline: CRM Application HomePage Test

	Given user open browser
	Then user enters credentials and click on login button
	Then user clicks on Contacts link
	Then user click on the New button to fill the new user details
	Then user fill the details about the new users "<firstname>" and "<lastname>" and "<company>" and "<email>" and "<country>" and "<phone>" and click on save button
	Then close the currunt browser 
	
	Examples:
	
	|firstname| lastname| company                | email       | country| phone    |
	|sachin	  | wankhade| sw technologies pvt ltd| sb@gmail.com| India  | 123456789|
	|nilesh	  | mulekar | nm technologies pvt ltd| nm@gmail.com| India  | 122342389|
	
	
