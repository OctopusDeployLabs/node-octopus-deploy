# VariablesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVariableNamesList**](VariablesApi.md#getVariableNamesList) | **GET** /variables/names | 
[**getVariableNamesListSpaces**](VariablesApi.md#getVariableNamesListSpaces) | **GET** /{baseSpaceId}/variables/names | 
[**getVariablePreviewList**](VariablesApi.md#getVariablePreviewList) | **GET** /variables/preview | 
[**getVariablePreviewListSpaces**](VariablesApi.md#getVariablePreviewListSpaces) | **GET** /{baseSpaceId}/variables/preview | 
[**getVariableSetById**](VariablesApi.md#getVariableSetById) | **GET** /variables/{id} | Get a VariableSetResource by ID
[**getVariableSetByIdSpaces**](VariablesApi.md#getVariableSetByIdSpaces) | **GET** /{baseSpaceId}/variables/{id} | Get a VariableSetResource by ID
[**listAllVariableSets**](VariablesApi.md#listAllVariableSets) | **GET** /variables/all | Get a list of VariableSetResources
[**listAllVariableSetsSpaces**](VariablesApi.md#listAllVariableSetsSpaces) | **GET** /{baseSpaceId}/variables/all | Get a list of VariableSetResources
[**updateVariableSet**](VariablesApi.md#updateVariableSet) | **PUT** /variables/{id} | 
[**updateVariableSetSpaces**](VariablesApi.md#updateVariableSetSpaces) | **PUT** /{baseSpaceId}/variables/{id} | 


<a name="getVariableNamesList"></a>
# **getVariableNamesList**
> getVariableNamesList()



    List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded. 

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getVariableNamesListSpaces"></a>
# **getVariableNamesListSpaces**
> getVariableNamesListSpaces(baseSpaceId)



    List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getVariablePreviewList"></a>
# **getVariablePreviewList**
> VariableSetResource getVariablePreviewList()



    List the evaluated variables for a deployment. 

### Parameters
This endpoint does not need any parameter.

### Return type

[**VariableSetResource**](../model/VariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVariablePreviewListSpaces"></a>
# **getVariablePreviewListSpaces**
> VariableSetResource getVariablePreviewListSpaces(baseSpaceId)



    List the evaluated variables for a deployment. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**VariableSetResource**](../model/VariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVariableSetById"></a>
# **getVariableSetById**
> VariableSetResource getVariableSetById(id)

Get a VariableSetResource by ID

    Gets a variable set by Id.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the VariableSetResource to load | [default to null]

### Return type

[**VariableSetResource**](../model/VariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVariableSetByIdSpaces"></a>
# **getVariableSetByIdSpaces**
> VariableSetResource getVariableSetByIdSpaces(baseSpaceId, id)

Get a VariableSetResource by ID

    Gets a variable set by Id.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the VariableSetResource to load | [default to null]

### Return type

[**VariableSetResource**](../model/VariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllVariableSets"></a>
# **listAllVariableSets**
> List listAllVariableSets()

Get a list of VariableSetResources

    Lists all the variable sets in the supplied Octopus Deploy Space.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/VariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllVariableSetsSpaces"></a>
# **listAllVariableSetsSpaces**
> List listAllVariableSetsSpaces(baseSpaceId)

Get a list of VariableSetResources

    Lists all the variable sets in the supplied Octopus Deploy Space.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/VariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateVariableSet"></a>
# **updateVariableSet**
> VariableSetResource updateVariableSet(id)



    Updates a variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**VariableSetResource**](../model/VariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateVariableSetSpaces"></a>
# **updateVariableSetSpaces**
> VariableSetResource updateVariableSetSpaces(baseSpaceId, id)



    Updates a variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**VariableSetResource**](../model/VariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

