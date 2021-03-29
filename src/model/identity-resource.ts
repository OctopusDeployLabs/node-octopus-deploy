// Octopus REST API v2020.6.4722

import { IdentityClaimResource } from './identity-claim-resource';

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
    Claims?: { [key: string]: IdentityClaimResource; };
    /**
     * 
     * @type {string}
     * @memberof IdentityResource
     */
    IdentityProviderName?: string;
}
