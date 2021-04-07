// Octopus REST API v2021.2.1387

import { TaskState } from "./task-state";

/**
 *
 * @export
 * @interface TaskResource
 */
export interface TaskResource {
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof TaskResource
   */
  Arguments?: { [key: string]: object };
  /**
   *
   * @type {boolean}
   * @memberof TaskResource
   */
  CanRerun?: boolean;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  Completed?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  CompletedTime?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  Duration?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  ErrorMessage?: string;
  /**
   *
   * @type {boolean}
   * @memberof TaskResource
   */
  FinishedSuccessfully?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof TaskResource
   */
  HasBeenPickedUpByProcessor?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof TaskResource
   */
  HasPendingInterruptions?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof TaskResource
   */
  HasWarningsOrErrors?: boolean;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof TaskResource
   */
  IsCompleted?: boolean;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  LastUpdatedTime?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof TaskResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  QueueTime?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  QueueTimeExpiry?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  ServerNode?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  SpaceId?: string;
  /**
   *
   * @type {string}
   * @memberof TaskResource
   */
  StartTime?: string;
  /**
   *
   * @type {TaskState}
   * @memberof TaskResource
   */
  State?: TaskState;
}
