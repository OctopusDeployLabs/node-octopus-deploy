// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface PackageVersionResource
 */
export interface PackageVersionResource {
  /**
   *
   * @type {string}
   * @memberof PackageVersionResource
   */
  FeedId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageVersionResource
   */
  Id?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PackageVersionResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof PackageVersionResource
   */
  PackageId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageVersionResource
   */
  Published?: string;
  /**
   *
   * @type {string}
   * @memberof PackageVersionResource
   */
  ReleaseNotes?: string;
  /**
   *
   * @type {number}
   * @memberof PackageVersionResource
   */
  SizeBytes?: number;
  /**
   *
   * @type {string}
   * @memberof PackageVersionResource
   */
  Title?: string;
  /**
   *
   * @type {string}
   * @memberof PackageVersionResource
   */
  Version?: string;
}
