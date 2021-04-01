// Octopus REST API v2021.2.1290

import { AuthenticationProviderElement } from "./authentication-provider-element";

/**
 *
 * @export
 * @interface UserAuthenticationResource
 */
export interface UserAuthenticationResource {
  /**
   *
   * @type {Array<AuthenticationProviderElement>}
   * @memberof UserAuthenticationResource
   */
  AuthenticationProviders?: Array<AuthenticationProviderElement>;
  /**
   *
   * @type {boolean}
   * @memberof UserAuthenticationResource
   */
  CanCurrentUserEditIdentitiesForUser?: boolean;
  /**
   *
   * @type {string}
   * @memberof UserAuthenticationResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof UserAuthenticationResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof UserAuthenticationResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof UserAuthenticationResource
   */
  Links?: { [key: string]: string };
}
