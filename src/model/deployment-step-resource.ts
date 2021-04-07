// Octopus REST API v2021.2.1387

import { DeploymentActionResource } from "./deployment-action-resource";
import { DeploymentStepCondition } from "./deployment-step-condition";
import { DeploymentStepPackageRequirement } from "./deployment-step-package-requirement";
import { DeploymentStepStartTrigger } from "./deployment-step-start-trigger";
import { PropertyValueResource } from "./property-value-resource";

/**
 *
 * @export
 * @interface DeploymentStepResource
 */
export interface DeploymentStepResource {
  /**
   *
   * @type {Array<DeploymentActionResource>}
   * @memberof DeploymentStepResource
   */
  Actions?: Array<DeploymentActionResource>;
  /**
   *
   * @type {DeploymentStepCondition}
   * @memberof DeploymentStepResource
   */
  Condition?: DeploymentStepCondition;
  /**
   *
   * @type {string}
   * @memberof DeploymentStepResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentStepResource
   */
  Name?: string;
  /**
   *
   * @type {DeploymentStepPackageRequirement}
   * @memberof DeploymentStepResource
   */
  PackageRequirement?: DeploymentStepPackageRequirement;
  /**
   *
   * @type {{ [key: string]: PropertyValueResource; }}
   * @memberof DeploymentStepResource
   */
  Properties?: { [key: string]: PropertyValueResource };
  /**
   *
   * @type {DeploymentStepStartTrigger}
   * @memberof DeploymentStepResource
   */
  StartTrigger?: DeploymentStepStartTrigger;
}
