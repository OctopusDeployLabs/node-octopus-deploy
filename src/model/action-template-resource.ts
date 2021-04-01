// Octopus REST API v2021.2.1290

import { ActionTemplateParameterResource } from "./action-template-parameter-resource";
import { PackageReference } from "./package-reference";
import { PropertyValueResource } from "./property-value-resource";

/**
 *
 * @export
 * @interface ActionTemplateResource
 */
export interface ActionTemplateResource {
  /**
   *
   * @type {string}
   * @memberof ActionTemplateResource
   */
  ActionType: string;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateResource
   */
  CommunityActionTemplateId?: string;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ActionTemplateResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ActionTemplateResource
   */
  Name: string;
  /**
   *
   * @type {Array<PackageReference>}
   * @memberof ActionTemplateResource
   */
  Packages?: Array<PackageReference>;
  /**
   *
   * @type {Array<ActionTemplateParameterResource>}
   * @memberof ActionTemplateResource
   */
  Parameters?: Array<ActionTemplateParameterResource>;
  /**
   *
   * @type {{ [key: string]: PropertyValueResource; }}
   * @memberof ActionTemplateResource
   */
  Properties?: { [key: string]: PropertyValueResource };
  /**
   *
   * @type {string}
   * @memberof ActionTemplateResource
   */
  SpaceId?: string;
  /**
   *
   * @type {number}
   * @memberof ActionTemplateResource
   */
  Version?: number;
}
