export enum EnrioSubscriptionTypes {
    /*
    This event is sent when the widget has been inject. The widget is not ready to accept SDK calls. Use 'ready' instead.
    Note: If you use the standard setup() method you are not able to get this event.
     */
    load = 'load',
    /*
    Initialize is sent when the widget is ready to get initialized manually. If you have set disableAutoStart: true you can call initialize when this event has been sent.
    Note: If you use the standard setup() method you are not able to get this event.
     */
    initialize = 'initialize',
    /*
    Ready is sent when the widget is fully loaded and ready to accept SDK calls
     */
    ready = 'ready',
    widgetOpen = 'widget_open',
    widgetClose = 'widget_close'
}
