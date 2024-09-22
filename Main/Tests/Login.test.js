import { test, expect } from "@playwright/test";
import logger from "../Utils/ResultLogger";
import { LogInPage } from "../Pages/LogInPage";
import { HomePage } from "../Pages/HomePage";
import LogInData from "../Data/LoginData.json";
import UserData from "../Data/ProductData.json";
//const Product_Data = "sauce-labs-backpack";
test.describe("Swag Labs Site Testing", async () => {
  test.beforeEach(async ({ page }) => {
    const Login = new LogInPage(page);
    const Home = new HomePage(page);
    const LogIn = LogInData[0];
    await Login.GoToLoginPage();
    await Login.Login(LogIn.Login_Username, LogIn.Login_Password);
    await Login.ClickLogIn();
    await Home.VerifyHomePage();
    logger.info("Login successful");
  });
  test("Add Product To Cart", async ({ page }) => {
    const Home = new HomePage(page);
    const Product_Data = UserData[0];
    await Home.AddProductToCart(Product_Data.itemName);
    logger.info(`Item added to card ${Product_Data.itemName}`);
  });
});
