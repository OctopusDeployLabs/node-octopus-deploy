// Octopus REST API v2021.2.1290

import { ActionTemplateParameterResource } from "./action-template-parameter-resource";
import { AutoDeployReleaseOverrideResource } from "./auto-deploy-release-override-resource";
import { DeploymentConnectivityPolicy } from "./deployment-connectivity-policy";
import { ExtensionSettingsValues } from "./extension-settings-values";
import { GuidedFailureMode } from "./guided-failure-mode";
import { PersistenceSettingsResource } from "./persistence-settings-resource";
import { ReleaseCreationStrategyResource } from "./release-creation-strategy-resource";
import { TenantedDeploymentMode } from "./tenanted-deployment-mode";
import { VersioningStrategyResource } from "./versioning-strategy-resource";

/**
 *
 * @export
 * @interface ProjectResource
 */
export interface ProjectResource {
  /**
   *
   * @type {boolean}
   * @memberof ProjectResource
   */
  AutoCreateRelease?: boolean;
  /**
   *
   * @type {Set<AutoDeployReleaseOverrideResource>}
   * @memberof ProjectResource
   */
  AutoDeployReleaseOverrides?: Set<AutoDeployReleaseOverrideResource>;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  ClonedFromProjectId?: string;
  /**
   *
   * @type {GuidedFailureMode}
   * @memberof ProjectResource
   */
  DefaultGuidedFailureMode?: GuidedFailureMode;
  /**
   *
   * @type {boolean}
   * @memberof ProjectResource
   */
  DefaultToSkipIfAlreadyInstalled?: boolean;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  DeploymentChangesTemplate?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  DeploymentProcessId?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  Description?: string;
  /**
   *
   * @type {boolean}
   * @memberof ProjectResource
   */
  DiscreteChannelRelease?: boolean;
  /**
   *
   * @type {Array<ExtensionSettingsValues>}
   * @memberof ProjectResource
   */
  ExtensionSettings?: Array<ExtensionSettingsValues>;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  Id?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ProjectResource
   */
  IncludedLibraryVariableSetIds?: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof ProjectResource
   */
  IsDisabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ProjectResource
   */
  IsVersionControlled?: boolean;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  LifecycleId?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ProjectResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  Name?: string;
  /**
   *
   * @type {PersistenceSettingsResource}
   * @memberof ProjectResource
   */
  PersistenceSettings?: PersistenceSettingsResource;
  /**
   *
   * @type {DeploymentConnectivityPolicy}
   * @memberof ProjectResource
   */
  ProjectConnectivityPolicy?: DeploymentConnectivityPolicy;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  ProjectGroupId?: string;
  /**
   *
   * @type {ReleaseCreationStrategyResource}
   * @memberof ProjectResource
   */
  ReleaseCreationStrategy?: ReleaseCreationStrategyResource;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  ReleaseNotesTemplate?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  Slug?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Array<ActionTemplateParameterResource>}
   * @memberof ProjectResource
   */
  Templates?: Array<ActionTemplateParameterResource>;
  /**
   *
   * @type {TenantedDeploymentMode}
   * @memberof ProjectResource
   */
  TenantedDeploymentMode?: TenantedDeploymentMode;
  /**
   *
   * @type {string}
   * @memberof ProjectResource
   */
  VariableSetId?: string;
  /**
   *
   * @type {VersioningStrategyResource}
   * @memberof ProjectResource
   */
  VersioningStrategy?: VersioningStrategyResource;
}
