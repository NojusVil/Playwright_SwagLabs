import { test, expect } from "@playwright/test";
import logger from "../Utils/ResultLogger";
import { LogInPage } from "../Pages/LogInPage";
import { HomePage } from "../Pages/HomePage";
import LogInData from "../Data/LoginData.json";

test("Login", async ({ page }) => {
  const Login = new LogInPage(page);
  const Home = new HomePage(page);
  const LogIn = LogInData[0];
  await Login.GoToLoginPage();
  await Login.Login(LogIn.Login_Username, LogIn.Login_Password);
  await Login.ClickLogIn();
  await Home.VerifyHomePage();
  logger.info("Login successful");
});
