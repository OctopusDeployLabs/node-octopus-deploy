# ActionTemplatesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createActionTemplate**](ActionTemplatesApi.md#createActionTemplate) | **POST** /actiontemplates | Create a ActionTemplateResource
[**createActionTemplateActions**](ActionTemplatesApi.md#createActionTemplateActions) | **POST** /actiontemplates/{id}/actionsUpdate | 
[**createActionTemplateActionsSpaces**](ActionTemplatesApi.md#createActionTemplateActionsSpaces) | **POST** /{baseSpaceId}/actiontemplates/{id}/actionsUpdate | 
[**createActionTemplateLogo**](ActionTemplatesApi.md#createActionTemplateLogo) | **POST** /actiontemplates/{id}/logo | 
[**createActionTemplateLogoSpaces**](ActionTemplatesApi.md#createActionTemplateLogoSpaces) | **POST** /{baseSpaceId}/actiontemplates/{id}/logo | 
[**createActionTemplateSpaces**](ActionTemplatesApi.md#createActionTemplateSpaces) | **POST** /{baseSpaceId}/actiontemplates | Create a ActionTemplateResource
[**deleteActionTemplate**](ActionTemplatesApi.md#deleteActionTemplate) | **DELETE** /actiontemplates/{id} | Delete a ActionTemplateResource by ID
[**deleteActionTemplateSpaces**](ActionTemplatesApi.md#deleteActionTemplateSpaces) | **DELETE** /{baseSpaceId}/actiontemplates/{id} | Delete a ActionTemplateResource by ID
[**getActionTemplateById**](ActionTemplatesApi.md#getActionTemplateById) | **GET** /actiontemplates/{id} | Get an Action Template by ID
[**getActionTemplateByIdSpaces**](ActionTemplatesApi.md#getActionTemplateByIdSpaces) | **GET** /{baseSpaceId}/actiontemplates/{id} | Get an Action Template by ID
[**getActionTemplateCategories**](ActionTemplatesApi.md#getActionTemplateCategories) | **GET** /actiontemplates/categories | 
[**getActionTemplateCategoriesSpaces**](ActionTemplatesApi.md#getActionTemplateCategoriesSpaces) | **GET** /{baseSpaceId}/actiontemplates/categories | 
[**getActionTemplateLogo**](ActionTemplatesApi.md#getActionTemplateLogo) | **GET** /actiontemplates/{id}/logo | 
[**getActionTemplateLogoSpaces**](ActionTemplatesApi.md#getActionTemplateLogoSpaces) | **GET** /{baseSpaceId}/actiontemplates/{id}/logo | 
[**getActionTemplateLogoVersion**](ActionTemplatesApi.md#getActionTemplateLogoVersion) | **GET** /actiontemplates/{typeOrId}/versions/{version}/logo | 
[**getActionTemplateLogoVersionSpaces**](ActionTemplatesApi.md#getActionTemplateLogoVersionSpaces) | **GET** /{baseSpaceId}/actiontemplates/{typeOrId}/versions/{version}/logo | 
[**getActionTemplateUsage**](ActionTemplatesApi.md#getActionTemplateUsage) | **GET** /actiontemplates/{id}/usage | 
[**getActionTemplateUsageSpaces**](ActionTemplatesApi.md#getActionTemplateUsageSpaces) | **GET** /{baseSpaceId}/actiontemplates/{id}/usage | 
[**getActionTemplateVersion**](ActionTemplatesApi.md#getActionTemplateVersion) | **GET** /actiontemplates/{id}/versions | 
[**getActionTemplateVersion1**](ActionTemplatesApi.md#getActionTemplateVersion1) | **GET** /actiontemplates/{id}/versions/{version} | 
[**getActionTemplateVersionSpaces**](ActionTemplatesApi.md#getActionTemplateVersionSpaces) | **GET** /{baseSpaceId}/actiontemplates/{id}/versions | 
[**getActionTemplateVersionSpaces1**](ActionTemplatesApi.md#getActionTemplateVersionSpaces1) | **GET** /{baseSpaceId}/actiontemplates/{id}/versions/{version} | 
[**getActionTemplatesSearch**](ActionTemplatesApi.md#getActionTemplatesSearch) | **GET** /actiontemplates/search | 
[**getActionTemplatesSearchSpaces**](ActionTemplatesApi.md#getActionTemplatesSearchSpaces) | **GET** /{baseSpaceId}/actiontemplates/search | 
[**getAllActionTemplates**](ActionTemplatesApi.md#getAllActionTemplates) | **GET** /actiontemplates/all | Get all Action Templates
[**getAllActionTemplatesSpaces**](ActionTemplatesApi.md#getAllActionTemplatesSpaces) | **GET** /{baseSpaceId}/actiontemplates/all | Get all Action Templates
[**indexActionTemplates**](ActionTemplatesApi.md#indexActionTemplates) | **GET** /actiontemplates | Get a list of ActionTemplateResources
[**indexActionTemplatesSpaces**](ActionTemplatesApi.md#indexActionTemplatesSpaces) | **GET** /{baseSpaceId}/actiontemplates | Get a list of ActionTemplateResources
[**updateActionTemplate**](ActionTemplatesApi.md#updateActionTemplate) | **PUT** /actiontemplates/{id} | Modify a ActionTemplateResource by ID
[**updateActionTemplateLogo**](ActionTemplatesApi.md#updateActionTemplateLogo) | **PUT** /actiontemplates/{id}/logo | 
[**updateActionTemplateLogoSpaces**](ActionTemplatesApi.md#updateActionTemplateLogoSpaces) | **PUT** /{baseSpaceId}/actiontemplates/{id}/logo | 
[**updateActionTemplateSpaces**](ActionTemplatesApi.md#updateActionTemplateSpaces) | **PUT** /{baseSpaceId}/actiontemplates/{id} | Modify a ActionTemplateResource by ID


<a name="createActionTemplate"></a>
# **createActionTemplate**
> ActionTemplateResource createActionTemplate(body)

Create a ActionTemplateResource

    Creates a new action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ActionTemplateResource**](../model/ActionTemplateResource.md)| The ActionTemplateResource resource to create | [optional]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createActionTemplateActions"></a>
# **createActionTemplateActions**
> List createActionTemplateActions(id)



    Updates deployment actions to specific version of action template

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ActionUpdateResultResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createActionTemplateActionsSpaces"></a>
# **createActionTemplateActionsSpaces**
> List createActionTemplateActionsSpaces(baseSpaceId, id)



    Updates deployment actions to specific version of action template

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ActionUpdateResultResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createActionTemplateLogo"></a>
# **createActionTemplateLogo**
> createActionTemplateLogo(id)



    Updates the logo associated with the latest version of the action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createActionTemplateLogoSpaces"></a>
# **createActionTemplateLogoSpaces**
> createActionTemplateLogoSpaces(baseSpaceId, id)



    Updates the logo associated with the latest version of the action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createActionTemplateSpaces"></a>
# **createActionTemplateSpaces**
> ActionTemplateResource createActionTemplateSpaces(baseSpaceId, body)

Create a ActionTemplateResource

    Creates a new action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**ActionTemplateResource**](../model/ActionTemplateResource.md)| The ActionTemplateResource resource to create | [optional]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteActionTemplate"></a>
# **deleteActionTemplate**
> deleteActionTemplate(id)

Delete a ActionTemplateResource by ID

    Deletes an existing action template and all its versions.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ActionTemplateResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteActionTemplateSpaces"></a>
# **deleteActionTemplateSpaces**
> deleteActionTemplateSpaces(baseSpaceId, id)

Delete a ActionTemplateResource by ID

    Deletes an existing action template and all its versions.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ActionTemplateResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getActionTemplateById"></a>
# **getActionTemplateById**
> ActionTemplateResource getActionTemplateById(id)

Get an Action Template by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ActionTemplate to load | [default to null]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getActionTemplateByIdSpaces"></a>
# **getActionTemplateByIdSpaces**
> ActionTemplateResource getActionTemplateByIdSpaces(id, baseSpaceId)

Get an Action Template by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ActionTemplate to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getActionTemplateCategories"></a>
# **getActionTemplateCategories**
> List getActionTemplateCategories()



    Lists action template categories.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ActionTemplateCategoryResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getActionTemplateCategoriesSpaces"></a>
# **getActionTemplateCategoriesSpaces**
> List getActionTemplateCategoriesSpaces(baseSpaceId)



    Lists action template categories.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/ActionTemplateCategoryResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getActionTemplateLogo"></a>
# **getActionTemplateLogo**
> File getActionTemplateLogo(id)



    Gets the logo associated with the latest version of action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Action Type or ID of the action type logo | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

<a name="getActionTemplateLogoSpaces"></a>
# **getActionTemplateLogoSpaces**
> File getActionTemplateLogoSpaces(baseSpaceId, id)



    Gets the logo associated with the latest version of action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| Action Type or ID of the action type logo | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

<a name="getActionTemplateLogoVersion"></a>
# **getActionTemplateLogoVersion**
> File getActionTemplateLogoVersion(typeOrId, version)



    Gets the logo associated with specific version of the action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeOrId** | **String**| Action Type or ID of the action type logo | [default to null]
 **version** | **Integer**| Version of the action type logo | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

<a name="getActionTemplateLogoVersionSpaces"></a>
# **getActionTemplateLogoVersionSpaces**
> File getActionTemplateLogoVersionSpaces(baseSpaceId, typeOrId, version)



    Gets the logo associated with specific version of the action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **typeOrId** | **String**| Action Type or ID of the action type logo | [default to null]
 **version** | **Integer**| Version of the action type logo | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

<a name="getActionTemplateUsage"></a>
# **getActionTemplateUsage**
> List getActionTemplateUsage(id)



    Gets a list of all steps/deployment processes that use a given action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ActionTemplateUsageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getActionTemplateUsageSpaces"></a>
# **getActionTemplateUsageSpaces**
> List getActionTemplateUsageSpaces(baseSpaceId, id)



    Gets a list of all steps/deployment processes that use a given action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ActionTemplateUsageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getActionTemplateVersion"></a>
# **getActionTemplateVersion**
> getActionTemplateVersion(id)



    Gets specific version of action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getActionTemplateVersion1"></a>
# **getActionTemplateVersion1**
> getActionTemplateVersion1(id, version)



    Gets specific version of action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]
 **version** | **Integer**| Template version to get | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getActionTemplateVersionSpaces"></a>
# **getActionTemplateVersionSpaces**
> getActionTemplateVersionSpaces(baseSpaceId, id)



    Gets specific version of action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getActionTemplateVersionSpaces1"></a>
# **getActionTemplateVersionSpaces1**
> getActionTemplateVersionSpaces1(baseSpaceId, id, version)



    Gets specific version of action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]
 **version** | **Integer**| Template version to get | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getActionTemplatesSearch"></a>
# **getActionTemplatesSearch**
> List getActionTemplatesSearch()



    Lists all available action templates including built-in, custom and community contributed step templates.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ActionTemplateSearchResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getActionTemplatesSearchSpaces"></a>
# **getActionTemplatesSearchSpaces**
> List getActionTemplatesSearchSpaces(baseSpaceId)



    Lists all available action templates including built-in, custom and community contributed step templates.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/ActionTemplateSearchResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllActionTemplates"></a>
# **getAllActionTemplates**
> List getAllActionTemplates()

Get all Action Templates

    Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllActionTemplatesSpaces"></a>
# **getAllActionTemplatesSpaces**
> List getAllActionTemplatesSpaces(baseSpaceId)

Get all Action Templates

    Lists the all of the action templates in the supplied Octopus Deploy Space. The results will be sorted by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexActionTemplates"></a>
# **indexActionTemplates**
> ActionTemplateResourceCollection indexActionTemplates(skip, take)

Get a list of ActionTemplateResources

    Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ActionTemplateResourceCollection**](../model/ActionTemplateResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexActionTemplatesSpaces"></a>
# **indexActionTemplatesSpaces**
> ActionTemplateResourceCollection indexActionTemplatesSpaces(baseSpaceId, skip, take)

Get a list of ActionTemplateResources

    Lists all of the action templates in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ActionTemplateResourceCollection**](../model/ActionTemplateResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateActionTemplate"></a>
# **updateActionTemplate**
> ActionTemplateResource updateActionTemplate(id, body)

Modify a ActionTemplateResource by ID

    Modifies an existing action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ActionTemplateResource to modify | [default to null]
 **body** | [**ActionTemplateResource**](../model/ActionTemplateResource.md)| The ActionTemplateResource resource to create | [optional]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateActionTemplateLogo"></a>
# **updateActionTemplateLogo**
> updateActionTemplateLogo(id)



    Updates the logo associated with the latest version of the action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateActionTemplateLogoSpaces"></a>
# **updateActionTemplateLogoSpaces**
> updateActionTemplateLogoSpaces(baseSpaceId, id)



    Updates the logo associated with the latest version of the action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateActionTemplateSpaces"></a>
# **updateActionTemplateSpaces**
> ActionTemplateResource updateActionTemplateSpaces(baseSpaceId, id, body)

Modify a ActionTemplateResource by ID

    Modifies an existing action template.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ActionTemplateResource to modify | [default to null]
 **body** | [**ActionTemplateResource**](../model/ActionTemplateResource.md)| The ActionTemplateResource resource to create | [optional]

### Return type

[**ActionTemplateResource**](../model/ActionTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

