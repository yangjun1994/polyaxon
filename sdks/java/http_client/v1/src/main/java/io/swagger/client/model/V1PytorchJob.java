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
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.V1CleanPodPolicy;
import io.swagger.client.model.V1KFReplica;
import java.io.IOException;

/**
 * V1PytorchJob
 */

public class V1PytorchJob {
  @SerializedName("kind")
  private String kind = "pytorch_job";

  @SerializedName("cleanPodPolicy")
  private V1CleanPodPolicy cleanPodPolicy = null;

  @SerializedName("master")
  private V1KFReplica master = null;

  @SerializedName("worker")
  private V1KFReplica worker = null;

  public V1PytorchJob kind(String kind) {
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @ApiModelProperty(value = "")
  public String getKind() {
    return kind;
  }

  public void setKind(String kind) {
    this.kind = kind;
  }

  public V1PytorchJob cleanPodPolicy(V1CleanPodPolicy cleanPodPolicy) {
    this.cleanPodPolicy = cleanPodPolicy;
    return this;
  }

   /**
   * Get cleanPodPolicy
   * @return cleanPodPolicy
  **/
  @ApiModelProperty(value = "")
  public V1CleanPodPolicy getCleanPodPolicy() {
    return cleanPodPolicy;
  }

  public void setCleanPodPolicy(V1CleanPodPolicy cleanPodPolicy) {
    this.cleanPodPolicy = cleanPodPolicy;
  }

  public V1PytorchJob master(V1KFReplica master) {
    this.master = master;
    return this;
  }

   /**
   * Get master
   * @return master
  **/
  @ApiModelProperty(value = "")
  public V1KFReplica getMaster() {
    return master;
  }

  public void setMaster(V1KFReplica master) {
    this.master = master;
  }

  public V1PytorchJob worker(V1KFReplica worker) {
    this.worker = worker;
    return this;
  }

   /**
   * Get worker
   * @return worker
  **/
  @ApiModelProperty(value = "")
  public V1KFReplica getWorker() {
    return worker;
  }

  public void setWorker(V1KFReplica worker) {
    this.worker = worker;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1PytorchJob v1PytorchJob = (V1PytorchJob) o;
    return Objects.equals(this.kind, v1PytorchJob.kind) &&
        Objects.equals(this.cleanPodPolicy, v1PytorchJob.cleanPodPolicy) &&
        Objects.equals(this.master, v1PytorchJob.master) &&
        Objects.equals(this.worker, v1PytorchJob.worker);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, cleanPodPolicy, master, worker);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1PytorchJob {\n");
    
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    cleanPodPolicy: ").append(toIndentedString(cleanPodPolicy)).append("\n");
    sb.append("    master: ").append(toIndentedString(master)).append("\n");
    sb.append("    worker: ").append(toIndentedString(worker)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

