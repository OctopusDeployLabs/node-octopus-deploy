// Octopus REST API v2020.6.4722

import { Metadata } from './metadata';

/**
 * 
 * @export
 * @interface CloudTemplateMetadata
 */
export interface CloudTemplateMetadata {
    /**
     * 
     * @type {Metadata}
     * @memberof CloudTemplateMetadata
     */
    Metadata?: Metadata;
    /**
     * 
     * @type {object}
     * @memberof CloudTemplateMetadata
     */
    Values?: object;
}
