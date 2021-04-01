// Octopus REST API v2021.2.1290

import { OctopusPackageVersionBuildInformationMappedResource } from "./octopus-package-version-build-information-mapped-resource";

/**
 *
 * @export
 * @interface OctopusPackageVersionBuildInformationMappedResourceCollection
 */
export interface OctopusPackageVersionBuildInformationMappedResourceCollection {
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<OctopusPackageVersionBuildInformationMappedResource>}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  Items?: Array<OctopusPackageVersionBuildInformationMappedResource>;
  /**
   *
   * @type {number}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof OctopusPackageVersionBuildInformationMappedResourceCollection
   */
  TotalResults?: number;
}
