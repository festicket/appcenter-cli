/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ActiveCrashingAppDetailsAppsWithCrashesItem.
 */
class ActiveCrashingAppDetailsAppsWithCrashesItem {
  /**
   * Create a ActiveCrashingAppDetailsAppsWithCrashesItem.
   * @property {string} [appId] application identifier
   * @property {string} [appVersion] application version
   * @property {string} [crashGroupId] crash group identifier
   */
  constructor() {
  }

  /**
   * Defines the metadata of ActiveCrashingAppDetailsAppsWithCrashesItem
   *
   * @returns {object} metadata of ActiveCrashingAppDetailsAppsWithCrashesItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ActiveCrashingAppDetails_appsWithCrashesItem',
      type: {
        name: 'Composite',
        className: 'ActiveCrashingAppDetailsAppsWithCrashesItem',
        modelProperties: {
          appId: {
            required: false,
            serializedName: 'appId',
            type: {
              name: 'String'
            }
          },
          appVersion: {
            required: false,
            serializedName: 'appVersion',
            type: {
              name: 'String'
            }
          },
          crashGroupId: {
            required: false,
            serializedName: 'crashGroupId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ActiveCrashingAppDetailsAppsWithCrashesItem;