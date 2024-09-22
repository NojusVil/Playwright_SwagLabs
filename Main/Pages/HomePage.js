import { expect, Page } from "@playwright/test";
import logger from "../Utils/ResultLogger";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.HomePageLogo = page.getByText("Swag Labs");
  }
  async VerifyHomePage() {
    await expect(this.HomePageLogo).toBeVisible();
    logger.info("Home page verified");
  }
  async AddProductToCart(Product_Data) {
    const ProductAddToCart = this.page.locator(
      `[data-test="add-to-cart-${Product_Data}"]`
    );

    await ProductAddToCart.click();
  }
}
