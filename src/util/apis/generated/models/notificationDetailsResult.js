/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NotificationDetailsResult class.
 * @constructor
 * Notification statistics
 *
 * @member {string} notificationId Notification id.
 * 
 * @member {date} [sendTime] Notification send time
 * 
 * @member {number} [pnsSendFailure] Number of the notifications failed to
 * send to the push provider.
 * 
 * @member {number} [pnsSendSuccess] Number of the notifications successfully
 * sent to push the provider.
 * 
 * @member {string} state State of the notification. Possible values include:
 * 'Cancelled', 'Completed', 'Enqueued', 'Processing', 'Unknown'
 * 
 */
function NotificationDetailsResult() {
  NotificationDetailsResult['super_'].call(this);
}

util.inherits(NotificationDetailsResult, models['NotificationDefinition']);

/**
 * Defines the metadata of NotificationDetailsResult
 *
 * @returns {object} metadata of NotificationDetailsResult
 *
 */
NotificationDetailsResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NotificationDetailsResult',
    type: {
      name: 'Composite',
      className: 'NotificationDetailsResult',
      modelProperties: {
        notificationTarget: {
          required: false,
          serializedName: 'notification_target',
          type: {
            name: 'Composite',
            polymorphicDiscriminator: 'type',
            uberParent: 'NotificationTarget',
            className: 'NotificationTarget'
          }
        },
        notificationContent: {
          required: true,
          serializedName: 'notification_content',
          type: {
            name: 'Composite',
            className: 'NotificationContent'
          }
        },
        notificationId: {
          required: true,
          serializedName: 'notification_id',
          type: {
            name: 'String'
          }
        },
        sendTime: {
          required: false,
          serializedName: 'send_time',
          type: {
            name: 'DateTime'
          }
        },
        pnsSendFailure: {
          required: false,
          serializedName: 'pns_send_failure',
          type: {
            name: 'Number'
          }
        },
        pnsSendSuccess: {
          required: false,
          serializedName: 'pns_send_success',
          type: {
            name: 'Number'
          }
        },
        state: {
          required: true,
          serializedName: 'state',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NotificationDetailsResult;