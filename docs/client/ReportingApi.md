# ReportingApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeploymentsByProjectReport**](ReportingApi.md#getDeploymentsByProjectReport) | **GET** /reporting/deployments-counted-by-week | 
[**getDeploymentsByProjectReportSpaces**](ReportingApi.md#getDeploymentsByProjectReportSpaces) | **GET** /{baseSpaceId}/reporting/deployments-counted-by-week | 
[**getDeploymentsXml**](ReportingApi.md#getDeploymentsXml) | **GET** /reporting/deployments/xml | 
[**getDeploymentsXmlSpaces**](ReportingApi.md#getDeploymentsXmlSpaces) | **GET** /{baseSpaceId}/reporting/deployments/xml | 


<a name="getDeploymentsByProjectReport"></a>
# **getDeploymentsByProjectReport**
> List getDeploymentsByProjectReport()



    Provides a report summarizing the weekly deployments per project over the last 6 months

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ReportDeploymentCountOverTimeResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentsByProjectReportSpaces"></a>
# **getDeploymentsByProjectReportSpaces**
> List getDeploymentsByProjectReportSpaces(baseSpaceId)



    Provides a report summarizing the weekly deployments per project over the last 6 months

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/ReportDeploymentCountOverTimeResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentsXml"></a>
# **getDeploymentsXml**
> getDeploymentsXml()



    Provides an XML report that contains all of the information about deployments

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getDeploymentsXmlSpaces"></a>
# **getDeploymentsXmlSpaces**
> getDeploymentsXmlSpaces(baseSpaceId)



    Provides an XML report that contains all of the information about deployments

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

