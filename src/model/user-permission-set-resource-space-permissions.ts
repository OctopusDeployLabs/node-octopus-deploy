// Octopus REST API v2021.2.1290

import { UserPermissionRestriction } from "./user-permission-restriction";

/**
 *
 * @export
 * @interface UserPermissionSetResourceSpacePermissions
 */
export interface UserPermissionSetResourceSpacePermissions {
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  AdministerSystem?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProjectEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProjectView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProjectCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProjectDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProcessView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProcessEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  VariableEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  VariableEditUnscoped?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  VariableView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  VariableViewUnscoped?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ReleaseCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ReleaseView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ReleaseEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ReleaseDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  DefectReport?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  DefectResolve?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  DeploymentCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  DeploymentDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  DeploymentView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  EnvironmentView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  EnvironmentCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  EnvironmentEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  EnvironmentDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  MachineCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  MachineEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  MachineView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  MachineDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ArtifactView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ArtifactCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ArtifactEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ArtifactDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  FeedView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  EventView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  LibraryVariableSetView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  LibraryVariableSetCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  LibraryVariableSetEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  LibraryVariableSetDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProjectGroupView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProjectGroupCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProjectGroupEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProjectGroupDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TeamCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TeamView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TeamEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TeamDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  UserView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  UserInvite?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  UserRoleView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  UserRoleEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TaskView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TaskCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TaskCancel?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TaskEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  InterruptionView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  InterruptionSubmit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  InterruptionViewSubmitResponsible?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  BuiltInFeedPush?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  BuiltInFeedAdminister?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  BuiltInFeedDownload?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ActionTemplateView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ActionTemplateCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ActionTemplateEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ActionTemplateDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  LifecycleCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  LifecycleView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  LifecycleEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  LifecycleDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  AccountView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  AccountEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  AccountCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  AccountDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TenantCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TenantEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TenantView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TenantDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TagSetCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TagSetEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TagSetDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  MachinePolicyCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  MachinePolicyView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  MachinePolicyEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  MachinePolicyDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProxyCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProxyView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProxyEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ProxyDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  SubscriptionCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  SubscriptionView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  SubscriptionEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  SubscriptionDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TriggerCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TriggerView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TriggerEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  TriggerDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  CertificateView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  CertificateCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  CertificateEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  CertificateDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  CertificateExportPrivateKey?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  UserEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  ConfigureServer?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  FeedEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  WorkerView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  WorkerEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  SpaceEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  SpaceView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  SpaceDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  SpaceCreate?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  BuildInformationPush?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  BuildInformationAdminister?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  RunbookView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  RunbookEdit?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  RunbookRunView?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  RunbookRunDelete?: Array<UserPermissionRestriction>;
  /**
   *
   * @type {Array<UserPermissionRestriction>}
   * @memberof UserPermissionSetResourceSpacePermissions
   */
  RunbookRunCreate?: Array<UserPermissionRestriction>;
}
