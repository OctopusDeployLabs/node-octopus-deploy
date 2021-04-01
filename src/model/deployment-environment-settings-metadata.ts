// Octopus REST API v2021.2.1290

import { Metadata } from "./metadata";

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
