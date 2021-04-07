// Octopus REST API v2021.2.1387

import { ConnectivityCheckMessage } from "./connectivity-check-message";

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
