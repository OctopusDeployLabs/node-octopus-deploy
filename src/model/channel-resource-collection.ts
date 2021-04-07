// Octopus REST API v2021.2.1387

import { ChannelResource } from "./channel-resource";

/**
 *
 * @export
 * @interface ChannelResourceCollection
 */
export interface ChannelResourceCollection {
  /**
   *
   * @type {string}
   * @memberof ChannelResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<ChannelResource>}
   * @memberof ChannelResourceCollection
   */
  Items?: Array<ChannelResource>;
  /**
   *
   * @type {number}
   * @memberof ChannelResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof ChannelResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof ChannelResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ChannelResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof ChannelResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ChannelResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof ChannelResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof ChannelResourceCollection
   */
  TotalResults?: number;
}
