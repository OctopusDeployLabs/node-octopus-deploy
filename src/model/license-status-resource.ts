// Octopus REST API v2021.2.1290

import { LicenseLimitStatusResource } from "./license-limit-status-resource";
import { LicenseMessageResource } from "./license-message-resource";
import { LocalDate } from "./local-date";
import { PermissionsMode } from "./permissions-mode";

/**
 *
 * @export
 * @interface LicenseStatusResource
 */
export interface LicenseStatusResource {
  /**
   *
   * @type {string}
   * @memberof LicenseStatusResource
   */
  ComplianceSummary?: string;
  /**
   *
   * @type {number}
   * @memberof LicenseStatusResource
   */
  DaysToEffectiveExpiryDate?: number;
  /**
   *
   * @type {boolean}
   * @memberof LicenseStatusResource
   */
  DoesExpiryBlockKeyActivities?: boolean;
  /**
   *
   * @type {number}
   * @memberof LicenseStatusResource
   */
  EffectiveClusterTaskLimit?: number;
  /**
   *
   * @type {LocalDate}
   * @memberof LicenseStatusResource
   */
  EffectiveExpiryDate?: LocalDate;
  /**
   *
   * @type {number}
   * @memberof LicenseStatusResource
   */
  EffectiveNodeTaskLimit?: number;
  /**
   *
   * @type {string}
   * @memberof LicenseStatusResource
   */
  HostingEnvironment?: string;
  /**
   *
   * @type {string}
   * @memberof LicenseStatusResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof LicenseStatusResource
   */
  IsClusterTaskLimitControlledByLicense?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof LicenseStatusResource
   */
  IsCompliant?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof LicenseStatusResource
   */
  IsNodeTaskLimitControlledByLicense?: boolean;
  /**
   *
   * @type {string}
   * @memberof LicenseStatusResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof LicenseStatusResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {Array<LicenseLimitStatusResource>}
   * @memberof LicenseStatusResource
   */
  Limits?: Array<LicenseLimitStatusResource>;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof LicenseStatusResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<LicenseMessageResource>}
   * @memberof LicenseStatusResource
   */
  Messages?: Array<LicenseMessageResource>;
  /**
   *
   * @type {PermissionsMode}
   * @memberof LicenseStatusResource
   */
  PermissionsMode?: PermissionsMode;
}
