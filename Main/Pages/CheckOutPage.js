import { expect, Page } from "@playwright/test";
import logger from "../Utils/ResultLogger";

export class CheckOutPage {
  constructor(page) {
    this.page = page;
    this.FirstName = page.locator('[data-test="firstName"]');
    this.LastName = page.locator('[data-test="lastName"]');
    this.PostalCode = page.locator('[data-test="postalCode"]');
    this.ContinueButton = page.locator('[data-test="continue"]');
    this.FinishButton = page.locator('[data-test="finish"]');
    this.SucessfullOrderText = page.locator('[data-test="complete-header"]');
  }
  async FillOutCheckOut(Firstname, Lastname, Postalcode) {
    await this.FirstName.fill(Firstname);
    await this.LastName.fill(Lastname);
    await this.PostalCode.fill(Postalcode);
    logger.info(
      `Check out formed filled out with ${Firstname}, ${Lastname}, ${Postalcode}`
    );
    await this.ContinueButton.click();
    await this.FinishButton.click();
    await expect(this.SucessfullOrderText).toHaveText(
      "Thank you for your order!"
    );
    logger.info(`Check out is sucessfull`);
  }
}
