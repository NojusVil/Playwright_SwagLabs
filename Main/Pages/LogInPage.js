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
  async Login(Login_Username, Login_Password) {
    await this.page.goto("https://www.saucedemo.com");
    logger.info("Navigated to login page");
    await this.UsernameInputField.fill(Login_Username);
    await this.PasswordInputField.fill(Login_Password);
    logger.info(
      `Login inputs filled with username: ${Login_Username} and password: ${Login_Password}`
    );
    await this.LogInButton.click();
    logger.info("Login button clicked");
  }
}
