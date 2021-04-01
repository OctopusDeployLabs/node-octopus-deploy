// Octopus REST API v2021.2.1290

import { PackageVersionResource } from "./package-version-resource";

/**
 *
 * @export
 * @interface PackageVersionResourceCollection
 */
export interface PackageVersionResourceCollection {
  /**
   *
   * @type {string}
   * @memberof PackageVersionResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<PackageVersionResource>}
   * @memberof PackageVersionResourceCollection
   */
  Items?: Array<PackageVersionResource>;
  /**
   *
   * @type {number}
   * @memberof PackageVersionResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof PackageVersionResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof PackageVersionResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof PackageVersionResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof PackageVersionResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PackageVersionResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof PackageVersionResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof PackageVersionResourceCollection
   */
  TotalResults?: number;
}
