// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface MaintenanceConfigurationResource
 */
export interface MaintenanceConfigurationResource {
  /**
   *
   * @type {string}
   * @memberof MaintenanceConfigurationResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof MaintenanceConfigurationResource
   */
  IsInMaintenanceMode?: boolean;
  /**
   *
   * @type {string}
   * @memberof MaintenanceConfigurationResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof MaintenanceConfigurationResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MaintenanceConfigurationResource
   */
  Links?: { [key: string]: string };
}
