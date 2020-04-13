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

  describe('(package)', function() {
    describe('V1Operation', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1Operation();
      });

      it('should create an instance of V1Operation', function() {
        // TODO: update the code to test V1Operation
        expect(instance).to.be.a(PolyaxonSdk.V1Operation);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property tag (base name: "tag")', function() {
        // TODO: update the code to test the property tag
        expect(instance).to.have.property('tag');
        // expect(instance.tag).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

      it('should have the property profile (base name: "profile")', function() {
        // TODO: update the code to test the property profile
        expect(instance).to.have.property('profile');
        // expect(instance.profile).to.be(expectedValueLiteral);
      });

      it('should have the property queue (base name: "queue")', function() {
        // TODO: update the code to test the property queue
        expect(instance).to.have.property('queue');
        // expect(instance.queue).to.be(expectedValueLiteral);
      });

      it('should have the property cache (base name: "cache")', function() {
        // TODO: update the code to test the property cache
        expect(instance).to.have.property('cache');
        // expect(instance.cache).to.be(expectedValueLiteral);
      });

      it('should have the property schedule (base name: "schedule")', function() {
        // TODO: update the code to test the property schedule
        expect(instance).to.have.property('schedule');
        // expect(instance.schedule).to.be(expectedValueLiteral);
      });

      it('should have the property parallel (base name: "parallel")', function() {
        // TODO: update the code to test the property parallel
        expect(instance).to.have.property('parallel');
        // expect(instance.parallel).to.be(expectedValueLiteral);
      });

      it('should have the property dependencies (base name: "dependencies")', function() {
        // TODO: update the code to test the property dependencies
        expect(instance).to.have.property('dependencies');
        // expect(instance.dependencies).to.be(expectedValueLiteral);
      });

      it('should have the property trigger (base name: "trigger")', function() {
        // TODO: update the code to test the property trigger
        expect(instance).to.have.property('trigger');
        // expect(instance.trigger).to.be(expectedValueLiteral);
      });

      it('should have the property conditions (base name: "conditions")', function() {
        // TODO: update the code to test the property conditions
        expect(instance).to.have.property('conditions');
        // expect(instance.conditions).to.be(expectedValueLiteral);
      });

      it('should have the property skip_on_upstream_skip (base name: "skip_on_upstream_skip")', function() {
        // TODO: update the code to test the property skip_on_upstream_skip
        expect(instance).to.have.property('skip_on_upstream_skip');
        // expect(instance.skip_on_upstream_skip).to.be(expectedValueLiteral);
      });

      it('should have the property termination (base name: "termination")', function() {
        // TODO: update the code to test the property termination
        expect(instance).to.have.property('termination');
        // expect(instance.termination).to.be(expectedValueLiteral);
      });

      it('should have the property plugins (base name: "plugins")', function() {
        // TODO: update the code to test the property plugins
        expect(instance).to.have.property('plugins');
        // expect(instance.plugins).to.be(expectedValueLiteral);
      });

      it('should have the property params (base name: "params")', function() {
        // TODO: update the code to test the property params
        expect(instance).to.have.property('params');
        // expect(instance.params).to.be(expectedValueLiteral);
      });

      it('should have the property run_patch (base name: "run_patch")', function() {
        // TODO: update the code to test the property run_patch
        expect(instance).to.have.property('run_patch');
        // expect(instance.run_patch).to.be(expectedValueLiteral);
      });

      it('should have the property dag_ref (base name: "dag_ref")', function() {
        // TODO: update the code to test the property dag_ref
        expect(instance).to.have.property('dag_ref');
        // expect(instance.dag_ref).to.be(expectedValueLiteral);
      });

      it('should have the property url_ref (base name: "url_ref")', function() {
        // TODO: update the code to test the property url_ref
        expect(instance).to.have.property('url_ref');
        // expect(instance.url_ref).to.be(expectedValueLiteral);
      });

      it('should have the property path_ref (base name: "path_ref")', function() {
        // TODO: update the code to test the property path_ref
        expect(instance).to.have.property('path_ref');
        // expect(instance.path_ref).to.be(expectedValueLiteral);
      });

      it('should have the property hub_ref (base name: "hub_ref")', function() {
        // TODO: update the code to test the property hub_ref
        expect(instance).to.have.property('hub_ref');
        // expect(instance.hub_ref).to.be(expectedValueLiteral);
      });

      it('should have the property component (base name: "component")', function() {
        // TODO: update the code to test the property component
        expect(instance).to.have.property('component');
        // expect(instance.component).to.be(expectedValueLiteral);
      });

    });
  });

}));
