"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testcafe_1 = require("testcafe");
fixture `initialize.test`
    .page `http://localhost:3000/initialize.html`;
test('No autoload', (t) => __awaiter(void 0, void 0, void 0, function* () {
    //Button visible - widget not
    yield t.expect(yield testcafe_1.Selector('.enrio-launcher__button').visible).notOk();
    yield t.expect(yield testcafe_1.Selector('.enrio-widget').visible).notOk();
    yield t.click(testcafe_1.Selector('#load-widget'));
    //Button visible - widget not visible
    yield t.expect(yield testcafe_1.Selector('.enrio-launcher__button').visible).ok();
    yield t.expect(yield testcafe_1.Selector('.enrio-widget').visible).notOk();
}));
