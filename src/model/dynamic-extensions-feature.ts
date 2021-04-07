// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface DynamicExtensionsFeature
 */
export interface DynamicExtensionsFeature {
  /**
   *
   * @type {string}
   * @memberof DynamicExtensionsFeature
   */
  Default?: string;
  /**
   *
   * @type {string}
   * @memberof DynamicExtensionsFeature
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof DynamicExtensionsFeature
   */
  Key?: string;
  /**
   *
   * @type {string}
   * @memberof DynamicExtensionsFeature
   */
  Name?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DynamicExtensionsFeature
   */
  Options?: { [key: string]: string };
}
