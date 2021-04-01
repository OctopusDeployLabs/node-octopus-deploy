// Octopus REST API v2021.2.1290

import { ActionTemplateParameterResource } from "./action-template-parameter-resource";
import { VariableSetContentType } from "./variable-set-content-type";

/**
 *
 * @export
 * @interface LibraryVariableSetResource
 */
export interface LibraryVariableSetResource {
  /**
   *
   * @type {VariableSetContentType}
   * @memberof LibraryVariableSetResource
   */
  ContentType?: VariableSetContentType;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof LibraryVariableSetResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Array<ActionTemplateParameterResource>}
   * @memberof LibraryVariableSetResource
   */
  Templates?: Array<ActionTemplateParameterResource>;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResource
   */
  VariableSetId?: string;
}
