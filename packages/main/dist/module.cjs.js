var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// packages/main/builds/module.js
__markAsModule(exports);
__export(exports, {
  default: () => module_default
});

// packages/main/src/index.js
function src_default(Alpine) {
  console.log(Alpine);
}

// packages/main/builds/module.js
var module_default = src_default;
