import { test, expect } from "@playwright/test";
import logger from "../Utils/ResultLogger";
import { LogInPage } from "../Pages/LogInPage";
import LogInData from "../Data/LoginData.json";

test("Login", async ({ page }) => {
  const Login = new LogInPage(page);
  const LogIn = LogInData[0];
  await Login.GoToLoginPage();
  await Login.Login(LogIn.Login_Username, LogIn.Login_Password);
  await Login.ClickLogIn();
});
