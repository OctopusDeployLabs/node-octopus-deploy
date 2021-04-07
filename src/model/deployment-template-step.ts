// Octopus REST API v2021.2.1387

import { MachineDeploymentPreview } from "./machine-deployment-preview";
import { ReferenceDataItem } from "./reference-data-item";

/**
 *
 * @export
 * @interface DeploymentTemplateStep
 */
export interface DeploymentTemplateStep {
  /**
   *
   * @type {string}
   * @memberof DeploymentTemplateStep
   */
  ActionId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTemplateStep
   */
  ActionName?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTemplateStep
   */
  ActionNumber?: string;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentTemplateStep
   */
  CanBeSkipped?: boolean;
  /**
   *
   * @type {Array<ReferenceDataItem>}
   * @memberof DeploymentTemplateStep
   */
  ExcludedMachines?: Array<ReferenceDataItem>;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentTemplateStep
   */
  HasNoApplicableMachines?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentTemplateStep
   */
  IsDisabled?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof DeploymentTemplateStep
   */
  MachineNames?: Array<string>;
  /**
   *
   * @type {Array<MachineDeploymentPreview>}
   * @memberof DeploymentTemplateStep
   */
  Machines?: Array<MachineDeploymentPreview>;
  /**
   *
   * @type {Array<string>}
   * @memberof DeploymentTemplateStep
   */
  Roles?: Array<string>;
  /**
   *
   * @type {Array<ReferenceDataItem>}
   * @memberof DeploymentTemplateStep
   */
  UnavailableMachines?: Array<ReferenceDataItem>;
}
