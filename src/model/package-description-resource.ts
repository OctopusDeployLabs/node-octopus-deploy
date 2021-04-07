// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface PackageDescriptionResource
 */
export interface PackageDescriptionResource {
  /**
   *
   * @type {string}
   * @memberof PackageDescriptionResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof PackageDescriptionResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof PackageDescriptionResource
   */
  LatestVersion?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PackageDescriptionResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof PackageDescriptionResource
   */
  Name?: string;
}
