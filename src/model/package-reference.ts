// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface PackageReference
 */
export interface PackageReference {
  /**
   *
   * @type {string}
   * @memberof PackageReference
   */
  AcquisitionLocation?: string;
  /**
   *
   * @type {string}
   * @memberof PackageReference
   */
  FeedId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageReference
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof PackageReference
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof PackageReference
   */
  PackageId?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PackageReference
   */
  Properties?: { [key: string]: string };
}
