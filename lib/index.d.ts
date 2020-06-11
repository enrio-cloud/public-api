import { EnrioSubscriptionTypes } from './enrio-event-types';
import { EnrioSubscription } from './enrio-subscription';
import { EnrioSettings } from './settings';
declare global {
    interface Window {
        Enrio: any;
    }
}
export declare class Enrio {
    private readonly companyId;
    private setupWasCalled;
    private scriptSrc;
    private loadPromise;
    constructor(companyId: string);
    setup(settings?: EnrioSettings): Promise<void>;
    initialize(): void;
    open(): void;
    close(): void;
    showLauncher(): void;
    hideLauncher(): void;
    subscribe(type: EnrioSubscriptionTypes, func: Function): EnrioSubscription;
    unsubscribe(subscription: EnrioSubscription): void;
    private static logToConsole;
    /** @internal */
    setInDebugMode(): void;
}
