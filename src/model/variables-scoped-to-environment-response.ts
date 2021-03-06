// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface VariablesScopedToEnvironmentResponse
 */
export interface VariablesScopedToEnvironmentResponse {
  /**
   *
   * @type {boolean}
   * @memberof VariablesScopedToEnvironmentResponse
   */
  HasUnauthorizedLibraryVariableSetVariables?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof VariablesScopedToEnvironmentResponse
   */
  HasUnauthorizedProjectVariables?: boolean;
  /**
   *
   * @type {{ [key: string]: { [key: string]: number; }; }}
   * @memberof VariablesScopedToEnvironmentResponse
   */
  VariableMap?: { [key: string]: { [key: string]: number } };
}
