// Octopus REST API v2021.2.1290

import { ActionTemplateParameterResource } from "./action-template-parameter-resource";
import { PropertyValueResource } from "./property-value-resource";

/**
 *
 * @export
 * @interface Project
 */
export interface Project {
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof Project
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof Project
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof Project
   */
  ProjectName?: string;
  /**
   *
   * @type {Array<ActionTemplateParameterResource>}
   * @memberof Project
   */
  Templates?: Array<ActionTemplateParameterResource>;
  /**
   *
   * @type {{ [key: string]: { [key: string]: PropertyValueResource; }; }}
   * @memberof Project
   */
  Variables?: { [key: string]: { [key: string]: PropertyValueResource } };
}
