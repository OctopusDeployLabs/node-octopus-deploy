// Octopus REST API v2021.2.1290

import { DefectStatus } from "./defect-status";

/**
 *
 * @export
 * @interface DefectResource
 */
export interface DefectResource {
  /**
   *
   * @type {string}
   * @memberof DefectResource
   */
  Description: string;
  /**
   *
   * @type {string}
   * @memberof DefectResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DefectResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DefectResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DefectResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {DefectStatus}
   * @memberof DefectResource
   */
  Status?: DefectStatus;
}
