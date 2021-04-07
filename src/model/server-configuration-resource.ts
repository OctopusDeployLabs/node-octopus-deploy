// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface ServerConfigurationResource
 */
export interface ServerConfigurationResource {
  /**
   *
   * @type {string}
   * @memberof ServerConfigurationResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ServerConfigurationResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ServerConfigurationResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ServerConfigurationResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ServerConfigurationResource
   */
  ServerUri?: string;
}
