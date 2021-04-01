// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface PermissionDescription
 */
export interface PermissionDescription {
  /**
   *
   * @type {boolean}
   * @memberof PermissionDescription
   */
  CanApplyAtSpaceLevel?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PermissionDescription
   */
  CanApplyAtSystemLevel?: boolean;
  /**
   *
   * @type {string}
   * @memberof PermissionDescription
   */
  Description?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof PermissionDescription
   */
  SupportedRestrictions?: Array<string>;
}
