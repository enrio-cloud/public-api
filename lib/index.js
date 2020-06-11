"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrio = void 0;
const enrio_event_types_1 = require("./enrio-event-types");
class Enrio {
    constructor(companyId) {
        this.setupWasCalled = false;
        this.scriptSrc = 'https://cdn.enrio.io/loader/v1/loader.js';
        this.companyId = companyId;
    }
    /*
    The default setup method. This will inject the enrio widget into the page.
    The promise is resolved when the widget is ready for initializing.
     */
    setup(settings) {
        if (this.setupWasCalled && this.loadPromise) {
            return this.loadPromise;
        }
        this.loadPromise = new Promise(resolve => {
            this.setupWasCalled = true;
            window.addEventListener('enrio-initializing', () => {
                if (settings) {
                    window.Enrio.setSettings(settings);
                }
                //If auto start is disabled resolve the promise when it is ready for initialize
                if (settings && settings.disableAutoStart) {
                    window.Enrio.subscribe(enrio_event_types_1.EnrioSubscriptionTypes.initialize, () => {
                        resolve();
                    });
                }
                else {
                    //Resolve promise when it is ready to accept SDK calls
                    window.Enrio.subscribe(enrio_event_types_1.EnrioSubscriptionTypes.ready, () => {
                        resolve();
                    });
                }
            });
            // @ts-ignore
            window['_enrio'] || (window['_enrio'] = {});
            // @ts-ignore
            window['_enrio'].company_id = this.companyId;
            const element = document.getElementsByTagName('script')[0];
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = this.scriptSrc;
            if (element && element.parentNode) {
                element.parentNode.insertBefore(script, element);
            }
            else {
                Enrio.logToConsole('Enrio - Could not initialize Enrio sdk as no injection point could be found');
            }
        });
        return this.loadPromise;
    }
    /*
    By default the widget will auto initialize.
    If you have set disableAutoStart = true you will need to call this method to initialize the widget.
     */
    initialize() {
        window.Enrio.initialize();
    }
    /*
    Opens the widget
     */
    open() {
        window.Enrio.open();
    }
    /*
    Closes the widget
     */
    close() {
        window.Enrio.close();
    }
    /*
    Shows the widget launcher
     */
    showLauncher() {
        window.Enrio.showLauncher();
    }
    /*
    Hides the widget launcher
     */
    hideLauncher() {
        window.Enrio.hideLauncher();
    }
    subscribe(type, func) {
        return window.Enrio.subscribe(type, func);
    }
    unsubscribe(subscription) {
        window.Enrio.unsubscribe(subscription);
    }
    static logToConsole(message) {
        console.warn(message);
    }
    /** @internal */
    setInDebugMode() {
        this.scriptSrc = 'http://localhost:9000/app.js';
    }
}
exports.Enrio = Enrio;
