// Octopus REST API v2020.6.4722

import { ConnectivityCheckMessage } from './connectivity-check-message';

/**
 * 
 * @export
 * @interface ConnectivityCheckResponse
 */
export interface ConnectivityCheckResponse {
    /**
     * 
     * @type {Array<ConnectivityCheckMessage>}
     * @memberof ConnectivityCheckResponse
     */
    Messages?: Array<ConnectivityCheckMessage>;
}
