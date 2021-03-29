// Octopus REST API v2020.6.4722

import { Metadata } from './metadata';

/**
 * 
 * @export
 * @interface DeploymentEnvironmentSettingsMetadata
 */
export interface DeploymentEnvironmentSettingsMetadata {
    /**
     * 
     * @type {string}
     * @memberof DeploymentEnvironmentSettingsMetadata
     */
    ExtensionId?: string;
    /**
     * 
     * @type {Metadata}
     * @memberof DeploymentEnvironmentSettingsMetadata
     */
    Metadata?: Metadata;
}
