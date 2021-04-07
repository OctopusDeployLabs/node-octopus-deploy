// Octopus REST API v2021.2.1387

import { MachinePolicyResource } from "./machine-policy-resource";

/**
 *
 * @export
 * @interface MachinePolicyResourceCollection
 */
export interface MachinePolicyResourceCollection {
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<MachinePolicyResource>}
   * @memberof MachinePolicyResourceCollection
   */
  Items?: Array<MachinePolicyResource>;
  /**
   *
   * @type {number}
   * @memberof MachinePolicyResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof MachinePolicyResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof MachinePolicyResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MachinePolicyResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof MachinePolicyResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof MachinePolicyResourceCollection
   */
  TotalResults?: number;
}
