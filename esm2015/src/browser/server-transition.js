/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { APP_INITIALIZER, ApplicationInitStatus, InjectionToken, Injector } from '@angular/core';
import { getDOM } from '../dom/dom_adapter';
import { DOCUMENT } from '../dom/dom_tokens';
/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 * @type {?}
 */
export const TRANSITION_ID = new InjectionToken('TRANSITION_ID');
/**
 * @param {?} transitionId
 * @param {?} document
 * @param {?} injector
 * @return {?}
 */
export function appInitializerFactory(transitionId, document, injector) {
    return (/**
     * @return {?}
     */
    () => {
        // Wait for all application initializers to be completed before removing the styles set by
        // the server.
        injector.get(ApplicationInitStatus).donePromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dom = getDOM();
            /** @type {?} */
            const styles = Array.prototype.slice.apply(dom.querySelectorAll(document, `style[ng-transition]`));
            styles.filter((/**
             * @param {?} el
             * @return {?}
             */
            el => dom.getAttribute(el, 'ng-transition') === transitionId))
                .forEach((/**
             * @param {?} el
             * @return {?}
             */
            el => dom.remove(el)));
        }));
    });
}
/** @type {?} */
export const SERVER_TRANSITION_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFactory,
        deps: [TRANSITION_ID, DOCUMENT, Injector],
        multi: true
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXRyYW5zaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyL3NlcnZlci10cmFuc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGVBQWUsRUFBRSxxQkFBcUIsRUFBVSxjQUFjLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFNM0MsTUFBTSxPQUFPLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxlQUFlLENBQUM7Ozs7Ozs7QUFFaEUsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFlBQW9CLEVBQUUsUUFBYSxFQUFFLFFBQWtCO0lBQzNGOzs7SUFBTyxHQUFHLEVBQUU7UUFDViwwRkFBMEY7UUFDMUYsY0FBYztRQUNkLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSTs7O1FBQUMsR0FBRyxFQUFFOztrQkFDbEQsR0FBRyxHQUFHLE1BQU0sRUFBRTs7a0JBQ2QsTUFBTSxHQUNSLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLHNCQUFzQixDQUFDLENBQUM7WUFDdkYsTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxLQUFLLFlBQVksRUFBQztpQkFDdEUsT0FBTzs7OztZQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQ3JDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sMkJBQTJCLEdBQXFCO0lBQzNEO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLHFCQUFxQjtRQUNqQyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUN6QyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBBcHBsaWNhdGlvbkluaXRTdGF0dXMsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBTdGF0aWNQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Z2V0RE9NfSBmcm9tICcuLi9kb20vZG9tX2FkYXB0ZXInO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnLi4vZG9tL2RvbV90b2tlbnMnO1xuXG4vKipcbiAqIEFuIGlkIHRoYXQgaWRlbnRpZmllcyBhIHBhcnRpY3VsYXIgYXBwbGljYXRpb24gYmVpbmcgYm9vdHN0cmFwcGVkLCB0aGF0IHNob3VsZFxuICogbWF0Y2ggYWNyb3NzIHRoZSBjbGllbnQvc2VydmVyIGJvdW5kYXJ5LlxuICovXG5leHBvcnQgY29uc3QgVFJBTlNJVElPTl9JRCA9IG5ldyBJbmplY3Rpb25Ub2tlbignVFJBTlNJVElPTl9JRCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwSW5pdGlhbGl6ZXJGYWN0b3J5KHRyYW5zaXRpb25JZDogc3RyaW5nLCBkb2N1bWVudDogYW55LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICAvLyBXYWl0IGZvciBhbGwgYXBwbGljYXRpb24gaW5pdGlhbGl6ZXJzIHRvIGJlIGNvbXBsZXRlZCBiZWZvcmUgcmVtb3ZpbmcgdGhlIHN0eWxlcyBzZXQgYnlcbiAgICAvLyB0aGUgc2VydmVyLlxuICAgIGluamVjdG9yLmdldChBcHBsaWNhdGlvbkluaXRTdGF0dXMpLmRvbmVQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgZG9tID0gZ2V0RE9NKCk7XG4gICAgICBjb25zdCBzdHlsZXM6IGFueVtdID1cbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZG9tLnF1ZXJ5U2VsZWN0b3JBbGwoZG9jdW1lbnQsIGBzdHlsZVtuZy10cmFuc2l0aW9uXWApKTtcbiAgICAgIHN0eWxlcy5maWx0ZXIoZWwgPT4gZG9tLmdldEF0dHJpYnV0ZShlbCwgJ25nLXRyYW5zaXRpb24nKSA9PT0gdHJhbnNpdGlvbklkKVxuICAgICAgICAgIC5mb3JFYWNoKGVsID0+IGRvbS5yZW1vdmUoZWwpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFNFUlZFUl9UUkFOU0lUSU9OX1BST1ZJREVSUzogU3RhdGljUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBhcHBJbml0aWFsaXplckZhY3RvcnksXG4gICAgZGVwczogW1RSQU5TSVRJT05fSUQsIERPQ1VNRU5ULCBJbmplY3Rvcl0sXG4gICAgbXVsdGk6IHRydWVcbiAgfSxcbl07XG4iXX0=