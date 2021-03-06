// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface BuiltInFeedStatsResource
 */
export interface BuiltInFeedStatsResource {
  /**
   *
   * @type {string}
   * @memberof BuiltInFeedStatsResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof BuiltInFeedStatsResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof BuiltInFeedStatsResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof BuiltInFeedStatsResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof BuiltInFeedStatsResource
   */
  TotalPackages?: number;
}
