import {Enrio} from '../../src';
import {EnrioSubscriptionTypes} from '../../src/enrio-event-types';

const enrio = new Enrio('Xcd1b1ee7-c14c-4daf-a778-cc026b93eac8');
enrio.setup().then(() => {
    enrio.subscribe(EnrioSubscriptionTypes.ready, () => {
        console.log('Widget is ready to accept SDK calls');
    });

    enrio.subscribe(EnrioSubscriptionTypes.widgetOpen, () => {
       console.log('Widget open');
    });

    enrio.subscribe(EnrioSubscriptionTypes.widgetClose, () => {
        console.log('Widget close');
    });

    (document.getElementById('open-widget') as HTMLElement).onclick = () => {
        enrio.open();
    };
    (document.getElementById('close-widget') as HTMLElement).onclick = () => {
        enrio.close();
    };
    (document.getElementById('show-launcher') as HTMLElement).onclick = () => {
        enrio.showLauncher();
    };
    (document.getElementById('hide-launcher') as HTMLElement).onclick = () => {
        enrio.hideLauncher();
    };
});


