// Octopus REST API v2021.2.1387

import { RetentionUnit } from "./retention-unit";

/**
 *
 * @export
 * @interface RetentionPeriod
 */
export interface RetentionPeriod {
  /**
   *
   * @type {number}
   * @memberof RetentionPeriod
   */
  QuantityToKeep?: number;
  /**
   *
   * @type {boolean}
   * @memberof RetentionPeriod
   */
  ShouldKeepForever?: boolean;
  /**
   *
   * @type {RetentionUnit}
   * @memberof RetentionPeriod
   */
  Unit?: RetentionUnit;
}
