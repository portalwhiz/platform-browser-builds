/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { AnimationBuilder } from '@angular/animations';
import { AnimationDriver, ɵAnimationEngine as AnimationEngine, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵCssKeyframesDriver as CssKeyframesDriver, ɵNoopAnimationDriver as NoopAnimationDriver, ɵWebAnimationsDriver as WebAnimationsDriver, ɵWebAnimationsStyleNormalizer as WebAnimationsStyleNormalizer, ɵsupportsWebAnimations as supportsWebAnimations } from '@angular/animations/browser';
import { Injectable, InjectionToken, NgZone, RendererFactory2 } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';
import { BrowserAnimationBuilder } from './animation_builder';
import { AnimationRendererFactory } from './animation_renderer';
var InjectableAnimationEngine = /** @class */ (function (_super) {
    tslib_1.__extends(InjectableAnimationEngine, _super);
    function InjectableAnimationEngine(driver, normalizer) {
        return _super.call(this, driver, normalizer) || this;
    }
    InjectableAnimationEngine = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AnimationDriver, AnimationStyleNormalizer])
    ], InjectableAnimationEngine);
    return InjectableAnimationEngine;
}(AnimationEngine));
export { InjectableAnimationEngine };
export function instantiateSupportedAnimationDriver() {
    return supportsWebAnimations() ? new WebAnimationsDriver() : new CssKeyframesDriver();
}
export function instantiateDefaultStyleNormalizer() {
    return new WebAnimationsStyleNormalizer();
}
export function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
/**
 * @experimental Animation support is experimental.
 */
export var ANIMATION_MODULE_TYPE = new InjectionToken('AnimationModuleType');
var SHARED_ANIMATION_PROVIDERS = [
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
 */
export var BROWSER_ANIMATIONS_PROVIDERS = tslib_1.__spread([
    { provide: AnimationDriver, useFactory: instantiateSupportedAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'BrowserAnimations' }
], SHARED_ANIMATION_PROVIDERS);
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
export var BROWSER_NOOP_ANIMATIONS_PROVIDERS = tslib_1.__spread([
    { provide: AnimationDriver, useClass: NoopAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' }
], SHARED_ANIMATION_PROVIDERS);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zL3NyYy9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUUsZ0JBQWdCLElBQUksZUFBZSxFQUFFLHlCQUF5QixJQUFJLHdCQUF3QixFQUFFLG1CQUFtQixJQUFJLGtCQUFrQixFQUFFLG9CQUFvQixJQUFJLG1CQUFtQixFQUFFLG9CQUFvQixJQUFJLG1CQUFtQixFQUFFLDZCQUE2QixJQUFJLDRCQUE0QixFQUFFLHNCQUFzQixJQUFJLHFCQUFxQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN1ksT0FBTyxFQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFZLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxvQkFBb0IsSUFBSSxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXRGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRzlEO0lBQStDLHFEQUFlO0lBQzVELG1DQUFZLE1BQXVCLEVBQUUsVUFBb0M7ZUFDdkUsa0JBQU0sTUFBTSxFQUFFLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBSFUseUJBQXlCO1FBRHJDLFVBQVUsRUFBRTtpREFFUyxlQUFlLEVBQWMsd0JBQXdCO09BRDlELHlCQUF5QixDQUlyQztJQUFELGdDQUFDO0NBQUEsQUFKRCxDQUErQyxlQUFlLEdBSTdEO1NBSlkseUJBQXlCO0FBTXRDLE1BQU07SUFDSixNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDeEYsQ0FBQztBQUVELE1BQU07SUFDSixNQUFNLENBQUMsSUFBSSw0QkFBNEIsRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFFRCxNQUFNLHFDQUNGLFFBQTZCLEVBQUUsTUFBdUIsRUFBRSxJQUFZO0lBQ3RFLE1BQU0sQ0FBQyxJQUFJLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQzlCLElBQUksY0FBYyxDQUF1QyxxQkFBcUIsQ0FBQyxDQUFDO0FBRXBGLElBQU0sMEJBQTBCLEdBQWU7SUFDN0MsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO0lBQzlELEVBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxpQ0FBaUMsRUFBQztJQUNsRixFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFDLEVBQUU7UUFDL0QsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixVQUFVLEVBQUUsMEJBQTBCO1FBQ3RDLElBQUksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7S0FDckQ7Q0FDRixDQUFDO0FBRUY7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0sNEJBQTRCO0lBQ3ZDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsbUNBQW1DLEVBQUM7SUFDM0UsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO0dBQUssMEJBQTBCLENBQy9GLENBQUM7QUFFRjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxpQ0FBaUM7SUFDNUMsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQztJQUN6RCxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUM7R0FBSywwQkFBMEIsQ0FDNUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7QW5pbWF0aW9uRHJpdmVyLCDJtUFuaW1hdGlvbkVuZ2luZSBhcyBBbmltYXRpb25FbmdpbmUsIMm1QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyIGFzIEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciwgybVDc3NLZXlmcmFtZXNEcml2ZXIgYXMgQ3NzS2V5ZnJhbWVzRHJpdmVyLCDJtU5vb3BBbmltYXRpb25Ecml2ZXIgYXMgTm9vcEFuaW1hdGlvbkRyaXZlciwgybVXZWJBbmltYXRpb25zRHJpdmVyIGFzIFdlYkFuaW1hdGlvbnNEcml2ZXIsIMm1V2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplciBhcyBXZWJBbmltYXRpb25zU3R5bGVOb3JtYWxpemVyLCDJtXN1cHBvcnRzV2ViQW5pbWF0aW9ucyBhcyBzdXBwb3J0c1dlYkFuaW1hdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3Nlcic7XG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdGlvblRva2VuLCBOZ1pvbmUsIFByb3ZpZGVyLCBSZW5kZXJlckZhY3RvcnkyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ybVEb21SZW5kZXJlckZhY3RvcnkyIGFzIERvbVJlbmRlcmVyRmFjdG9yeTJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25CdWlsZGVyfSBmcm9tICcuL2FuaW1hdGlvbl9idWlsZGVyJztcbmltcG9ydCB7QW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5fSBmcm9tICcuL2FuaW1hdGlvbl9yZW5kZXJlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmplY3RhYmxlQW5pbWF0aW9uRW5naW5lIGV4dGVuZHMgQW5pbWF0aW9uRW5naW5lIHtcbiAgY29uc3RydWN0b3IoZHJpdmVyOiBBbmltYXRpb25Ecml2ZXIsIG5vcm1hbGl6ZXI6IEFuaW1hdGlvblN0eWxlTm9ybWFsaXplcikge1xuICAgIHN1cGVyKGRyaXZlciwgbm9ybWFsaXplcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlU3VwcG9ydGVkQW5pbWF0aW9uRHJpdmVyKCkge1xuICByZXR1cm4gc3VwcG9ydHNXZWJBbmltYXRpb25zKCkgPyBuZXcgV2ViQW5pbWF0aW9uc0RyaXZlcigpIDogbmV3IENzc0tleWZyYW1lc0RyaXZlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVEZWZhdWx0U3R5bGVOb3JtYWxpemVyKCkge1xuICByZXR1cm4gbmV3IFdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlUmVuZGVyZXJGYWN0b3J5KFxuICAgIHJlbmRlcmVyOiBEb21SZW5kZXJlckZhY3RvcnkyLCBlbmdpbmU6IEFuaW1hdGlvbkVuZ2luZSwgem9uZTogTmdab25lKSB7XG4gIHJldHVybiBuZXcgQW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5KHJlbmRlcmVyLCBlbmdpbmUsIHpvbmUpO1xufVxuXG4vKipcbiAqIEBleHBlcmltZW50YWwgQW5pbWF0aW9uIHN1cHBvcnQgaXMgZXhwZXJpbWVudGFsLlxuICovXG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX01PRFVMRV9UWVBFID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48J05vb3BBbmltYXRpb25zJ3wnQnJvd3NlckFuaW1hdGlvbnMnPignQW5pbWF0aW9uTW9kdWxlVHlwZScpO1xuXG5jb25zdCBTSEFSRURfQU5JTUFUSU9OX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IEFuaW1hdGlvbkJ1aWxkZXIsIHVzZUNsYXNzOiBCcm93c2VyQW5pbWF0aW9uQnVpbGRlcn0sXG4gIHtwcm92aWRlOiBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIHVzZUZhY3Rvcnk6IGluc3RhbnRpYXRlRGVmYXVsdFN0eWxlTm9ybWFsaXplcn0sXG4gIHtwcm92aWRlOiBBbmltYXRpb25FbmdpbmUsIHVzZUNsYXNzOiBJbmplY3RhYmxlQW5pbWF0aW9uRW5naW5lfSwge1xuICAgIHByb3ZpZGU6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVSZW5kZXJlckZhY3RvcnksXG4gICAgZGVwczogW0RvbVJlbmRlcmVyRmFjdG9yeTIsIEFuaW1hdGlvbkVuZ2luZSwgTmdab25lXVxuICB9XG5dO1xuXG4vKipcbiAqIFNlcGFyYXRlIHByb3ZpZGVycyBmcm9tIHRoZSBhY3R1YWwgbW9kdWxlIHNvIHRoYXQgd2UgY2FuIGRvIGEgbG9jYWwgbW9kaWZpY2F0aW9uIGluIEdvb2dsZTMgdG9cbiAqIGluY2x1ZGUgdGhlbSBpbiB0aGUgQnJvd3Nlck1vZHVsZS5cbiAqL1xuZXhwb3J0IGNvbnN0IEJST1dTRVJfQU5JTUFUSU9OU19QUk9WSURFUlM6IFByb3ZpZGVyW10gPSBbXG4gIHtwcm92aWRlOiBBbmltYXRpb25Ecml2ZXIsIHVzZUZhY3Rvcnk6IGluc3RhbnRpYXRlU3VwcG9ydGVkQW5pbWF0aW9uRHJpdmVyfSxcbiAge3Byb3ZpZGU6IEFOSU1BVElPTl9NT0RVTEVfVFlQRSwgdXNlVmFsdWU6ICdCcm93c2VyQW5pbWF0aW9ucyd9LCAuLi5TSEFSRURfQU5JTUFUSU9OX1BST1ZJREVSU1xuXTtcblxuLyoqXG4gKiBTZXBhcmF0ZSBwcm92aWRlcnMgZnJvbSB0aGUgYWN0dWFsIG1vZHVsZSBzbyB0aGF0IHdlIGNhbiBkbyBhIGxvY2FsIG1vZGlmaWNhdGlvbiBpbiBHb29nbGUzIHRvXG4gKiBpbmNsdWRlIHRoZW0gaW4gdGhlIEJyb3dzZXJUZXN0aW5nTW9kdWxlLlxuICovXG5leHBvcnQgY29uc3QgQlJPV1NFUl9OT09QX0FOSU1BVElPTlNfUFJPVklERVJTOiBQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogQW5pbWF0aW9uRHJpdmVyLCB1c2VDbGFzczogTm9vcEFuaW1hdGlvbkRyaXZlcn0sXG4gIHtwcm92aWRlOiBBTklNQVRJT05fTU9EVUxFX1RZUEUsIHVzZVZhbHVlOiAnTm9vcEFuaW1hdGlvbnMnfSwgLi4uU0hBUkVEX0FOSU1BVElPTl9QUk9WSURFUlNcbl07XG4iXX0=