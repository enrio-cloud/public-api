"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrioSubscriptionTypes = void 0;
var EnrioSubscriptionTypes;
(function (EnrioSubscriptionTypes) {
    /*
    This event is sent when the widget has been inject. The widget is not ready to accept SDK calls. Use 'ready' instead.
    Note: If you use the standard setup() method you are not able to get this event.
     */
    EnrioSubscriptionTypes["load"] = "load";
    /*
    Initialize is sent when the widget is ready to get initialized manually. If you have set disableAutoStart: true you can call initialize when this event has been sent.
    Note: If you use the standard setup() method you are not able to get this event.
     */
    EnrioSubscriptionTypes["initialize"] = "initialize";
    /*
    Ready is sent when the widget is fully loaded and ready to accept SDK calls
     */
    EnrioSubscriptionTypes["ready"] = "ready";
    EnrioSubscriptionTypes["widgetOpen"] = "widget_open";
    EnrioSubscriptionTypes["widgetClose"] = "widget_close";
})(EnrioSubscriptionTypes = exports.EnrioSubscriptionTypes || (exports.EnrioSubscriptionTypes = {}));
