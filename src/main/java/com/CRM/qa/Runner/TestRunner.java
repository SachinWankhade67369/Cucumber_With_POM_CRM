package com.CRM.qa.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="D:\\Test WorkSpace\\Cucumber_With_POM_CRM\\src\\main\\java\\com\\CRM\\qa\\features\\4_NewContactsPage.feature",
		glue= {"com.CRM.qa.stepDefinitions"},
		monochrome= true,
		format= {"pretty","html:test-output"},
		strict= true,
		dryRun=false
	
		)

public class TestRunner {

}
