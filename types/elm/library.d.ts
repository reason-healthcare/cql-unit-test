/***********
generated template classes for ./library.xsd 9/18/2022, 10:18:17 AM
***********/





export class Library extends Element {
    public library: Library;
    public identifier: VersionedIdentifier;
    public schemaIdentifier: VersionedIdentifier;
    public usings?: UsingDef[];
    public includes?: IncludeDef[];
    public parameters?: ParameterDef[];
    public codeSystems?: CodeSystemDef[];
    public valueSets?: ValueSetDef[];
    public codes?: CodeDef[];
    public concepts?: ConceptDef[];
    public contexts?: ContextDef[];
    public statements?: ExpressionDef[];

    public constructor(props?: Library) {
        super();

        this["@class"] = ".Library";


        if (props) {

        	this.library = (props.library) ? new Library(props.library): undefined;
        	this.identifier = (props.identifier) ? new VersionedIdentifier(props.identifier): undefined;
        	this.schemaIdentifier = (props.schemaIdentifier) ? new VersionedIdentifier(props.schemaIdentifier): undefined;
        	this.usings = props.usings?.map(o => new UsingDef(o));
        	this.includes = props.includes?.map(o => new IncludeDef(o));
        	this.parameters = props.parameters?.map(o => o);
        	this.codeSystems = props.codeSystems?.map(o => o);
        	this.valueSets = props.valueSets?.map(o => o);
        	this.codes = props.codes?.map(o => o);
        	this.concepts = props.concepts?.map(o => o);
        	this.contexts = props.contexts?.map(o => new ContextDef(o));
        	this.statements = props.statements?.map(o => o);
        }
    }
}

export class VersionedIdentifier {
    public $id: string;
    public $system: string;
    public $version: string;

    public constructor(props?: VersionedIdentifier) {
        this["@class"] = ".VersionedIdentifier";


        if (props) {

        	this.$id = props.$id;
        	this.$system = props.$system;
        	this.$version = props.$version;
        }
    }
}

export class UsingDef {
    public constructor(props?: UsingDef) {
        this["@class"] = ".UsingDef";
    }
}

export class IncludeDef {
    public constructor(props?: IncludeDef) {
        this["@class"] = ".IncludeDef";
    }
}

export class ContextDef {
    public constructor(props?: ContextDef) {
        this["@class"] = ".ContextDef";
    }
}

class Library {
}
