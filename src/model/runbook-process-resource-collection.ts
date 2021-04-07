// Octopus REST API v2021.2.1387

import { RunbookProcessResource } from "./runbook-process-resource";

/**
 *
 * @export
 * @interface RunbookProcessResourceCollection
 */
export interface RunbookProcessResourceCollection {
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<RunbookProcessResource>}
   * @memberof RunbookProcessResourceCollection
   */
  Items?: Array<RunbookProcessResource>;
  /**
   *
   * @type {number}
   * @memberof RunbookProcessResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof RunbookProcessResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RunbookProcessResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof RunbookProcessResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof RunbookProcessResourceCollection
   */
  TotalResults?: number;
}
