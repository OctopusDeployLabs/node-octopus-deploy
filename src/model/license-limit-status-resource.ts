// Octopus REST API v2021.2.1290

import { LicenseMessageDisposition } from "./license-message-disposition";

/**
 *
 * @export
 * @interface LicenseLimitStatusResource
 */
export interface LicenseLimitStatusResource {
  /**
   *
   * @type {number}
   * @memberof LicenseLimitStatusResource
   */
  CurrentUsage?: number;
  /**
   *
   * @type {LicenseMessageDisposition}
   * @memberof LicenseLimitStatusResource
   */
  Disposition?: LicenseMessageDisposition;
  /**
   *
   * @type {number}
   * @memberof LicenseLimitStatusResource
   */
  EffectiveLimit?: number;
  /**
   *
   * @type {string}
   * @memberof LicenseLimitStatusResource
   */
  EffectiveLimitDescription?: string;
  /**
   *
   * @type {boolean}
   * @memberof LicenseLimitStatusResource
   */
  IsUnlimited?: boolean;
  /**
   *
   * @type {string}
   * @memberof LicenseLimitStatusResource
   */
  Message?: string;
  /**
   *
   * @type {string}
   * @memberof LicenseLimitStatusResource
   */
  Name?: string;
}
