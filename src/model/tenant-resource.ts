// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface TenantResource
 */
export interface TenantResource {
  /**
   *
   * @type {string}
   * @memberof TenantResource
   */
  ClonedFromTenantId?: string;
  /**
   *
   * @type {string}
   * @memberof TenantResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof TenantResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof TenantResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof TenantResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof TenantResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof TenantResource
   */
  Name?: string;
  /**
   *
   * @type {{ [key: string]: Set<string>; }}
   * @memberof TenantResource
   */
  ProjectEnvironments?: { [key: string]: Set<string> };
  /**
   *
   * @type {string}
   * @memberof TenantResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof TenantResource
   */
  TenantTags?: Set<string>;
}
