// Octopus REST API v2021.2.1290

import { PackageResource } from "./package-resource";

/**
 *
 * @export
 * @interface PackageResourceCollection
 */
export interface PackageResourceCollection {
  /**
   *
   * @type {string}
   * @memberof PackageResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<PackageResource>}
   * @memberof PackageResourceCollection
   */
  Items?: Array<PackageResource>;
  /**
   *
   * @type {number}
   * @memberof PackageResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof PackageResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof PackageResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PackageResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof PackageResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof PackageResourceCollection
   */
  TotalResults?: number;
}
