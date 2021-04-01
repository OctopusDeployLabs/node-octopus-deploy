// Octopus REST API v2021.2.1290

import { IdentityClaimResource } from "./identity-claim-resource";

/**
 *
 * @export
 * @interface IdentityResource
 */
export interface IdentityResource {
  /**
   *
   * @type {{ [key: string]: IdentityClaimResource; }}
   * @memberof IdentityResource
   */
  Claims?: { [key: string]: IdentityClaimResource };
  /**
   *
   * @type {string}
   * @memberof IdentityResource
   */
  IdentityProviderName?: string;
}
