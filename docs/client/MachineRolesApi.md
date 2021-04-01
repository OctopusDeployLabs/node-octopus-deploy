# MachineRolesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMachineRolesListAll**](MachineRolesApi.md#getMachineRolesListAll) | **GET** /machineroles/all | 
[**getMachineRolesListAllSpaces**](MachineRolesApi.md#getMachineRolesListAllSpaces) | **GET** /{baseSpaceId}/machineroles/all | 


<a name="getMachineRolesListAll"></a>
# **getMachineRolesListAll**
> List getMachineRolesListAll()



    Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMachineRolesListAllSpaces"></a>
# **getMachineRolesListAllSpaces**
> List getMachineRolesListAllSpaces(baseSpaceId)



    Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

