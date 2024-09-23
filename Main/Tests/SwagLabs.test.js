import { test, expect } from "@playwright/test";
import logger from "../Utils/ResultLogger";
import { LogInPage } from "../Pages/LogInPage";
import { HomePage } from "../Pages/HomePage";
import { CartPage } from "../Pages/CartPage";
import LogInData from "../Data/LoginData.json";
import ProdData from "../Data/ProductData.json";
import CheckOutData from "../Data/CheckOutData.json";
import { CheckOutPage } from "../Pages/CheckOutPage";

test.describe("Swag Labs Site Testing", async (page) => {
  test.beforeEach(async ({ page }) => {
    const Login = new LogInPage(page);
    const Home = new HomePage(page);
    const LogIn = LogInData[0];
    await Login.Login(LogIn.Login_Username, LogIn.Login_Password);
    await Home.VerifyHomePage();
    logger.info("Login successful");
  });
  test("Cart Tests", async ({ page }) => {
    const Home = new HomePage(page);
    const Cart = new CartPage(page);
    //Add products from ProductData.json file
    const Product_Data = ProdData[0];
    for (const Product_Data of ProdData) {
      await Home.AddProductToCart(Product_Data.itemName);
    }
    //Verify if the correct products were added
    await Home.ClickCartButton();
    for (const Product_Data of ProdData) {
      await Cart.VerifyProduct(Product_Data.itemName);
    }
    //Remove added products
    for (const Product_Data of ProdData) {
      await Cart.RemoveItemFromCart(Product_Data.itemName);
    }
  });
  test("Check Out", async ({ page }) => {
    const Home = new HomePage(page);
    const Cart = new CartPage(page);
    const CheckOut = new CheckOutPage(page);
    const CheckData = CheckOutData[0];
    await Home.ClickCartButton();
    await Cart.ClickCheckOutButton();
    await CheckOut.FillOutCheckOut(
      CheckData.Firstname,
      CheckData.Lastname,
      CheckData.Postalcode
    );
  });
  test("Sort A to Z", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.SortProducts("az");
    logger.info("Sorted A to Z");
  });
  test("Sort Z to A", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.SortProducts("az");
    logger.info("Sorted Z to A");
  });
  test("Sort Low to High", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.SortProducts("lohi");
    logger.info("Sorted Low to High");
  });
  test("Sort High to Low", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.SortProducts("hilo");
    logger.info("Sorted High to Low");
  });
});
