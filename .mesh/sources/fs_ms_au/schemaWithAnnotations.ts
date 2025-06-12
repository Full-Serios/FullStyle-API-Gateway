// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "SchemaDefinition",
      "operationTypes": [
        {
          "kind": "OperationTypeDefinition",
          "operation": "query",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Query"
            }
          }
        },
        {
          "kind": "OperationTypeDefinition",
          "operation": "mutation",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Mutation"
            }
          }
        }
      ],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "transport"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "subgraph"
              },
              "value": {
                "kind": "StringValue",
                "value": "fs_ms_au"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "kind"
              },
              "value": {
                "kind": "StringValue",
                "value": "rest"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "location"
              },
              "value": {
                "kind": "StringValue",
                "value": "http://localhost:5000/"
              }
            }
          ]
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "statusCodeTypeName"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "subgraph"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "typeName"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "statusCode"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "repeatable": true,
      "locations": [
        {
          "kind": "Name",
          "value": "UNION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "httpOperation"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "subgraph"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "path"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "operationSpecificHeaders"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "httpMethod"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "HTTPMethod"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isBinary"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "requestBaseBody"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryParamArgMap"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryStringOptionsByParam"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "jsonApiFields"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryStringOptions"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "transport"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "subgraph"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kind"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "location"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "headers"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryStringOptions"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryParams"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              }
            }
          },
          "directives": []
        }
      ],
      "repeatable": true,
      "locations": [
        {
          "kind": "Name",
          "value": "SCHEMA"
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Query"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "dummy"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Mutation"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Autentica un usuario y retorna un token JWT",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "post_api_login"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "models_LoginRequest_Input"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "post_api_login_response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "subgraph"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "fs_ms_au"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/api/login"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "ListValue",
                    "values": [
                      {
                        "kind": "ListValue",
                        "values": [
                          {
                            "kind": "StringValue",
                            "value": "Content-Type"
                          },
                          {
                            "kind": "StringValue",
                            "value": "application/json"
                          }
                        ]
                      },
                      {
                        "kind": "ListValue",
                        "values": [
                          {
                            "kind": "StringValue",
                            "value": "Accept"
                          },
                          {
                            "kind": "StringValue",
                            "value": "application/json"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "POST"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Registra un nuevo manager en el sistema",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "post_api_manager_register"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "models_RegisterManagerRequest_Input"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "post_api_manager_register_response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "subgraph"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "fs_ms_au"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/api/manager_register"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "ListValue",
                    "values": [
                      {
                        "kind": "ListValue",
                        "values": [
                          {
                            "kind": "StringValue",
                            "value": "Content-Type"
                          },
                          {
                            "kind": "StringValue",
                            "value": "application/json"
                          }
                        ]
                      },
                      {
                        "kind": "ListValue",
                        "values": [
                          {
                            "kind": "StringValue",
                            "value": "Accept"
                          },
                          {
                            "kind": "StringValue",
                            "value": "application/json"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "POST"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Registra un nuevo usuario en el sistema",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "post_api_register"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "models_RegisterUserRequest_Input"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "post_api_register_response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "subgraph"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "fs_ms_au"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/api/register"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "ListValue",
                    "values": [
                      {
                        "kind": "ListValue",
                        "values": [
                          {
                            "kind": "StringValue",
                            "value": "Content-Type"
                          },
                          {
                            "kind": "StringValue",
                            "value": "application/json"
                          }
                        ]
                      },
                      {
                        "kind": "ListValue",
                        "values": [
                          {
                            "kind": "StringValue",
                            "value": "Accept"
                          },
                          {
                            "kind": "StringValue",
                            "value": "application/json"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "POST"
                  }
                }
              ]
            }
          ]
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "UnionTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "post_api_login_response"
      },
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "statusCodeTypeName"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "subgraph"
              },
              "value": {
                "kind": "StringValue",
                "value": "fs_ms_au"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "statusCode"
              },
              "value": {
                "kind": "StringValue",
                "value": "200"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "typeName"
              },
              "value": {
                "kind": "StringValue",
                "value": "models_LoginResponse"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "statusCodeTypeName"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "subgraph"
              },
              "value": {
                "kind": "StringValue",
                "value": "fs_ms_au"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "statusCode"
              },
              "value": {
                "kind": "StringValue",
                "value": "401"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "typeName"
              },
              "value": {
                "kind": "StringValue",
                "value": "models_ErrorResponse"
              }
            }
          ]
        }
      ],
      "types": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "models_LoginResponse"
          }
        },
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "models_ErrorResponse"
          }
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "models_LoginResponse"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "message"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "token"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "user"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "models_UserResponse"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "models_UserResponse"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "EmailAddress"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "EmailAddress"
      },
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "specifiedBy"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "value": {
                "kind": "StringValue",
                "value": "https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address"
              }
            }
          ]
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "models_ErrorResponse"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "error"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Credenciales de acceso",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "models_LoginRequest_Input"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "EmailAddress"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "password"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "UnionTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "post_api_manager_register_response"
      },
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "statusCodeTypeName"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "subgraph"
              },
              "value": {
                "kind": "StringValue",
                "value": "fs_ms_au"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "statusCode"
              },
              "value": {
                "kind": "StringValue",
                "value": "200"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "typeName"
              },
              "value": {
                "kind": "StringValue",
                "value": "models_RegisterUserResponse"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "statusCodeTypeName"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "subgraph"
              },
              "value": {
                "kind": "StringValue",
                "value": "fs_ms_au"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "statusCode"
              },
              "value": {
                "kind": "StringValue",
                "value": "400"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "typeName"
              },
              "value": {
                "kind": "StringValue",
                "value": "models_ErrorResponse"
              }
            }
          ]
        }
      ],
      "types": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "models_RegisterUserResponse"
          }
        },
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "models_ErrorResponse"
          }
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "models_RegisterUserResponse"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "message"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "user"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "models_UserResponse"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Información del manager",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "models_RegisterManagerRequest_Input"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "accounttype"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bankaccount"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bankentity"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "EmailAddress"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "password"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "subscriptionactive"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "subscriptionfinishdate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Date"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "subscriptionstartdate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Date"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "subscriptiontype"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Represents date values",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Date"
      },
      "directives": []
    },
    {
      "kind": "UnionTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "post_api_register_response"
      },
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "statusCodeTypeName"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "subgraph"
              },
              "value": {
                "kind": "StringValue",
                "value": "fs_ms_au"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "statusCode"
              },
              "value": {
                "kind": "StringValue",
                "value": "200"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "typeName"
              },
              "value": {
                "kind": "StringValue",
                "value": "models_RegisterUserResponse"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "statusCodeTypeName"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "subgraph"
              },
              "value": {
                "kind": "StringValue",
                "value": "fs_ms_au"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "statusCode"
              },
              "value": {
                "kind": "StringValue",
                "value": "400"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "typeName"
              },
              "value": {
                "kind": "StringValue",
                "value": "models_ErrorResponse"
              }
            }
          ]
        }
      ],
      "types": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "models_RegisterUserResponse"
          }
        },
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "models_ErrorResponse"
          }
        }
      ]
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Información del usuario",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "models_RegisterUserRequest_Input"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "EmailAddress"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "password"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HTTPMethod"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GET"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "HEAD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "POST"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PUT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "DELETE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CONNECT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "OPTIONS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TRACE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PATCH"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ObjMap"
      },
      "directives": []
    }
  ]
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true
});