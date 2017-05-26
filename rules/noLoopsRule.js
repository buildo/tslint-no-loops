"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lint = require("tslint");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoLoopsWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
Rule.FAILURE_STRING = "loops are forbidden";
exports.Rule = Rule;
var NoLoopsWalker = (function (_super) {
    __extends(NoLoopsWalker, _super);
    function NoLoopsWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoLoopsWalker.prototype.visitWhileStatement = function (node) {
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        _super.prototype.visitWhileStatement.call(this, node);
    };
    NoLoopsWalker.prototype.visitDoWhileStatement = function (node) {
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        _super.prototype.visitWhileStatement.call(this, node);
    };
    NoLoopsWalker.prototype.visitForStatement = function (node) {
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        _super.prototype.visitForStatement.call(this, node);
    };
    NoLoopsWalker.prototype.visitForInStatement = function (node) {
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        _super.prototype.visitForInStatement.call(this, node);
    };
    NoLoopsWalker.prototype.visitForOfStatement = function (node) {
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        _super.prototype.visitForOfStatement.call(this, node);
    };
    return NoLoopsWalker;
}(Lint.RuleWalker));
