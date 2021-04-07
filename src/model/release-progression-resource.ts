// Octopus REST API v2021.2.1387

import { ChannelResource } from "./channel-resource";
import { DashboardItemResource } from "./dashboard-item-resource";
import { ReleaseResource } from "./release-resource";
import { RetentionPeriod } from "./retention-period";

/**
 *
 * @export
 * @interface ReleaseProgressionResource
 */
export interface ReleaseProgressionResource {
  /**
   *
   * @type {ChannelResource}
   * @memberof ReleaseProgressionResource
   */
  Channel?: ChannelResource;
  /**
   *
   * @type {{ [key: string]: Array<DashboardItemResource>; }}
   * @memberof ReleaseProgressionResource
   */
  Deployments?: { [key: string]: Array<DashboardItemResource> };
  /**
   *
   * @type {boolean}
   * @memberof ReleaseProgressionResource
   */
  HasUnresolvedDefect?: boolean;
  /**
   *
   * @type {Set<string>}
   * @memberof ReleaseProgressionResource
   */
  NextDeployments?: Set<string>;
  /**
   *
   * @type {ReleaseResource}
   * @memberof ReleaseProgressionResource
   */
  Release?: ReleaseResource;
  /**
   *
   * @type {RetentionPeriod}
   * @memberof ReleaseProgressionResource
   */
  ReleaseRetentionPeriod?: RetentionPeriod;
  /**
   *
   * @type {RetentionPeriod}
   * @memberof ReleaseProgressionResource
   */
  TentacleRetentionPeriod?: RetentionPeriod;
}
