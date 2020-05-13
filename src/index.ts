import {EnrioSubscriptionTypes} from './enrio-event-types';
import {EnrioSubscription} from './enrio-subscription';
import {EnrioSettings} from './settings';

declare global {
    interface Window {
        Enrio: any;
    }
}

export class Enrio {
    private readonly companyId: string;
    private setupWasCalled: boolean = false;
    private scriptSrc: string = 'https://cdn.enrio.io/loader/v1/loader.js';
    private loadPromise: Promise<void> | undefined;

    constructor(companyId: string) {
        this.companyId = companyId;
    }

    public setup(settings?: EnrioSettings): Promise<void> {
        if (this.setupWasCalled && this.loadPromise) {
            return this.loadPromise;
        }
        this.loadPromise = new Promise<void>(resolve => {
            this.setupWasCalled = true;
            window.addEventListener('enrio-initializing', () => {
                if (settings) {
                    window.Enrio.setSettings(settings);
                }
                window.Enrio.subscribe(EnrioSubscriptionTypes.initialize, () => {
                    resolve();
                });
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
                (element.parentNode as HTMLScriptElement).insertBefore(
                    script,
                    element
                );
            } else {
                Enrio.logToConsole('Enrio - Could not initialize Enrio sdk as no injection point could be found');
            }
        });
        return this.loadPromise;
    }

    /*
    By default the widget will auto initialize.
    If you have set disableAutoStart = true you will need to call this method to initialize the widget.
     */
    public initialize(): void {
        window.Enrio.initialize();
    }

    /*
    Opens the widget
     */
    public open(): void {
        window.Enrio.open();
    }

    public subscribe(type: EnrioSubscriptionTypes, func: Function): EnrioSubscription {
        return window.Enrio.subscribe(type, func);
    }

    public unsubscribe(subscription: EnrioSubscription): void {
        window.Enrio.unsubscribe(subscription);
    }

    private static logToConsole(message: string): void {
        console.warn(message);
    }

    /** @internal */
    setInDebugMode(): void {
        this.scriptSrc = 'http://localhost:9000/app.js';
    }
}
