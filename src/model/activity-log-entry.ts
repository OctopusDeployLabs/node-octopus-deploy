// Octopus REST API v2021.2.1387

import { ActivityLogEntryCategory } from "./activity-log-entry-category";

/**
 *
 * @export
 * @interface ActivityLogEntry
 */
export interface ActivityLogEntry {
  /**
   *
   * @type {ActivityLogEntryCategory}
   * @memberof ActivityLogEntry
   */
  Category?: ActivityLogEntryCategory;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  Detail?: string;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  MessageText?: string;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  OccurredAt?: string;
}
