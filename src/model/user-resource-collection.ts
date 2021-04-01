// Octopus REST API v2021.2.1290

import { UserResource } from "./user-resource";

/**
 *
 * @export
 * @interface UserResourceCollection
 */
export interface UserResourceCollection {
  /**
   *
   * @type {string}
   * @memberof UserResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<UserResource>}
   * @memberof UserResourceCollection
   */
  Items?: Array<UserResource>;
  /**
   *
   * @type {number}
   * @memberof UserResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof UserResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof UserResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof UserResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof UserResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof UserResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof UserResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof UserResourceCollection
   */
  TotalResults?: number;
}
