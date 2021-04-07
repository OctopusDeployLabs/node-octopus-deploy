// Octopus REST API v2021.2.1387

import { TriggerActionType } from "./trigger-action-type";

/**
 *
 * @export
 * @interface TriggerActionResource
 */
export interface TriggerActionResource {
  /**
   *
   * @type {TriggerActionType}
   * @memberof TriggerActionResource
   */
  ActionType?: TriggerActionType;
  /**
   *
   * @type {string}
   * @memberof TriggerActionResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof TriggerActionResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof TriggerActionResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof TriggerActionResource
   */
  Links?: { [key: string]: string };
}
