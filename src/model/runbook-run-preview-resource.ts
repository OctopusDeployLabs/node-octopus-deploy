// Octopus REST API v2021.2.1290

import { DeploymentTemplateStep } from "./deployment-template-step";
import { Form } from "./form";

/**
 *
 * @export
 * @interface RunbookRunPreviewResource
 */
export interface RunbookRunPreviewResource {
  /**
   *
   * @type {Form}
   * @memberof RunbookRunPreviewResource
   */
  Form?: Form;
  /**
   *
   * @type {string}
   * @memberof RunbookRunPreviewResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunPreviewResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunPreviewResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RunbookRunPreviewResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<DeploymentTemplateStep>}
   * @memberof RunbookRunPreviewResource
   */
  StepsToExecute?: Array<DeploymentTemplateStep>;
  /**
   *
   * @type {boolean}
   * @memberof RunbookRunPreviewResource
   */
  UseGuidedFailureModeByDefault?: boolean;
}
