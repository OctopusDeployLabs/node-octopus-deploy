// Octopus REST API v2021.2.1290

import { ServerConfigurationValueResource } from "./server-configuration-value-resource";

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
