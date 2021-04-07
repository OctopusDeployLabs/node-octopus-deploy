// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface DashboardProjectGroupResource
 */
export interface DashboardProjectGroupResource {
  /**
   *
   * @type {Set<string>}
   * @memberof DashboardProjectGroupResource
   */
  EnvironmentIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof DashboardProjectGroupResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardProjectGroupResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DashboardProjectGroupResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DashboardProjectGroupResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DashboardProjectGroupResource
   */
  Name?: string;
}
