// Octopus REST API v2021.2.1290

import { CalendarSystem } from "./calendar-system";
import { Era } from "./era";
import { IsoDayOfWeek } from "./iso-day-of-week";

/**
 *
 * @export
 * @interface LocalDate
 */
export interface LocalDate {
  /**
   *
   * @type {CalendarSystem}
   * @memberof LocalDate
   */
  Calendar?: CalendarSystem;
  /**
   *
   * @type {number}
   * @memberof LocalDate
   */
  Day?: number;
  /**
   *
   * @type {IsoDayOfWeek}
   * @memberof LocalDate
   */
  DayOfWeek?: IsoDayOfWeek;
  /**
   *
   * @type {number}
   * @memberof LocalDate
   */
  DayOfYear?: number;
  /**
   *
   * @type {Era}
   * @memberof LocalDate
   */
  Era?: Era;
  /**
   *
   * @type {number}
   * @memberof LocalDate
   */
  Month?: number;
  /**
   *
   * @type {number}
   * @memberof LocalDate
   */
  Year?: number;
  /**
   *
   * @type {number}
   * @memberof LocalDate
   */
  YearOfEra?: number;
}
