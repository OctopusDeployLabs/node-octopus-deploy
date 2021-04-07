// Octopus REST API v2021.2.1387

import { PackageDescriptionResource } from "./package-description-resource";

/**
 *
 * @export
 * @interface PackageDescriptionResourceCollection
 */
export interface PackageDescriptionResourceCollection {
  /**
   *
   * @type {string}
   * @memberof PackageDescriptionResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<PackageDescriptionResource>}
   * @memberof PackageDescriptionResourceCollection
   */
  Items?: Array<PackageDescriptionResource>;
  /**
   *
   * @type {number}
   * @memberof PackageDescriptionResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof PackageDescriptionResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof PackageDescriptionResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof PackageDescriptionResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof PackageDescriptionResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PackageDescriptionResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof PackageDescriptionResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof PackageDescriptionResourceCollection
   */
  TotalResults?: number;
}
