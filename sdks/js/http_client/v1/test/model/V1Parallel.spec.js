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
    describe('V1Parallel', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1Parallel();
      });

      it('should create an instance of V1Parallel', function() {
        // TODO: update the code to test V1Parallel
        expect(instance).to.be.a(PolyaxonSdk.V1Parallel);
      });

      it('should have the property random (base name: "random")', function() {
        // TODO: update the code to test the property random
        expect(instance).to.have.property('random');
        // expect(instance.random).to.be(expectedValueLiteral);
      });

      it('should have the property grid (base name: "grid")', function() {
        // TODO: update the code to test the property grid
        expect(instance).to.have.property('grid');
        // expect(instance.grid).to.be(expectedValueLiteral);
      });

      it('should have the property hyperband (base name: "hyperband")', function() {
        // TODO: update the code to test the property hyperband
        expect(instance).to.have.property('hyperband');
        // expect(instance.hyperband).to.be(expectedValueLiteral);
      });

      it('should have the property bayes (base name: "bayes")', function() {
        // TODO: update the code to test the property bayes
        expect(instance).to.have.property('bayes');
        // expect(instance.bayes).to.be(expectedValueLiteral);
      });

      it('should have the property hyperopt (base name: "hyperopt")', function() {
        // TODO: update the code to test the property hyperopt
        expect(instance).to.have.property('hyperopt');
        // expect(instance.hyperopt).to.be(expectedValueLiteral);
      });

      it('should have the property iterative (base name: "iterative")', function() {
        // TODO: update the code to test the property iterative
        expect(instance).to.have.property('iterative');
        // expect(instance.iterative).to.be(expectedValueLiteral);
      });

      it('should have the property mapping (base name: "mapping")', function() {
        // TODO: update the code to test the property mapping
        expect(instance).to.have.property('mapping');
        // expect(instance.mapping).to.be(expectedValueLiteral);
      });

    });
  });

}));
