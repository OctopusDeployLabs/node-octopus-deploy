// Octopus REST API v2021.2.1290

import { RunbookSnapshotResource } from "./runbook-snapshot-resource";

/**
 *
 * @export
 * @interface RunbookSnapshotResourceCollection
 */
export interface RunbookSnapshotResourceCollection {
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<RunbookSnapshotResource>}
   * @memberof RunbookSnapshotResourceCollection
   */
  Items?: Array<RunbookSnapshotResource>;
  /**
   *
   * @type {number}
   * @memberof RunbookSnapshotResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof RunbookSnapshotResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RunbookSnapshotResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof RunbookSnapshotResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof RunbookSnapshotResourceCollection
   */
  TotalResults?: number;
}
