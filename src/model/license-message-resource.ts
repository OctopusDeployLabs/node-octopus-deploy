// Octopus REST API v2021.2.1387

import { LicenseMessageDisposition } from "./license-message-disposition";

/**
 *
 * @export
 * @interface LicenseMessageResource
 */
export interface LicenseMessageResource {
  /**
   *
   * @type {LicenseMessageDisposition}
   * @memberof LicenseMessageResource
   */
  Disposition?: LicenseMessageDisposition;
  /**
   *
   * @type {string}
   * @memberof LicenseMessageResource
   */
  Message?: string;
}
