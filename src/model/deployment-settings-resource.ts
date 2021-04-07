// Octopus REST API v2021.2.1387

import { DeploymentConnectivityPolicy } from "./deployment-connectivity-policy";
import { GuidedFailureMode } from "./guided-failure-mode";
import { VersioningStrategyResource } from "./versioning-strategy-resource";

/**
 *
 * @export
 * @interface DeploymentSettingsResource
 */
export interface DeploymentSettingsResource {
  /**
   *
   * @type {DeploymentConnectivityPolicy}
   * @memberof DeploymentSettingsResource
   */
  ConnectivityPolicy?: DeploymentConnectivityPolicy;
  /**
   *
   * @type {GuidedFailureMode}
   * @memberof DeploymentSettingsResource
   */
  DefaultGuidedFailureMode?: GuidedFailureMode;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentSettingsResource
   */
  DefaultToSkipIfAlreadyInstalled?: boolean;
  /**
   *
   * @type {string}
   * @memberof DeploymentSettingsResource
   */
  DeploymentChangesTemplate?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentSettingsResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentSettingsResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentSettingsResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentSettingsResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DeploymentSettingsResource
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentSettingsResource
   */
  ReleaseNotesTemplate?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentSettingsResource
   */
  SpaceId?: string;
  /**
   *
   * @type {VersioningStrategyResource}
   * @memberof DeploymentSettingsResource
   */
  VersioningStrategy?: VersioningStrategyResource;
}
