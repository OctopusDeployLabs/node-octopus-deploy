# MaintenanceConfigurationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMaintenanceConfiguration**](MaintenanceConfigurationApi.md#getMaintenanceConfiguration) | **GET** /maintenanceconfiguration | 
[**updateMaintenanceConfiguration**](MaintenanceConfigurationApi.md#updateMaintenanceConfiguration) | **PUT** /maintenanceconfiguration | 


<a name="getMaintenanceConfiguration"></a>
# **getMaintenanceConfiguration**
> MaintenanceConfigurationResource getMaintenanceConfiguration()



    Gets information about the maintenance configuration in use by the Octopus Server.

### Parameters
This endpoint does not need any parameter.

### Return type

[**MaintenanceConfigurationResource**](../model/MaintenanceConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateMaintenanceConfiguration"></a>
# **updateMaintenanceConfiguration**
> MaintenanceConfigurationResource updateMaintenanceConfiguration()



    Updates the maintenance configuration used by the Octopus Server.

### Parameters
This endpoint does not need any parameter.

### Return type

[**MaintenanceConfigurationResource**](../model/MaintenanceConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

