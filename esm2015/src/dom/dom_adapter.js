/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let _DOM = null;
export function getDOM() {
    return _DOM;
}
export function setDOM(adapter) {
    _DOM = adapter;
}
export function setRootDomAdapter(adapter) {
    if (!_DOM) {
        _DOM = adapter;
    }
}
/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export class DomAdapter {
    constructor() {
        this.resourceLoaderType = null;
    }
    /**
     * Maps attribute names to their corresponding property names for cases
     * where attribute name doesn't match property name.
     */
    get attrToPropMap() { return this._attrToPropMap; }
    set attrToPropMap(value) { this._attrToPropMap = value; }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX2FkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9kb20vZG9tX2FkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUgsSUFBSSxJQUFJLEdBQWUsSUFBTSxDQUFDO0FBRTlCLE1BQU0sVUFBVSxNQUFNO0lBQ3BCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsT0FBbUI7SUFDeEMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQW1CO0lBQ25ELElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxJQUFJLEdBQUcsT0FBTyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQUVELHlDQUF5QztBQUN6Qzs7Ozs7R0FLRztBQUNILE1BQU0sT0FBZ0IsVUFBVTtJQUFoQztRQUNTLHVCQUFrQixHQUFjLElBQU0sQ0FBQztJQWtJaEQsQ0FBQztJQXZIQzs7O09BR0c7SUFDSCxJQUFJLGFBQWEsS0FBOEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1RSxJQUFJLGFBQWEsQ0FBQyxLQUE4QixJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztDQWtIbkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmxldCBfRE9NOiBEb21BZGFwdGVyID0gbnVsbCAhO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RE9NKCkge1xuICByZXR1cm4gX0RPTTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERPTShhZGFwdGVyOiBEb21BZGFwdGVyKSB7XG4gIF9ET00gPSBhZGFwdGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Um9vdERvbUFkYXB0ZXIoYWRhcHRlcjogRG9tQWRhcHRlcikge1xuICBpZiAoIV9ET00pIHtcbiAgICBfRE9NID0gYWRhcHRlcjtcbiAgfVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpyZXF1aXJlUGFyYW1ldGVyVHlwZSAqL1xuLyoqXG4gKiBQcm92aWRlcyBET00gb3BlcmF0aW9ucyBpbiBhbiBlbnZpcm9ubWVudC1hZ25vc3RpYyB3YXkuXG4gKlxuICogQHNlY3VyaXR5IFRyZWFkIGNhcmVmdWxseSEgSW50ZXJhY3Rpbmcgd2l0aCB0aGUgRE9NIGRpcmVjdGx5IGlzIGRhbmdlcm91cyBhbmRcbiAqIGNhbiBpbnRyb2R1Y2UgWFNTIHJpc2tzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tQWRhcHRlciB7XG4gIHB1YmxpYyByZXNvdXJjZUxvYWRlclR5cGU6IFR5cGU8YW55PiA9IG51bGwgITtcbiAgYWJzdHJhY3QgaGFzUHJvcGVydHkoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCBzZXRQcm9wZXJ0eShlbDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55O1xuICBhYnN0cmFjdCBnZXRQcm9wZXJ0eShlbDogRWxlbWVudCwgbmFtZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBpbnZva2UoZWw6IEVsZW1lbnQsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cbiAgYWJzdHJhY3QgbG9nRXJyb3IoZXJyb3I6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgbG9nKGVycm9yOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGxvZ0dyb3VwKGVycm9yOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGxvZ0dyb3VwRW5kKCk6IGFueTtcblxuICAvKipcbiAgICogTWFwcyBhdHRyaWJ1dGUgbmFtZXMgdG8gdGhlaXIgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSBuYW1lcyBmb3IgY2FzZXNcbiAgICogd2hlcmUgYXR0cmlidXRlIG5hbWUgZG9lc24ndCBtYXRjaCBwcm9wZXJ0eSBuYW1lLlxuICAgKi9cbiAgZ2V0IGF0dHJUb1Byb3BNYXAoKToge1trZXk6IHN0cmluZ106IHN0cmluZ30geyByZXR1cm4gdGhpcy5fYXR0clRvUHJvcE1hcDsgfVxuICBzZXQgYXR0clRvUHJvcE1hcCh2YWx1ZToge1trZXk6IHN0cmluZ106IHN0cmluZ30pIHsgdGhpcy5fYXR0clRvUHJvcE1hcCA9IHZhbHVlOyB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9hdHRyVG9Qcm9wTWFwICE6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIGFic3RyYWN0IGNvbnRhaW5zKG5vZGVBOiBhbnksIG5vZGVCOiBhbnkpOiBib29sZWFuO1xuICBhYnN0cmFjdCBwYXJzZSh0ZW1wbGF0ZUh0bWw6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgcXVlcnlTZWxlY3RvcihlbDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBxdWVyeVNlbGVjdG9yQWxsKGVsOiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBhbnlbXTtcbiAgYWJzdHJhY3Qgb24oZWw6IGFueSwgZXZ0OiBhbnksIGxpc3RlbmVyOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IG9uQW5kQ2FuY2VsKGVsOiBhbnksIGV2dDogYW55LCBsaXN0ZW5lcjogYW55KTogRnVuY3Rpb247XG4gIGFic3RyYWN0IGRpc3BhdGNoRXZlbnQoZWw6IGFueSwgZXZ0OiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGNyZWF0ZU1vdXNlRXZlbnQoZXZlbnRUeXBlOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGNyZWF0ZUV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBwcmV2ZW50RGVmYXVsdChldnQ6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgaXNQcmV2ZW50ZWQoZXZ0OiBhbnkpOiBib29sZWFuO1xuICBhYnN0cmFjdCBnZXRJbm5lckhUTUwoZWw6IGFueSk6IHN0cmluZztcbiAgLyoqIFJldHVybnMgY29udGVudCBpZiBlbCBpcyBhIDx0ZW1wbGF0ZT4gZWxlbWVudCwgbnVsbCBvdGhlcndpc2UuICovXG4gIGFic3RyYWN0IGdldFRlbXBsYXRlQ29udGVudChlbDogYW55KTogYW55O1xuICBhYnN0cmFjdCBnZXRPdXRlckhUTUwoZWw6IGFueSk6IHN0cmluZztcbiAgYWJzdHJhY3Qgbm9kZU5hbWUobm9kZTogYW55KTogc3RyaW5nO1xuICBhYnN0cmFjdCBub2RlVmFsdWUobm9kZTogYW55KTogc3RyaW5nfG51bGw7XG4gIGFic3RyYWN0IHR5cGUobm9kZTogYW55KTogc3RyaW5nO1xuICBhYnN0cmFjdCBjb250ZW50KG5vZGU6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgZmlyc3RDaGlsZChlbDogYW55KTogTm9kZXxudWxsO1xuICBhYnN0cmFjdCBuZXh0U2libGluZyhlbDogYW55KTogTm9kZXxudWxsO1xuICBhYnN0cmFjdCBwYXJlbnRFbGVtZW50KGVsOiBhbnkpOiBOb2RlfG51bGw7XG4gIGFic3RyYWN0IGNoaWxkTm9kZXMoZWw6IGFueSk6IE5vZGVbXTtcbiAgYWJzdHJhY3QgY2hpbGROb2Rlc0FzTGlzdChlbDogYW55KTogTm9kZVtdO1xuICBhYnN0cmFjdCBjbGVhck5vZGVzKGVsOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGFwcGVuZENoaWxkKGVsOiBhbnksIG5vZGU6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgcmVtb3ZlQ2hpbGQoZWw6IGFueSwgbm9kZTogYW55KTogYW55O1xuICBhYnN0cmFjdCByZXBsYWNlQ2hpbGQoZWw6IGFueSwgbmV3Tm9kZTogYW55LCBvbGROb2RlOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IHJlbW92ZShlbDogYW55KTogTm9kZTtcbiAgYWJzdHJhY3QgaW5zZXJ0QmVmb3JlKHBhcmVudDogYW55LCByZWY6IGFueSwgbm9kZTogYW55KTogYW55O1xuICBhYnN0cmFjdCBpbnNlcnRBbGxCZWZvcmUocGFyZW50OiBhbnksIHJlZjogYW55LCBub2RlczogYW55KTogYW55O1xuICBhYnN0cmFjdCBpbnNlcnRBZnRlcihwYXJlbnQ6IGFueSwgZWw6IGFueSwgbm9kZTogYW55KTogYW55O1xuICBhYnN0cmFjdCBzZXRJbm5lckhUTUwoZWw6IGFueSwgdmFsdWU6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0VGV4dChlbDogYW55KTogc3RyaW5nfG51bGw7XG4gIGFic3RyYWN0IHNldFRleHQoZWw6IGFueSwgdmFsdWU6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0VmFsdWUoZWw6IGFueSk6IHN0cmluZztcbiAgYWJzdHJhY3Qgc2V0VmFsdWUoZWw6IGFueSwgdmFsdWU6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0Q2hlY2tlZChlbDogYW55KTogYm9vbGVhbjtcbiAgYWJzdHJhY3Qgc2V0Q2hlY2tlZChlbDogYW55LCB2YWx1ZTogYm9vbGVhbik6IGFueTtcbiAgYWJzdHJhY3QgY3JlYXRlQ29tbWVudCh0ZXh0OiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IGNyZWF0ZVRlbXBsYXRlKGh0bWw6IGFueSk6IEhUTUxFbGVtZW50O1xuICBhYnN0cmFjdCBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IGFueSwgZG9jPzogYW55KTogSFRNTEVsZW1lbnQ7XG4gIGFic3RyYWN0IGNyZWF0ZUVsZW1lbnROUyhuczogc3RyaW5nLCB0YWdOYW1lOiBzdHJpbmcsIGRvYz86IGFueSk6IEVsZW1lbnQ7XG4gIGFic3RyYWN0IGNyZWF0ZVRleHROb2RlKHRleHQ6IHN0cmluZywgZG9jPzogYW55KTogVGV4dDtcbiAgYWJzdHJhY3QgY3JlYXRlU2NyaXB0VGFnKGF0dHJOYW1lOiBzdHJpbmcsIGF0dHJWYWx1ZTogc3RyaW5nLCBkb2M/OiBhbnkpOiBIVE1MRWxlbWVudDtcbiAgYWJzdHJhY3QgY3JlYXRlU3R5bGVFbGVtZW50KGNzczogc3RyaW5nLCBkb2M/OiBhbnkpOiBIVE1MU3R5bGVFbGVtZW50O1xuICBhYnN0cmFjdCBjcmVhdGVTaGFkb3dSb290KGVsOiBhbnkpOiBhbnk7XG4gIGFic3RyYWN0IGdldFNoYWRvd1Jvb3QoZWw6IGFueSk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0SG9zdChlbDogYW55KTogYW55O1xuICBhYnN0cmFjdCBnZXREaXN0cmlidXRlZE5vZGVzKGVsOiBhbnkpOiBOb2RlW107XG4gIGFic3RyYWN0IGNsb25lIC8qPFQgZXh0ZW5kcyBOb2RlPiovIChub2RlOiBOb2RlIC8qVCovKTogTm9kZSAvKlQqLztcbiAgYWJzdHJhY3QgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50W107XG4gIGFic3RyYWN0IGdldEVsZW1lbnRzQnlUYWdOYW1lKGVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnRbXTtcbiAgYWJzdHJhY3QgY2xhc3NMaXN0KGVsZW1lbnQ6IGFueSk6IGFueVtdO1xuICBhYnN0cmFjdCBhZGRDbGFzcyhlbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCByZW1vdmVDbGFzcyhlbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBoYXNDbGFzcyhlbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgYWJzdHJhY3Qgc2V0U3R5bGUoZWxlbWVudDogYW55LCBzdHlsZU5hbWU6IHN0cmluZywgc3R5bGVWYWx1ZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCByZW1vdmVTdHlsZShlbGVtZW50OiBhbnksIHN0eWxlTmFtZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBnZXRTdHlsZShlbGVtZW50OiBhbnksIHN0eWxlTmFtZTogc3RyaW5nKTogc3RyaW5nO1xuICBhYnN0cmFjdCBoYXNTdHlsZShlbGVtZW50OiBhbnksIHN0eWxlTmFtZTogc3RyaW5nLCBzdHlsZVZhbHVlPzogc3RyaW5nKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgdGFnTmFtZShlbGVtZW50OiBhbnkpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGF0dHJpYnV0ZU1hcChlbGVtZW50OiBhbnkpOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuICBhYnN0cmFjdCBoYXNBdHRyaWJ1dGUoZWxlbWVudDogYW55LCBhdHRyaWJ1dGU6IHN0cmluZyk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGhhc0F0dHJpYnV0ZU5TKGVsZW1lbnQ6IGFueSwgbnM6IHN0cmluZywgYXR0cmlidXRlOiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCBnZXRBdHRyaWJ1dGUoZWxlbWVudDogYW55LCBhdHRyaWJ1dGU6IHN0cmluZyk6IHN0cmluZ3xudWxsO1xuICBhYnN0cmFjdCBnZXRBdHRyaWJ1dGVOUyhlbGVtZW50OiBhbnksIG5zOiBzdHJpbmcsIGF0dHJpYnV0ZTogc3RyaW5nKTogc3RyaW5nfG51bGw7XG4gIGFic3RyYWN0IHNldEF0dHJpYnV0ZShlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3Qgc2V0QXR0cmlidXRlTlMoZWxlbWVudDogYW55LCBuczogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IHJlbW92ZUF0dHJpYnV0ZShlbGVtZW50OiBhbnksIGF0dHJpYnV0ZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCByZW1vdmVBdHRyaWJ1dGVOUyhlbGVtZW50OiBhbnksIG5zOiBzdHJpbmcsIGF0dHJpYnV0ZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCB0ZW1wbGF0ZUF3YXJlUm9vdChlbDogYW55KTogYW55O1xuICBhYnN0cmFjdCBjcmVhdGVIdG1sRG9jdW1lbnQoKTogSFRNTERvY3VtZW50O1xuICBhYnN0cmFjdCBnZXREZWZhdWx0RG9jdW1lbnQoKTogRG9jdW1lbnQ7XG4gIGFic3RyYWN0IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbDogYW55KTogYW55O1xuICBhYnN0cmFjdCBnZXRUaXRsZShkb2M6IERvY3VtZW50KTogc3RyaW5nO1xuICBhYnN0cmFjdCBzZXRUaXRsZShkb2M6IERvY3VtZW50LCBuZXdUaXRsZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBlbGVtZW50TWF0Y2hlcyhuOiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc1RlbXBsYXRlRWxlbWVudChlbDogYW55KTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaXNUZXh0Tm9kZShub2RlOiBhbnkpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc0NvbW1lbnROb2RlKG5vZGU6IGFueSk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGlzRWxlbWVudE5vZGUobm9kZTogYW55KTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaGFzU2hhZG93Um9vdChub2RlOiBhbnkpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc1NoYWRvd1Jvb3Qobm9kZTogYW55KTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaW1wb3J0SW50b0RvYyAvKjxUIGV4dGVuZHMgTm9kZT4qLyAobm9kZTogTm9kZSAvKlQqLyk6IE5vZGUgLypUKi87XG4gIGFic3RyYWN0IGFkb3B0Tm9kZSAvKjxUIGV4dGVuZHMgTm9kZT4qLyAobm9kZTogTm9kZSAvKlQqLyk6IE5vZGUgLypUKi87XG4gIGFic3RyYWN0IGdldEhyZWYoZWxlbWVudDogYW55KTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRFdmVudEtleShldmVudDogYW55KTogc3RyaW5nO1xuICBhYnN0cmFjdCByZXNvbHZlQW5kU2V0SHJlZihlbGVtZW50OiBhbnksIGJhc2VVcmw6IHN0cmluZywgaHJlZjogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBzdXBwb3J0c0RPTUV2ZW50cygpOiBib29sZWFuO1xuICBhYnN0cmFjdCBzdXBwb3J0c05hdGl2ZVNoYWRvd0RPTSgpOiBib29sZWFuO1xuICBhYnN0cmFjdCBnZXRHbG9iYWxFdmVudFRhcmdldChkb2M6IERvY3VtZW50LCB0YXJnZXQ6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0SGlzdG9yeSgpOiBIaXN0b3J5O1xuICBhYnN0cmFjdCBnZXRMb2NhdGlvbigpOiBMb2NhdGlvbjtcbiAgYWJzdHJhY3QgZ2V0QmFzZUhyZWYoZG9jOiBEb2N1bWVudCk6IHN0cmluZ3xudWxsO1xuICBhYnN0cmFjdCByZXNldEJhc2VFbGVtZW50KCk6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFVzZXJBZ2VudCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHNldERhdGEoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudDogYW55KTogYW55O1xuICBhYnN0cmFjdCBnZXREYXRhKGVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nKTogc3RyaW5nfG51bGw7XG4gIGFic3RyYWN0IHN1cHBvcnRzV2ViQW5pbWF0aW9uKCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHBlcmZvcm1hbmNlTm93KCk6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0QW5pbWF0aW9uUHJlZml4KCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0VHJhbnNpdGlvbkVuZCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHN1cHBvcnRzQW5pbWF0aW9uKCk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc3VwcG9ydHNDb29raWVzKCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGdldENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmd8bnVsbDtcbiAgYWJzdHJhY3Qgc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGFueTtcbn1cbiJdfQ==