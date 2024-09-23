import { expect, Page } from "@playwright/test";
import logger from "../Utils/ResultLogger";

export class CartPage {
  constructor(page) {
    this.page = page;
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
}
