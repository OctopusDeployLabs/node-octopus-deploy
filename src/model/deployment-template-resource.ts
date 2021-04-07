// Octopus REST API v2021.2.1387

import { DeploymentPromomotionTenant } from "./deployment-promomotion-tenant";
import { DeploymentPromotionTarget } from "./deployment-promotion-target";

/**
 *
 * @export
 * @interface DeploymentTemplateResource
 */
export interface DeploymentTemplateResource {
  /**
   *
   * @type {string}
   * @memberof DeploymentTemplateResource
   */
  DeploymentNotes?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTemplateResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentTemplateResource
   */
  IsDeploymentProcessModified?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentTemplateResource
   */
  IsLibraryVariableSetModified?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentTemplateResource
   */
  IsVariableSetModified?: boolean;
  /**
   *
   * @type {string}
   * @memberof DeploymentTemplateResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTemplateResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentTemplateResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<DeploymentPromotionTarget>}
   * @memberof DeploymentTemplateResource
   */
  PromoteTo?: Array<DeploymentPromotionTarget>;
  /**
   *
   * @type {Array<DeploymentPromomotionTenant>}
   * @memberof DeploymentTemplateResource
   */
  TenantPromotions?: Array<DeploymentPromomotionTenant>;
}
