// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface X509Certificate
 */
export interface X509Certificate {
  /**
   *
   * @type {string}
   * @memberof X509Certificate
   */
  IssuerDistinguishedName?: string;
  /**
   *
   * @type {string}
   * @memberof X509Certificate
   */
  NotAfter?: string;
  /**
   *
   * @type {string}
   * @memberof X509Certificate
   */
  NotBefore?: string;
  /**
   *
   * @type {string}
   * @memberof X509Certificate
   */
  SerialNumber?: string;
  /**
   *
   * @type {string}
   * @memberof X509Certificate
   */
  SignatureAlgorithmName?: string;
  /**
   *
   * @type {string}
   * @memberof X509Certificate
   */
  SubjectDistinguishedName?: string;
  /**
   *
   * @type {string}
   * @memberof X509Certificate
   */
  Thumbprint?: string;
  /**
   *
   * @type {number}
   * @memberof X509Certificate
   */
  Version?: number;
}
