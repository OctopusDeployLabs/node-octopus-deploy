// Octopus REST API v2020.6.4722

import { SensitiveValue } from "./sensitive-value";

/**
 *
 * @export
 * @interface VersionControlSettingsResource
 */
export interface VersionControlSettingsResource {
  /**
   *
   * @type {string}
   * @memberof VersionControlSettingsResource
   */
  BasePath?: string;
  /**
   *
   * @type {string}
   * @memberof VersionControlSettingsResource
   */
  DefaultBranch?: string;
  /**
   *
   * @type {boolean}
   * @memberof VersionControlSettingsResource
   */
  HasValue?: boolean;
  /**
   *
   * @type {SensitiveValue}
   * @memberof VersionControlSettingsResource
   */
  Password?: SensitiveValue;
  /**
   *
   * @type {string}
   * @memberof VersionControlSettingsResource
   */
  Url?: string;
  /**
   *
   * @type {string}
   * @memberof VersionControlSettingsResource
   */
  Username?: string;
}
