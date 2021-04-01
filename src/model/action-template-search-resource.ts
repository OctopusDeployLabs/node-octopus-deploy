// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface ActionTemplateSearchResource
 */
export interface ActionTemplateSearchResource {
  /**
   *
   * @type {string}
   * @memberof ActionTemplateSearchResource
   */
  Author?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ActionTemplateSearchResource
   */
  Categories?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateSearchResource
   */
  Category?: string;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateSearchResource
   */
  CommunityActionTemplateId?: string;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateSearchResource
   */
  Description?: string;
  /**
   *
   * @type {boolean}
   * @memberof ActionTemplateSearchResource
   */
  HasUpdate?: boolean;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateSearchResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof ActionTemplateSearchResource
   */
  IsBuiltIn?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ActionTemplateSearchResource
   */
  IsInstalled?: boolean;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateSearchResource
   */
  Keywords?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ActionTemplateSearchResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ActionTemplateSearchResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateSearchResource
   */
  Type?: string;
  /**
   *
   * @type {string}
   * @memberof ActionTemplateSearchResource
   */
  Website?: string;
}
