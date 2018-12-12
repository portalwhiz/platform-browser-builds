import { Inject, Injectable } from '@angular/core';
import { getDOM } from '../dom_adapter';
import { DOCUMENT } from '../dom_tokens';
import { EventManagerPlugin } from './event_manager';
import * as i0 from "@angular/core";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Defines supported modifiers for key events.
 * @type {?}
 */
const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
/**
 * Retrieves modifiers from key-event objects.
 * @type {?}
 */
const MODIFIER_KEY_GETTERS = {
    'alt': (event) => event.altKey,
    'control': (event) => event.ctrlKey,
    'meta': (event) => event.metaKey,
    'shift': (event) => event.shiftKey
};
/**
 * \@publicApi
 * A browser plug-in that provides support for handling of key events in Angular.
 */
export class KeyEventsPlugin extends EventManagerPlugin {
    /**
     * Initializes an instance of the browser plug-in.
     * @param {?} doc The document in which key events will be detected.
     */
    constructor(doc) { super(doc); }
    /**
     * Reports whether a named key event is supported.
     * @param {?} eventName The event name to query.
     * @return {?} True if the named key event is supported.
     */
    supports(eventName) { return KeyEventsPlugin.parseEventName(eventName) != null; }
    /**
     * Registers a handler for a specific element and key event.
     * @param {?} element The HTML element to receive event notifications.
     * @param {?} eventName The name of the key event to listen for.
     * @param {?} handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @return {?} The key event that was registered.
     */
    addEventListener(element, eventName, handler) {
        /** @type {?} */
        const parsedEvent = (/** @type {?} */ (KeyEventsPlugin.parseEventName(eventName)));
        /** @type {?} */
        const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(() => {
            return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
        });
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    static parseEventName(eventName) {
        /** @type {?} */
        const parts = eventName.toLowerCase().split('.');
        /** @type {?} */
        const domEventName = parts.shift();
        if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
            return null;
        }
        /** @type {?} */
        const key = KeyEventsPlugin._normalizeKey((/** @type {?} */ (parts.pop())));
        /** @type {?} */
        let fullKey = '';
        MODIFIER_KEYS.forEach(modifierName => {
            /** @type {?} */
            const index = parts.indexOf(modifierName);
            if (index > -1) {
                parts.splice(index, 1);
                fullKey += modifierName + '.';
            }
        });
        fullKey += key;
        if (parts.length != 0 || key.length === 0) {
            // returning null instead of throwing to let another plugin process the event
            return null;
        }
        /** @type {?} */
        const result = {};
        result['domEventName'] = domEventName;
        result['fullKey'] = fullKey;
        return result;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    static getEventFullKey(event) {
        /** @type {?} */
        let fullKey = '';
        /** @type {?} */
        let key = getDOM().getEventKey(event);
        key = key.toLowerCase();
        if (key === ' ') {
            key = 'space'; // for readability
        }
        else if (key === '.') {
            key = 'dot'; // because '.' is used as a separator in event names
        }
        MODIFIER_KEYS.forEach(modifierName => {
            if (modifierName != key) {
                /** @type {?} */
                const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                if (modifierGetter(event)) {
                    fullKey += modifierName + '.';
                }
            }
        });
        fullKey += key;
        return fullKey;
    }
    /**
     * Configures a handler callback for a key event.
     * @param {?} fullKey The event name that combines all simultaneous keystrokes.
     * @param {?} handler The function that responds to the key event.
     * @param {?} zone The zone in which the event occurred.
     * @return {?} A callback function.
     */
    static eventCallback(fullKey, handler, zone) {
        return (event /** TODO #9100 */) => {
            if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
                zone.runGuarded(() => handler(event));
            }
        };
    }
    /**
     * \@internal
     * @param {?} keyName
     * @return {?}
     */
    static _normalizeKey(keyName) {
        // TODO: switch to a Map if the mapping grows too much
        switch (keyName) {
            case 'esc':
                return 'escape';
            default:
                return keyName;
        }
    }
}
KeyEventsPlugin.decorators = [
    { type: Injectable },
];
/** @nocollapse */
KeyEventsPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
KeyEventsPlugin.ngInjectableDef = i0.defineInjectable({ token: KeyEventsPlugin, factory: function KeyEventsPlugin_Factory(t) { return new (t || KeyEventsPlugin)(i0.inject(DOCUMENT)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(KeyEventsPlugin, [{
        type: Injectable
    }], [{
        type: undefined,
        decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }]
    }], null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5X2V2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2RvbS9ldmVudHMva2V5X2V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFLN0MsYUFBYSxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDOzs7OztNQUtuRCxvQkFBb0IsR0FBdUQ7SUFDL0UsS0FBSyxFQUFFLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU07SUFDN0MsU0FBUyxFQUFFLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87SUFDbEQsTUFBTSxFQUFFLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87SUFDL0MsT0FBTyxFQUFFLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVE7Q0FDbEQ7Ozs7O0FBT0QsTUFBTSxPQUFPLGVBQWdCLFNBQVEsa0JBQWtCOzs7OztJQUtyRCxZQUE4QixHQUFRLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBT3ZELFFBQVEsQ0FBQyxTQUFpQixJQUFhLE9BQU8sZUFBZSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFVbEcsZ0JBQWdCLENBQUMsT0FBb0IsRUFBRSxTQUFpQixFQUFF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Ozs7O0lBU0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFZLEVBQUUsT0FBaUIsRUFBRSxJQUFZO1FBQ2hFLE9BQU8sQ0FBQyxLQUFVLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUN0QyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssT0FBTyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFlO1FBQ2xDLHNEQUFzRDtRQUN0RCxRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssS0FBSztnQkFDUixPQUFPLFFBQVEsQ0FBQztZQUNsQjtnQkFDRSxPQUFPLE9BQU8sQ0FBQztTQUNsQjtJQUNILENBQUM7OztZQTlHRixVQUFVOzs7OzRDQU1JLE1BQU0sU0FBQyxRQUFROzsrREFMakIsZUFBZSxrRUFBZixlQUFlLFlBS04sUUFBUTttQ0FMakIsZUFBZTtjQUQzQixVQUFVOzs7O3NCQU1JLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Z2V0RE9NfSBmcm9tICcuLi9kb21fYWRhcHRlcic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICcuLi9kb21fdG9rZW5zJztcblxuaW1wb3J0IHtFdmVudE1hbmFnZXJQbHVnaW59IGZyb20gJy4vZXZlbnRfbWFuYWdlcic7XG5cbi8qKlxuICogRGVmaW5lcyBzdXBwb3J0ZWQgbW9kaWZpZXJzIGZvciBrZXkgZXZlbnRzLlxuICovXG5jb25zdCBNT0RJRklFUl9LRVlTID0gWydhbHQnLCAnY29udHJvbCcsICdtZXRhJywgJ3NoaWZ0J107XG5cbi8qKlxuICogUmV0cmlldmVzIG1vZGlmaWVycyBmcm9tIGtleS1ldmVudCBvYmplY3RzLlxuICovXG5jb25zdCBNT0RJRklFUl9LRVlfR0VUVEVSUzoge1trZXk6IHN0cmluZ106IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gYm9vbGVhbn0gPSB7XG4gICdhbHQnOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IGV2ZW50LmFsdEtleSxcbiAgJ2NvbnRyb2wnOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IGV2ZW50LmN0cmxLZXksXG4gICdtZXRhJzogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiBldmVudC5tZXRhS2V5LFxuICAnc2hpZnQnOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IGV2ZW50LnNoaWZ0S2V5XG59O1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEEgYnJvd3NlciBwbHVnLWluIHRoYXQgcHJvdmlkZXMgc3VwcG9ydCBmb3IgaGFuZGxpbmcgb2Yga2V5IGV2ZW50cyBpbiBBbmd1bGFyLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2V5RXZlbnRzUGx1Z2luIGV4dGVuZHMgRXZlbnRNYW5hZ2VyUGx1Z2luIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuIGluc3RhbmNlIG9mIHRoZSBicm93c2VyIHBsdWctaW4uXG4gICAqIEBwYXJhbSBkb2MgVGhlIGRvY3VtZW50IGluIHdoaWNoIGtleSBldmVudHMgd2lsbCBiZSBkZXRlY3RlZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55KSB7IHN1cGVyKGRvYyk7IH1cblxuICAvKipcbiAgICAqIFJlcG9ydHMgd2hldGhlciBhIG5hbWVkIGtleSBldmVudCBpcyBzdXBwb3J0ZWQuXG4gICAgKiBAcGFyYW0gZXZlbnROYW1lIFRoZSBldmVudCBuYW1lIHRvIHF1ZXJ5LlxuICAgICogQHJldHVybiBUcnVlIGlmIHRoZSBuYW1lZCBrZXkgZXZlbnQgaXMgc3VwcG9ydGVkLlxuICAgKi9cbiAgc3VwcG9ydHMoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIEtleUV2ZW50c1BsdWdpbi5wYXJzZUV2ZW50TmFtZShldmVudE5hbWUpICE9IG51bGw7IH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBlbGVtZW50IGFuZCBrZXkgZXZlbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBIVE1MIGVsZW1lbnQgdG8gcmVjZWl2ZSBldmVudCBub3RpZmljYXRpb25zLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBrZXkgZXZlbnQgdG8gbGlzdGVuIGZvci5cbiAgICogQHBhcmFtIGhhbmRsZXIgQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBvY2N1cnMuIFJlY2VpdmVzIHRoZVxuICAgKiBldmVudCBvYmplY3QgYXMgYW4gYXJndW1lbnQuXG4gICAqIEByZXR1cm5zIFRoZSBrZXkgZXZlbnQgdGhhdCB3YXMgcmVnaXN0ZXJlZC5cbiAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xuICAgIGNvbnN0IHBhcnNlZEV2ZW50ID0gS2V5RXZlbnRzUGx1Z2luLnBhcnNlRXZlbnROYW1lKGV2ZW50TmFtZSkgITtcblxuICAgIGNvbnN0IG91dHNpZGVIYW5kbGVyID1cbiAgICAgICAgS2V5RXZlbnRzUGx1Z2luLmV2ZW50Q2FsbGJhY2socGFyc2VkRXZlbnRbJ2Z1bGxLZXknXSwgaGFuZGxlciwgdGhpcy5tYW5hZ2VyLmdldFpvbmUoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLmdldFpvbmUoKS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0RE9NKCkub25BbmRDYW5jZWwoZWxlbWVudCwgcGFyc2VkRXZlbnRbJ2RvbUV2ZW50TmFtZSddLCBvdXRzaWRlSGFuZGxlcik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VFdmVudE5hbWUoZXZlbnROYW1lOiBzdHJpbmcpOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfXxudWxsIHtcbiAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBldmVudE5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnLicpO1xuXG4gICAgY29uc3QgZG9tRXZlbnROYW1lID0gcGFydHMuc2hpZnQoKTtcbiAgICBpZiAoKHBhcnRzLmxlbmd0aCA9PT0gMCkgfHwgIShkb21FdmVudE5hbWUgPT09ICdrZXlkb3duJyB8fCBkb21FdmVudE5hbWUgPT09ICdrZXl1cCcpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBLZXlFdmVudHNQbHVnaW4uX25vcm1hbGl6ZUtleShwYXJ0cy5wb3AoKSAhKTtcblxuICAgIGxldCBmdWxsS2V5ID0gJyc7XG4gICAgTU9ESUZJRVJfS0VZUy5mb3JFYWNoKG1vZGlmaWVyTmFtZSA9PiB7XG4gICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gcGFydHMuaW5kZXhPZihtb2RpZmllck5hbWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgcGFydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZnVsbEtleSArPSBtb2RpZmllck5hbWUgKyAnLic7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZnVsbEtleSArPSBrZXk7XG5cbiAgICBpZiAocGFydHMubGVuZ3RoICE9IDAgfHwga2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gcmV0dXJuaW5nIG51bGwgaW5zdGVhZCBvZiB0aHJvd2luZyB0byBsZXQgYW5vdGhlciBwbHVnaW4gcHJvY2VzcyB0aGUgZXZlbnRcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdDoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgcmVzdWx0Wydkb21FdmVudE5hbWUnXSA9IGRvbUV2ZW50TmFtZTtcbiAgICByZXN1bHRbJ2Z1bGxLZXknXSA9IGZ1bGxLZXk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRFdmVudEZ1bGxLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBzdHJpbmcge1xuICAgIGxldCBmdWxsS2V5ID0gJyc7XG4gICAgbGV0IGtleSA9IGdldERPTSgpLmdldEV2ZW50S2V5KGV2ZW50KTtcbiAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoa2V5ID09PSAnICcpIHtcbiAgICAgIGtleSA9ICdzcGFjZSc7ICAvLyBmb3IgcmVhZGFiaWxpdHlcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJy4nKSB7XG4gICAgICBrZXkgPSAnZG90JzsgIC8vIGJlY2F1c2UgJy4nIGlzIHVzZWQgYXMgYSBzZXBhcmF0b3IgaW4gZXZlbnQgbmFtZXNcbiAgICB9XG4gICAgTU9ESUZJRVJfS0VZUy5mb3JFYWNoKG1vZGlmaWVyTmFtZSA9PiB7XG4gICAgICBpZiAobW9kaWZpZXJOYW1lICE9IGtleSkge1xuICAgICAgICBjb25zdCBtb2RpZmllckdldHRlciA9IE1PRElGSUVSX0tFWV9HRVRURVJTW21vZGlmaWVyTmFtZV07XG4gICAgICAgIGlmIChtb2RpZmllckdldHRlcihldmVudCkpIHtcbiAgICAgICAgICBmdWxsS2V5ICs9IG1vZGlmaWVyTmFtZSArICcuJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bGxLZXkgKz0ga2V5O1xuICAgIHJldHVybiBmdWxsS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgYSBoYW5kbGVyIGNhbGxiYWNrIGZvciBhIGtleSBldmVudC5cbiAgICogQHBhcmFtIGZ1bGxLZXkgVGhlIGV2ZW50IG5hbWUgdGhhdCBjb21iaW5lcyBhbGwgc2ltdWx0YW5lb3VzIGtleXN0cm9rZXMuXG4gICAqIEBwYXJhbSBoYW5kbGVyIFRoZSBmdW5jdGlvbiB0aGF0IHJlc3BvbmRzIHRvIHRoZSBrZXkgZXZlbnQuXG4gICAqIEBwYXJhbSB6b25lIFRoZSB6b25lIGluIHdoaWNoIHRoZSBldmVudCBvY2N1cnJlZC5cbiAgICogQHJldHVybnMgQSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG4gIHN0YXRpYyBldmVudENhbGxiYWNrKGZ1bGxLZXk6IGFueSwgaGFuZGxlcjogRnVuY3Rpb24sIHpvbmU6IE5nWm9uZSk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKGV2ZW50OiBhbnkgLyoqIFRPRE8gIzkxMDAgKi8pID0+IHtcbiAgICAgIGlmIChLZXlFdmVudHNQbHVnaW4uZ2V0RXZlbnRGdWxsS2V5KGV2ZW50KSA9PT0gZnVsbEtleSkge1xuICAgICAgICB6b25lLnJ1bkd1YXJkZWQoKCkgPT4gaGFuZGxlcihldmVudCkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHN0YXRpYyBfbm9ybWFsaXplS2V5KGtleU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gVE9ETzogc3dpdGNoIHRvIGEgTWFwIGlmIHRoZSBtYXBwaW5nIGdyb3dzIHRvbyBtdWNoXG4gICAgc3dpdGNoIChrZXlOYW1lKSB7XG4gICAgICBjYXNlICdlc2MnOlxuICAgICAgICByZXR1cm4gJ2VzY2FwZSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ga2V5TmFtZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==