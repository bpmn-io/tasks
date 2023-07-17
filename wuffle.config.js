/**
 * This defines board specific configuration.
 *
 * ### Name
 *
 * The name of your board, displayed in the board header.
 *
 *
 * ### Columns
 *
 * Valid fields for columns are
 *
 *  * name       - unique name
 *  * label      - label, if present on a GitHub issue column will be set
 *  * closed     - if the column issues must be closed
 *  * sorting    - true if column cards should be sorted
 *                 incrementally based on links
 *  * states     - a list of board states to map to this column
 *
 * The default column is the column that holds open issues without
 * any label constraints (Inbox in the example below).
 *
 */
module.exports = {
  "name": "bpmn-io/tasks",
  "columns": [
    {
      "name": "Inbox",
      "label": null,
      "sorting": true,
      "collapsed": true
    },
    {
      "name": "Backlog",
      "label": "backlog",
      "sorting": true
    },
    {
      "name": "Ready",
      "label": "ready",
      "sorting": true
    },
    {
      "name": "In Progress",
      "label": "in progress",
      "sorting": true
    },
    {
      "name": "Needs Review",
      "label": "needs review",
      "sorting": true
    },
    {
      "name": "Fixed Upstream",
      "label": "fixed upstream"
    },
    {
      "name": "Done",
      "label": null,
      "closed": true,
      "collapsed": true
    }
  ],
  "allowedOrgs": [
    "bpmn-io",
    "camunda",
    "camunda-cloud",
    "zeebe-io"
  ],
  "defaultFilter": "!repo:\"bpmn-io/form-js\" !repo:\"bpmn-io/form-js-examples\" !repo:\"bpmn-io/react-form-js\" !repo:\"camunda/form-linting\" !repo:\"camunda/form-playground\""
};
