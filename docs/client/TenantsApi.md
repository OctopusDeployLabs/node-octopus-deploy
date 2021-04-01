# TenantsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTenant**](TenantsApi.md#createTenant) | **POST** /tenants | Creates a new Tenant
[**createTenantLogo**](TenantsApi.md#createTenantLogo) | **POST** /tenants/{id}/logo | Sets the logo associated with the tenant.
[**createTenantLogoSpaces**](TenantsApi.md#createTenantLogoSpaces) | **POST** /{baseSpaceId}/tenants/{id}/logo | Sets the logo associated with the tenant.
[**createTenantSpaces**](TenantsApi.md#createTenantSpaces) | **POST** /{baseSpaceId}/tenants | Creates a new Tenant
[**createTenantVariables**](TenantsApi.md#createTenantVariables) | **POST** /tenants/{id}/variables | Creates the variables associated with the tenant.
[**createTenantVariablesSpaces**](TenantsApi.md#createTenantVariablesSpaces) | **POST** /{baseSpaceId}/tenants/{id}/variables | Creates the variables associated with the tenant.
[**deleteTenant**](TenantsApi.md#deleteTenant) | **DELETE** /tenants/{id} | Deletes an existing tenant.
[**deleteTenantSpaces**](TenantsApi.md#deleteTenantSpaces) | **DELETE** /{baseSpaceId}/tenants/{id} | Deletes an existing tenant.
[**getTenantById**](TenantsApi.md#getTenantById) | **GET** /tenants/{id} | Get a Tenant by ID
[**getTenantByIdSpaces**](TenantsApi.md#getTenantByIdSpaces) | **GET** /{baseSpaceId}/tenants/{id} | Get a Tenant by ID
[**getTenantLogo**](TenantsApi.md#getTenantLogo) | **GET** /tenants/{id}/logo | Gets the logo associated with the Tenant
[**getTenantLogoSpaces**](TenantsApi.md#getTenantLogoSpaces) | **GET** /{baseSpaceId}/tenants/{id}/logo | Gets the logo associated with the Tenant
[**getTenantVariablesMissing**](TenantsApi.md#getTenantVariablesMissing) | **GET** /tenants/variables-missing | Returns a list of tenants who are missing required variables
[**getTenantVariablesMissingSpaces**](TenantsApi.md#getTenantVariablesMissingSpaces) | **GET** /{baseSpaceId}/tenants/variables-missing | Returns a list of tenants who are missing required variables
[**getTenantsConfiguration**](TenantsApi.md#getTenantsConfiguration) | **GET** /tenants/status | Reports back the status of multi-tenancy
[**getTenantsConfigurationSpaces**](TenantsApi.md#getTenantsConfigurationSpaces) | **GET** /{baseSpaceId}/tenants/status | Reports back the status of multi-tenancy
[**getVariablesByTenantId**](TenantsApi.md#getVariablesByTenantId) | **GET** /tenants/{id}/variables | Gets variables associated with the provided tenant ID.
[**getVariablesByTenantIdSpaces**](TenantsApi.md#getVariablesByTenantIdSpaces) | **GET** /{baseSpaceId}/tenants/{id}/variables | Gets variables associated with the provided tenant ID.
[**listAllTenants**](TenantsApi.md#listAllTenants) | **GET** /tenants/all | Lists all tenants
[**listAllTenantsSpaces**](TenantsApi.md#listAllTenantsSpaces) | **GET** /{baseSpaceId}/tenants/all | Lists all tenants
[**listTenants**](TenantsApi.md#listTenants) | **GET** /tenants | Gets a list of tenants
[**listTenantsSpaces**](TenantsApi.md#listTenantsSpaces) | **GET** /{baseSpaceId}/tenants | Gets a list of tenants
[**testTenantTag**](TenantsApi.md#testTenantTag) | **GET** /tenants/tag-test | Checks tenants for matching tags
[**testTenantTagSpaces**](TenantsApi.md#testTenantTagSpaces) | **GET** /{baseSpaceId}/tenants/tag-test | Checks tenants for matching tags
[**updateTenant**](TenantsApi.md#updateTenant) | **PUT** /tenants/{id} | Modifies an existing Tenant
[**updateTenantLogo**](TenantsApi.md#updateTenantLogo) | **PUT** /tenants/{id}/logo | Updates the logo associated with the tenant.
[**updateTenantLogoSpaces**](TenantsApi.md#updateTenantLogoSpaces) | **PUT** /{baseSpaceId}/tenants/{id}/logo | Updates the logo associated with the tenant.
[**updateTenantSpaces**](TenantsApi.md#updateTenantSpaces) | **PUT** /{baseSpaceId}/tenants/{id} | Modifies an existing Tenant
[**updateTenantVariables**](TenantsApi.md#updateTenantVariables) | **PUT** /tenants/{id}/variables | Updates the variables associated with the tenant.
[**updateTenantVariablesSpaces**](TenantsApi.md#updateTenantVariablesSpaces) | **PUT** /{baseSpaceId}/tenants/{id}/variables | Updates the variables associated with the tenant.


<a name="createTenant"></a>
# **createTenant**
> TenantResource createTenant(clone, body)

Creates a new Tenant

    Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clone** | **String**| The ID of the Tenant to clone. Example: Tenants-101 | [optional] [default to null]
 **body** | [**TenantResource**](../model/TenantResource.md)|  | [optional]

### Return type

[**TenantResource**](../model/TenantResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTenantLogo"></a>
# **createTenantLogo**
> createTenantLogo(id)

Sets the logo associated with the tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to set the logo for | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createTenantLogoSpaces"></a>
# **createTenantLogoSpaces**
> createTenantLogoSpaces(id, baseSpaceId)

Sets the logo associated with the tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to set the logo for | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createTenantSpaces"></a>
# **createTenantSpaces**
> TenantResource createTenantSpaces(baseSpaceId, clone, body)

Creates a new Tenant

    Creates a new Tenant, optionally cloning an existing tenant if the clone query string parameter is provided.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **clone** | **String**| The ID of the Tenant to clone. Example: Tenants-101 | [optional] [default to null]
 **body** | [**TenantResource**](../model/TenantResource.md)|  | [optional]

### Return type

[**TenantResource**](../model/TenantResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTenantVariables"></a>
# **createTenantVariables**
> TenantVariableResource createTenantVariables(id, body)

Creates the variables associated with the tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to modify | [default to null]
 **body** | [**TenantVariableResource**](../model/TenantVariableResource.md)|  | [optional]

### Return type

[**TenantVariableResource**](../model/TenantVariableResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTenantVariablesSpaces"></a>
# **createTenantVariablesSpaces**
> TenantVariableResource createTenantVariablesSpaces(id, baseSpaceId, body)

Creates the variables associated with the tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to modify | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**TenantVariableResource**](../model/TenantVariableResource.md)|  | [optional]

### Return type

[**TenantVariableResource**](../model/TenantVariableResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteTenant"></a>
# **deleteTenant**
> deleteTenant(id)

Deletes an existing tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteTenantSpaces"></a>
# **deleteTenantSpaces**
> deleteTenantSpaces(id, baseSpaceId)

Deletes an existing tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to delete | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTenantById"></a>
# **getTenantById**
> TenantResource getTenantById(id)

Get a Tenant by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to load | [default to null]

### Return type

[**TenantResource**](../model/TenantResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTenantByIdSpaces"></a>
# **getTenantByIdSpaces**
> TenantResource getTenantByIdSpaces(id, baseSpaceId)

Get a Tenant by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**TenantResource**](../model/TenantResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTenantLogo"></a>
# **getTenantLogo**
> getTenantLogo(id)

Gets the logo associated with the Tenant

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to retrieve the logo for | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, image/jpeg, image/svg+xml

<a name="getTenantLogoSpaces"></a>
# **getTenantLogoSpaces**
> getTenantLogoSpaces(id, baseSpaceId)

Gets the logo associated with the Tenant

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to retrieve the logo for | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, image/jpeg, image/svg+xml

<a name="getTenantVariablesMissing"></a>
# **getTenantVariablesMissing**
> List getTenantVariablesMissing(tenantId, projectId, environmentId, includeDetails)

Returns a list of tenants who are missing required variables

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101 | [optional] [default to null]
 **projectId** | **String**| A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202 | [optional] [default to null]
 **environmentId** | **String**| An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202 | [optional] [default to null]
 **includeDetails** | **Boolean**| A switch to indicate whether missing variable details should be returned along with names | [optional] [default to null]

### Return type

[**List**](../model/TenantsMissingVariablesResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTenantVariablesMissingSpaces"></a>
# **getTenantVariablesMissingSpaces**
> List getTenantVariablesMissingSpaces(baseSpaceId, tenantId, projectId, environmentId, includeDetails)

Returns a list of tenants who are missing required variables

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **tenantId** | **String**| An ID for a Tenant. If supplied, will limit the result to variables missing for the Tenant identified by the ID. Example: Tenants-101 | [optional] [default to null]
 **projectId** | **String**| A Project ID, to limit the set of inspected Tenants to those connected to a particular Project. Example: Projects-202 | [optional] [default to null]
 **environmentId** | **String**| An Environment ID, to limit the set of inspected Tenants to those connected to a particular Environment. Example: Environments-202 | [optional] [default to null]
 **includeDetails** | **Boolean**| A switch to indicate whether missing variable details should be returned along with names | [optional] [default to null]

### Return type

[**List**](../model/TenantsMissingVariablesResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTenantsConfiguration"></a>
# **getTenantsConfiguration**
> MultiTenancyStatusResource getTenantsConfiguration()

Reports back the status of multi-tenancy

    If multi-tenancy is enabled, \&quot;Enabled\&quot; will be true, otherwise it will be false.

### Parameters
This endpoint does not need any parameter.

### Return type

[**MultiTenancyStatusResource**](../model/MultiTenancyStatusResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTenantsConfigurationSpaces"></a>
# **getTenantsConfigurationSpaces**
> MultiTenancyStatusResource getTenantsConfigurationSpaces(baseSpaceId)

Reports back the status of multi-tenancy

    If multi-tenancy is enabled, \&quot;Enabled\&quot; will be true, otherwise it will be false.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**MultiTenancyStatusResource**](../model/MultiTenancyStatusResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVariablesByTenantId"></a>
# **getVariablesByTenantId**
> TenantVariableResource getVariablesByTenantId(id)

Gets variables associated with the provided tenant ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the Tenant to retrieve variables for | [default to null]

### Return type

[**TenantVariableResource**](../model/TenantVariableResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVariablesByTenantIdSpaces"></a>
# **getVariablesByTenantIdSpaces**
> TenantVariableResource getVariablesByTenantIdSpaces(id, baseSpaceId)

Gets variables associated with the provided tenant ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the Tenant to retrieve variables for | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**TenantVariableResource**](../model/TenantVariableResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllTenants"></a>
# **listAllTenants**
> List listAllTenants(ids, projectId, tags, name, partialName)

Lists all tenants

    Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List**](../model/String.md)| A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301 | [optional] [default to null]
 **projectId** | **String**| A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101 | [optional] [default to null]
 **tags** | [**List**](../model/String.md)| A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable | [optional] [default to null]
 **name** | **String**| (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility. | [optional] [default to null]
 **partialName** | **String**| A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment | [optional] [default to null]

### Return type

[**List**](../model/TenantResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllTenantsSpaces"></a>
# **listAllTenantsSpaces**
> List listAllTenantsSpaces(baseSpaceId, ids, projectId, tags, name, partialName)

Lists all tenants

    Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **ids** | [**List**](../model/String.md)| A set of Tenant IDs to retrieve Tenants for. Example: Tenants-101,Tenants-201,Tenants-301 | [optional] [default to null]
 **projectId** | **String**| A Project ID, to limit the set of retrieved Tenants to those connected to a particular Project. Example: Projects-101 | [optional] [default to null]
 **tags** | [**List**](../model/String.md)| A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable | [optional] [default to null]
 **name** | **String**| (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility. | [optional] [default to null]
 **partialName** | **String**| A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment | [optional] [default to null]

### Return type

[**List**](../model/TenantResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listTenants"></a>
# **listTenants**
> TenantResourceCollection listTenants(projectId, ids, tags, name, partialName, clonedFromTenantId, skip, take)

Gets a list of tenants

    Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1 | [optional] [default to null]
 **ids** | [**List**](../model/String.md)| A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;] | [optional] [default to null]
 **tags** | [**List**](../model/String.md)| A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable | [optional] [default to null]
 **name** | **String**| (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility. | [optional] [default to null]
 **partialName** | **String**| A partial name, to limit the set of Tenants to those with a name that includes the partial name | [optional] [default to null]
 **clonedFromTenantId** | **String**| A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1 | [optional] [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**TenantResourceCollection**](../model/TenantResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listTenantsSpaces"></a>
# **listTenantsSpaces**
> TenantResourceCollection listTenantsSpaces(baseSpaceId, projectId, ids, tags, name, partialName, clonedFromTenantId, skip, take)

Gets a list of tenants

    Lists all of the tenants in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name, and returned 30 at a time.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **projectId** | **String**| A Project ID, to limit the set of Tenants to those connected to a particular Project. Example: Projects-1 | [optional] [default to null]
 **ids** | [**List**](../model/String.md)| A list of Tenant IDs, to limit the matching of Tenants to those with a particular ID. Example: [\&quot;Tenants-1\&quot;, \&quot;Tenants-2\&quot;] | [optional] [default to null]
 **tags** | [**List**](../model/String.md)| A set of Tenant Tags, to limit the set of retrieved Tenants to those which are tagged with the specific tags. Example: Alpha,Beta,Stable | [optional] [default to null]
 **name** | **String**| (Obsolete) A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment. Left for backwards compatibility. | [optional] [default to null]
 **partialName** | **String**| A partial name, to limit the set of Tenants to those with a name that includes the partial name | [optional] [default to null]
 **clonedFromTenantId** | **String**| A Tenant ID, to limit the included Tenants to those cloned from that Tenant. Example: Tenants-1 | [optional] [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**TenantResourceCollection**](../model/TenantResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="testTenantTag"></a>
# **testTenantTag**
> Map testTenantTag(tenantIds, tags)

Checks tenants for matching tags

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantIds** | [**List**](../model/String.md)| A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3 | [optional] [default to null]
 **tags** | [**List**](../model/String.md)| A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable | [optional] [default to null]

### Return type

[**Map**](../model/TagTestResult.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="testTenantTagSpaces"></a>
# **testTenantTagSpaces**
> Map testTenantTagSpaces(baseSpaceId, tenantIds, tags)

Checks tenants for matching tags

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **tenantIds** | [**List**](../model/String.md)| A list of Tenant IDs to limit the matching to, delimited by commas. Example: Tenants-1,Tenants-2,Tenants-3 | [optional] [default to null]
 **tags** | [**List**](../model/String.md)| A list of Tenant Tags to limit the matching to, delimited by commas. Example: Alpha,Beta,Stable | [optional] [default to null]

### Return type

[**Map**](../model/TagTestResult.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateTenant"></a>
# **updateTenant**
> TenantResource updateTenant(id, body)

Modifies an existing Tenant

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [default to null]
 **body** | [**TenantResource**](../model/TenantResource.md)|  | [optional]

### Return type

[**TenantResource**](../model/TenantResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateTenantLogo"></a>
# **updateTenantLogo**
> updateTenantLogo(id)

Updates the logo associated with the tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to update the logo for | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateTenantLogoSpaces"></a>
# **updateTenantLogoSpaces**
> updateTenantLogoSpaces(id, baseSpaceId)

Updates the logo associated with the tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant to update the logo for | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateTenantSpaces"></a>
# **updateTenantSpaces**
> TenantResource updateTenantSpaces(id, baseSpaceId, body)

Modifies an existing Tenant

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**TenantResource**](../model/TenantResource.md)|  | [optional]

### Return type

[**TenantResource**](../model/TenantResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateTenantVariables"></a>
# **updateTenantVariables**
> TenantVariableResource updateTenantVariables(id, body)

Updates the variables associated with the tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant modify | [default to null]
 **body** | [**TenantVariableResource**](../model/TenantVariableResource.md)|  | [optional]

### Return type

[**TenantVariableResource**](../model/TenantVariableResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateTenantVariablesSpaces"></a>
# **updateTenantVariablesSpaces**
> TenantVariableResource updateTenantVariablesSpaces(id, baseSpaceId, body)

Updates the variables associated with the tenant.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Tenant modify | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**TenantVariableResource**](../model/TenantVariableResource.md)|  | [optional]

### Return type

[**TenantVariableResource**](../model/TenantVariableResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

