import { AnimationBuilder } from '@angular/animations';
import { AnimationDriver, ɵAnimationEngine as AnimationEngine, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵCssKeyframesDriver as CssKeyframesDriver, ɵNoopAnimationDriver as NoopAnimationDriver, ɵWebAnimationsDriver as WebAnimationsDriver, ɵWebAnimationsStyleNormalizer as WebAnimationsStyleNormalizer, ɵsupportsWebAnimations as supportsWebAnimations } from '@angular/animations/browser';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, NgZone, RendererFactory2 } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';
import { BrowserAnimationBuilder } from './animation_builder';
import { AnimationRendererFactory } from './animation_renderer';
import * as i0 from "@angular/core";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export class InjectableAnimationEngine extends AnimationEngine {
    /**
     * @param {?} doc
     * @param {?} driver
     * @param {?} normalizer
     */
    constructor(doc, driver, normalizer) {
        super(doc.body, driver, normalizer);
    }
}
InjectableAnimationEngine.decorators = [
    { type: Injectable },
];
/** @nocollapse */
InjectableAnimationEngine.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: AnimationDriver },
    { type: AnimationStyleNormalizer }
];
InjectableAnimationEngine.ngInjectableDef = i0.defineInjectable({ token: InjectableAnimationEngine, factory: function InjectableAnimationEngine_Factory(t) { return new (t || InjectableAnimationEngine)(i0.inject(DOCUMENT), i0.inject(AnimationDriver), i0.inject(AnimationStyleNormalizer)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(InjectableAnimationEngine, [{
        type: Injectable
    }], function () { return [{
        type: undefined,
        decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }]
    }, {
        type: AnimationDriver
    }, {
        type: AnimationStyleNormalizer
    }]; }, null);
/**
 * @return {?}
 */
export function instantiateSupportedAnimationDriver() {
    return supportsWebAnimations() ? new WebAnimationsDriver() : new CssKeyframesDriver();
}
/**
 * @return {?}
 */
export function instantiateDefaultStyleNormalizer() {
    return new WebAnimationsStyleNormalizer();
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
export function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
/**
 * \@publicApi
 * @type {?}
 */
export const ANIMATION_MODULE_TYPE = new InjectionToken('AnimationModuleType');
/** @type {?} */
const SHARED_ANIMATION_PROVIDERS = [
    { provide: AnimationBuilder, useClass: BrowserAnimationBuilder },
    { provide: AnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
    { provide: AnimationEngine, useClass: InjectableAnimationEngine }, {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [DomRendererFactory2, AnimationEngine, NgZone]
    }
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 * @type {?}
 */
export const BROWSER_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useFactory: instantiateSupportedAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'BrowserAnimations' }, ...SHARED_ANIMATION_PROVIDERS
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 * @type {?}
 */
export const BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useClass: NoopAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' }, ...SHARED_ANIMATION_PROVIDERS
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zL3NyYy9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBRSxnQkFBZ0IsSUFBSSxlQUFlLEVBQUUseUJBQXlCLElBQUksd0JBQXdCLEVBQUUsbUJBQW1CLElBQUksa0JBQWtCLEVBQUUsb0JBQW9CLElBQUksbUJBQW1CLEVBQUUsb0JBQW9CLElBQUksbUJBQW1CLEVBQUUsNkJBQTZCLElBQUksNEJBQTRCLEVBQUUsc0JBQXNCLElBQUkscUJBQXFCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3WSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBWSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUMsb0JBQW9CLElBQUksbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQUc5RCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsZUFBZTs7Ozs7O0lBQzVELFlBQ3NCLEdBQVEsRUFBRSxNQUF1QixFQUFFLFVBQW9DO1FBQzNGLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFMRixVQUFVOzs7OzRDQUdKLE1BQU0sU0FBQyxRQUFRO1lBWGQsZUFBZTtZQUFvRSx3QkFBd0I7O3lFQVN0Ryx5QkFBeUIsNEVBQXpCLHlCQUF5QixZQUV4QixRQUFRLGFBQW9CLGVBQWUsYUFBYyx3QkFBd0I7bUNBRmxGLHlCQUF5QjtjQURyQyxVQUFVOzs7O3NCQUdKLE1BQU07dUJBQUMsUUFBUTs7O2NBQW9CLGVBQWU7O2NBQWMsd0JBQXdCOzs7OztBQUsvRixNQUFNLFVBQVUsbUNBQW1DO0lBQ2pELE9BQU8scUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDeEYsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxpQ0FBaUM7SUFDL0MsT0FBTyxJQUFJLDRCQUE0QixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FDdEMsUUFBNkIsRUFBRSxNQUF1QixFQUFFLElBQVk7SUFDdEUsT0FBTyxJQUFJLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7Ozs7QUFLRCxNQUFNLE9BQU8scUJBQXFCLEdBQzlCLElBQUksY0FBYyxDQUF1QyxxQkFBcUIsQ0FBQzs7TUFFN0UsMEJBQTBCLEdBQWU7SUFDN0MsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO0lBQzlELEVBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxpQ0FBaUMsRUFBQztJQUNsRixFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFDLEVBQUU7UUFDL0QsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixVQUFVLEVBQUUsMEJBQTBCO1FBQ3RDLElBQUksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7S0FDckQ7Q0FDRjs7Ozs7O0FBTUQsTUFBTSxPQUFPLDRCQUE0QixHQUFlO0lBQ3RELEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsbUNBQW1DLEVBQUM7SUFDM0UsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDLEVBQUUsR0FBRywwQkFBMEI7Q0FDL0Y7Ozs7OztBQU1ELE1BQU0sT0FBTyxpQ0FBaUMsR0FBZTtJQUMzRCxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO0lBQ3pELEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxFQUFFLEdBQUcsMEJBQTBCO0NBQzVGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtBbmltYXRpb25Ecml2ZXIsIMm1QW5pbWF0aW9uRW5naW5lIGFzIEFuaW1hdGlvbkVuZ2luZSwgybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIgYXMgQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyLCDJtUNzc0tleWZyYW1lc0RyaXZlciBhcyBDc3NLZXlmcmFtZXNEcml2ZXIsIMm1Tm9vcEFuaW1hdGlvbkRyaXZlciBhcyBOb29wQW5pbWF0aW9uRHJpdmVyLCDJtVdlYkFuaW1hdGlvbnNEcml2ZXIgYXMgV2ViQW5pbWF0aW9uc0RyaXZlciwgybVXZWJBbmltYXRpb25zU3R5bGVOb3JtYWxpemVyIGFzIFdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIsIMm1c3VwcG9ydHNXZWJBbmltYXRpb25zIGFzIHN1cHBvcnRzV2ViQW5pbWF0aW9uc30gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE5nWm9uZSwgUHJvdmlkZXIsIFJlbmRlcmVyRmFjdG9yeTJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHvJtURvbVJlbmRlcmVyRmFjdG9yeTIgYXMgRG9tUmVuZGVyZXJGYWN0b3J5Mn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJy4vYW5pbWF0aW9uX2J1aWxkZXInO1xuaW1wb3J0IHtBbmltYXRpb25SZW5kZXJlckZhY3Rvcnl9IGZyb20gJy4vYW5pbWF0aW9uX3JlbmRlcmVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluamVjdGFibGVBbmltYXRpb25FbmdpbmUgZXh0ZW5kcyBBbmltYXRpb25FbmdpbmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55LCBkcml2ZXI6IEFuaW1hdGlvbkRyaXZlciwgbm9ybWFsaXplcjogQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyKSB7XG4gICAgc3VwZXIoZG9jLmJvZHksIGRyaXZlciwgbm9ybWFsaXplcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlU3VwcG9ydGVkQW5pbWF0aW9uRHJpdmVyKCkge1xuICByZXR1cm4gc3VwcG9ydHNXZWJBbmltYXRpb25zKCkgPyBuZXcgV2ViQW5pbWF0aW9uc0RyaXZlcigpIDogbmV3IENzc0tleWZyYW1lc0RyaXZlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVEZWZhdWx0U3R5bGVOb3JtYWxpemVyKCkge1xuICByZXR1cm4gbmV3IFdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlUmVuZGVyZXJGYWN0b3J5KFxuICAgIHJlbmRlcmVyOiBEb21SZW5kZXJlckZhY3RvcnkyLCBlbmdpbmU6IEFuaW1hdGlvbkVuZ2luZSwgem9uZTogTmdab25lKSB7XG4gIHJldHVybiBuZXcgQW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5KHJlbmRlcmVyLCBlbmdpbmUsIHpvbmUpO1xufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEFOSU1BVElPTl9NT0RVTEVfVFlQRSA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPCdOb29wQW5pbWF0aW9ucyd8J0Jyb3dzZXJBbmltYXRpb25zJz4oJ0FuaW1hdGlvbk1vZHVsZVR5cGUnKTtcblxuY29uc3QgU0hBUkVEX0FOSU1BVElPTl9QUk9WSURFUlM6IFByb3ZpZGVyW10gPSBbXG4gIHtwcm92aWRlOiBBbmltYXRpb25CdWlsZGVyLCB1c2VDbGFzczogQnJvd3NlckFuaW1hdGlvbkJ1aWxkZXJ9LFxuICB7cHJvdmlkZTogQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyLCB1c2VGYWN0b3J5OiBpbnN0YW50aWF0ZURlZmF1bHRTdHlsZU5vcm1hbGl6ZXJ9LFxuICB7cHJvdmlkZTogQW5pbWF0aW9uRW5naW5lLCB1c2VDbGFzczogSW5qZWN0YWJsZUFuaW1hdGlvbkVuZ2luZX0sIHtcbiAgICBwcm92aWRlOiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHVzZUZhY3Rvcnk6IGluc3RhbnRpYXRlUmVuZGVyZXJGYWN0b3J5LFxuICAgIGRlcHM6IFtEb21SZW5kZXJlckZhY3RvcnkyLCBBbmltYXRpb25FbmdpbmUsIE5nWm9uZV1cbiAgfVxuXTtcblxuLyoqXG4gKiBTZXBhcmF0ZSBwcm92aWRlcnMgZnJvbSB0aGUgYWN0dWFsIG1vZHVsZSBzbyB0aGF0IHdlIGNhbiBkbyBhIGxvY2FsIG1vZGlmaWNhdGlvbiBpbiBHb29nbGUzIHRvXG4gKiBpbmNsdWRlIHRoZW0gaW4gdGhlIEJyb3dzZXJNb2R1bGUuXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX0FOSU1BVElPTlNfUFJPVklERVJTOiBQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogQW5pbWF0aW9uRHJpdmVyLCB1c2VGYWN0b3J5OiBpbnN0YW50aWF0ZVN1cHBvcnRlZEFuaW1hdGlvbkRyaXZlcn0sXG4gIHtwcm92aWRlOiBBTklNQVRJT05fTU9EVUxFX1RZUEUsIHVzZVZhbHVlOiAnQnJvd3NlckFuaW1hdGlvbnMnfSwgLi4uU0hBUkVEX0FOSU1BVElPTl9QUk9WSURFUlNcbl07XG5cbi8qKlxuICogU2VwYXJhdGUgcHJvdmlkZXJzIGZyb20gdGhlIGFjdHVhbCBtb2R1bGUgc28gdGhhdCB3ZSBjYW4gZG8gYSBsb2NhbCBtb2RpZmljYXRpb24gaW4gR29vZ2xlMyB0b1xuICogaW5jbHVkZSB0aGVtIGluIHRoZSBCcm93c2VyVGVzdGluZ01vZHVsZS5cbiAqL1xuZXhwb3J0IGNvbnN0IEJST1dTRVJfTk9PUF9BTklNQVRJT05TX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IEFuaW1hdGlvbkRyaXZlciwgdXNlQ2xhc3M6IE5vb3BBbmltYXRpb25Ecml2ZXJ9LFxuICB7cHJvdmlkZTogQU5JTUFUSU9OX01PRFVMRV9UWVBFLCB1c2VWYWx1ZTogJ05vb3BBbmltYXRpb25zJ30sIC4uLlNIQVJFRF9BTklNQVRJT05fUFJPVklERVJTXG5dO1xuIl19