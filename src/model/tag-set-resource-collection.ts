// Octopus REST API v2021.2.1387

import { TagSetResource } from "./tag-set-resource";

/**
 *
 * @export
 * @interface TagSetResourceCollection
 */
export interface TagSetResourceCollection {
  /**
   *
   * @type {string}
   * @memberof TagSetResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<TagSetResource>}
   * @memberof TagSetResourceCollection
   */
  Items?: Array<TagSetResource>;
  /**
   *
   * @type {number}
   * @memberof TagSetResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof TagSetResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof TagSetResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof TagSetResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof TagSetResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof TagSetResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof TagSetResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof TagSetResourceCollection
   */
  TotalResults?: number;
}
