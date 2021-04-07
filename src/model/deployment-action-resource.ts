// Octopus REST API v2021.2.1387

import { DeploymentActionCondition } from "./deployment-action-condition";
import { DeploymentActionContainerResource } from "./deployment-action-container-resource";
import { PackageReference } from "./package-reference";
import { PropertyValueResource } from "./property-value-resource";

/**
 *
 * @export
 * @interface DeploymentActionResource
 */
export interface DeploymentActionResource {
  /**
   *
   * @type {string}
   * @memberof DeploymentActionResource
   */
  ActionType?: string;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentActionResource
   */
  CanBeUsedForProjectVersioning?: boolean;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentActionResource
   */
  Channels?: Set<string>;
  /**
   *
   * @type {DeploymentActionCondition}
   * @memberof DeploymentActionResource
   */
  Condition?: DeploymentActionCondition;
  /**
   *
   * @type {DeploymentActionContainerResource}
   * @memberof DeploymentActionResource
   */
  Container?: DeploymentActionContainerResource;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentActionResource
   */
  Environments?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentActionResource
   */
  ExcludedEnvironments?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof DeploymentActionResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentActionResource
   */
  IsDisabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentActionResource
   */
  IsRequired?: boolean;
  /**
   *
   * @type {string}
   * @memberof DeploymentActionResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentActionResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentActionResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DeploymentActionResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentActionResource
   */
  Notes?: string;
  /**
   *
   * @type {Array<PackageReference>}
   * @memberof DeploymentActionResource
   */
  Packages?: Array<PackageReference>;
  /**
   *
   * @type {{ [key: string]: PropertyValueResource; }}
   * @memberof DeploymentActionResource
   */
  Properties?: { [key: string]: PropertyValueResource };
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentActionResource
   */
  TenantTags?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof DeploymentActionResource
   */
  WorkerPoolId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentActionResource
   */
  WorkerPoolVariable?: string;
}
