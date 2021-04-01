// Octopus REST API v2021.2.1290

import { WorkerPoolType } from "./worker-pool-type";

/**
 *
 * @export
 * @interface WorkerPoolResource
 */
export interface WorkerPoolResource {
  /**
   *
   * @type {boolean}
   * @memberof WorkerPoolResource
   */
  CanAddWorkers?: boolean;
  /**
   *
   * @type {string}
   * @memberof WorkerPoolResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof WorkerPoolResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof WorkerPoolResource
   */
  IsDefault?: boolean;
  /**
   *
   * @type {string}
   * @memberof WorkerPoolResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof WorkerPoolResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof WorkerPoolResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof WorkerPoolResource
   */
  Name?: string;
  /**
   *
   * @type {number}
   * @memberof WorkerPoolResource
   */
  SortOrder?: number;
  /**
   *
   * @type {string}
   * @memberof WorkerPoolResource
   */
  SpaceId?: string;
  /**
   *
   * @type {WorkerPoolType}
   * @memberof WorkerPoolResource
   */
  WorkerPoolType?: WorkerPoolType;
}
