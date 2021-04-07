// Octopus REST API v2021.2.1387

import { TaskResource } from "./task-resource";

/**
 *
 * @export
 * @interface TaskResourceCollection
 */
export interface TaskResourceCollection {
  /**
   *
   * @type {string}
   * @memberof TaskResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<TaskResource>}
   * @memberof TaskResourceCollection
   */
  Items?: Array<TaskResource>;
  /**
   *
   * @type {number}
   * @memberof TaskResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof TaskResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof TaskResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof TaskResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof TaskResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof TaskResourceCollection
   */
  TotalResults?: number;
}
