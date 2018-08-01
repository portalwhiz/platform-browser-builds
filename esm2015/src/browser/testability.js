/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { setTestabilityGetter, ɵglobal as global } from '@angular/core';
import { getDOM } from '../dom/dom_adapter';
export class BrowserGetTestability {
    static init() { setTestabilityGetter(new BrowserGetTestability()); }
    addToWindow(registry) {
        global['getAngularTestability'] = (elem, findInAncestors = true) => {
            const testability = registry.findTestabilityInTree(elem, findInAncestors);
            if (testability == null) {
                throw new Error('Could not find testability for element.');
            }
            return testability;
        };
        global['getAllAngularTestabilities'] = () => registry.getAllTestabilities();
        global['getAllAngularRootElements'] = () => registry.getAllRootElements();
        const whenAllStable = (callback /** TODO #9100 */) => {
            const testabilities = global['getAllAngularTestabilities']();
            let count = testabilities.length;
            let didWork = false;
            const decrement = function (didWork_ /** TODO #9100 */) {
                didWork = didWork || didWork_;
                count--;
                if (count == 0) {
                    callback(didWork);
                }
            };
            testabilities.forEach(function (testability /** TODO #9100 */) {
                testability.whenStable(decrement);
            });
        };
        if (!global['frameworkStabilizers']) {
            global['frameworkStabilizers'] = [];
        }
        global['frameworkStabilizers'].push(whenAllStable);
    }
    findTestabilityInTree(registry, elem, findInAncestors) {
        if (elem == null) {
            return null;
        }
        const t = registry.getTestability(elem);
        if (t != null) {
            return t;
        }
        else if (!findInAncestors) {
            return null;
        }
        if (getDOM().isShadowRoot(elem)) {
            return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
        }
        return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGFiaWxpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyL3Rlc3RhYmlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBbUQsb0JBQW9CLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4SCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFMUMsTUFBTTtJQUNKLE1BQU0sQ0FBQyxJQUFJLEtBQUssb0JBQW9CLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBFLFdBQVcsQ0FBQyxRQUE2QjtRQUN2QyxNQUFNLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLElBQVMsRUFBRSxrQkFBMkIsSUFBSSxFQUFFLEVBQUU7WUFDL0UsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztZQUMxRSxJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQzthQUM1RDtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTVFLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFFLE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBYSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDeEQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQztZQUM3RCxJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNwQixNQUFNLFNBQVMsR0FBRyxVQUFTLFFBQWEsQ0FBQyxpQkFBaUI7Z0JBQ3hELE9BQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDO2dCQUM5QixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7b0JBQ2QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNuQjtZQUNILENBQUMsQ0FBQztZQUNGLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBUyxXQUFnQixDQUFDLGlCQUFpQjtnQkFDL0QsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUNuQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDckM7UUFDRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHFCQUFxQixDQUFDLFFBQTZCLEVBQUUsSUFBUyxFQUFFLGVBQXdCO1FBRXRGLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDYixPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzRTtRQUNELE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEYsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0dldFRlc3RhYmlsaXR5LCBUZXN0YWJpbGl0eSwgVGVzdGFiaWxpdHlSZWdpc3RyeSwgc2V0VGVzdGFiaWxpdHlHZXR0ZXIsIMm1Z2xvYmFsIGFzIGdsb2JhbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Z2V0RE9NfSBmcm9tICcuLi9kb20vZG9tX2FkYXB0ZXInO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlckdldFRlc3RhYmlsaXR5IGltcGxlbWVudHMgR2V0VGVzdGFiaWxpdHkge1xuICBzdGF0aWMgaW5pdCgpIHsgc2V0VGVzdGFiaWxpdHlHZXR0ZXIobmV3IEJyb3dzZXJHZXRUZXN0YWJpbGl0eSgpKTsgfVxuXG4gIGFkZFRvV2luZG93KHJlZ2lzdHJ5OiBUZXN0YWJpbGl0eVJlZ2lzdHJ5KTogdm9pZCB7XG4gICAgZ2xvYmFsWydnZXRBbmd1bGFyVGVzdGFiaWxpdHknXSA9IChlbGVtOiBhbnksIGZpbmRJbkFuY2VzdG9yczogYm9vbGVhbiA9IHRydWUpID0+IHtcbiAgICAgIGNvbnN0IHRlc3RhYmlsaXR5ID0gcmVnaXN0cnkuZmluZFRlc3RhYmlsaXR5SW5UcmVlKGVsZW0sIGZpbmRJbkFuY2VzdG9ycyk7XG4gICAgICBpZiAodGVzdGFiaWxpdHkgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHRlc3RhYmlsaXR5IGZvciBlbGVtZW50LicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlc3RhYmlsaXR5O1xuICAgIH07XG5cbiAgICBnbG9iYWxbJ2dldEFsbEFuZ3VsYXJUZXN0YWJpbGl0aWVzJ10gPSAoKSA9PiByZWdpc3RyeS5nZXRBbGxUZXN0YWJpbGl0aWVzKCk7XG5cbiAgICBnbG9iYWxbJ2dldEFsbEFuZ3VsYXJSb290RWxlbWVudHMnXSA9ICgpID0+IHJlZ2lzdHJ5LmdldEFsbFJvb3RFbGVtZW50cygpO1xuXG4gICAgY29uc3Qgd2hlbkFsbFN0YWJsZSA9IChjYWxsYmFjazogYW55IC8qKiBUT0RPICM5MTAwICovKSA9PiB7XG4gICAgICBjb25zdCB0ZXN0YWJpbGl0aWVzID0gZ2xvYmFsWydnZXRBbGxBbmd1bGFyVGVzdGFiaWxpdGllcyddKCk7XG4gICAgICBsZXQgY291bnQgPSB0ZXN0YWJpbGl0aWVzLmxlbmd0aDtcbiAgICAgIGxldCBkaWRXb3JrID0gZmFsc2U7XG4gICAgICBjb25zdCBkZWNyZW1lbnQgPSBmdW5jdGlvbihkaWRXb3JrXzogYW55IC8qKiBUT0RPICM5MTAwICovKSB7XG4gICAgICAgIGRpZFdvcmsgPSBkaWRXb3JrIHx8IGRpZFdvcmtfO1xuICAgICAgICBjb3VudC0tO1xuICAgICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgIGNhbGxiYWNrKGRpZFdvcmspO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGVzdGFiaWxpdGllcy5mb3JFYWNoKGZ1bmN0aW9uKHRlc3RhYmlsaXR5OiBhbnkgLyoqIFRPRE8gIzkxMDAgKi8pIHtcbiAgICAgICAgdGVzdGFiaWxpdHkud2hlblN0YWJsZShkZWNyZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICghZ2xvYmFsWydmcmFtZXdvcmtTdGFiaWxpemVycyddKSB7XG4gICAgICBnbG9iYWxbJ2ZyYW1ld29ya1N0YWJpbGl6ZXJzJ10gPSBbXTtcbiAgICB9XG4gICAgZ2xvYmFsWydmcmFtZXdvcmtTdGFiaWxpemVycyddLnB1c2god2hlbkFsbFN0YWJsZSk7XG4gIH1cblxuICBmaW5kVGVzdGFiaWxpdHlJblRyZWUocmVnaXN0cnk6IFRlc3RhYmlsaXR5UmVnaXN0cnksIGVsZW06IGFueSwgZmluZEluQW5jZXN0b3JzOiBib29sZWFuKTpcbiAgICAgIFRlc3RhYmlsaXR5fG51bGwge1xuICAgIGlmIChlbGVtID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0ID0gcmVnaXN0cnkuZ2V0VGVzdGFiaWxpdHkoZWxlbSk7XG4gICAgaWYgKHQgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSBlbHNlIGlmICghZmluZEluQW5jZXN0b3JzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGdldERPTSgpLmlzU2hhZG93Um9vdChlbGVtKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZFRlc3RhYmlsaXR5SW5UcmVlKHJlZ2lzdHJ5LCBnZXRET00oKS5nZXRIb3N0KGVsZW0pLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmluZFRlc3RhYmlsaXR5SW5UcmVlKHJlZ2lzdHJ5LCBnZXRET00oKS5wYXJlbnRFbGVtZW50KGVsZW0pLCB0cnVlKTtcbiAgfVxufVxuIl19