# DeploymentSettingsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeploymentSettingsById**](DeploymentSettingsApi.md#getDeploymentSettingsById) | **GET** /deploymentsettings/{id} | Gets deployment settings by ID.
[**getDeploymentSettingsByIdSpaces**](DeploymentSettingsApi.md#getDeploymentSettingsByIdSpaces) | **GET** /{baseSpaceId}/deploymentsettings/{id} | Gets deployment settings by ID.
[**updateDeploymentSettingsById**](DeploymentSettingsApi.md#updateDeploymentSettingsById) | **PUT** /deploymentsettings/{id} | Modifies deployment settings
[**updateDeploymentSettingsByIdSpaces**](DeploymentSettingsApi.md#updateDeploymentSettingsByIdSpaces) | **PUT** /{baseSpaceId}/deploymentsettings/{id} | Modifies deployment settings


<a name="getDeploymentSettingsById"></a>
# **getDeploymentSettingsById**
> DeploymentSettingsResource getDeploymentSettingsById(id)

Gets deployment settings by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the DeploymentSettings to load | [default to null]

### Return type

[**DeploymentSettingsResource**](../model/DeploymentSettingsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentSettingsByIdSpaces"></a>
# **getDeploymentSettingsByIdSpaces**
> DeploymentSettingsResource getDeploymentSettingsByIdSpaces(id, baseSpaceId)

Gets deployment settings by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the DeploymentSettings to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**DeploymentSettingsResource**](../model/DeploymentSettingsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateDeploymentSettingsById"></a>
# **updateDeploymentSettingsById**
> DeploymentSettingsResource updateDeploymentSettingsById(id, body)

Modifies deployment settings

    Modifies deployment settings for a project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60; | [default to null]
 **body** | [**DeploymentSettingsResource**](../model/DeploymentSettingsResource.md)|  |

### Return type

[**DeploymentSettingsResource**](../model/DeploymentSettingsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateDeploymentSettingsByIdSpaces"></a>
# **updateDeploymentSettingsByIdSpaces**
> DeploymentSettingsResource updateDeploymentSettingsByIdSpaces(id, baseSpaceId, body)

Modifies deployment settings

    Modifies deployment settings for a project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the deployment settings to update. Example &#x60;deploymentsettings-Projects-1&#x60; | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**DeploymentSettingsResource**](../model/DeploymentSettingsResource.md)|  |

### Return type

[**DeploymentSettingsResource**](../model/DeploymentSettingsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

