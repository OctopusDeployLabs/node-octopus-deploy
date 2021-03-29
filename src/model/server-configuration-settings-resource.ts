// Octopus REST API v2020.6.4722

import { ServerConfigurationValueResource } from './server-configuration-value-resource';

/**
 * 
 * @export
 * @interface ServerConfigurationSettingsResource
 */
export interface ServerConfigurationSettingsResource {
    /**
     * 
     * @type {string}
     * @memberof ServerConfigurationSettingsResource
     */
    ConfigurationSet?: string;
    /**
     * 
     * @type {Array<ServerConfigurationValueResource>}
     * @memberof ServerConfigurationSettingsResource
     */
    ConfigurationValues?: Array<ServerConfigurationValueResource>;
}
