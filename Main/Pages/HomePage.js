import { expect, Page } from "@playwright/test";
import logger from "../Utils/ResultLogger";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.HomePageLogo = page.getByText("Swag Labs");
    this.ShoppingCartButton = page.locator('[data-test="shopping-cart-link"]');
    this.SortingSelector = page.locator('[data-test="product-sort-container"]');
    this.ProductContainer = page.locator('[data-test="inventory-list"] div');
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
  async ClickCartButton() {
    await this.ShoppingCartButton.click();
  }
  async SortProducts(order) {
    await this.SortingSelector.selectOption(order);
  }
}
