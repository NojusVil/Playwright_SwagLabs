import { expect, Page } from "@playwright/test";
import logger from "../Utils/ResultLogger";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.CheckOutButton = page.locator('[data-test="checkout"]');
  }
  async VerifyProduct(Product_Data) {
    const ProductVerification = this.page.locator(
      `[data-test="remove-${Product_Data}"]`
    );
    await expect(ProductVerification).toHaveAttribute(
      "data-test",
      `remove-${Product_Data}`
    );
    logger.info(`Correct item was added to cart ${Product_Data}`);
  }
  async RemoveItemFromCart(Product_Data) {
    const ProductVerification = this.page.locator(
      `[data-test="remove-${Product_Data}"]`
    );
    await ProductVerification.click();
    logger.info(` ${Product_Data} Was removed from cart`);
  }
  async ClickCheckOutButton() {
    await this.CheckOutButton.click();
  }
}
