// Octopus REST API v2021.2.1387

import { DisplayInfo } from "./display-info";

/**
 *
 * @export
 * @interface PropertyMetadata
 */
export interface PropertyMetadata {
  /**
   *
   * @type {DisplayInfo}
   * @memberof PropertyMetadata
   */
  DisplayInfo?: DisplayInfo;
  /**
   *
   * @type {string}
   * @memberof PropertyMetadata
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof PropertyMetadata
   */
  Type?: string;
}
