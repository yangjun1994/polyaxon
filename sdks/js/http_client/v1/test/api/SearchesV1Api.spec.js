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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.SearchesV1Api();
  });

  describe('(package)', function() {
    describe('SearchesV1Api', function() {
      describe('createSearch', function() {
        it('should call createSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for createSearch call and complete the assertions
          /*
          var owner = "owner_example";
          var body = new PolyaxonSdk.V1Search();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.disabled = false;
          body.deleted = false;
          body.spec = new PolyaxonSdk.V1SearchSpec();
          body.spec.query = "";
          body.spec.sort = "";
          body.spec.limit = 0;
          body.spec.groupby = "";
          body.spec.columns = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.createSearch(owner, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Search);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                  expect(data.spec.query).to.be.a('string');
              expect(data.spec.query).to.be("");
              expect(data.spec.sort).to.be.a('string');
              expect(data.spec.sort).to.be("");
              expect(data.spec.limit).to.be.a('number');
              expect(data.spec.limit).to.be(0);
              expect(data.spec.groupby).to.be.a('string');
              expect(data.spec.groupby).to.be("");
              expect(data.spec.columns).to.be.a('string');
              expect(data.spec.columns).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteSearch', function() {
        it('should call deleteSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteSearch call
          /*
          var owner = "owner_example";
          var uuid = "uuid_example";

          instance.deleteSearch(owner, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSearch', function() {
        it('should call getSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for getSearch call and complete the assertions
          /*
          var owner = "owner_example";
          var uuid = "uuid_example";

          instance.getSearch(owner, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Search);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                  expect(data.spec.query).to.be.a('string');
              expect(data.spec.query).to.be("");
              expect(data.spec.sort).to.be.a('string');
              expect(data.spec.sort).to.be("");
              expect(data.spec.limit).to.be.a('number');
              expect(data.spec.limit).to.be(0);
              expect(data.spec.groupby).to.be.a('string');
              expect(data.spec.groupby).to.be("");
              expect(data.spec.columns).to.be.a('string');
              expect(data.spec.columns).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listSearchNames', function() {
        it('should call listSearchNames successfully', function(done) {
          // TODO: uncomment, update parameter values for listSearchNames call and complete the assertions
          /*
          var owner = "owner_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.listSearchNames(owner, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListSearchesResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1Search);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.deleted).to.be.a('boolean');
                expect(data.deleted).to.be(false);
                expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                      expect(data.spec.query).to.be.a('string');
                  expect(data.spec.query).to.be("");
                  expect(data.spec.sort).to.be.a('string');
                  expect(data.spec.sort).to.be("");
                  expect(data.spec.limit).to.be.a('number');
                  expect(data.spec.limit).to.be(0);
                  expect(data.spec.groupby).to.be.a('string');
                  expect(data.spec.groupby).to.be("");
                  expect(data.spec.columns).to.be.a('string');
                  expect(data.spec.columns).to.be("");
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listSearches', function() {
        it('should call listSearches successfully', function(done) {
          // TODO: uncomment, update parameter values for listSearches call and complete the assertions
          /*
          var owner = "owner_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.listSearches(owner, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListSearchesResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1Search);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.deleted).to.be.a('boolean');
                expect(data.deleted).to.be(false);
                expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                      expect(data.spec.query).to.be.a('string');
                  expect(data.spec.query).to.be("");
                  expect(data.spec.sort).to.be.a('string');
                  expect(data.spec.sort).to.be("");
                  expect(data.spec.limit).to.be.a('number');
                  expect(data.spec.limit).to.be(0);
                  expect(data.spec.groupby).to.be.a('string');
                  expect(data.spec.groupby).to.be("");
                  expect(data.spec.columns).to.be.a('string');
                  expect(data.spec.columns).to.be("");
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchSearch', function() {
        it('should call patchSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for patchSearch call and complete the assertions
          /*
          var owner = "owner_example";
          var search_uuid = "search_uuid_example";
          var body = new PolyaxonSdk.V1Search();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.disabled = false;
          body.deleted = false;
          body.spec = new PolyaxonSdk.V1SearchSpec();
          body.spec.query = "";
          body.spec.sort = "";
          body.spec.limit = 0;
          body.spec.groupby = "";
          body.spec.columns = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.patchSearch(owner, search_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Search);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                  expect(data.spec.query).to.be.a('string');
              expect(data.spec.query).to.be("");
              expect(data.spec.sort).to.be.a('string');
              expect(data.spec.sort).to.be("");
              expect(data.spec.limit).to.be.a('number');
              expect(data.spec.limit).to.be(0);
              expect(data.spec.groupby).to.be.a('string');
              expect(data.spec.groupby).to.be("");
              expect(data.spec.columns).to.be.a('string');
              expect(data.spec.columns).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateSearch', function() {
        it('should call updateSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for updateSearch call and complete the assertions
          /*
          var owner = "owner_example";
          var search_uuid = "search_uuid_example";
          var body = new PolyaxonSdk.V1Search();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.disabled = false;
          body.deleted = false;
          body.spec = new PolyaxonSdk.V1SearchSpec();
          body.spec.query = "";
          body.spec.sort = "";
          body.spec.limit = 0;
          body.spec.groupby = "";
          body.spec.columns = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.updateSearch(owner, search_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Search);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                  expect(data.spec.query).to.be.a('string');
              expect(data.spec.query).to.be("");
              expect(data.spec.sort).to.be.a('string');
              expect(data.spec.sort).to.be("");
              expect(data.spec.limit).to.be.a('number');
              expect(data.spec.limit).to.be(0);
              expect(data.spec.groupby).to.be.a('string');
              expect(data.spec.groupby).to.be("");
              expect(data.spec.columns).to.be.a('string');
              expect(data.spec.columns).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
