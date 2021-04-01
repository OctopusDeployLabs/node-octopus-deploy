# CommunityActionTemplatesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCommunityActionTemplateInstallation**](CommunityActionTemplatesApi.md#createCommunityActionTemplateInstallation) | **POST** /communityactiontemplates/{id}/installation | 
[**createCommunityActionTemplateInstallation1**](CommunityActionTemplatesApi.md#createCommunityActionTemplateInstallation1) | **POST** /communityactiontemplates/{id}/installation/{spaceId} | 
[**getActionTemplateBasedOnCommunityActionTemplate**](CommunityActionTemplatesApi.md#getActionTemplateBasedOnCommunityActionTemplate) | **GET** /communityactiontemplates/{id}/actiontemplate | 
[**getActionTemplateBasedOnCommunityActionTemplate1**](CommunityActionTemplatesApi.md#getActionTemplateBasedOnCommunityActionTemplate1) | **GET** /communityactiontemplates/{id}/actiontemplate/{spaceId} | 
[**getCommunityActionTemplateById**](CommunityActionTemplatesApi.md#getCommunityActionTemplateById) | **GET** /communityactiontemplates/{id} | Get a Community Action Template by ID
[**getCommunityActionTemplateLogo**](CommunityActionTemplatesApi.md#getCommunityActionTemplateLogo) | **GET** /communityactiontemplates/{id}/logo | 
[**indexCommunityActionTemplates**](CommunityActionTemplatesApi.md#indexCommunityActionTemplates) | **GET** /communityactiontemplates | Get a list of Community Action Templates
[**updateCommunityActionTemplateInstallationPut**](CommunityActionTemplatesApi.md#updateCommunityActionTemplateInstallationPut) | **PUT** /communityactiontemplates/{id}/installation | 
[**updateCommunityActionTemplateInstallationPut1**](CommunityActionTemplatesApi.md#updateCommunityActionTemplateInstallationPut1) | **PUT** /communityactiontemplates/{id}/installation/{spaceId} | 


<a name="createCommunityActionTemplateInstallation"></a>
# **createCommunityActionTemplateInstallation**
> ActionTemplateResource createCommunityActionTemplateInstallation(id)



    Installs community step template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createCommunityActionTemplateInstallation1"></a>
# **createCommunityActionTemplateInstallation1**
> ActionTemplateResource createCommunityActionTemplateInstallation1(id, spaceId)



    Installs community step template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]
 **spaceId** | **String**| ID of the space | [default to null]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getActionTemplateBasedOnCommunityActionTemplate"></a>
# **getActionTemplateBasedOnCommunityActionTemplate**
> ActionTemplateResource getActionTemplateBasedOnCommunityActionTemplate(id)



    Gets installed version of the template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getActionTemplateBasedOnCommunityActionTemplate1"></a>
# **getActionTemplateBasedOnCommunityActionTemplate1**
> ActionTemplateResource getActionTemplateBasedOnCommunityActionTemplate1(id, spaceId)



    Gets installed version of the template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]
 **spaceId** | **String**| ID of the space | [default to null]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCommunityActionTemplateById"></a>
# **getCommunityActionTemplateById**
> CommunityActionTemplateResource getCommunityActionTemplateById(id)

Get a Community Action Template by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the CommunityActionTemplate to load | [default to null]

### Return type

[**CommunityActionTemplateResource**](../model/CommunityActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCommunityActionTemplateLogo"></a>
# **getCommunityActionTemplateLogo**
> File getCommunityActionTemplateLogo(id)



    Gets the logo associated with the community step template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

<a name="indexCommunityActionTemplates"></a>
# **indexCommunityActionTemplates**
> CommunityActionTemplateResourceCollection indexCommunityActionTemplates(skip, take)

Get a list of Community Action Templates

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**CommunityActionTemplateResourceCollection**](../model/CommunityActionTemplateResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateCommunityActionTemplateInstallationPut"></a>
# **updateCommunityActionTemplateInstallationPut**
> ActionTemplateResource updateCommunityActionTemplateInstallationPut(id)



    Updates installed community step template to the latest version.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateCommunityActionTemplateInstallationPut1"></a>
# **updateCommunityActionTemplateInstallationPut1**
> ActionTemplateResource updateCommunityActionTemplateInstallationPut1(id, spaceId)



    Updates installed community step template to the latest version.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]
 **spaceId** | **String**| ID of the space | [default to null]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

