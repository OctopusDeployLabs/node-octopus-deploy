// Octopus REST API v2021.2.1387

import { SubscriptionResource } from "./subscription-resource";

/**
 *
 * @export
 * @interface SubscriptionResourceCollection
 */
export interface SubscriptionResourceCollection {
  /**
   *
   * @type {string}
   * @memberof SubscriptionResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<SubscriptionResource>}
   * @memberof SubscriptionResourceCollection
   */
  Items?: Array<SubscriptionResource>;
  /**
   *
   * @type {number}
   * @memberof SubscriptionResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof SubscriptionResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof SubscriptionResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof SubscriptionResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof SubscriptionResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof SubscriptionResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof SubscriptionResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof SubscriptionResourceCollection
   */
  TotalResults?: number;
}
