// Octopus REST API v2021.2.1387

import { DashboardRenderMode } from "./dashboard-render-mode";

/**
 *
 * @export
 * @interface PerformanceConfigurationResource
 */
export interface PerformanceConfigurationResource {
  /**
   *
   * @type {DashboardRenderMode}
   * @memberof PerformanceConfigurationResource
   */
  DefaultDashboardRenderMode?: DashboardRenderMode;
  /**
   *
   * @type {string}
   * @memberof PerformanceConfigurationResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof PerformanceConfigurationResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof PerformanceConfigurationResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PerformanceConfigurationResource
   */
  Links?: { [key: string]: string };
}
