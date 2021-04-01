// Octopus REST API v2021.2.1290

import { DeploymentTemplateStep } from "./deployment-template-step";
import { Form } from "./form";
import { ReleaseChanges } from "./release-changes";

/**
 *
 * @export
 * @interface DeploymentPreviewResource
 */
export interface DeploymentPreviewResource {
  /**
   *
   * @type {Array<ReleaseChanges>}
   * @memberof DeploymentPreviewResource
   */
  Changes?: Array<ReleaseChanges>;
  /**
   *
   * @type {string}
   * @memberof DeploymentPreviewResource
   */
  ChangesMarkdown?: string;
  /**
   *
   * @type {Form}
   * @memberof DeploymentPreviewResource
   */
  Form?: Form;
  /**
   *
   * @type {string}
   * @memberof DeploymentPreviewResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentPreviewResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentPreviewResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentPreviewResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<DeploymentTemplateStep>}
   * @memberof DeploymentPreviewResource
   */
  StepsToExecute?: Array<DeploymentTemplateStep>;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentPreviewResource
   */
  UseGuidedFailureModeByDefault?: boolean;
}
