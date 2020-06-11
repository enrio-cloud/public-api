import {Enrio} from '../../src';
import {EnrioSubscriptionTypes} from '../../src/enrio-event-types';

const enrio = new Enrio('Xcd1b1ee7-c14c-4daf-a778-cc026b93eac8');
enrio.setup({
    disableAutoStart: true
}).then(() => {
    enrio.subscribe(EnrioSubscriptionTypes.ready, () => {
        console.log('Widget ready');
    });
    (document.getElementById('load-widget') as HTMLElement).onclick = () => {
        enrio.initialize();
    };
});
