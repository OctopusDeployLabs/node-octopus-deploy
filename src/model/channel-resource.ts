// Octopus REST API v2021.2.1387

import { ChannelVersionRuleResource } from "./channel-version-rule-resource";

/**
 *
 * @export
 * @interface ChannelResource
 */
export interface ChannelResource {
  /**
   *
   * @type {string}
   * @memberof ChannelResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof ChannelResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof ChannelResource
   */
  IsDefault?: boolean;
  /**
   *
   * @type {string}
   * @memberof ChannelResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ChannelResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {string}
   * @memberof ChannelResource
   */
  LifecycleId?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ChannelResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ChannelResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof ChannelResource
   */
  ProjectId?: string;
  /**
   *
   * @type {Array<ChannelVersionRuleResource>}
   * @memberof ChannelResource
   */
  Rules?: Array<ChannelVersionRuleResource>;
  /**
   *
   * @type {string}
   * @memberof ChannelResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof ChannelResource
   */
  TenantTags?: Set<string>;
}
