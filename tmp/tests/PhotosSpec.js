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
const Photos_1 = require("./../pageObjects/Photos");
describe('search elements on home page', () => {
    var photosPage = new Photos_1.Photos;
    beforeEach(() => {
        photosPage.OpenBrowser('https://www.istockphoto.com/stock-photos');
    });
    it('should find search bar on photos page', () => __awaiter(this, void 0, void 0, function* () {
        expect(yield photosPage.searchBar.isDisplayed()).toBe(true);
    }));
    it('h1 should be \"Browse stock photos and royalty-free images\"', () => __awaiter(this, void 0, void 0, function* () {
        expect(yield photosPage.h1Title.getText()).toEqual('Browse stock photos and royalty-free images');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGhvdG9zU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL1Bob3Rvc1NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9EQUFpRDtBQUdqRCxRQUFRLENBQUMsOEJBQThCLEVBQUUsR0FBRyxFQUFFO0lBRTVDLElBQUksVUFBVSxHQUFHLElBQUksZUFBTSxDQUFDO0lBRTVCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsV0FBVyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdUNBQXVDLEVBQUUsR0FBUyxFQUFFO1FBRXJELE1BQU0sQ0FBQyxNQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4REFBOEQsRUFBRSxHQUFTLEVBQUU7UUFFNUUsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBRXBHLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9