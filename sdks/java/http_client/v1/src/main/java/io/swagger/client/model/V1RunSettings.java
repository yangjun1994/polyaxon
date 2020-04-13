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
import io.swagger.client.model.V1RunSettingsCatalog;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * V1RunSettings
 */

public class V1RunSettings {
  @SerializedName("namespace")
  private String namespace = null;

  @SerializedName("agent")
  private V1RunSettingsCatalog agent = null;

  @SerializedName("queue")
  private V1RunSettingsCatalog queue = null;

  @SerializedName("artifacts_store")
  private V1RunSettingsCatalog artifactsStore = null;

  @SerializedName("connections")
  private List<V1RunSettingsCatalog> connections = null;

  public V1RunSettings namespace(String namespace) {
    this.namespace = namespace;
    return this;
  }

   /**
   * Get namespace
   * @return namespace
  **/
  @ApiModelProperty(value = "")
  public String getNamespace() {
    return namespace;
  }

  public void setNamespace(String namespace) {
    this.namespace = namespace;
  }

  public V1RunSettings agent(V1RunSettingsCatalog agent) {
    this.agent = agent;
    return this;
  }

   /**
   * Get agent
   * @return agent
  **/
  @ApiModelProperty(value = "")
  public V1RunSettingsCatalog getAgent() {
    return agent;
  }

  public void setAgent(V1RunSettingsCatalog agent) {
    this.agent = agent;
  }

  public V1RunSettings queue(V1RunSettingsCatalog queue) {
    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @ApiModelProperty(value = "")
  public V1RunSettingsCatalog getQueue() {
    return queue;
  }

  public void setQueue(V1RunSettingsCatalog queue) {
    this.queue = queue;
  }

  public V1RunSettings artifactsStore(V1RunSettingsCatalog artifactsStore) {
    this.artifactsStore = artifactsStore;
    return this;
  }

   /**
   * Get artifactsStore
   * @return artifactsStore
  **/
  @ApiModelProperty(value = "")
  public V1RunSettingsCatalog getArtifactsStore() {
    return artifactsStore;
  }

  public void setArtifactsStore(V1RunSettingsCatalog artifactsStore) {
    this.artifactsStore = artifactsStore;
  }

  public V1RunSettings connections(List<V1RunSettingsCatalog> connections) {
    this.connections = connections;
    return this;
  }

  public V1RunSettings addConnectionsItem(V1RunSettingsCatalog connectionsItem) {
    if (this.connections == null) {
      this.connections = new ArrayList<V1RunSettingsCatalog>();
    }
    this.connections.add(connectionsItem);
    return this;
  }

   /**
   * Get connections
   * @return connections
  **/
  @ApiModelProperty(value = "")
  public List<V1RunSettingsCatalog> getConnections() {
    return connections;
  }

  public void setConnections(List<V1RunSettingsCatalog> connections) {
    this.connections = connections;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RunSettings v1RunSettings = (V1RunSettings) o;
    return Objects.equals(this.namespace, v1RunSettings.namespace) &&
        Objects.equals(this.agent, v1RunSettings.agent) &&
        Objects.equals(this.queue, v1RunSettings.queue) &&
        Objects.equals(this.artifactsStore, v1RunSettings.artifactsStore) &&
        Objects.equals(this.connections, v1RunSettings.connections);
  }

  @Override
  public int hashCode() {
    return Objects.hash(namespace, agent, queue, artifactsStore, connections);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RunSettings {\n");
    
    sb.append("    namespace: ").append(toIndentedString(namespace)).append("\n");
    sb.append("    agent: ").append(toIndentedString(agent)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    artifactsStore: ").append(toIndentedString(artifactsStore)).append("\n");
    sb.append("    connections: ").append(toIndentedString(connections)).append("\n");
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

