// Octopus REST API v2020.6.4722

import { TypeMetadata } from './type-metadata';

/**
 * 
 * @export
 * @interface Metadata
 */
export interface Metadata {
    /**
     * 
     * @type {string}
     * @memberof Metadata
     */
    Description?: string;
    /**
     * 
     * @type {Array<TypeMetadata>}
     * @memberof Metadata
     */
    Types?: Array<TypeMetadata>;
}
