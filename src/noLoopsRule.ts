import * as ts from 'typescript';
import * as Lint from 'tslint';

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "loops are forbidden";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new NoLoopsWalker(sourceFile, this.getOptions()));
  }
}

class NoLoopsWalker extends Lint.RuleWalker {

  public visitWhileStatement(node: ts.WhileStatement) {
    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
    super.visitWhileStatement(node);
  }

  public visitDoWhileStatement(node: ts.WhileStatement) {
    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
    super.visitWhileStatement(node);
  }

  public visitForStatement(node: ts.ForStatement) {
    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
    super.visitForStatement(node);
  }

  public visitForInStatement(node: ts.ForInStatement) {
    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
    super.visitForInStatement(node);
  }

  public visitForOfStatement(node: ts.ForOfStatement) {
    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
    super.visitForOfStatement(node);
  }

}
