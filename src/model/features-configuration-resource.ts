// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface FeaturesConfigurationResource
 */
export interface FeaturesConfigurationResource {
  /**
   *
   * @type {string}
   * @memberof FeaturesConfigurationResource
   */
  HelpSidebarSupportLink?: string;
  /**
   *
   * @type {string}
   * @memberof FeaturesConfigurationResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof FeaturesConfigurationResource
   */
  IsActionContainersEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FeaturesConfigurationResource
   */
  IsAzureZipDeployEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FeaturesConfigurationResource
   */
  IsBuiltInWorkerEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FeaturesConfigurationResource
   */
  IsCommunityActionTemplatesEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FeaturesConfigurationResource
   */
  IsConfigurationAsCodeEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FeaturesConfigurationResource
   */
  IsHelpSidebarEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FeaturesConfigurationResource
   */
  IsKubernetesEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof FeaturesConfigurationResource
   */
  IsStepUiFrameworkEnabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof FeaturesConfigurationResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof FeaturesConfigurationResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof FeaturesConfigurationResource
   */
  Links?: { [key: string]: string };
}
