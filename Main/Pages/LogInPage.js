import { Page } from "@playwright/test";
import logger from "../Utils/ResultLogger";

export class LogInPage {
  constructor(page) {
    this.page = page;
    this.UsernameInputField = page.locator('[data-test="username"]');
    this.PasswordInputField = page.locator('[data-test="password"]');
    this.AvailableUsernames = page.locator('[data-test="login-credentials"]');
    this.AvailablePasswords = page.locator('[data-test="login-password"]');
    this.LogInButton = page.locator('[data-test="login-button"]');
  }
  async GoToLoginPage() {
    await this.page.goto("https://www.saucedemo.com");
    logger.info("Navigated to login page");
  }

  async Login(Login_Username, Login_Password) {
    await this.UsernameInputField.fill(Login_Username);
    await this.PasswordInputField.fill(Login_Password);
    logger.info(
      `Attempted login with username: ${Login_Username} and password: ${Login_Password}`
    );
  }
  async ClickLogIn() {
    await this.LogInButton.click();
  }
}
