// Octopus REST API v2021.2.1290

import { OctopusPackageVersionBuildInformationMappedResource } from "./octopus-package-version-build-information-mapped-resource";

/**
 *
 * @export
 * @interface PackageResource
 */
export interface PackageResource {
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  FeedId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  FileExtension?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PackageResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  NuGetFeedId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  NuGetPackageId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  PackageId?: string;
  /**
   *
   * @type {OctopusPackageVersionBuildInformationMappedResource}
   * @memberof PackageResource
   */
  PackageVersionBuildInformation?: OctopusPackageVersionBuildInformationMappedResource;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  Published?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  ReleaseNotes?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  Summary?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  Title?: string;
  /**
   *
   * @type {string}
   * @memberof PackageResource
   */
  Version?: string;
}
