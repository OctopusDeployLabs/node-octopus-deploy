// Octopus REST API v2021.2.1290

import { ActionTemplateParameterResource } from "./action-template-parameter-resource";
import { PropertyValueResource } from "./property-value-resource";

/**
 *
 * @export
 * @interface Library
 */
export interface Library {
  /**
   *
   * @type {string}
   * @memberof Library
   */
  LibraryVariableSetId?: string;
  /**
   *
   * @type {string}
   * @memberof Library
   */
  LibraryVariableSetName?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof Library
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<ActionTemplateParameterResource>}
   * @memberof Library
   */
  Templates?: Array<ActionTemplateParameterResource>;
  /**
   *
   * @type {{ [key: string]: PropertyValueResource; }}
   * @memberof Library
   */
  Variables?: { [key: string]: PropertyValueResource };
}
