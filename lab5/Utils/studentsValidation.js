const Ajv = require("ajv");
const ajv = new Ajv();

const studentSchema = {
  type: "object",
  properties: {
    id: { type: "number", pattern: "^d" },
    name: { type: "string", pattern: "^[a-zA-Z]+$" },
    age: { type: "number", minimum: 20, maximum: 28 },
    courses: { type: "string", enum: ["SD", "OS", "SWA", "AI"] },
  },
  required: ["id", "name", "age", "courses"],
  additionalProperties: false,
};

module.exports = ajv.compile(studentSchema);
