// Octopus REST API v2021.2.1290

import { FormElement } from "./form-element";

/**
 *
 * @export
 * @interface Form
 */
export interface Form {
  /**
   *
   * @type {Array<FormElement>}
   * @memberof Form
   */
  Elements?: Array<FormElement>;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof Form
   */
  Values?: { [key: string]: string };
}
