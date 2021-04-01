// Octopus REST API v2021.2.1290

import { RunbookRunResource } from "./runbook-run-resource";

/**
 *
 * @export
 * @interface RunbookRunResourceCollection
 */
export interface RunbookRunResourceCollection {
  /**
   *
   * @type {string}
   * @memberof RunbookRunResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<RunbookRunResource>}
   * @memberof RunbookRunResourceCollection
   */
  Items?: Array<RunbookRunResource>;
  /**
   *
   * @type {number}
   * @memberof RunbookRunResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof RunbookRunResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RunbookRunResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof RunbookRunResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof RunbookRunResourceCollection
   */
  TotalResults?: number;
}
