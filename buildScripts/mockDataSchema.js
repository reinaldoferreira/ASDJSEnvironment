export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 6,
      "items": {
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "age": {
            "type": "number",
            "minimum": 0,
            "maximum": 80
          }
        },
        "required": ["firstName", "lastName", "age"]
      }
    }
  },
  "required": ["users"]
}
