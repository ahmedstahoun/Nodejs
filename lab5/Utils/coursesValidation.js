const Ajv = require("ajv");
const ajv = new Ajv();

const coursesSchema = {
  type: "object",
  properties: {
    id: { type: "number", pattern: "^d{2}" },
    name: { type: "string", pattern: "^[a-zA-Z]+$" },
  },
  required: ["id", "name"],
  additionalProperties: false,
};
module.exports = ajv.compile(coursesSchema);
