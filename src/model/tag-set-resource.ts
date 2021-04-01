// Octopus REST API v2021.2.1290

import { TagResource } from "./tag-resource";

/**
 *
 * @export
 * @interface TagSetResource
 */
export interface TagSetResource {
  /**
   *
   * @type {string}
   * @memberof TagSetResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof TagSetResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof TagSetResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof TagSetResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof TagSetResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof TagSetResource
   */
  Name?: string;
  /**
   *
   * @type {number}
   * @memberof TagSetResource
   */
  SortOrder?: number;
  /**
   *
   * @type {string}
   * @memberof TagSetResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Array<TagResource>}
   * @memberof TagSetResource
   */
  Tags?: Array<TagResource>;
}
