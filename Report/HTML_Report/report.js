$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking functionality",
  "description": "",
  "id": "hotel-booking-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 355100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User want to login the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the \"vinovicky\" valid username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"GMN630\" valid password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 58214638100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 246329300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GMN630",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 168469300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 1029825600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User want to login the application",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User enter the \"vinovicky\" valid username",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter the \"GMN630\" valid password",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 661549700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 142542900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GMN630",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 120355200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 1217757200,
  "status": "passed"
});
formatter.after({
  "duration": 156900,
  "status": "passed"
});
});