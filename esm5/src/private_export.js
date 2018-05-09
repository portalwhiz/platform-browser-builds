/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { BROWSER_SANITIZATION_PROVIDERS as ɵBROWSER_SANITIZATION_PROVIDERS, INTERNAL_BROWSER_PLATFORM_PROVIDERS as ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS, initDomAdapter as ɵinitDomAdapter } from './browser';
export { BrowserDomAdapter as ɵBrowserDomAdapter } from './browser/browser_adapter';
export { BrowserPlatformLocation as ɵBrowserPlatformLocation } from './browser/location/browser_platform_location';
export { TRANSITION_ID as ɵTRANSITION_ID } from './browser/server-transition';
export { BrowserGetTestability as ɵBrowserGetTestability } from './browser/testability';
export { escapeHtml as ɵescapeHtml } from './browser/transfer_state';
export { ELEMENT_PROBE_PROVIDERS as ɵELEMENT_PROBE_PROVIDERS } from './dom/debug/ng_probe';
export { DomAdapter as ɵDomAdapter, getDOM as ɵgetDOM, setRootDomAdapter as ɵsetRootDomAdapter } from './dom/dom_adapter';
export { DomRendererFactory2 as ɵDomRendererFactory2, NAMESPACE_URIS as ɵNAMESPACE_URIS, flattenStyles as ɵflattenStyles, shimContentAttribute as ɵshimContentAttribute, shimHostAttribute as ɵshimHostAttribute } from './dom/dom_renderer';
export { DomEventsPlugin as ɵDomEventsPlugin } from './dom/events/dom_events';
export { HammerGesturesPlugin as ɵHammerGesturesPlugin } from './dom/events/hammer_gestures';
export { KeyEventsPlugin as ɵKeyEventsPlugin } from './dom/events/key_events';
export { DomSharedStylesHost as ɵDomSharedStylesHost, SharedStylesHost as ɵSharedStylesHost } from './dom/shared_styles_host';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZV9leHBvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9wcml2YXRlX2V4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUEsT0FBTyxFQUFDLDhCQUE4QixJQUFJLCtCQUErQixFQUFFLG1DQUFtQyxJQUFJLG9DQUFvQyxFQUFFLGNBQWMsSUFBSSxlQUFlLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDNU0sT0FBTyxFQUFDLGlCQUFpQixJQUFJLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbEYsT0FBTyxFQUFDLHVCQUF1QixJQUFJLHdCQUF3QixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDakgsT0FBTyxFQUFDLGFBQWEsSUFBSSxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RSxPQUFPLEVBQUMscUJBQXFCLElBQUksc0JBQXNCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RixPQUFPLEVBQUMsVUFBVSxJQUFJLFdBQVcsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBQyx1QkFBdUIsSUFBSSx3QkFBd0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxVQUFVLElBQUksV0FBVyxFQUFFLE1BQU0sSUFBSSxPQUFPLEVBQUUsaUJBQWlCLElBQUksa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN4SCxPQUFPLEVBQUMsbUJBQW1CLElBQUksb0JBQW9CLEVBQUUsY0FBYyxJQUFJLGVBQWUsRUFBRSxhQUFhLElBQUksY0FBYyxFQUFFLG9CQUFvQixJQUFJLHFCQUFxQixFQUFFLGlCQUFpQixJQUFJLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDM08sT0FBTyxFQUFDLGVBQWUsSUFBSSxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsSUFBSSxxQkFBcUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzNGLE9BQU8sRUFBQyxlQUFlLElBQUksZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RSxPQUFPLEVBQUMsbUJBQW1CLElBQUksb0JBQW9CLEVBQUUsZ0JBQWdCLElBQUksaUJBQWlCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtCUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlMgYXMgybVCUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlMsIElOVEVSTkFMX0JST1dTRVJfUExBVEZPUk1fUFJPVklERVJTIGFzIMm1SU5URVJOQUxfQlJPV1NFUl9QTEFURk9STV9QUk9WSURFUlMsIGluaXREb21BZGFwdGVyIGFzIMm1aW5pdERvbUFkYXB0ZXJ9IGZyb20gJy4vYnJvd3Nlcic7XG5leHBvcnQge0Jyb3dzZXJEb21BZGFwdGVyIGFzIMm1QnJvd3NlckRvbUFkYXB0ZXJ9IGZyb20gJy4vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXInO1xuZXhwb3J0IHtCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbiBhcyDJtUJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL2Jyb3dzZXIvbG9jYXRpb24vYnJvd3Nlcl9wbGF0Zm9ybV9sb2NhdGlvbic7XG5leHBvcnQge1RSQU5TSVRJT05fSUQgYXMgybVUUkFOU0lUSU9OX0lEfSBmcm9tICcuL2Jyb3dzZXIvc2VydmVyLXRyYW5zaXRpb24nO1xuZXhwb3J0IHtCcm93c2VyR2V0VGVzdGFiaWxpdHkgYXMgybVCcm93c2VyR2V0VGVzdGFiaWxpdHl9IGZyb20gJy4vYnJvd3Nlci90ZXN0YWJpbGl0eSc7XG5leHBvcnQge2VzY2FwZUh0bWwgYXMgybVlc2NhcGVIdG1sfSBmcm9tICcuL2Jyb3dzZXIvdHJhbnNmZXJfc3RhdGUnO1xuZXhwb3J0IHtFTEVNRU5UX1BST0JFX1BST1ZJREVSUyBhcyDJtUVMRU1FTlRfUFJPQkVfUFJPVklERVJTfSBmcm9tICcuL2RvbS9kZWJ1Zy9uZ19wcm9iZSc7XG5leHBvcnQge0RvbUFkYXB0ZXIgYXMgybVEb21BZGFwdGVyLCBnZXRET00gYXMgybVnZXRET00sIHNldFJvb3REb21BZGFwdGVyIGFzIMm1c2V0Um9vdERvbUFkYXB0ZXJ9IGZyb20gJy4vZG9tL2RvbV9hZGFwdGVyJztcbmV4cG9ydCB7RG9tUmVuZGVyZXJGYWN0b3J5MiBhcyDJtURvbVJlbmRlcmVyRmFjdG9yeTIsIE5BTUVTUEFDRV9VUklTIGFzIMm1TkFNRVNQQUNFX1VSSVMsIGZsYXR0ZW5TdHlsZXMgYXMgybVmbGF0dGVuU3R5bGVzLCBzaGltQ29udGVudEF0dHJpYnV0ZSBhcyDJtXNoaW1Db250ZW50QXR0cmlidXRlLCBzaGltSG9zdEF0dHJpYnV0ZSBhcyDJtXNoaW1Ib3N0QXR0cmlidXRlfSBmcm9tICcuL2RvbS9kb21fcmVuZGVyZXInO1xuZXhwb3J0IHtEb21FdmVudHNQbHVnaW4gYXMgybVEb21FdmVudHNQbHVnaW59IGZyb20gJy4vZG9tL2V2ZW50cy9kb21fZXZlbnRzJztcbmV4cG9ydCB7SGFtbWVyR2VzdHVyZXNQbHVnaW4gYXMgybVIYW1tZXJHZXN0dXJlc1BsdWdpbn0gZnJvbSAnLi9kb20vZXZlbnRzL2hhbW1lcl9nZXN0dXJlcyc7XG5leHBvcnQge0tleUV2ZW50c1BsdWdpbiBhcyDJtUtleUV2ZW50c1BsdWdpbn0gZnJvbSAnLi9kb20vZXZlbnRzL2tleV9ldmVudHMnO1xuZXhwb3J0IHtEb21TaGFyZWRTdHlsZXNIb3N0IGFzIMm1RG9tU2hhcmVkU3R5bGVzSG9zdCwgU2hhcmVkU3R5bGVzSG9zdCBhcyDJtVNoYXJlZFN0eWxlc0hvc3R9IGZyb20gJy4vZG9tL3NoYXJlZF9zdHlsZXNfaG9zdCc7XG4iXX0=