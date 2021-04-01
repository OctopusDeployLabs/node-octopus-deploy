// Octopus REST API v2021.2.1290

import { CertificateConfigurationResource } from "./certificate-configuration-resource";

/**
 *
 * @export
 * @interface CertificateConfigurationResourceCollection
 */
export interface CertificateConfigurationResourceCollection {
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<CertificateConfigurationResource>}
   * @memberof CertificateConfigurationResourceCollection
   */
  Items?: Array<CertificateConfigurationResource>;
  /**
   *
   * @type {number}
   * @memberof CertificateConfigurationResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateConfigurationResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof CertificateConfigurationResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof CertificateConfigurationResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof CertificateConfigurationResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof CertificateConfigurationResourceCollection
   */
  TotalResults?: number;
}
