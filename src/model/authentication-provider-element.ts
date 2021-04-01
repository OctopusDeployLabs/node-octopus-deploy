// Octopus REST API v2021.2.1290

import { IdentityType } from "./identity-type";

/**
 *
 * @export
 * @interface AuthenticationProviderElement
 */
export interface AuthenticationProviderElement {
  /**
   *
   * @type {Array<string>}
   * @memberof AuthenticationProviderElement
   */
  CSSLinks?: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof AuthenticationProviderElement
   */
  FormsLoginEnabled?: boolean;
  /**
   *
   * @type {IdentityType}
   * @memberof AuthenticationProviderElement
   */
  IdentityType?: IdentityType;
  /**
   *
   * @type {Array<string>}
   * @memberof AuthenticationProviderElement
   */
  JavascriptLinks?: Array<string>;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof AuthenticationProviderElement
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof AuthenticationProviderElement
   */
  Name?: string;
}
