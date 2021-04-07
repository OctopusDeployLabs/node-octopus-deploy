// Octopus REST API v2021.2.1387

import { ReleaseTemplatePackage } from "./release-template-package";

/**
 *
 * @export
 * @interface ReleaseTemplateResource
 */
export interface ReleaseTemplateResource {
  /**
   *
   * @type {string}
   * @memberof ReleaseTemplateResource
   */
  DeploymentProcessId?: string;
  /**
   *
   * @type {string}
   * @memberof ReleaseTemplateResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ReleaseTemplateResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ReleaseTemplateResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {string}
   * @memberof ReleaseTemplateResource
   */
  LastReleaseVersion?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ReleaseTemplateResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ReleaseTemplateResource
   */
  NextVersionIncrement?: string;
  /**
   *
   * @type {Array<ReleaseTemplatePackage>}
   * @memberof ReleaseTemplateResource
   */
  Packages?: Array<ReleaseTemplatePackage>;
  /**
   *
   * @type {string}
   * @memberof ReleaseTemplateResource
   */
  VersioningPackageReferenceName?: string;
  /**
   *
   * @type {string}
   * @memberof ReleaseTemplateResource
   */
  VersioningPackageStepName?: string;
}
