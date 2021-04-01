// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface TagTestResult
 */
export interface TagTestResult {
  /**
   *
   * @type {boolean}
   * @memberof TagTestResult
   */
  IsMatched?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof TagTestResult
   */
  MissingTags?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof TagTestResult
   */
  Reason?: string;
}
