import {Selector} from 'testcafe';

fixture`default.test`
    .page`http://localhost:3000/default.html`;
test('Open and close', async t => {
    //Button visible - widget not
    await t.expect(await Selector('.enrio-launcher__button').visible).ok();
    await t.expect(await Selector('.enrio-widget').visible).notOk();

    await t.click(Selector('#open-widget'));

    //Button not visible - widget visible
    await t.expect(await Selector('.enrio-launcher__button').visible).notOk();
    await t.expect(await Selector('.enrio-widget').visible).ok();

    await t.click(Selector('#close-widget'));

    //Button visible - widget not
    await t.expect(await Selector('.enrio-launcher__button').visible).ok();
    await t.expect(await Selector('.enrio-widget').visible).notOk();
});

test('Hide launcher', async t => {
    //Button visible - widget not
    await t.expect(await Selector('.enrio-launcher__button').visible).ok();
    await t.expect(await Selector('.enrio-widget').visible).notOk();

    await t.click(Selector('#hide-launcher'));

    //Button not visible - widget not visible
    await t.expect(await Selector('.enrio-launcher__button').visible).notOk();
    await t.expect(await Selector('.enrio-widget').visible).notOk();

    await t.click(Selector('#show-launcher'));

    //Button visible - widget not
    await t.expect(await Selector('.enrio-launcher__button').visible).ok();
    await t.expect(await Selector('.enrio-widget').visible).notOk();
});
