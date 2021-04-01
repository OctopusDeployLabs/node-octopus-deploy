// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface CertificateConfigurationResource
 */
export interface CertificateConfigurationResource {
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof CertificateConfigurationResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResource
   */
  SignatureAlgorithm?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResource
   */
  Thumbprint?: string;
}
