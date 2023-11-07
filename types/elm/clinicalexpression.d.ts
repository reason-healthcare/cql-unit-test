/***********
generated template classes for ./clinicalexpression.xsd 9/18/2022, 10:24:04 AM
***********/


export class Clinicalexpression {
    public constructor(props?: Clinicalexpression) {
        this["@class"] = ".Clinicalexpression";
    }
}

export class IncludeElement {
    public constructor(props?: IncludeElement) {
        this["@class"] = ".IncludeElement";
    }
}

export class CodeSystemDef {
    public constructor(props?: CodeSystemDef) {
        this["@class"] = ".CodeSystemDef";
    }
}

export class CodeSystemRef {
    public constructor(props?: CodeSystemRef) {
        this["@class"] = ".CodeSystemRef";
    }
}

export class ValueSetRef {
    public constructor(props?: ValueSetRef) {
        this["@class"] = ".ValueSetRef";
    }
}

export class CodeRef {
    public constructor(props?: CodeRef) {
        this["@class"] = ".CodeRef";
    }
}

export class ConceptRef {
    public constructor(props?: ConceptRef) {
        this["@class"] = ".ConceptRef";
    }
}

export class Subsumes {
    public constructor(props?: Subsumes) {
        this["@class"] = ".Subsumes";
    }
}

export class SubsumedBy {
    public constructor(props?: SubsumedBy) {
        this["@class"] = ".SubsumedBy";
    }
}

export class Quantity {
    public constructor(props?: Quantity) {
        this["@class"] = ".Quantity";
    }
}

export class CalculateAge {
    public constructor(props?: CalculateAge) {
        this["@class"] = ".CalculateAge";
    }
}

export class CalculateAgeAt {
    public constructor(props?: CalculateAgeAt) {
        this["@class"] = ".CalculateAgeAt";
    }
}

export class Retrieve extends Expression {
    public id?: Expression;
    public codes?: Expression;
    public dateRange?: Expression;
    public context?: Expression;
    public include?: IncludeElement[];

    public constructor(props?: Retrieve) {
        super();

        this["@class"] = ".Retrieve";


        if (props) {

        	this.id = props.id;
        	this.codes = props.codes;
        	this.dateRange = props.dateRange;
        	this.context = props.context;
        	this.include = props.include?.map(o => new IncludeElement(o));
        }
    }
}

export class ValueSetDef extends Element {
    public codeSystem?: CodeSystemRef[];

    public constructor(props?: ValueSetDef) {
        super();

        this["@class"] = ".ValueSetDef";


        if (props) {

        	this.codeSystem = props.codeSystem?.map(o => new CodeSystemRef(o));
        }
    }
}

export class CodeDef extends Element {
    public codeSystem?: CodeSystemRef;

    public constructor(props?: CodeDef) {
        super();

        this["@class"] = ".CodeDef";


        if (props) {

        	this.codeSystem = (props.codeSystem) ? new CodeSystemRef(props.codeSystem): undefined;
        }
    }
}

export class ConceptDef extends Element {
    public code: CodeRef[];

    public constructor(props?: ConceptDef) {
        super();

        this["@class"] = ".ConceptDef";


        if (props) {

        	this.code = props.code?.map(o => new CodeRef(o));
        }
    }
}

export class Code extends Expression {
    public system: CodeSystemRef;

    public constructor(props?: Code) {
        super();

        this["@class"] = ".Code";


        if (props) {

        	this.system = (props.system) ? new CodeSystemRef(props.system): undefined;
        }
    }
}

export class Concept extends Expression {
    public code: Code[];

    public constructor(props?: Concept) {
        super();

        this["@class"] = ".Concept";


        if (props) {

        	this.code = props.code?.map(o => new Code(o));
        }
    }
}

export class InCodeSystem extends OperatorExpression {
    public code: Expression;
    public codesystem: Expression;

    public constructor(props?: InCodeSystem) {
        super();

        this["@class"] = ".InCodeSystem";


        if (props) {

        	this.code = props.code;
        	this.codesystem = props.codesystem;
        }
    }
}

export class AnyInCodeSystem extends OperatorExpression {
    public codes: Expression;
    public codesystem: Expression;

    public constructor(props?: AnyInCodeSystem) {
        super();

        this["@class"] = ".AnyInCodeSystem";


        if (props) {

        	this.codes = props.codes;
        	this.codesystem = props.codesystem;
        }
    }
}

export class InValueSet extends OperatorExpression {
    public code: Expression;
    public valueset: Expression;

    public constructor(props?: InValueSet) {
        super();

        this["@class"] = ".InValueSet";


        if (props) {

        	this.code = props.code;
        	this.valueset = props.valueset;
        }
    }
}

export class AnyInValueSet extends OperatorExpression {
    public codes: Expression;
    public valueset: Expression;

    public constructor(props?: AnyInValueSet) {
        super();

        this["@class"] = ".AnyInValueSet";


        if (props) {

        	this.codes = props.codes;
        	this.valueset = props.valueset;
        }
    }
}

export class Ratio extends Expression {
    public numerator: Quantity;
    public denominator: Quantity;

    public constructor(props?: Ratio) {
        super();

        this["@class"] = ".Ratio";


        if (props) {

        	this.numerator = (props.numerator) ? new Quantity(props.numerator): undefined;
        	this.denominator = (props.denominator) ? new Quantity(props.denominator): undefined;
        }
    }
}
