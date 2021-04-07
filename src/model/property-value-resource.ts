// Octopus REST API v2021.2.1387

import { SensitiveValue } from "./sensitive-value";

/**
 *
 * @export
 * @interface PropertyValueResource
 */
export interface PropertyValueResource {
  /**
   *
   * @type {boolean}
   * @memberof PropertyValueResource
   */
  IsSensitive?: boolean;
  /**
   *
   * @type {SensitiveValue}
   * @memberof PropertyValueResource
   */
  SensitiveValue?: SensitiveValue;
  /**
   *
   * @type {string}
   * @memberof PropertyValueResource
   */
  Value?: string;
}
