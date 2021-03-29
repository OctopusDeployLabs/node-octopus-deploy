// Octopus REST API v2020.6.4722

import { FormElement } from './form-element';

/**
 * 
 * @export
 * @interface Form
 */
export interface Form {
    /**
     * 
     * @type {Array<FormElement>}
     * @memberof Form
     */
    Elements?: Array<FormElement>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Form
     */
    Values?: { [key: string]: string; };
}
