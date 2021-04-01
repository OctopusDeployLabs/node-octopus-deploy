// Octopus REST API v2021.2.1290

import { UserRoleResource } from "./user-role-resource";

/**
 *
 * @export
 * @interface UserRoleResourceCollection
 */
export interface UserRoleResourceCollection {
  /**
   *
   * @type {string}
   * @memberof UserRoleResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<UserRoleResource>}
   * @memberof UserRoleResourceCollection
   */
  Items?: Array<UserRoleResource>;
  /**
   *
   * @type {number}
   * @memberof UserRoleResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof UserRoleResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof UserRoleResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof UserRoleResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof UserRoleResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof UserRoleResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof UserRoleResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof UserRoleResourceCollection
   */
  TotalResults?: number;
}
