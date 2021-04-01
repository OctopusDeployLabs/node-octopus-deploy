# CloudTemplateApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCloudTemplateMetadata**](CloudTemplateApi.md#createCloudTemplateMetadata) | **POST** /cloudtemplate/{id}/metadata | 


<a name="createCloudTemplateMetadata"></a>
# **createCloudTemplateMetadata**
> CloudTemplateMetadata createCloudTemplateMetadata(id)



    Provides parameter metadata for a cloud (AWS etc) resource template

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**CloudTemplateMetadata**](../model/CloudTemplateMetadata.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

