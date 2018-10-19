/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { exportNgVar } from '../../dom/util';
import { AngularProfiler } from './common_tools';
var PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
export function enableDebugTools(ref) {
    exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
    return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
export function disableDebugTools() {
    exportNgVar(PROFILER_GLOBAL_NAME, null);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyL3Rvb2xzL3Rvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsSUFBTSxvQkFBb0IsR0FBRyxVQUFVLENBQUM7QUFFeEM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFJLEdBQW9CO0lBQ3RELFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCO0lBQy9CLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2V4cG9ydE5nVmFyfSBmcm9tICcuLi8uLi9kb20vdXRpbCc7XG5pbXBvcnQge0FuZ3VsYXJQcm9maWxlcn0gZnJvbSAnLi9jb21tb25fdG9vbHMnO1xuXG5jb25zdCBQUk9GSUxFUl9HTE9CQUxfTkFNRSA9ICdwcm9maWxlcic7XG5cbi8qKlxuICogRW5hYmxlZCBBbmd1bGFyIGRlYnVnIHRvb2xzIHRoYXQgYXJlIGFjY2Vzc2libGUgdmlhIHlvdXIgYnJvd3NlcidzXG4gKiBkZXZlbG9wZXIgY29uc29sZS5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAxLiBPcGVuIGRldmVsb3BlciBjb25zb2xlIChlLmcuIGluIENocm9tZSBDdHJsICsgU2hpZnQgKyBqKVxuICogMS4gVHlwZSBgbmcuYCAodXN1YWxseSB0aGUgY29uc29sZSB3aWxsIHNob3cgYXV0by1jb21wbGV0ZSBzdWdnZXN0aW9uKVxuICogMS4gVHJ5IHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHByb2ZpbGVyIGBuZy5wcm9maWxlci50aW1lQ2hhbmdlRGV0ZWN0aW9uKClgXG4gKiAgICB0aGVuIGhpdCBFbnRlci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVEZWJ1Z1Rvb2xzPFQ+KHJlZjogQ29tcG9uZW50UmVmPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgZXhwb3J0TmdWYXIoUFJPRklMRVJfR0xPQkFMX05BTUUsIG5ldyBBbmd1bGFyUHJvZmlsZXIocmVmKSk7XG4gIHJldHVybiByZWY7XG59XG5cbi8qKlxuICogRGlzYWJsZXMgQW5ndWxhciB0b29scy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRGVidWdUb29scygpOiB2b2lkIHtcbiAgZXhwb3J0TmdWYXIoUFJPRklMRVJfR0xPQkFMX05BTUUsIG51bGwpO1xufVxuIl19