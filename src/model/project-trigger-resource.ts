// Octopus REST API v2021.2.1290

import { TriggerActionResource } from "./trigger-action-resource";
import { TriggerFilterResource } from "./trigger-filter-resource";

/**
 *
 * @export
 * @interface ProjectTriggerResource
 */
export interface ProjectTriggerResource {
  /**
   *
   * @type {TriggerActionResource}
   * @memberof ProjectTriggerResource
   */
  Action?: TriggerActionResource;
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResource
   */
  Description?: string;
  /**
   *
   * @type {TriggerFilterResource}
   * @memberof ProjectTriggerResource
   */
  Filter?: TriggerFilterResource;
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof ProjectTriggerResource
   */
  IsDisabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ProjectTriggerResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResource
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectTriggerResource
   */
  SpaceId?: string;
}
