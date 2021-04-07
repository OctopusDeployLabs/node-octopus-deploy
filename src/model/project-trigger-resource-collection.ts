// Octopus REST API v2021.2.1387

import { ProjectTriggerResource } from "./project-trigger-resource";

/**
 *
 * @export
 * @interface ProjectTriggerResourceCollection
 */
export interface ProjectTriggerResourceCollection {
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<ProjectTriggerResource>}
   * @memberof ProjectTriggerResourceCollection
   */
  Items?: Array<ProjectTriggerResource>;
  /**
   *
   * @type {number}
   * @memberof ProjectTriggerResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof ProjectTriggerResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ProjectTriggerResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof ProjectTriggerResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof ProjectTriggerResourceCollection
   */
  TotalResults?: number;
}
