// Octopus REST API v2020.6.4722

import { Metadata } from './metadata';

/**
 * 
 * @export
 * @interface ProjectSettingsMetadata
 */
export interface ProjectSettingsMetadata {
    /**
     * 
     * @type {string}
     * @memberof ProjectSettingsMetadata
     */
    ExtensionId?: string;
    /**
     * 
     * @type {Metadata}
     * @memberof ProjectSettingsMetadata
     */
    Metadata?: Metadata;
}
