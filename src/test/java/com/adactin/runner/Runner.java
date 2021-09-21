package com.adactin.runner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.adactin.baseclass.BaseClass;
import com.adactin.properties.File_Reader_Manager;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", 
glue = "com\\adactin\\stepdefinition", monochrome = true, tags = {
		"@Login" }, 
plugin = { "pretty", 
				"com.cucumber.listener.ExtentCucumberFormatter:Reports/ExtentReport1.html" ,
				"html:Report/HTML_Report" ,
				"json:Report2/CucumberJson_Report.json"})

public class Runner {

	public static WebDriver driver;
 
	@BeforeClass
	public static void set_up() throws Throwable {
		String browser = File_Reader_Manager.getInstance().getInstanceCR().getBrowser();
		driver = BaseClass.getDriver(browser);
	}

}
