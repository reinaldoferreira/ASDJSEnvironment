export const schema = {
  "type": "object",
  "properties": {
    "animals": {
      "type": "array",
      "minItems": 3,
      "maxItems": 6,
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "species": {
            "type": "string",
            "faker": "name.findName"
          },
          "friendlyPoints": {
            "type": "number",
            "minimum": 0,
            "maximum": 100
          }
        },
        "required": ["name", "species", "friendlyPoints"]
      }
    }
  },
  "required": ["animals"]
}
