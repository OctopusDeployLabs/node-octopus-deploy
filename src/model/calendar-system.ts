// Octopus REST API v2021.2.1387

import { Era } from "./era";

/**
 *
 * @export
 * @interface CalendarSystem
 */
export interface CalendarSystem {
  /**
   *
   * @type {Array<Era>}
   * @memberof CalendarSystem
   */
  Eras?: Array<Era>;
  /**
   *
   * @type {string}
   * @memberof CalendarSystem
   */
  Id?: string;
  /**
   *
   * @type {number}
   * @memberof CalendarSystem
   */
  MaxYear?: number;
  /**
   *
   * @type {number}
   * @memberof CalendarSystem
   */
  MinYear?: number;
  /**
   *
   * @type {string}
   * @memberof CalendarSystem
   */
  Name?: string;
}
