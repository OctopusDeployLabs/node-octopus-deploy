// Octopus REST API v2021.2.1290

import { Permission } from "./permission";

/**
 *
 * @export
 * @interface UserRoleResource
 */
export interface UserRoleResource {
  /**
   *
   * @type {boolean}
   * @memberof UserRoleResource
   */
  CanBeDeleted?: boolean;
  /**
   *
   * @type {string}
   * @memberof UserRoleResource
   */
  Description?: string;
  /**
   *
   * @type {Array<Permission>}
   * @memberof UserRoleResource
   */
  GrantedSpacePermissions?: Array<Permission>;
  /**
   *
   * @type {Array<Permission>}
   * @memberof UserRoleResource
   */
  GrantedSystemPermissions?: Array<Permission>;
  /**
   *
   * @type {string}
   * @memberof UserRoleResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof UserRoleResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof UserRoleResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof UserRoleResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof UserRoleResource
   */
  Name?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof UserRoleResource
   */
  SpacePermissionDescriptions?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof UserRoleResource
   */
  SupportedRestrictions?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof UserRoleResource
   */
  SystemPermissionDescriptions?: Array<string>;
}
