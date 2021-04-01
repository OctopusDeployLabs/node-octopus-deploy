// Octopus REST API v2021.2.1290

import { TenantedDeploymentMode } from "./tenanted-deployment-mode";

/**
 *
 * @export
 * @interface AccountResource
 */
export interface AccountResource {
  /**
   *
   * @type {string}
   * @memberof AccountResource
   */
  AccountType?: AccountTypeEnum;
  /**
   *
   * @type {string}
   * @memberof AccountResource
   */
  Description?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof AccountResource
   */
  EnvironmentIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof AccountResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof AccountResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof AccountResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof AccountResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof AccountResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof AccountResource
   */
  SpaceId?: string;
  /**
   *
   * @type {TenantedDeploymentMode}
   * @memberof AccountResource
   */
  TenantedDeploymentParticipation?: TenantedDeploymentMode;
  /**
   *
   * @type {Set<string>}
   * @memberof AccountResource
   */
  TenantIds?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof AccountResource
   */
  TenantTags?: Set<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum AccountTypeEnum {
  AmazonWebServicesAccount = "AmazonWebServicesAccount",
  AzureServicePrincipal = "AzureServicePrincipal",
  AzureSubscription = "AzureSubscription",
  None = "None",
  SshKeyPair = "SshKeyPair",
  Token = "Token",
  UsernamePassword = "UsernamePassword",
}
