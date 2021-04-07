// Octopus REST API v2021.2.1387

import { ExtensionSettingsValues } from "./extension-settings-values";

/**
 *
 * @export
 * @interface EnvironmentResource
 */
export interface EnvironmentResource {
  /**
   *
   * @type {boolean}
   * @memberof EnvironmentResource
   */
  AllowDynamicInfrastructure?: boolean;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResource
   */
  Description?: string;
  /**
   *
   * @type {Array<ExtensionSettingsValues>}
   * @memberof EnvironmentResource
   */
  ExtensionSettings?: Array<ExtensionSettingsValues>;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EnvironmentResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof EnvironmentResource
   */
  Name?: string;
  /**
   *
   * @type {number}
   * @memberof EnvironmentResource
   */
  SortOrder?: number;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResource
   */
  SpaceId?: string;
  /**
   *
   * @type {boolean}
   * @memberof EnvironmentResource
   */
  UseGuidedFailure?: boolean;
}
