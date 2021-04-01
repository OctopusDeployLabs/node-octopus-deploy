// Octopus REST API v2021.2.1290

import { ConnectivityCheckMessageCategory } from "./connectivity-check-message-category";

/**
 *
 * @export
 * @interface ConnectivityCheckMessage
 */
export interface ConnectivityCheckMessage {
  /**
   *
   * @type {ConnectivityCheckMessageCategory}
   * @memberof ConnectivityCheckMessage
   */
  Category?: ConnectivityCheckMessageCategory;
  /**
   *
   * @type {string}
   * @memberof ConnectivityCheckMessage
   */
  Message?: string;
}
