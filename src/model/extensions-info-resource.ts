// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface ExtensionsInfoResource
 */
export interface ExtensionsInfoResource {
  /**
   *
   * @type {string}
   * @memberof ExtensionsInfoResource
   */
  AssemblyName?: string;
  /**
   *
   * @type {string}
   * @memberof ExtensionsInfoResource
   */
  Author?: string;
  /**
   *
   * @type {string}
   * @memberof ExtensionsInfoResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof ExtensionsInfoResource
   */
  IsCustom?: boolean;
  /**
   *
   * @type {string}
   * @memberof ExtensionsInfoResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ExtensionsInfoResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ExtensionsInfoResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ExtensionsInfoResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof ExtensionsInfoResource
   */
  Version?: string;
}
