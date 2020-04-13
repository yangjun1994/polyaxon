// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.75
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.ArtifactsStoresV1Api = factory(root.PolyaxonSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ArtifactsStoresV1 service.
   * @module api/ArtifactsStoresV1Api
   * @version 1.0.75
   */

  /**
   * Constructs a new ArtifactsStoresV1Api. 
   * @alias module:api/ArtifactsStoresV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the uploadArtifact operation.
     * @callback module:api/ArtifactsStoresV1Api~uploadArtifactCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload artifact to a store
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Unique integer identifier of the entity
     * @param {File} uploadfile The file to upload.
     * @param {Object} opts Optional parameters
     * @param {String} opts.path File path query params.
     * @param {Boolean} opts.overwrite File path query params.
     * @param {module:api/ArtifactsStoresV1Api~uploadArtifactCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.uploadArtifact = function(owner, uuid, uploadfile, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling uploadArtifact");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling uploadArtifact");
      }

      // verify the required parameter 'uploadfile' is set
      if (uploadfile === undefined || uploadfile === null) {
        throw new Error("Missing the required parameter 'uploadfile' when calling uploadArtifact");
      }


      var pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      var queryParams = {
        'path': opts['path'],
        'overwrite': opts['overwrite'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'uploadfile': uploadfile
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/catalogs/{owner}/artifacts/{uuid}/upload', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
