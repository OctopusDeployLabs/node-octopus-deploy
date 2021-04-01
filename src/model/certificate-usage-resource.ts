// Octopus REST API v2021.2.1290

import { DeploymentTargetResource } from "./deployment-target-resource";
import { LibraryVariableSetResource } from "./library-variable-set-resource";
import { ProjectResource } from "./project-resource";
import { TenantResource } from "./tenant-resource";

/**
 *
 * @export
 * @interface CertificateUsageResource
 */
export interface CertificateUsageResource {
  /**
   *
   * @type {Array<DeploymentTargetResource>}
   * @memberof CertificateUsageResource
   */
  DeploymentTargetUsages?: Array<DeploymentTargetResource>;
  /**
   *
   * @type {string}
   * @memberof CertificateUsageResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateUsageResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateUsageResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {Array<LibraryVariableSetResource>}
   * @memberof CertificateUsageResource
   */
  LibraryVariableSetUsages?: Array<LibraryVariableSetResource>;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof CertificateUsageResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<ProjectResource>}
   * @memberof CertificateUsageResource
   */
  ProjectUsages?: Array<ProjectResource>;
  /**
   *
   * @type {Array<TenantResource>}
   * @memberof CertificateUsageResource
   */
  TenantUsages?: Array<TenantResource>;
}
