import {Selector} from 'testcafe';

fixture`initialize.test`
    .page`http://localhost:3000/initialize.html`;
test('No autoload', async t => {
    //Button visible - widget not
    await t.expect(await Selector('.enrio-launcher__button').visible).notOk();
    await t.expect(await Selector('.enrio-widget').visible).notOk();

    await t.click(Selector('#load-widget'));

    //Button visible - widget not visible
    await t.expect(await Selector('.enrio-launcher__button').visible).ok();
    await t.expect(await Selector('.enrio-widget').visible).notOk();
});
