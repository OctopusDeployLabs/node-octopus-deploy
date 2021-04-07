// Octopus REST API v2021.2.1387

import { WorkerResource } from "./worker-resource";

/**
 *
 * @export
 * @interface WorkerResourceCollection
 */
export interface WorkerResourceCollection {
  /**
   *
   * @type {string}
   * @memberof WorkerResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<WorkerResource>}
   * @memberof WorkerResourceCollection
   */
  Items?: Array<WorkerResource>;
  /**
   *
   * @type {number}
   * @memberof WorkerResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof WorkerResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof WorkerResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof WorkerResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof WorkerResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof WorkerResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof WorkerResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof WorkerResourceCollection
   */
  TotalResults?: number;
}
