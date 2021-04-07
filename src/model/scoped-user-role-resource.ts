// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface ScopedUserRoleResource
 */
export interface ScopedUserRoleResource {
  /**
   *
   * @type {Set<string>}
   * @memberof ScopedUserRoleResource
   */
  EnvironmentIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof ScopedUserRoleResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ScopedUserRoleResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ScopedUserRoleResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ScopedUserRoleResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Set<string>}
   * @memberof ScopedUserRoleResource
   */
  ProjectGroupIds?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof ScopedUserRoleResource
   */
  ProjectIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof ScopedUserRoleResource
   */
  SpaceId?: string;
  /**
   *
   * @type {string}
   * @memberof ScopedUserRoleResource
   */
  TeamId?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof ScopedUserRoleResource
   */
  TenantIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof ScopedUserRoleResource
   */
  UserRoleId?: string;
}
