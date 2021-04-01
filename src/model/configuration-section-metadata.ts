// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface ConfigurationSectionMetadata
 */
export interface ConfigurationSectionMetadata {
  /**
   *
   * @type {string}
   * @memberof ConfigurationSectionMetadata
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof ConfigurationSectionMetadata
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ConfigurationSectionMetadata
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ConfigurationSectionMetadata
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ConfigurationSectionMetadata
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ConfigurationSectionMetadata
   */
  Name?: string;
}
