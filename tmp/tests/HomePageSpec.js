"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HomePage_1 = require("../pageObjects/HomePage");
describe('search elements on home page', () => {
    var homePage = new HomePage_1.HomePage;
    beforeEach(() => {
        homePage.OpenBrowser('https://www.istockphoto.com/');
    });
    it('should find search bar on home page', () => __awaiter(this, void 0, void 0, function* () {
        expect(yield homePage.searchBar.isDisplayed()).toBe(true);
    }));
    it('should find header on home page', () => __awaiter(this, void 0, void 0, function* () {
        expect(yield homePage.header.isDisplayed()).toBe(true);
    }));
    it('should find footer on home page', () => __awaiter(this, void 0, void 0, function* () {
        expect(yield homePage.footer.isDisplayed()).toBe(true);
    }));
    it('should find content on home page', () => __awaiter(this, void 0, void 0, function* () {
        expect(yield homePage.landingTiles.isDisplayed()).toBe(true);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvSG9tZVBhZ2VTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzREFBbUQ7QUFHbkQsUUFBUSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtJQUU1QyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUM7SUFFNUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNmLFFBQVEsQ0FBQyxXQUFXLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFTLEVBQUU7UUFFbkQsTUFBTSxDQUFDLE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU1RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEdBQVMsRUFBRTtRQUUvQyxNQUFNLENBQUMsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUUsR0FBUyxFQUFFO1FBRS9DLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFTLEVBQUU7UUFFaEQsTUFBTSxDQUFDLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMifQ==