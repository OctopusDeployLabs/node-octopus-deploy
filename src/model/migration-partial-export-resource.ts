// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface MigrationPartialExportResource
 */
export interface MigrationPartialExportResource {
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  DestinationApiKey?: string;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  DestinationPackageFeed?: string;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  DestinationPackageFeedSpaceId?: string;
  /**
   *
   * @type {boolean}
   * @memberof MigrationPartialExportResource
   */
  EncryptPackage?: boolean;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  FailureCallbackUri?: string;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof MigrationPartialExportResource
   */
  IgnoreCertificates?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrationPartialExportResource
   */
  IgnoreDeployments?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrationPartialExportResource
   */
  IgnoreMachines?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrationPartialExportResource
   */
  IgnoreTenants?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrationPartialExportResource
   */
  IncludeTaskLogs?: boolean;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MigrationPartialExportResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  PackageId?: string;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  PackageVersion?: string;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  Password?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof MigrationPartialExportResource
   */
  Projects?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  SpaceId?: string;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  SuccessCallbackUri?: string;
  /**
   *
   * @type {string}
   * @memberof MigrationPartialExportResource
   */
  TaskId?: string;
}
