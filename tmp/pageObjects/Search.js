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
const protractor_1 = require("protractor");
class Search {
    constructor() {
        this.searchInput = protractor_1.element(protractor_1.by.id('search-phrase'));
        this.searchButton = protractor_1.element(protractor_1.by.css('button.search-bar__submit'));
        this.h1SearchText = protractor_1.element(protractor_1.by.css('section.category-title h1'));
        this.zeroResultTitle = protractor_1.element(protractor_1.by.id('zero-result-title'));
    }
    OpenBrowser(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(url);
        });
    }
    SetSearchPhraze(phraze) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchInput.sendKeys(phraze);
        });
    }
    ClickSearchButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchButton.click();
        });
    }
}
exports.Search = Search;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvU2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFFbEQsTUFBYSxNQUFNO0lBQW5CO1FBRUksZ0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUM5QyxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDNUQsaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQzVELG9CQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQWMxRCxDQUFDO0lBWlMsV0FBVyxDQUFDLEdBQVc7O1lBQ3pCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLE1BQWM7O1lBQ2hDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQztLQUFBO0lBRUssaUJBQWlCOztZQUNuQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsQ0FBQztLQUFBO0NBRUo7QUFuQkQsd0JBbUJDIn0=