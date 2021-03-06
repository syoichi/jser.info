// LICENSE : MIT
"use strict";
// 最新のJSONのみを対象に技術用語のスペルチェックを動かす
var lintTextContent = require("./lint-text-content");
var latestDataPath = require("./lib/data-manager").getLatestData(new Date());
var exitCode = lintTextContent(latestDataPath);
process.exit(exitCode);
