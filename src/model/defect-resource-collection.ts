// Octopus REST API v2021.2.1290

import { DefectResource } from "./defect-resource";

/**
 *
 * @export
 * @interface DefectResourceCollection
 */
export interface DefectResourceCollection {
  /**
   *
   * @type {string}
   * @memberof DefectResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<DefectResource>}
   * @memberof DefectResourceCollection
   */
  Items?: Array<DefectResource>;
  /**
   *
   * @type {number}
   * @memberof DefectResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof DefectResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof DefectResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DefectResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof DefectResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DefectResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof DefectResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof DefectResourceCollection
   */
  TotalResults?: number;
}
