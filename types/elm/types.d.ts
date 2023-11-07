/***********
generated template classes for ./types.xsd 9/18/2022, 10:19:59 AM
***********/





export class Types {
    public constructor(props?: Types) {
        this["@class"] = ".Types";
    }
}

export class Any {
    public constructor(props?: Any) {
        this["@class"] = ".Any";
    }
}

export class Boolean {
    public constructor(props?: Boolean) {
        this["@class"] = ".Boolean";
    }
}

export class ValueSet {
    public constructor(props?: ValueSet) {
        this["@class"] = ".ValueSet";
    }
}

export class CodeSystem {
    public constructor(props?: CodeSystem) {
        this["@class"] = ".CodeSystem";
    }
}

export class Date {
    public constructor(props?: Date) {
        this["@class"] = ".Date";
    }
}

export class DateTime {
    public constructor(props?: DateTime) {
        this["@class"] = ".DateTime";
    }
}

export class Decimal {
    public constructor(props?: Decimal) {
        this["@class"] = ".Decimal";
    }
}

export class Integer {
    public constructor(props?: Integer) {
        this["@class"] = ".Integer";
    }
}

export class Long {
    public constructor(props?: Long) {
        this["@class"] = ".Long";
    }
}

export class String {
    public constructor(props?: String) {
        this["@class"] = ".String";
    }
}

export class Time {
    public constructor(props?: Time) {
        this["@class"] = ".Time";
    }
}

export class Code extends Any {
    public code: string;
    public display?: string;
    public system?: string;
    public version?: string;

    public constructor(props?: Code) {
        super(props);

        this["@class"] = ".Code";


        if (props) {

        	this.code = props.code;
        	this.display = props.display;
        	this.system = props.system;
        	this.version = props.version;
        }
    }
}

export class Concept extends Any {
    public codes: Code[];
    public display?: string;

    public constructor(props?: Concept) {
        super(props);

        this["@class"] = ".Concept";


        if (props) {

        	this.codes = props.codes?.map(o => new Code(o));
        	this.display = props.display;
        }
    }
}

export class Vocabulary extends Any {
    public id: string;
    public version?: string;

    public constructor(props?: Vocabulary) {
        super(props);

        this["@class"] = ".Vocabulary";


        if (props) {

        	this.id = props.id;
        	this.version = props.version;
        }
    }
}

export class Quantity extends Any {
    public value: number;
    public unit?: string;

    public constructor(props?: Quantity) {
        super(props);

        this["@class"] = ".Quantity";


        if (props) {

        	this.value = props.value;
        	this.unit = props.unit;
        }
    }
}

export class Ratio extends Any {
    public numerator: Quantity;
    public denominator: Quantity;

    public constructor(props?: Ratio) {
        super(props);

        this["@class"] = ".Ratio";


        if (props) {

        	this.numerator = (props.numerator) ? new Quantity(props.numerator): undefined;
        	this.denominator = (props.denominator) ? new Quantity(props.denominator): undefined;
        }
    }
}

export class Interval extends Any {
    public lowClosed?: boolean;
    public highClosed?: boolean;

    public constructor(props?: Interval) {
        super(props);

        this["@class"] = ".Interval";


        if (props) {

        	this.lowClosed = props.lowClosed;
        	this.highClosed = props.highClosed;
        }
    }
}

export class IntegerInterval extends Interval {
    public low?: number;
    public high?: number;

    public constructor(props?: IntegerInterval) {
        super(props);

        this["@class"] = ".IntegerInterval";


        if (props) {

        	this.low = props.low;
        	this.high = props.high;
        }
    }
}

export class DecimalInterval extends Interval {
    public low?: number;
    public high?: number;

    public constructor(props?: DecimalInterval) {
        super(props);

        this["@class"] = ".DecimalInterval";


        if (props) {

        	this.low = props.low;
        	this.high = props.high;
        }
    }
}

export class QuantityInterval extends Interval {
    public low?: Quantity;
    public high?: Quantity;

    public constructor(props?: QuantityInterval) {
        super(props);

        this["@class"] = ".QuantityInterval";


        if (props) {

        	this.low = (props.low) ? new Quantity(props.low): undefined;
        	this.high = (props.high) ? new Quantity(props.high): undefined;
        }
    }
}

export class DateInterval extends Interval {
    public low?: Date;
    public high?: Date;

    public constructor(props?: DateInterval) {
        super(props);

        this["@class"] = ".DateInterval";


        if (props) {

        	this.low = (props.low) ? new Date(props.low): undefined;
        	this.high = (props.high) ? new Date(props.high): undefined;
        }
    }
}

export class DateTimeInterval extends Interval {
    public low?: Date;
    public high?: Date;

    public constructor(props?: DateTimeInterval) {
        super(props);

        this["@class"] = ".DateTimeInterval";


        if (props) {

        	this.low = (props.low) ? new Date(props.low): undefined;
        	this.high = (props.high) ? new Date(props.high): undefined;
        }
    }
}

export class TimeInterval extends Interval {
    public low?: Time;
    public high?: Time;

    public constructor(props?: TimeInterval) {
        super(props);

        this["@class"] = ".TimeInterval";


        if (props) {

        	this.low = (props.low) ? new Time(props.low): undefined;
        	this.high = (props.high) ? new Time(props.high): undefined;
        }
    }
}
