import * as i0 from "@angular/core";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Inject, Injectable, SecurityContext, ɵ_sanitizeHtml as _sanitizeHtml, ɵ_sanitizeStyle as _sanitizeStyle, ɵ_sanitizeUrl as _sanitizeUrl } from '@angular/core';
import { DOCUMENT } from '../dom/dom_tokens';
export { SecurityContext };
/**
 * Marker interface for a value that's safe to use in a particular context.
 *
 *
 * @record
 */
export function SafeValue() { }
/**
 * Marker interface for a value that's safe to use as HTML.
 *
 *
 * @record
 */
export function SafeHtml() { }
/**
 * Marker interface for a value that's safe to use as style (CSS).
 *
 *
 * @record
 */
export function SafeStyle() { }
/**
 * Marker interface for a value that's safe to use as JavaScript.
 *
 *
 * @record
 */
export function SafeScript() { }
/**
 * Marker interface for a value that's safe to use as a URL linking to a document.
 *
 *
 * @record
 */
export function SafeUrl() { }
/**
 * Marker interface for a value that's safe to use as a URL to load executable code from.
 *
 *
 * @record
 */
export function SafeResourceUrl() { }
/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * \@security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](http://g.co/ng/security).
 *
 *
 * @abstract
 */
export class DomSanitizer {
}
if (false) {
    /**
     * Sanitizes a value for use in the given SecurityContext.
     *
     * If value is trusted for the context, this method will unwrap the contained safe value and use
     * it directly. Otherwise, value will be sanitized to be safe in the given context, for example
     * by replacing URLs that have an unsafe protocol part (such as `javascript:`). The implementation
     * is responsible to make sure that the value can definitely be safely used in the given context.
     * @abstract
     * @param {?} context
     * @param {?} value
     * @return {?}
     */
    DomSanitizer.prototype.sanitize = function (context, value) { };
    /**
     * Bypass security and trust the given value to be safe HTML. Only use this when the bound HTML
     * is unsafe (e.g. contains `<script>` tags) and the code should be executed. The sanitizer will
     * leave safe HTML intact, so in most situations this method should not be used.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     * @abstract
     * @param {?} value
     * @return {?}
     */
    DomSanitizer.prototype.bypassSecurityTrustHtml = function (value) { };
    /**
     * Bypass security and trust the given value to be safe style value (CSS).
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     * @abstract
     * @param {?} value
     * @return {?}
     */
    DomSanitizer.prototype.bypassSecurityTrustStyle = function (value) { };
    /**
     * Bypass security and trust the given value to be safe JavaScript.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     * @abstract
     * @param {?} value
     * @return {?}
     */
    DomSanitizer.prototype.bypassSecurityTrustScript = function (value) { };
    /**
     * Bypass security and trust the given value to be a safe style URL, i.e. a value that can be used
     * in hyperlinks or `<img src>`.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     * @abstract
     * @param {?} value
     * @return {?}
     */
    DomSanitizer.prototype.bypassSecurityTrustUrl = function (value) { };
    /**
     * Bypass security and trust the given value to be a safe resource URL, i.e. a location that may
     * be used to load executable code from, like `<script src>`, or `<iframe src>`.
     *
     * **WARNING:** calling this method with untrusted user data exposes your application to XSS
     * security risks!
     * @abstract
     * @param {?} value
     * @return {?}
     */
    DomSanitizer.prototype.bypassSecurityTrustResourceUrl = function (value) { };
}
export class DomSanitizerImpl extends DomSanitizer {
    /**
     * @param {?} _doc
     */
    constructor(_doc) {
        super();
        this._doc = _doc;
    }
    /**
     * @param {?} ctx
     * @param {?} value
     * @return {?}
     */
    sanitize(ctx, value) {
        if (value == null)
            return null;
        switch (ctx) {
            case SecurityContext.NONE:
                return /** @type {?} */ (value);
            case SecurityContext.HTML:
                if (value instanceof SafeHtmlImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'HTML');
                return _sanitizeHtml(this._doc, String(value));
            case SecurityContext.STYLE:
                if (value instanceof SafeStyleImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Style');
                return _sanitizeStyle(/** @type {?} */ (value));
            case SecurityContext.SCRIPT:
                if (value instanceof SafeScriptImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Script');
                throw new Error('unsafe value used in a script context');
            case SecurityContext.URL:
                if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
                    // Allow resource URLs in URL contexts, they are strictly more trusted.
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'URL');
                return _sanitizeUrl(String(value));
            case SecurityContext.RESOURCE_URL:
                if (value instanceof SafeResourceUrlImpl) {
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'ResourceURL');
                throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
            default:
                throw new Error(`Unexpected SecurityContext ${ctx} (see http://g.co/ng/security#xss)`);
        }
    }
    /**
     * @param {?} value
     * @param {?} expectedType
     * @return {?}
     */
    checkNotSafeValue(value, expectedType) {
        if (value instanceof SafeValueImpl) {
            throw new Error(`Required a safe ${expectedType}, got a ${value.getTypeName()} ` +
                `(see http://g.co/ng/security#xss)`);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    bypassSecurityTrustHtml(value) { return new SafeHtmlImpl(value); }
    /**
     * @param {?} value
     * @return {?}
     */
    bypassSecurityTrustStyle(value) { return new SafeStyleImpl(value); }
    /**
     * @param {?} value
     * @return {?}
     */
    bypassSecurityTrustScript(value) { return new SafeScriptImpl(value); }
    /**
     * @param {?} value
     * @return {?}
     */
    bypassSecurityTrustUrl(value) { return new SafeUrlImpl(value); }
    /**
     * @param {?} value
     * @return {?}
     */
    bypassSecurityTrustResourceUrl(value) {
        return new SafeResourceUrlImpl(value);
    }
}
DomSanitizerImpl.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DomSanitizerImpl.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
DomSanitizerImpl.ngInjectableDef = i0.defineInjectable({ token: DomSanitizerImpl, factory: function DomSanitizerImpl_Factory() { return new DomSanitizerImpl(i0.inject(DOCUMENT)); }, providedIn: null });
if (false) {
    /** @type {?} */
    DomSanitizerImpl.prototype._doc;
}
/**
 * @abstract
 */
class SafeValueImpl {
    /**
     * @param {?} changingThisBreaksApplicationSecurity
     */
    constructor(changingThisBreaksApplicationSecurity) {
        // empty
        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
    }
    /**
     * @return {?}
     */
    toString() {
        return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            ` (see http://g.co/ng/security#xss)`;
    }
}
if (false) {
    /** @type {?} */
    SafeValueImpl.prototype.changingThisBreaksApplicationSecurity;
    /**
     * @abstract
     * @return {?}
     */
    SafeValueImpl.prototype.getTypeName = function () { };
}
class SafeHtmlImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() { return 'HTML'; }
}
class SafeStyleImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() { return 'Style'; }
}
class SafeScriptImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() { return 'Script'; }
}
class SafeUrlImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() { return 'URL'; }
}
class SafeResourceUrlImpl extends SafeValueImpl {
    /**
     * @return {?}
     */
    getTypeName() { return 'ResourceURL'; }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Nhbml0aXphdGlvbl9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvc2VjdXJpdHkvZG9tX3Nhbml0aXphdGlvbl9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFhLGVBQWUsRUFBRSxjQUFjLElBQUksYUFBYSxFQUFFLGVBQWUsSUFBSSxjQUFjLEVBQUUsYUFBYSxJQUFJLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVoTCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RXpCLE1BQU07Q0FzREw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJRCxNQUFNLHVCQUF3QixTQUFRLFlBQVk7Ozs7SUFDaEQsWUFBc0MsSUFBUztRQUFJLEtBQUssRUFBRSxDQUFDO1FBQXJCLFNBQUksR0FBSixJQUFJLENBQUs7S0FBYzs7Ozs7O0lBRTdELFFBQVEsQ0FBQyxHQUFvQixFQUFFLEtBQTRCO1FBQ3pELElBQUksS0FBSyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMvQixRQUFRLEdBQUcsRUFBRTtZQUNYLEtBQUssZUFBZSxDQUFDLElBQUk7Z0JBQ3ZCLHlCQUFPLEtBQWUsRUFBQztZQUN6QixLQUFLLGVBQWUsQ0FBQyxJQUFJO2dCQUN2QixJQUFJLEtBQUssWUFBWSxZQUFZO29CQUFFLE9BQU8sS0FBSyxDQUFDLHFDQUFxQyxDQUFDO2dCQUN0RixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUssZUFBZSxDQUFDLEtBQUs7Z0JBQ3hCLElBQUksS0FBSyxZQUFZLGFBQWE7b0JBQUUsT0FBTyxLQUFLLENBQUMscUNBQXFDLENBQUM7Z0JBQ3ZGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sY0FBYyxtQkFBQyxLQUFlLEVBQUMsQ0FBQztZQUN6QyxLQUFLLGVBQWUsQ0FBQyxNQUFNO2dCQUN6QixJQUFJLEtBQUssWUFBWSxjQUFjO29CQUFFLE9BQU8sS0FBSyxDQUFDLHFDQUFxQyxDQUFDO2dCQUN4RixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDM0QsS0FBSyxlQUFlLENBQUMsR0FBRztnQkFDdEIsSUFBSSxLQUFLLFlBQVksbUJBQW1CLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTs7b0JBRXhFLE9BQU8sS0FBSyxDQUFDLHFDQUFxQyxDQUFDO2lCQUNwRDtnQkFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQyxLQUFLLGVBQWUsQ0FBQyxZQUFZO2dCQUMvQixJQUFJLEtBQUssWUFBWSxtQkFBbUIsRUFBRTtvQkFDeEMsT0FBTyxLQUFLLENBQUMscUNBQXFDLENBQUM7aUJBQ3BEO2dCQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sSUFBSSxLQUFLLENBQ1gsK0VBQStFLENBQUMsQ0FBQztZQUN2RjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixHQUFHLG9DQUFvQyxDQUFDLENBQUM7U0FDMUY7S0FDRjs7Ozs7O0lBRU8saUJBQWlCLENBQUMsS0FBVSxFQUFFLFlBQW9CO1FBQ3hELElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUNYLG1CQUFtQixZQUFZLFdBQVcsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHO2dCQUNoRSxtQ0FBbUMsQ0FBQyxDQUFDO1NBQzFDOzs7Ozs7SUFHSCx1QkFBdUIsQ0FBQyxLQUFhLElBQWMsT0FBTyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs7OztJQUNwRix3QkFBd0IsQ0FBQyxLQUFhLElBQWUsT0FBTyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs7OztJQUN2Rix5QkFBeUIsQ0FBQyxLQUFhLElBQWdCLE9BQU8sSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7Ozs7SUFDMUYsc0JBQXNCLENBQUMsS0FBYSxJQUFhLE9BQU8sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7Ozs7SUFDakYsOEJBQThCLENBQUMsS0FBYTtRQUMxQyxPQUFPLElBQUksbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkM7OztZQXRERixVQUFVOzs7OzRDQUVJLE1BQU0sU0FBQyxRQUFROztnRUFEakIsZ0JBQWdCLDREQUFoQixnQkFBZ0IsV0FDUCxRQUFROzs7Ozs7OztBQXVEOUI7Ozs7SUFDRSxZQUFtQixxQ0FBNkM7O1FBQTdDLDBDQUFxQyxHQUFyQyxxQ0FBcUMsQ0FBUTtLQUUvRDs7OztJQUlELFFBQVE7UUFDTixPQUFPLDBDQUEwQyxJQUFJLENBQUMscUNBQXFDLEVBQUU7WUFDekYsb0NBQW9DLENBQUM7S0FDMUM7Q0FDRjs7Ozs7Ozs7OztBQUVELGtCQUFtQixTQUFRLGFBQWE7Ozs7SUFDdEMsV0FBVyxLQUFLLE9BQU8sTUFBTSxDQUFDLEVBQUU7Q0FDakM7QUFDRCxtQkFBb0IsU0FBUSxhQUFhOzs7O0lBQ3ZDLFdBQVcsS0FBSyxPQUFPLE9BQU8sQ0FBQyxFQUFFO0NBQ2xDO0FBQ0Qsb0JBQXFCLFNBQVEsYUFBYTs7OztJQUN4QyxXQUFXLEtBQUssT0FBTyxRQUFRLENBQUMsRUFBRTtDQUNuQztBQUNELGlCQUFrQixTQUFRLGFBQWE7Ozs7SUFDckMsV0FBVyxLQUFLLE9BQU8sS0FBSyxDQUFDLEVBQUU7Q0FDaEM7QUFDRCx5QkFBMEIsU0FBUSxhQUFhOzs7O0lBQzdDLFdBQVcsS0FBSyxPQUFPLGFBQWEsQ0FBQyxFQUFFO0NBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgU2FuaXRpemVyLCBTZWN1cml0eUNvbnRleHQsIMm1X3Nhbml0aXplSHRtbCBhcyBfc2FuaXRpemVIdG1sLCDJtV9zYW5pdGl6ZVN0eWxlIGFzIF9zYW5pdGl6ZVN0eWxlLCDJtV9zYW5pdGl6ZVVybCBhcyBfc2FuaXRpemVVcmx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICcuLi9kb20vZG9tX3Rva2Vucyc7XG5cbmV4cG9ydCB7U2VjdXJpdHlDb250ZXh0fTtcblxuXG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgaW4gYSBwYXJ0aWN1bGFyIGNvbnRleHQuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBIVE1MLlxuICpcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZUh0bWwgZXh0ZW5kcyBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBzdHlsZSAoQ1NTKS5cbiAqXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNhZmVTdHlsZSBleHRlbmRzIFNhZmVWYWx1ZSB7fVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIEphdmFTY3JpcHQuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlU2NyaXB0IGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgYSBVUkwgbGlua2luZyB0byBhIGRvY3VtZW50LlxuICpcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVVybCBleHRlbmRzIFNhZmVWYWx1ZSB7fVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIGEgVVJMIHRvIGxvYWQgZXhlY3V0YWJsZSBjb2RlIGZyb20uXG4gKlxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlUmVzb3VyY2VVcmwgZXh0ZW5kcyBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBEb21TYW5pdGl6ZXIgaGVscHMgcHJldmVudGluZyBDcm9zcyBTaXRlIFNjcmlwdGluZyBTZWN1cml0eSBidWdzIChYU1MpIGJ5IHNhbml0aXppbmdcbiAqIHZhbHVlcyB0byBiZSBzYWZlIHRvIHVzZSBpbiB0aGUgZGlmZmVyZW50IERPTSBjb250ZXh0cy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgd2hlbiBiaW5kaW5nIGEgVVJMIGluIGFuIGA8YSBbaHJlZl09XCJzb21lVmFsdWVcIj5gIGh5cGVybGluaywgYHNvbWVWYWx1ZWAgd2lsbCBiZVxuICogc2FuaXRpemVkIHNvIHRoYXQgYW4gYXR0YWNrZXIgY2Fubm90IGluamVjdCBlLmcuIGEgYGphdmFzY3JpcHQ6YCBVUkwgdGhhdCB3b3VsZCBleGVjdXRlIGNvZGUgb25cbiAqIHRoZSB3ZWJzaXRlLlxuICpcbiAqIEluIHNwZWNpZmljIHNpdHVhdGlvbnMsIGl0IG1pZ2h0IGJlIG5lY2Vzc2FyeSB0byBkaXNhYmxlIHNhbml0aXphdGlvbiwgZm9yIGV4YW1wbGUgaWYgdGhlXG4gKiBhcHBsaWNhdGlvbiBnZW51aW5lbHkgbmVlZHMgdG8gcHJvZHVjZSBhIGBqYXZhc2NyaXB0OmAgc3R5bGUgbGluayB3aXRoIGEgZHluYW1pYyB2YWx1ZSBpbiBpdC5cbiAqIFVzZXJzIGNhbiBieXBhc3Mgc2VjdXJpdHkgYnkgY29uc3RydWN0aW5nIGEgdmFsdWUgd2l0aCBvbmUgb2YgdGhlIGBieXBhc3NTZWN1cml0eVRydXN0Li4uYFxuICogbWV0aG9kcywgYW5kIHRoZW4gYmluZGluZyB0byB0aGF0IHZhbHVlIGZyb20gdGhlIHRlbXBsYXRlLlxuICpcbiAqIFRoZXNlIHNpdHVhdGlvbnMgc2hvdWxkIGJlIHZlcnkgcmFyZSwgYW5kIGV4dHJhb3JkaW5hcnkgY2FyZSBtdXN0IGJlIHRha2VuIHRvIGF2b2lkIGNyZWF0aW5nIGFcbiAqIENyb3NzIFNpdGUgU2NyaXB0aW5nIChYU1MpIHNlY3VyaXR5IGJ1ZyFcbiAqXG4gKiBXaGVuIHVzaW5nIGBieXBhc3NTZWN1cml0eVRydXN0Li4uYCwgbWFrZSBzdXJlIHRvIGNhbGwgdGhlIG1ldGhvZCBhcyBlYXJseSBhcyBwb3NzaWJsZSBhbmQgYXNcbiAqIGNsb3NlIGFzIHBvc3NpYmxlIHRvIHRoZSBzb3VyY2Ugb2YgdGhlIHZhbHVlLCB0byBtYWtlIGl0IGVhc3kgdG8gdmVyaWZ5IG5vIHNlY3VyaXR5IGJ1ZyBpc1xuICogY3JlYXRlZCBieSBpdHMgdXNlLlxuICpcbiAqIEl0IGlzIG5vdCByZXF1aXJlZCAoYW5kIG5vdCByZWNvbW1lbmRlZCkgdG8gYnlwYXNzIHNlY3VyaXR5IGlmIHRoZSB2YWx1ZSBpcyBzYWZlLCBlLmcuIGEgVVJMIHRoYXRcbiAqIGRvZXMgbm90IHN0YXJ0IHdpdGggYSBzdXNwaWNpb3VzIHByb3RvY29sLCBvciBhbiBIVE1MIHNuaXBwZXQgdGhhdCBkb2VzIG5vdCBjb250YWluIGRhbmdlcm91c1xuICogY29kZS4gVGhlIHNhbml0aXplciBsZWF2ZXMgc2FmZSB2YWx1ZXMgaW50YWN0LlxuICpcbiAqIEBzZWN1cml0eSBDYWxsaW5nIGFueSBvZiB0aGUgYGJ5cGFzc1NlY3VyaXR5VHJ1c3QuLi5gIEFQSXMgZGlzYWJsZXMgQW5ndWxhcidzIGJ1aWx0LWluXG4gKiBzYW5pdGl6YXRpb24gZm9yIHRoZSB2YWx1ZSBwYXNzZWQgaW4uIENhcmVmdWxseSBjaGVjayBhbmQgYXVkaXQgYWxsIHZhbHVlcyBhbmQgY29kZSBwYXRocyBnb2luZ1xuICogaW50byB0aGlzIGNhbGwuIE1ha2Ugc3VyZSBhbnkgdXNlciBkYXRhIGlzIGFwcHJvcHJpYXRlbHkgZXNjYXBlZCBmb3IgdGhpcyBzZWN1cml0eSBjb250ZXh0LlxuICogRm9yIG1vcmUgZGV0YWlsLCBzZWUgdGhlIFtTZWN1cml0eSBHdWlkZV0oaHR0cDovL2cuY28vbmcvc2VjdXJpdHkpLlxuICpcbiAqXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb21TYW5pdGl6ZXIgaW1wbGVtZW50cyBTYW5pdGl6ZXIge1xuICAvKipcbiAgICogU2FuaXRpemVzIGEgdmFsdWUgZm9yIHVzZSBpbiB0aGUgZ2l2ZW4gU2VjdXJpdHlDb250ZXh0LlxuICAgKlxuICAgKiBJZiB2YWx1ZSBpcyB0cnVzdGVkIGZvciB0aGUgY29udGV4dCwgdGhpcyBtZXRob2Qgd2lsbCB1bndyYXAgdGhlIGNvbnRhaW5lZCBzYWZlIHZhbHVlIGFuZCB1c2VcbiAgICogaXQgZGlyZWN0bHkuIE90aGVyd2lzZSwgdmFsdWUgd2lsbCBiZSBzYW5pdGl6ZWQgdG8gYmUgc2FmZSBpbiB0aGUgZ2l2ZW4gY29udGV4dCwgZm9yIGV4YW1wbGVcbiAgICogYnkgcmVwbGFjaW5nIFVSTHMgdGhhdCBoYXZlIGFuIHVuc2FmZSBwcm90b2NvbCBwYXJ0IChzdWNoIGFzIGBqYXZhc2NyaXB0OmApLiBUaGUgaW1wbGVtZW50YXRpb25cbiAgICogaXMgcmVzcG9uc2libGUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGNhbiBkZWZpbml0ZWx5IGJlIHNhZmVseSB1c2VkIGluIHRoZSBnaXZlbiBjb250ZXh0LlxuICAgKi9cbiAgYWJzdHJhY3Qgc2FuaXRpemUoY29udGV4dDogU2VjdXJpdHlDb250ZXh0LCB2YWx1ZTogU2FmZVZhbHVlfHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGw7XG5cbiAgLyoqXG4gICAqIEJ5cGFzcyBzZWN1cml0eSBhbmQgdHJ1c3QgdGhlIGdpdmVuIHZhbHVlIHRvIGJlIHNhZmUgSFRNTC4gT25seSB1c2UgdGhpcyB3aGVuIHRoZSBib3VuZCBIVE1MXG4gICAqIGlzIHVuc2FmZSAoZS5nLiBjb250YWlucyBgPHNjcmlwdD5gIHRhZ3MpIGFuZCB0aGUgY29kZSBzaG91bGQgYmUgZXhlY3V0ZWQuIFRoZSBzYW5pdGl6ZXIgd2lsbFxuICAgKiBsZWF2ZSBzYWZlIEhUTUwgaW50YWN0LCBzbyBpbiBtb3N0IHNpdHVhdGlvbnMgdGhpcyBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuICAgKlxuICAgKiAqKldBUk5JTkc6KiogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIHVudHJ1c3RlZCB1c2VyIGRhdGEgZXhwb3NlcyB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTU1xuICAgKiBzZWN1cml0eSByaXNrcyFcbiAgICovXG4gIGFic3RyYWN0IGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlOiBzdHJpbmcpOiBTYWZlSHRtbDtcblxuICAvKipcbiAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgc2FmZSBzdHlsZSB2YWx1ZSAoQ1NTKS5cbiAgICpcbiAgICogKipXQVJOSU5HOioqIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2l0aCB1bnRydXN0ZWQgdXNlciBkYXRhIGV4cG9zZXMgeW91ciBhcHBsaWNhdGlvbiB0byBYU1NcbiAgICogc2VjdXJpdHkgcmlza3MhXG4gICAqL1xuICBhYnN0cmFjdCBieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWU6IHN0cmluZyk6IFNhZmVTdHlsZTtcblxuICAvKipcbiAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgc2FmZSBKYXZhU2NyaXB0LlxuICAgKlxuICAgKiAqKldBUk5JTkc6KiogY2FsbGluZyB0aGlzIG1ldGhvZCB3aXRoIHVudHJ1c3RlZCB1c2VyIGRhdGEgZXhwb3NlcyB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTU1xuICAgKiBzZWN1cml0eSByaXNrcyFcbiAgICovXG4gIGFic3RyYWN0IGJ5cGFzc1NlY3VyaXR5VHJ1c3RTY3JpcHQodmFsdWU6IHN0cmluZyk6IFNhZmVTY3JpcHQ7XG5cbiAgLyoqXG4gICAqIEJ5cGFzcyBzZWN1cml0eSBhbmQgdHJ1c3QgdGhlIGdpdmVuIHZhbHVlIHRvIGJlIGEgc2FmZSBzdHlsZSBVUkwsIGkuZS4gYSB2YWx1ZSB0aGF0IGNhbiBiZSB1c2VkXG4gICAqIGluIGh5cGVybGlua3Mgb3IgYDxpbWcgc3JjPmAuXG4gICAqXG4gICAqICoqV0FSTklORzoqKiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggdW50cnVzdGVkIHVzZXIgZGF0YSBleHBvc2VzIHlvdXIgYXBwbGljYXRpb24gdG8gWFNTXG4gICAqIHNlY3VyaXR5IHJpc2tzIVxuICAgKi9cbiAgYWJzdHJhY3QgYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2YWx1ZTogc3RyaW5nKTogU2FmZVVybDtcblxuICAvKipcbiAgICogQnlwYXNzIHNlY3VyaXR5IGFuZCB0cnVzdCB0aGUgZ2l2ZW4gdmFsdWUgdG8gYmUgYSBzYWZlIHJlc291cmNlIFVSTCwgaS5lLiBhIGxvY2F0aW9uIHRoYXQgbWF5XG4gICAqIGJlIHVzZWQgdG8gbG9hZCBleGVjdXRhYmxlIGNvZGUgZnJvbSwgbGlrZSBgPHNjcmlwdCBzcmM+YCwgb3IgYDxpZnJhbWUgc3JjPmAuXG4gICAqXG4gICAqICoqV0FSTklORzoqKiBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpdGggdW50cnVzdGVkIHVzZXIgZGF0YSBleHBvc2VzIHlvdXIgYXBwbGljYXRpb24gdG8gWFNTXG4gICAqIHNlY3VyaXR5IHJpc2tzIVxuICAgKi9cbiAgYWJzdHJhY3QgYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHZhbHVlOiBzdHJpbmcpOiBTYWZlUmVzb3VyY2VVcmw7XG59XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbVNhbml0aXplckltcGwgZXh0ZW5kcyBEb21TYW5pdGl6ZXIge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSkgeyBzdXBlcigpOyB9XG5cbiAgc2FuaXRpemUoY3R4OiBTZWN1cml0eUNvbnRleHQsIHZhbHVlOiBTYWZlVmFsdWV8c3RyaW5nfG51bGwpOiBzdHJpbmd8bnVsbCB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIHN3aXRjaCAoY3R4KSB7XG4gICAgICBjYXNlIFNlY3VyaXR5Q29udGV4dC5OT05FOlxuICAgICAgICByZXR1cm4gdmFsdWUgYXMgc3RyaW5nO1xuICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuSFRNTDpcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU2FmZUh0bWxJbXBsKSByZXR1cm4gdmFsdWUuY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eTtcbiAgICAgICAgdGhpcy5jaGVja05vdFNhZmVWYWx1ZSh2YWx1ZSwgJ0hUTUwnKTtcbiAgICAgICAgcmV0dXJuIF9zYW5pdGl6ZUh0bWwodGhpcy5fZG9jLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgIGNhc2UgU2VjdXJpdHlDb250ZXh0LlNUWUxFOlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTYWZlU3R5bGVJbXBsKSByZXR1cm4gdmFsdWUuY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eTtcbiAgICAgICAgdGhpcy5jaGVja05vdFNhZmVWYWx1ZSh2YWx1ZSwgJ1N0eWxlJyk7XG4gICAgICAgIHJldHVybiBfc2FuaXRpemVTdHlsZSh2YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuU0NSSVBUOlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTYWZlU2NyaXB0SW1wbCkgcmV0dXJuIHZhbHVlLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHk7XG4gICAgICAgIHRoaXMuY2hlY2tOb3RTYWZlVmFsdWUodmFsdWUsICdTY3JpcHQnKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnNhZmUgdmFsdWUgdXNlZCBpbiBhIHNjcmlwdCBjb250ZXh0Jyk7XG4gICAgICBjYXNlIFNlY3VyaXR5Q29udGV4dC5VUkw6XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNhZmVSZXNvdXJjZVVybEltcGwgfHwgdmFsdWUgaW5zdGFuY2VvZiBTYWZlVXJsSW1wbCkge1xuICAgICAgICAgIC8vIEFsbG93IHJlc291cmNlIFVSTHMgaW4gVVJMIGNvbnRleHRzLCB0aGV5IGFyZSBzdHJpY3RseSBtb3JlIHRydXN0ZWQuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja05vdFNhZmVWYWx1ZSh2YWx1ZSwgJ1VSTCcpO1xuICAgICAgICByZXR1cm4gX3Nhbml0aXplVXJsKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMOlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTYWZlUmVzb3VyY2VVcmxJbXBsKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja05vdFNhZmVWYWx1ZSh2YWx1ZSwgJ1Jlc291cmNlVVJMJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICd1bnNhZmUgdmFsdWUgdXNlZCBpbiBhIHJlc291cmNlIFVSTCBjb250ZXh0IChzZWUgaHR0cDovL2cuY28vbmcvc2VjdXJpdHkjeHNzKScpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIFNlY3VyaXR5Q29udGV4dCAke2N0eH0gKHNlZSBodHRwOi8vZy5jby9uZy9zZWN1cml0eSN4c3MpYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja05vdFNhZmVWYWx1ZSh2YWx1ZTogYW55LCBleHBlY3RlZFR5cGU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNhZmVWYWx1ZUltcGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgUmVxdWlyZWQgYSBzYWZlICR7ZXhwZWN0ZWRUeXBlfSwgZ290IGEgJHt2YWx1ZS5nZXRUeXBlTmFtZSgpfSBgICtcbiAgICAgICAgICBgKHNlZSBodHRwOi8vZy5jby9uZy9zZWN1cml0eSN4c3MpYCk7XG4gICAgfVxuICB9XG5cbiAgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWU6IHN0cmluZyk6IFNhZmVIdG1sIHsgcmV0dXJuIG5ldyBTYWZlSHRtbEltcGwodmFsdWUpOyB9XG4gIGJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZTogc3RyaW5nKTogU2FmZVN0eWxlIHsgcmV0dXJuIG5ldyBTYWZlU3R5bGVJbXBsKHZhbHVlKTsgfVxuICBieXBhc3NTZWN1cml0eVRydXN0U2NyaXB0KHZhbHVlOiBzdHJpbmcpOiBTYWZlU2NyaXB0IHsgcmV0dXJuIG5ldyBTYWZlU2NyaXB0SW1wbCh2YWx1ZSk7IH1cbiAgYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2YWx1ZTogc3RyaW5nKTogU2FmZVVybCB7IHJldHVybiBuZXcgU2FmZVVybEltcGwodmFsdWUpOyB9XG4gIGJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2YWx1ZTogc3RyaW5nKTogU2FmZVJlc291cmNlVXJsIHtcbiAgICByZXR1cm4gbmV3IFNhZmVSZXNvdXJjZVVybEltcGwodmFsdWUpO1xuICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlVmFsdWUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eTogc3RyaW5nKSB7XG4gICAgLy8gZW1wdHlcbiAgfVxuXG4gIGFic3RyYWN0IGdldFR5cGVOYW1lKCk6IHN0cmluZztcblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYFNhZmVWYWx1ZSBtdXN0IHVzZSBbcHJvcGVydHldPWJpbmRpbmc6ICR7dGhpcy5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5fWAgK1xuICAgICAgICBgIChzZWUgaHR0cDovL2cuY28vbmcvc2VjdXJpdHkjeHNzKWA7XG4gIH1cbn1cblxuY2xhc3MgU2FmZUh0bWxJbXBsIGV4dGVuZHMgU2FmZVZhbHVlSW1wbCBpbXBsZW1lbnRzIFNhZmVIdG1sIHtcbiAgZ2V0VHlwZU5hbWUoKSB7IHJldHVybiAnSFRNTCc7IH1cbn1cbmNsYXNzIFNhZmVTdHlsZUltcGwgZXh0ZW5kcyBTYWZlVmFsdWVJbXBsIGltcGxlbWVudHMgU2FmZVN0eWxlIHtcbiAgZ2V0VHlwZU5hbWUoKSB7IHJldHVybiAnU3R5bGUnOyB9XG59XG5jbGFzcyBTYWZlU2NyaXB0SW1wbCBleHRlbmRzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlU2NyaXB0IHtcbiAgZ2V0VHlwZU5hbWUoKSB7IHJldHVybiAnU2NyaXB0JzsgfVxufVxuY2xhc3MgU2FmZVVybEltcGwgZXh0ZW5kcyBTYWZlVmFsdWVJbXBsIGltcGxlbWVudHMgU2FmZVVybCB7XG4gIGdldFR5cGVOYW1lKCkgeyByZXR1cm4gJ1VSTCc7IH1cbn1cbmNsYXNzIFNhZmVSZXNvdXJjZVVybEltcGwgZXh0ZW5kcyBTYWZlVmFsdWVJbXBsIGltcGxlbWVudHMgU2FmZVJlc291cmNlVXJsIHtcbiAgZ2V0VHlwZU5hbWUoKSB7IHJldHVybiAnUmVzb3VyY2VVUkwnOyB9XG59XG4iXX0=