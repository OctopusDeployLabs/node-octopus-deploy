// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface OctopusServerNodeResource
 */
export interface OctopusServerNodeResource {
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof OctopusServerNodeResource
   */
  IsInMaintenanceMode?: boolean;
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof OctopusServerNodeResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof OctopusServerNodeResource
   */
  MaxConcurrentTasks?: number;
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeResource
   */
  Name?: string;
}
