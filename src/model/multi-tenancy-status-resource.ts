// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface MultiTenancyStatusResource
 */
export interface MultiTenancyStatusResource {
  /**
   *
   * @type {boolean}
   * @memberof MultiTenancyStatusResource
   */
  Enabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof MultiTenancyStatusResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof MultiTenancyStatusResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof MultiTenancyStatusResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MultiTenancyStatusResource
   */
  Links?: { [key: string]: string };
}
