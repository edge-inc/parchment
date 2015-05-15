import ParchmentNode = require("../node/base/parchment")

interface Attribute {
  // static attrName: string;
  // static scope: Registry.Scope;

  add(node: ParchmentNode, value: any): void;
  remove(node: ParchmentNode): void;
  value(node: ParchmentNode): any;
}

export = Attribute;
