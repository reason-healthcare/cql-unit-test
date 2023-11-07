/***********
generated template classes for ./cqlannotations.xsd 9/18/2022, 10:21:22 AM
***********/





export class Cqlannotations {
    public constructor(props?: Cqlannotations) {
        this["@class"] = ".Cqlannotations";
    }
}

export class Annotation {
    public t?: Tag[];
    public s?: Narrative;
    public locator?: Locator;

    public constructor(props?: Annotation) {
        this["@class"] = ".Annotation";


        if (props) {

        	this.t = props.t?.map(o => new Tag(o));
        	this.s = (props.s) ? new Narrative(props.s): undefined;
        	this.locator = (props.locator) ? new Locator(props.locator): undefined;
        }
    }
}

export class Tag {
    public $name: string;
    public $value: string;

    public constructor(props?: Tag) {
        this["@class"] = ".Tag";


        if (props) {

        	this.$name = props.$name;
        	this.$value = props.$value;
        }
    }
}

export class Locator {
    public $librarySystem: string;
    public $libraryId: string;
    public $libraryVersion: string;
    public $startLine: number;
    public $startChar: number;
    public $endLine: number;
    public $endChar: number;

    public constructor(props?: Locator) {
        this["@class"] = ".Locator";


        if (props) {

        	this.$librarySystem = props.$librarySystem;
        	this.$libraryId = props.$libraryId;
        	this.$libraryVersion = props.$libraryVersion;
        	this.$startLine = props.$startLine;
        	this.$startChar = props.$startChar;
        	this.$endLine = props.$endLine;
        	this.$endChar = props.$endChar;
        }
    }
}

export class Narrative {
    public constructor(props?: Narrative) {
        this["@class"] = ".Narrative";
    }
}

export class CqlToElmError {
    public constructor(props?: CqlToElmError) {
        this["@class"] = ".CqlToElmError";
    }
}

export class CqlToElmInfo {
    public $translatorVersion: string;
    public $translatorOptions: string;

    public constructor(props?: CqlToElmInfo) {
        this["@class"] = ".CqlToElmInfo";


        if (props) {

        	this.$translatorVersion = props.$translatorVersion;
        	this.$translatorOptions = props.$translatorOptions;
        }
    }
}
