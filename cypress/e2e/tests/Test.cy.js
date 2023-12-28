///<reference types="Cypress"/>
import { Register } from "../pages/register";
const register=new Register();
import data from "../../fixtures/example.json"



describe("Suite-1",function()
{
    it("TC_01",function()
    {
        register.openURL();
        register.fillingRegisterForm(data.firstname, data.lastname)
    })
})