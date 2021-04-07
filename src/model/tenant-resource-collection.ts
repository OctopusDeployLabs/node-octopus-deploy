// Octopus REST API v2021.2.1387

import { TenantResource } from "./tenant-resource";

/**
 *
 * @export
 * @interface TenantResourceCollection
 */
export interface TenantResourceCollection {
  /**
   *
   * @type {string}
   * @memberof TenantResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<TenantResource>}
   * @memberof TenantResourceCollection
   */
  Items?: Array<TenantResource>;
  /**
   *
   * @type {number}
   * @memberof TenantResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof TenantResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof TenantResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof TenantResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof TenantResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof TenantResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof TenantResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof TenantResourceCollection
   */
  TotalResults?: number;
}
