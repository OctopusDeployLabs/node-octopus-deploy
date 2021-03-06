// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface OctopusServerNodeDetailsResource
 */
export interface OctopusServerNodeDetailsResource {
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeDetailsResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeDetailsResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeDetailsResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof OctopusServerNodeDetailsResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof OctopusServerNodeDetailsResource
   */
  RunningTasks?: number;
}
