# MigrationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMigrationImport**](MigrationApi.md#createMigrationImport) | **POST** /migrations/import | 
[**createMigrationPartialExport**](MigrationApi.md#createMigrationPartialExport) | **POST** /migrations/partialexport | 


<a name="createMigrationImport"></a>
# **createMigrationImport**
> MigrationImportResource createMigrationImport()



    Returns HTTP OK (200) when an import migration has been queued.

### Parameters
This endpoint does not need any parameter.

### Return type

[**MigrationImportResource**](../model/MigrationImportResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createMigrationPartialExport"></a>
# **createMigrationPartialExport**
> MigrationPartialExportResource createMigrationPartialExport()



    Returns HTTP OK (200) when a partial-export migration has been queued.

### Parameters
This endpoint does not need any parameter.

### Return type

[**MigrationPartialExportResource**](../model/MigrationPartialExportResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

