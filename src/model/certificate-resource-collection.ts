// Octopus REST API v2021.2.1290

import { CertificateResource } from "./certificate-resource";

/**
 *
 * @export
 * @interface CertificateResourceCollection
 */
export interface CertificateResourceCollection {
  /**
   *
   * @type {string}
   * @memberof CertificateResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<CertificateResource>}
   * @memberof CertificateResourceCollection
   */
  Items?: Array<CertificateResource>;
  /**
   *
   * @type {number}
   * @memberof CertificateResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof CertificateResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof CertificateResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof CertificateResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof CertificateResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof CertificateResourceCollection
   */
  TotalResults?: number;
}
