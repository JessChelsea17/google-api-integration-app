"use strict";
/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var apirequest_1 = require("../../lib/apirequest");
/**
 * Genomics API
 *
 * Upload, process, query, and search Genomics data in the cloud.
 *
 * @example
 * const google = require('googleapis');
 * const genomics = google.genomics('v2alpha1');
 *
 * @namespace genomics
 * @type {Function}
 * @version v2alpha1
 * @variation v2alpha1
 * @param {object=} options Options for Genomics
 */
function Genomics(options) {
    var self = this;
    self._options = options || {};
    self.pipelines = {
        /**
         * genomics.pipelines.run
         * @desc Runs a pipeline.  **Note:** In order to use this method, the
         * Genomics Service Agent must have access to your project.  This is done
         * automatically when the Genomics API is first enabled, but if you delete
         * this permission, or if you have already enabled the Genomics API prior to
         * the launch of the v2alpha1 API, you must disable and re-enable the API to
         * grant the Genomics Service Agent the required permissions.
         * @alias genomics.pipelines.run
         * @memberOf! genomics(v2alpha1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v2alpha1).RunPipelineRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        run: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2alpha1/pipelines:run')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.projects = {
        operations: {
            /**
             * genomics.projects.operations.cancel
             * @desc Starts asynchronous cancellation on a long-running operation. The
             * server makes a best effort to cancel the operation, but success is not
             * guaranteed. Clients may use Operations.GetOperation or
             * Operations.ListOperations to check whether the cancellation succeeded
             * or the operation completed despite cancellation.
             * @alias genomics.projects.operations.cancel
             * @memberOf! genomics(v2alpha1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the operation resource to be cancelled.
             * @param {genomics(v2alpha1).CancelOperationRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            cancel: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2alpha1/{name}:cancel')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            get: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2alpha1/{name}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2alpha1/{name}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.workers = {
        /**
         * genomics.workers.checkIn
         * @desc The worker uses this method to retrieve the assigned operation and
         * provide periodic status updates.
         * @alias genomics.workers.checkIn
         * @memberOf! genomics(v2alpha1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The worker id, assigned when it was created.
         * @param {genomics(v2alpha1).CheckInRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        checkIn: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2alpha1/workers/{id}:checkIn')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Genomics;
//# sourceMappingURL=v2alpha1.js.map