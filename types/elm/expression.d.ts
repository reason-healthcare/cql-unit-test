/***********
generated template classes for ./expression.xsd 9/17/2022, 1:57:18 PM
***********/





export class Expression {
    public constructor(props?: Expression) {
        this["@class"] = ".Expression";
    }
}

export class Element {
    public annotation?: AnyType[];
    public resultTypeSpecifier?: TypeSpecifier;
    public $localId: string;
    public $locator: string;
    public $resultTypeName: QName;

    public constructor(props?: Element) {
        this["@class"] = ".Element";


        if (props) {

        	this.annotation = props.annotation?.map(o => o);
        	this.resultTypeSpecifier = (props.resultTypeSpecifier) ? new TypeSpecifier(props.resultTypeSpecifier): undefined;
        	this.$localId = props.$localId;
        	this.$locator = props.$locator;
        	this.$resultTypeName = props.$resultTypeName;
        }
    }
}

export class TypeSpecifier {
    public constructor(props?: TypeSpecifier) {
        this["@class"] = ".TypeSpecifier";
    }
}

export class NamedTypeSpecifier {
    public constructor(props?: NamedTypeSpecifier) {
        this["@class"] = ".NamedTypeSpecifier";
    }
}

export class ExpressionRef {
    public constructor(props?: ExpressionRef) {
        this["@class"] = ".ExpressionRef";
    }
}

export class ParameterRef {
    public constructor(props?: ParameterRef) {
        this["@class"] = ".ParameterRef";
    }
}

export class OperandRef {
    public constructor(props?: OperandRef) {
        this["@class"] = ".OperandRef";
    }
}

export class IdentifierRef {
    public constructor(props?: IdentifierRef) {
        this["@class"] = ".IdentifierRef";
    }
}

export class Literal {
    public constructor(props?: Literal) {
        this["@class"] = ".Literal";
    }
}

export class TupleElement {
    public value: Expression;
    public $name: string;

    public constructor(props?: TupleElement) {
        this["@class"] = ".TupleElement";


        if (props) {

        	this.value = (props.value) ? new Expression(props.value): undefined;
        	this.$name = props.$name;
        }
    }
}

export class InstanceElement {
    public value: Expression;
    public $name: string;

    public constructor(props?: InstanceElement) {
        this["@class"] = ".InstanceElement";


        if (props) {

        	this.value = (props.value) ? new Expression(props.value): undefined;
        	this.$name = props.$name;
        }
    }
}

export class And {
    public constructor(props?: And) {
        this["@class"] = ".And";
    }
}

export class Or {
    public constructor(props?: Or) {
        this["@class"] = ".Or";
    }
}

export class Xor {
    public constructor(props?: Xor) {
        this["@class"] = ".Xor";
    }
}

export class Implies {
    public constructor(props?: Implies) {
        this["@class"] = ".Implies";
    }
}

export class Not {
    public constructor(props?: Not) {
        this["@class"] = ".Not";
    }
}

export class Null {
    public constructor(props?: Null) {
        this["@class"] = ".Null";
    }
}

export class IsNull {
    public constructor(props?: IsNull) {
        this["@class"] = ".IsNull";
    }
}

export class IsTrue {
    public constructor(props?: IsTrue) {
        this["@class"] = ".IsTrue";
    }
}

export class IsFalse {
    public constructor(props?: IsFalse) {
        this["@class"] = ".IsFalse";
    }
}

export class Coalesce {
    public constructor(props?: Coalesce) {
        this["@class"] = ".Coalesce";
    }
}

export class ToBoolean {
    public constructor(props?: ToBoolean) {
        this["@class"] = ".ToBoolean";
    }
}

export class ConvertsToBoolean {
    public constructor(props?: ConvertsToBoolean) {
        this["@class"] = ".ConvertsToBoolean";
    }
}

export class ToConcept {
    public constructor(props?: ToConcept) {
        this["@class"] = ".ToConcept";
    }
}

export class ConvertsToDate {
    public constructor(props?: ConvertsToDate) {
        this["@class"] = ".ConvertsToDate";
    }
}

export class ToDate {
    public constructor(props?: ToDate) {
        this["@class"] = ".ToDate";
    }
}

export class ConvertsToDateTime {
    public constructor(props?: ConvertsToDateTime) {
        this["@class"] = ".ConvertsToDateTime";
    }
}

export class ToDateTime {
    public constructor(props?: ToDateTime) {
        this["@class"] = ".ToDateTime";
    }
}

export class ConvertsToDecimal {
    public constructor(props?: ConvertsToDecimal) {
        this["@class"] = ".ConvertsToDecimal";
    }
}

export class ToDecimal {
    public constructor(props?: ToDecimal) {
        this["@class"] = ".ToDecimal";
    }
}

export class ConvertsToInteger {
    public constructor(props?: ConvertsToInteger) {
        this["@class"] = ".ConvertsToInteger";
    }
}

export class ToInteger {
    public constructor(props?: ToInteger) {
        this["@class"] = ".ToInteger";
    }
}

export class ConvertsToLong {
    public constructor(props?: ConvertsToLong) {
        this["@class"] = ".ConvertsToLong";
    }
}

export class ToLong {
    public constructor(props?: ToLong) {
        this["@class"] = ".ToLong";
    }
}

export class ConvertsToQuantity {
    public constructor(props?: ConvertsToQuantity) {
        this["@class"] = ".ConvertsToQuantity";
    }
}

export class ToQuantity {
    public constructor(props?: ToQuantity) {
        this["@class"] = ".ToQuantity";
    }
}

export class ConvertsToRatio {
    public constructor(props?: ConvertsToRatio) {
        this["@class"] = ".ConvertsToRatio";
    }
}

export class ToRatio {
    public constructor(props?: ToRatio) {
        this["@class"] = ".ToRatio";
    }
}

export class ToList {
    public constructor(props?: ToList) {
        this["@class"] = ".ToList";
    }
}

export class ToChars {
    public constructor(props?: ToChars) {
        this["@class"] = ".ToChars";
    }
}

export class ConvertsToString {
    public constructor(props?: ConvertsToString) {
        this["@class"] = ".ConvertsToString";
    }
}

export class ToString {
    public constructor(props?: ToString) {
        this["@class"] = ".ToString";
    }
}

export class ConvertsToTime {
    public constructor(props?: ConvertsToTime) {
        this["@class"] = ".ConvertsToTime";
    }
}

export class ToTime {
    public constructor(props?: ToTime) {
        this["@class"] = ".ToTime";
    }
}

export class CanConvertQuantity {
    public constructor(props?: CanConvertQuantity) {
        this["@class"] = ".CanConvertQuantity";
    }
}

export class ConvertQuantity {
    public constructor(props?: ConvertQuantity) {
        this["@class"] = ".ConvertQuantity";
    }
}

export class Equal {
    public constructor(props?: Equal) {
        this["@class"] = ".Equal";
    }
}

export class Equivalent {
    public constructor(props?: Equivalent) {
        this["@class"] = ".Equivalent";
    }
}

export class NotEqual {
    public constructor(props?: NotEqual) {
        this["@class"] = ".NotEqual";
    }
}

export class Less {
    public constructor(props?: Less) {
        this["@class"] = ".Less";
    }
}

export class Greater {
    public constructor(props?: Greater) {
        this["@class"] = ".Greater";
    }
}

export class LessOrEqual {
    public constructor(props?: LessOrEqual) {
        this["@class"] = ".LessOrEqual";
    }
}

export class GreaterOrEqual {
    public constructor(props?: GreaterOrEqual) {
        this["@class"] = ".GreaterOrEqual";
    }
}

export class Add {
    public constructor(props?: Add) {
        this["@class"] = ".Add";
    }
}

export class Subtract {
    public constructor(props?: Subtract) {
        this["@class"] = ".Subtract";
    }
}

export class Multiply {
    public constructor(props?: Multiply) {
        this["@class"] = ".Multiply";
    }
}

export class Divide {
    public constructor(props?: Divide) {
        this["@class"] = ".Divide";
    }
}

export class TruncatedDivide {
    public constructor(props?: TruncatedDivide) {
        this["@class"] = ".TruncatedDivide";
    }
}

export class Modulo {
    public constructor(props?: Modulo) {
        this["@class"] = ".Modulo";
    }
}

export class Ceiling {
    public constructor(props?: Ceiling) {
        this["@class"] = ".Ceiling";
    }
}

export class Floor {
    public constructor(props?: Floor) {
        this["@class"] = ".Floor";
    }
}

export class Truncate {
    public constructor(props?: Truncate) {
        this["@class"] = ".Truncate";
    }
}

export class Abs {
    public constructor(props?: Abs) {
        this["@class"] = ".Abs";
    }
}

export class Negate {
    public constructor(props?: Negate) {
        this["@class"] = ".Negate";
    }
}

export class Ln {
    public constructor(props?: Ln) {
        this["@class"] = ".Ln";
    }
}

export class Exp {
    public constructor(props?: Exp) {
        this["@class"] = ".Exp";
    }
}

export class Log {
    public constructor(props?: Log) {
        this["@class"] = ".Log";
    }
}

export class Power {
    public constructor(props?: Power) {
        this["@class"] = ".Power";
    }
}

export class Successor {
    public constructor(props?: Successor) {
        this["@class"] = ".Successor";
    }
}

export class Predecessor {
    public constructor(props?: Predecessor) {
        this["@class"] = ".Predecessor";
    }
}

export class MinValue {
    public constructor(props?: MinValue) {
        this["@class"] = ".MinValue";
    }
}

export class MaxValue {
    public constructor(props?: MaxValue) {
        this["@class"] = ".MaxValue";
    }
}

export class Precision {
    public constructor(props?: Precision) {
        this["@class"] = ".Precision";
    }
}

export class LowBoundary {
    public constructor(props?: LowBoundary) {
        this["@class"] = ".LowBoundary";
    }
}

export class HighBoundary {
    public constructor(props?: HighBoundary) {
        this["@class"] = ".HighBoundary";
    }
}

export class Concatenate {
    public constructor(props?: Concatenate) {
        this["@class"] = ".Concatenate";
    }
}

export class Length {
    public constructor(props?: Length) {
        this["@class"] = ".Length";
    }
}

export class Upper {
    public constructor(props?: Upper) {
        this["@class"] = ".Upper";
    }
}

export class Lower {
    public constructor(props?: Lower) {
        this["@class"] = ".Lower";
    }
}

export class Indexer {
    public constructor(props?: Indexer) {
        this["@class"] = ".Indexer";
    }
}

export class StartsWith {
    public constructor(props?: StartsWith) {
        this["@class"] = ".StartsWith";
    }
}

export class EndsWith {
    public constructor(props?: EndsWith) {
        this["@class"] = ".EndsWith";
    }
}

export class Matches {
    public constructor(props?: Matches) {
        this["@class"] = ".Matches";
    }
}

export class ReplaceMatches {
    public constructor(props?: ReplaceMatches) {
        this["@class"] = ".ReplaceMatches";
    }
}

export class DurationBetween {
    public constructor(props?: DurationBetween) {
        this["@class"] = ".DurationBetween";
    }
}

export class DifferenceBetween {
    public constructor(props?: DifferenceBetween) {
        this["@class"] = ".DifferenceBetween";
    }
}

export class DateFrom {
    public constructor(props?: DateFrom) {
        this["@class"] = ".DateFrom";
    }
}

export class TimeFrom {
    public constructor(props?: TimeFrom) {
        this["@class"] = ".TimeFrom";
    }
}

export class TimezoneFrom {
    public constructor(props?: TimezoneFrom) {
        this["@class"] = ".TimezoneFrom";
    }
}

export class TimezoneOffsetFrom {
    public constructor(props?: TimezoneOffsetFrom) {
        this["@class"] = ".TimezoneOffsetFrom";
    }
}

export class DateTimeComponentFrom {
    public constructor(props?: DateTimeComponentFrom) {
        this["@class"] = ".DateTimeComponentFrom";
    }
}

export class TimeOfDay {
    public constructor(props?: TimeOfDay) {
        this["@class"] = ".TimeOfDay";
    }
}

export class Today {
    public constructor(props?: Today) {
        this["@class"] = ".Today";
    }
}

export class Now {
    public constructor(props?: Now) {
        this["@class"] = ".Now";
    }
}

export class SameAs {
    public constructor(props?: SameAs) {
        this["@class"] = ".SameAs";
    }
}

export class SameOrBefore {
    public constructor(props?: SameOrBefore) {
        this["@class"] = ".SameOrBefore";
    }
}

export class SameOrAfter {
    public constructor(props?: SameOrAfter) {
        this["@class"] = ".SameOrAfter";
    }
}

export class PointFrom {
    public constructor(props?: PointFrom) {
        this["@class"] = ".PointFrom";
    }
}

export class Width {
    public constructor(props?: Width) {
        this["@class"] = ".Width";
    }
}

export class Size {
    public constructor(props?: Size) {
        this["@class"] = ".Size";
    }
}

export class Start {
    public constructor(props?: Start) {
        this["@class"] = ".Start";
    }
}

export class End {
    public constructor(props?: End) {
        this["@class"] = ".End";
    }
}

export class Contains {
    public constructor(props?: Contains) {
        this["@class"] = ".Contains";
    }
}

export class ProperContains {
    public constructor(props?: ProperContains) {
        this["@class"] = ".ProperContains";
    }
}

export class In {
    public constructor(props?: In) {
        this["@class"] = ".In";
    }
}

export class ProperIn {
    public constructor(props?: ProperIn) {
        this["@class"] = ".ProperIn";
    }
}

export class Includes {
    public constructor(props?: Includes) {
        this["@class"] = ".Includes";
    }
}

export class IncludedIn {
    public constructor(props?: IncludedIn) {
        this["@class"] = ".IncludedIn";
    }
}

export class ProperIncludes {
    public constructor(props?: ProperIncludes) {
        this["@class"] = ".ProperIncludes";
    }
}

export class ProperIncludedIn {
    public constructor(props?: ProperIncludedIn) {
        this["@class"] = ".ProperIncludedIn";
    }
}

export class Before {
    public constructor(props?: Before) {
        this["@class"] = ".Before";
    }
}

export class After {
    public constructor(props?: After) {
        this["@class"] = ".After";
    }
}

export class Meets {
    public constructor(props?: Meets) {
        this["@class"] = ".Meets";
    }
}

export class MeetsBefore {
    public constructor(props?: MeetsBefore) {
        this["@class"] = ".MeetsBefore";
    }
}

export class MeetsAfter {
    public constructor(props?: MeetsAfter) {
        this["@class"] = ".MeetsAfter";
    }
}

export class Overlaps {
    public constructor(props?: Overlaps) {
        this["@class"] = ".Overlaps";
    }
}

export class OverlapsBefore {
    public constructor(props?: OverlapsBefore) {
        this["@class"] = ".OverlapsBefore";
    }
}

export class OverlapsAfter {
    public constructor(props?: OverlapsAfter) {
        this["@class"] = ".OverlapsAfter";
    }
}

export class Starts {
    public constructor(props?: Starts) {
        this["@class"] = ".Starts";
    }
}

export class Ends {
    public constructor(props?: Ends) {
        this["@class"] = ".Ends";
    }
}

export class Collapse {
    public constructor(props?: Collapse) {
        this["@class"] = ".Collapse";
    }
}

export class Expand {
    public constructor(props?: Expand) {
        this["@class"] = ".Expand";
    }
}

export class Union {
    public constructor(props?: Union) {
        this["@class"] = ".Union";
    }
}

export class Intersect {
    public constructor(props?: Intersect) {
        this["@class"] = ".Intersect";
    }
}

export class Except {
    public constructor(props?: Except) {
        this["@class"] = ".Except";
    }
}

export class Exists {
    public constructor(props?: Exists) {
        this["@class"] = ".Exists";
    }
}

export class Times {
    public constructor(props?: Times) {
        this["@class"] = ".Times";
    }
}

export class Flatten {
    public constructor(props?: Flatten) {
        this["@class"] = ".Flatten";
    }
}

export class Distinct {
    public constructor(props?: Distinct) {
        this["@class"] = ".Distinct";
    }
}

export class Current {
    public constructor(props?: Current) {
        this["@class"] = ".Current";
    }
}

export class Iteration {
    public constructor(props?: Iteration) {
        this["@class"] = ".Iteration";
    }
}

export class Total {
    public constructor(props?: Total) {
        this["@class"] = ".Total";
    }
}

export class SingletonFrom {
    public constructor(props?: SingletonFrom) {
        this["@class"] = ".SingletonFrom";
    }
}

export class Count {
    public constructor(props?: Count) {
        this["@class"] = ".Count";
    }
}

export class Sum {
    public constructor(props?: Sum) {
        this["@class"] = ".Sum";
    }
}

export class Product {
    public constructor(props?: Product) {
        this["@class"] = ".Product";
    }
}

export class Min {
    public constructor(props?: Min) {
        this["@class"] = ".Min";
    }
}

export class Max {
    public constructor(props?: Max) {
        this["@class"] = ".Max";
    }
}

export class Avg {
    public constructor(props?: Avg) {
        this["@class"] = ".Avg";
    }
}

export class GeometricMean {
    public constructor(props?: GeometricMean) {
        this["@class"] = ".GeometricMean";
    }
}

export class Median {
    public constructor(props?: Median) {
        this["@class"] = ".Median";
    }
}

export class Mode {
    public constructor(props?: Mode) {
        this["@class"] = ".Mode";
    }
}

export class Variance {
    public constructor(props?: Variance) {
        this["@class"] = ".Variance";
    }
}

export class PopulationVariance {
    public constructor(props?: PopulationVariance) {
        this["@class"] = ".PopulationVariance";
    }
}

export class StdDev {
    public constructor(props?: StdDev) {
        this["@class"] = ".StdDev";
    }
}

export class PopulationStdDev {
    public constructor(props?: PopulationStdDev) {
        this["@class"] = ".PopulationStdDev";
    }
}

export class AllTrue {
    public constructor(props?: AllTrue) {
        this["@class"] = ".AllTrue";
    }
}

export class AnyTrue {
    public constructor(props?: AnyTrue) {
        this["@class"] = ".AnyTrue";
    }
}

export class With {
    public constructor(props?: With) {
        this["@class"] = ".With";
    }
}

export class Without {
    public constructor(props?: Without) {
        this["@class"] = ".Without";
    }
}

export class SortByItem {
    public constructor(props?: SortByItem) {
        this["@class"] = ".SortByItem";
    }
}

export class ByDirection {
    public constructor(props?: ByDirection) {
        this["@class"] = ".ByDirection";
    }
}

export class ByColumn {
    public constructor(props?: ByColumn) {
        this["@class"] = ".ByColumn";
    }
}

export class AliasRef {
    public constructor(props?: AliasRef) {
        this["@class"] = ".AliasRef";
    }
}

export class QueryLetRef {
    public constructor(props?: QueryLetRef) {
        this["@class"] = ".QueryLetRef";
    }
}

export class IntervalTypeSpecifier extends TypeSpecifier {
    public pointType: TypeSpecifier;

    public constructor(props?: IntervalTypeSpecifier) {
        super(props);

        this["@class"] = ".IntervalTypeSpecifier";


        if (props) {

        	this.pointType = (props.pointType) ? new TypeSpecifier(props.pointType): undefined;
        }
    }
}

export class ListTypeSpecifier extends TypeSpecifier {
    public elementType: TypeSpecifier;

    public constructor(props?: ListTypeSpecifier) {
        super(props);

        this["@class"] = ".ListTypeSpecifier";


        if (props) {

        	this.elementType = (props.elementType) ? new TypeSpecifier(props.elementType): undefined;
        }
    }
}

export class TupleElementDefinition extends Element {
    public type?: TypeSpecifier;
    public elementType?: TypeSpecifier;

    public constructor(props?: TupleElementDefinition) {
        super(props);

        this["@class"] = ".TupleElementDefinition";


        if (props) {

        	this.type = (props.type) ? new TypeSpecifier(props.type): undefined;
        	this.elementType = (props.elementType) ? new TypeSpecifier(props.elementType): undefined;
        }
    }
}

export class TupleTypeSpecifier extends TypeSpecifier {
    public element?: TupleElementDefinition[];

    public constructor(props?: TupleTypeSpecifier) {
        super(props);

        this["@class"] = ".TupleTypeSpecifier";


        if (props) {

        	this.element = props.element?.map(o => new TupleElementDefinition(o));
        }
    }
}

export class ChoiceTypeSpecifier extends TypeSpecifier {
    public type?: TypeSpecifier[];
    public choice?: TypeSpecifier[];

    public constructor(props?: ChoiceTypeSpecifier) {
        super(props);

        this["@class"] = ".ChoiceTypeSpecifier";


        if (props) {

        	this.type = props.type?.map(o => new TypeSpecifier(o));
        	this.choice = props.choice?.map(o => new TypeSpecifier(o));
        }
    }
}

export class OperatorExpression extends Expression {
    public signature?: TypeSpecifier[];

    public constructor(props?: OperatorExpression) {
        super(props);

        this["@class"] = ".OperatorExpression";


        if (props) {

        	this.signature = props.signature?.map(o => new TypeSpecifier(o));
        }
    }
}

export class ExpressionDef extends Element {
    public expression?: Expression;

    public constructor(props?: ExpressionDef) {
        super(props);

        this["@class"] = ".ExpressionDef";


        if (props) {

        	this.expression = (props.expression) ? new Expression(props.expression): undefined;
        }
    }
}

export class FunctionRef extends ExpressionRef {
    public signature?: TypeSpecifier[];
    public operand?: Expression[];

    public constructor(props?: FunctionRef) {
        super(props);

        this["@class"] = ".FunctionRef";


        if (props) {

        	this.signature = props.signature?.map(o => new TypeSpecifier(o));
        	this.operand = props.operand?.map(o => new Expression(o));
        }
    }
}

export class ParameterDef extends Element {
    public default?: Expression;
    public parameterTypeSpecifier?: TypeSpecifier;

    public constructor(props?: ParameterDef) {
        super(props);

        this["@class"] = ".ParameterDef";


        if (props) {

        	this.default = (props.default) ? new Expression(props.default): undefined;
        	this.parameterTypeSpecifier = (props.parameterTypeSpecifier) ? new TypeSpecifier(props.parameterTypeSpecifier): undefined;
        }
    }
}

export class OperandDef extends Element {
    public operandTypeSpecifier?: TypeSpecifier;

    public constructor(props?: OperandDef) {
        super(props);

        this["@class"] = ".OperandDef";


        if (props) {

        	this.operandTypeSpecifier = (props.operandTypeSpecifier) ? new TypeSpecifier(props.operandTypeSpecifier): undefined;
        }
    }
}

export class Tuple extends Expression {
    public element?: TupleElement[];

    public constructor(props?: Tuple) {
        super(props);

        this["@class"] = ".Tuple";


        if (props) {

        	this.element = props.element?.map(o => new TupleElement(o));
        }
    }
}

export class Instance extends Expression {
    public element?: InstanceElement[];

    public constructor(props?: Instance) {
        super(props);

        this["@class"] = ".Instance";


        if (props) {

        	this.element = props.element?.map(o => new InstanceElement(o));
        }
    }
}

export class Interval extends Expression {
    public low?: Expression;
    public lowClosedExpression?: Expression;
    public high?: Expression;
    public highClosedExpression?: Expression;

    public constructor(props?: Interval) {
        super(props);

        this["@class"] = ".Interval";


        if (props) {

        	this.low = (props.low) ? new Expression(props.low): undefined;
        	this.lowClosedExpression = (props.lowClosedExpression) ? new Expression(props.lowClosedExpression): undefined;
        	this.high = (props.high) ? new Expression(props.high): undefined;
        	this.highClosedExpression = (props.highClosedExpression) ? new Expression(props.highClosedExpression): undefined;
        }
    }
}

export class List extends Expression {
    public typeSpecifier?: TypeSpecifier;
    public element?: Expression[];

    public constructor(props?: List) {
        super(props);

        this["@class"] = ".List";


        if (props) {

        	this.typeSpecifier = (props.typeSpecifier) ? new TypeSpecifier(props.typeSpecifier): undefined;
        	this.element = props.element?.map(o => new Expression(o));
        }
    }
}

export class If extends Expression {
    public condition: Expression;
    public then: Expression;
    public else: Expression;

    public constructor(props?: If) {
        super(props);

        this["@class"] = ".If";


        if (props) {

        	this.condition = (props.condition) ? new Expression(props.condition): undefined;
        	this.then = (props.then) ? new Expression(props.then): undefined;
        	this.else = (props.else) ? new Expression(props.else): undefined;
        }
    }
}

export class CaseItem extends Element {
    public when: Expression;
    public then: Expression;

    public constructor(props?: CaseItem) {
        super(props);

        this["@class"] = ".CaseItem";


        if (props) {

        	this.when = (props.when) ? new Expression(props.when): undefined;
        	this.then = (props.then) ? new Expression(props.then): undefined;
        }
    }
}

export class Case extends Expression {
    public comparand?: Expression;
    public caseItem: CaseItem[];
    public else: Expression;

    public constructor(props?: Case) {
        super(props);

        this["@class"] = ".Case";


        if (props) {

        	this.comparand = (props.comparand) ? new Expression(props.comparand): undefined;
        	this.caseItem = props.caseItem?.map(o => new CaseItem(o));
        	this.else = (props.else) ? new Expression(props.else): undefined;
        }
    }
}

export class Filter extends Expression {
    public source: Expression;
    public condition: Expression;

    public constructor(props?: Filter) {
        super(props);

        this["@class"] = ".Filter";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        	this.condition = (props.condition) ? new Expression(props.condition): undefined;
        }
    }
}

export class Sort extends Expression {
    public source: Expression;
    public by: SortByItem[];

    public constructor(props?: Sort) {
        super(props);

        this["@class"] = ".Sort";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        	this.by = props.by?.map(o => new SortByItem(o));
        }
    }
}

export class ForEach extends Expression {
    public source: Expression;
    public element: Expression;

    public constructor(props?: ForEach) {
        super(props);

        this["@class"] = ".ForEach";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        	this.element = (props.element) ? new Expression(props.element): undefined;
        }
    }
}

export class Repeat extends Expression {
    public source: Expression;
    public element: Expression;

    public constructor(props?: Repeat) {
        super(props);

        this["@class"] = ".Repeat";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        	this.element = (props.element) ? new Expression(props.element): undefined;
        }
    }
}

export class AggregateExpression extends Expression {
    public signature?: TypeSpecifier[];
    public source: Expression;

    public constructor(props?: AggregateExpression) {
        super(props);

        this["@class"] = ".AggregateExpression";


        if (props) {

        	this.signature = props.signature?.map(o => new TypeSpecifier(o));
        	this.source = (props.source) ? new Expression(props.source): undefined;
        }
    }
}

export class Property extends Expression {
    public source?: Expression;

    public constructor(props?: Property) {
        super(props);

        this["@class"] = ".Property";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        }
    }
}

export class AliasedQuerySource extends Element {
    public expression: Expression;

    public constructor(props?: AliasedQuerySource) {
        super(props);

        this["@class"] = ".AliasedQuerySource";


        if (props) {

        	this.expression = (props.expression) ? new Expression(props.expression): undefined;
        }
    }
}

export class LetClause extends Element {
    public expression: Expression;

    public constructor(props?: LetClause) {
        super(props);

        this["@class"] = ".LetClause";


        if (props) {

        	this.expression = (props.expression) ? new Expression(props.expression): undefined;
        }
    }
}

export class ByExpression extends SortByItem {
    public expression: Expression;

    public constructor(props?: ByExpression) {
        super(props);

        this["@class"] = ".ByExpression";


        if (props) {

        	this.expression = (props.expression) ? new Expression(props.expression): undefined;
        }
    }
}

export class ReturnClause extends Element {
    public expression: Expression;

    public constructor(props?: ReturnClause) {
        super(props);

        this["@class"] = ".ReturnClause";


        if (props) {

        	this.expression = (props.expression) ? new Expression(props.expression): undefined;
        }
    }
}

export class AggregateClause extends Element {
    public expression: Expression;
    public starting?: Expression;

    public constructor(props?: AggregateClause) {
        super(props);

        this["@class"] = ".AggregateClause";


        if (props) {

        	this.expression = (props.expression) ? new Expression(props.expression): undefined;
        	this.starting = (props.starting) ? new Expression(props.starting): undefined;
        }
    }
}

export class Query extends Expression {
    public source: AliasedQuerySource[];
    public let?: LetClause[];
    public relationship?: RelationshipClause[];
    public where?: Expression;
    public return?: ReturnClause;
    public aggregate?: AggregateClause;
    public sort?: SortByItem[];

    public constructor(props?: Query) {
        super(props);

        this["@class"] = ".Query";


        if (props) {

        	this.source = props.source?.map(o => new AliasedQuerySource(o));
        	this.let = props.let?.map(o => new LetClause(o));
        	this.relationship = props.relationship?.map(o => new RelationshipClause(o));
        	this.where = (props.where) ? new Expression(props.where): undefined;
        	this.return = (props.return) ? new ReturnClause(props.return): undefined;
        	this.aggregate = (props.aggregate) ? new AggregateClause(props.aggregate): undefined;
        	this.sort = props.sort?.map(o => new SortByItem(o));
        }
    }
}

export class UnaryExpression extends OperatorExpression {
    public operand: Expression;

    public constructor(props?: UnaryExpression) {
        super(props);

        this["@class"] = ".UnaryExpression";


        if (props) {

        	this.operand = (props.operand) ? new Expression(props.operand): undefined;
        }
    }
}

export class BinaryExpression extends OperatorExpression {
    public operand: Expression;

    public constructor(props?: BinaryExpression) {
        super(props);

        this["@class"] = ".BinaryExpression";


        if (props) {

        	this.operand = (props.operand) ? new Expression(props.operand): undefined;
        }
    }
}

export class TernaryExpression extends OperatorExpression {
    public operand: Expression;

    public constructor(props?: TernaryExpression) {
        super(props);

        this["@class"] = ".TernaryExpression";


        if (props) {

        	this.operand = (props.operand) ? new Expression(props.operand): undefined;
        }
    }
}

export class NaryExpression extends OperatorExpression {
    public operand?: Expression[];

    public constructor(props?: NaryExpression) {
        super(props);

        this["@class"] = ".NaryExpression";


        if (props) {

        	this.operand = props.operand?.map(o => new Expression(o));
        }
    }
}

export class FunctionDef extends ExpressionDef {
    public operand?: OperandDef[];

    public constructor(props?: FunctionDef) {
        super(props);

        this["@class"] = ".FunctionDef";


        if (props) {

        	this.operand = props.operand?.map(o => new OperandDef(o));
        }
    }
}

export class Round extends OperatorExpression {
    public operand: Expression;
    public precision?: Expression;

    public constructor(props?: Round) {
        super(props);

        this["@class"] = ".Round";


        if (props) {

        	this.operand = (props.operand) ? new Expression(props.operand): undefined;
        	this.precision = (props.precision) ? new Expression(props.precision): undefined;
        }
    }
}

export class Combine extends OperatorExpression {
    public source: Expression;
    public separator?: Expression;

    public constructor(props?: Combine) {
        super(props);

        this["@class"] = ".Combine";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        	this.separator = (props.separator) ? new Expression(props.separator): undefined;
        }
    }
}

export class Split extends OperatorExpression {
    public stringToSplit: Expression;
    public separator?: Expression;

    public constructor(props?: Split) {
        super(props);

        this["@class"] = ".Split";


        if (props) {

        	this.stringToSplit = (props.stringToSplit) ? new Expression(props.stringToSplit): undefined;
        	this.separator = (props.separator) ? new Expression(props.separator): undefined;
        }
    }
}

export class SplitOnMatches extends OperatorExpression {
    public stringToSplit: Expression;
    public separatorPattern: Expression;

    public constructor(props?: SplitOnMatches) {
        super(props);

        this["@class"] = ".SplitOnMatches";


        if (props) {

        	this.stringToSplit = (props.stringToSplit) ? new Expression(props.stringToSplit): undefined;
        	this.separatorPattern = (props.separatorPattern) ? new Expression(props.separatorPattern): undefined;
        }
    }
}

export class PositionOf extends OperatorExpression {
    public pattern: Expression;
    public string: Expression;

    public constructor(props?: PositionOf) {
        super(props);

        this["@class"] = ".PositionOf";


        if (props) {

        	this.pattern = (props.pattern) ? new Expression(props.pattern): undefined;
        	this.string = (props.string) ? new Expression(props.string): undefined;
        }
    }
}

export class LastPositionOf extends OperatorExpression {
    public pattern: Expression;
    public string: Expression;

    public constructor(props?: LastPositionOf) {
        super(props);

        this["@class"] = ".LastPositionOf";


        if (props) {

        	this.pattern = (props.pattern) ? new Expression(props.pattern): undefined;
        	this.string = (props.string) ? new Expression(props.string): undefined;
        }
    }
}

export class Substring extends OperatorExpression {
    public stringToSub: Expression;
    public startIndex: Expression;
    public length?: Expression;

    public constructor(props?: Substring) {
        super(props);

        this["@class"] = ".Substring";


        if (props) {

        	this.stringToSub = (props.stringToSub) ? new Expression(props.stringToSub): undefined;
        	this.startIndex = (props.startIndex) ? new Expression(props.startIndex): undefined;
        	this.length = (props.length) ? new Expression(props.length): undefined;
        }
    }
}

export class Date extends OperatorExpression {
    public year: Expression;
    public month?: Expression;
    public day?: Expression;

    public constructor(props?: Date) {
        super(props);

        this["@class"] = ".Date";


        if (props) {

        	this.year = (props.year) ? new Expression(props.year): undefined;
        	this.month = (props.month) ? new Expression(props.month): undefined;
        	this.day = (props.day) ? new Expression(props.day): undefined;
        }
    }
}

export class DateTime extends OperatorExpression {
    public year: Expression;
    public month?: Expression;
    public day?: Expression;
    public hour?: Expression;
    public minute?: Expression;
    public second?: Expression;
    public millisecond?: Expression;
    public timezoneOffset?: Expression;

    public constructor(props?: DateTime) {
        super(props);

        this["@class"] = ".DateTime";


        if (props) {

        	this.year = (props.year) ? new Expression(props.year): undefined;
        	this.month = (props.month) ? new Expression(props.month): undefined;
        	this.day = (props.day) ? new Expression(props.day): undefined;
        	this.hour = (props.hour) ? new Expression(props.hour): undefined;
        	this.minute = (props.minute) ? new Expression(props.minute): undefined;
        	this.second = (props.second) ? new Expression(props.second): undefined;
        	this.millisecond = (props.millisecond) ? new Expression(props.millisecond): undefined;
        	this.timezoneOffset = (props.timezoneOffset) ? new Expression(props.timezoneOffset): undefined;
        }
    }
}

export class Time extends OperatorExpression {
    public hour: Expression;
    public minute?: Expression;
    public second?: Expression;
    public millisecond?: Expression;

    public constructor(props?: Time) {
        super(props);

        this["@class"] = ".Time";


        if (props) {

        	this.hour = (props.hour) ? new Expression(props.hour): undefined;
        	this.minute = (props.minute) ? new Expression(props.minute): undefined;
        	this.second = (props.second) ? new Expression(props.second): undefined;
        	this.millisecond = (props.millisecond) ? new Expression(props.millisecond): undefined;
        }
    }
}

export class First extends OperatorExpression {
    public source: Expression;

    public constructor(props?: First) {
        super(props);

        this["@class"] = ".First";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        }
    }
}

export class Last extends OperatorExpression {
    public source: Expression;

    public constructor(props?: Last) {
        super(props);

        this["@class"] = ".Last";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        }
    }
}

export class Slice extends OperatorExpression {
    public source: Expression;
    public startIndex: Expression;
    public endIndex: Expression;

    public constructor(props?: Slice) {
        super(props);

        this["@class"] = ".Slice";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        	this.startIndex = (props.startIndex) ? new Expression(props.startIndex): undefined;
        	this.endIndex = (props.endIndex) ? new Expression(props.endIndex): undefined;
        }
    }
}

export class IndexOf extends OperatorExpression {
    public source: Expression;
    public element: Expression;

    public constructor(props?: IndexOf) {
        super(props);

        this["@class"] = ".IndexOf";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        	this.element = (props.element) ? new Expression(props.element): undefined;
        }
    }
}

export class Aggregate extends AggregateExpression {
    public iteration: Expression;
    public initialValue?: Expression;

    public constructor(props?: Aggregate) {
        super(props);

        this["@class"] = ".Aggregate";


        if (props) {

        	this.iteration = (props.iteration) ? new Expression(props.iteration): undefined;
        	this.initialValue = (props.initialValue) ? new Expression(props.initialValue): undefined;
        }
    }
}

export class RelationshipClause extends AliasedQuerySource {
    public suchThat: Expression;

    public constructor(props?: RelationshipClause) {
        super(props);

        this["@class"] = ".RelationshipClause";


        if (props) {

        	this.suchThat = (props.suchThat) ? new Expression(props.suchThat): undefined;
        }
    }
}

export class Children extends OperatorExpression {
    public source: Expression;

    public constructor(props?: Children) {
        super(props);

        this["@class"] = ".Children";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        }
    }
}

export class Descendents extends OperatorExpression {
    public source: Expression;

    public constructor(props?: Descendents) {
        super(props);

        this["@class"] = ".Descendents";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        }
    }
}

export class Message extends OperatorExpression {
    public source: Expression;
    public condition?: Expression;
    public code?: Expression;
    public severity?: Expression;
    public message?: Expression;

    public constructor(props?: Message) {
        super(props);

        this["@class"] = ".Message";


        if (props) {

        	this.source = (props.source) ? new Expression(props.source): undefined;
        	this.condition = (props.condition) ? new Expression(props.condition): undefined;
        	this.code = (props.code) ? new Expression(props.code): undefined;
        	this.severity = (props.severity) ? new Expression(props.severity): undefined;
        	this.message = (props.message) ? new Expression(props.message): undefined;
        }
    }
}

export class Is extends UnaryExpression {
    public isTypeSpecifier?: TypeSpecifier;

    public constructor(props?: Is) {
        super(props);

        this["@class"] = ".Is";


        if (props) {

        	this.isTypeSpecifier = (props.isTypeSpecifier) ? new TypeSpecifier(props.isTypeSpecifier): undefined;
        }
    }
}

export class As extends UnaryExpression {
    public asTypeSpecifier?: TypeSpecifier;

    public constructor(props?: As) {
        super(props);

        this["@class"] = ".As";


        if (props) {

        	this.asTypeSpecifier = (props.asTypeSpecifier) ? new TypeSpecifier(props.asTypeSpecifier): undefined;
        }
    }
}

export class Convert extends UnaryExpression {
    public toTypeSpecifier?: TypeSpecifier;

    public constructor(props?: Convert) {
        super(props);

        this["@class"] = ".Convert";


        if (props) {

        	this.toTypeSpecifier = (props.toTypeSpecifier) ? new TypeSpecifier(props.toTypeSpecifier): undefined;
        }
    }
}

export class CanConvert extends UnaryExpression {
    public toTypeSpecifier?: TypeSpecifier;

    public constructor(props?: CanConvert) {
        super(props);

        this["@class"] = ".CanConvert";


        if (props) {

        	this.toTypeSpecifier = (props.toTypeSpecifier) ? new TypeSpecifier(props.toTypeSpecifier): undefined;
        }
    }
}

enum AccessModifier {
    Public = "Public",
    Private = "Private"
}

enum DateTimePrecision {
    Year = "Year",
    Month = "Month",
    Week = "Week",
    Day = "Day",
    Hour = "Hour",
    Minute = "Minute",
    Second = "Second",
    Millisecond = "Millisecond"
}

enum SortDirection {
    asc = "asc",
    ascending = "ascending",
    desc = "desc",
    descending = "descending"
}
