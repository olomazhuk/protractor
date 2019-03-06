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
const Search_1 = require("../pageObjects/Search");
describe('search photos', () => {
    var search = new Search_1.Search;
    beforeEach(() => {
        search.OpenBrowser('https://www.istockphoto.com/');
    });
    it('should find auto photos results', () => __awaiter(this, void 0, void 0, function* () {
        yield search.SetSearchPhraze('auto');
        yield search.ClickSearchButton();
        expect(yield search.h1SearchText.getText()).toEqual('Auto Pictures, Images and Stock Photos');
    }));
    it('should not find any photos', () => __awaiter(this, void 0, void 0, function* () {
        yield search.SetSearchPhraze('qqqq');
        yield search.ClickSearchButton();
        expect(yield search.zeroResultTitle.getText()).toEqual('Sorry, your search returned zero results for "qqqq"');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL1NlYXJjaFNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtEQUErQztBQUUvQyxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUU3QixJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztJQUV4QixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxDQUFDLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEdBQVMsRUFBRTtRQUUvQyxNQUFNLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsTUFBTSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVqQyxNQUFNLENBQUMsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFFaEcsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7UUFFMUMsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJDLE1BQU0sTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFakMsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0lBRWhILENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9