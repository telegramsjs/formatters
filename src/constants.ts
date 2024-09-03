type TypeSupportedLanguages =
  | "markup"
  | "html"
  | "xml"
  | "svg"
  | "mathml"
  | "ssml"
  | "atom"
  | "rss"
  | "css"
  | "clike"
  | "regex"
  | "javascript"
  | "js"
  | "abap"
  | "abnf"
  | "actionscript"
  | "ada"
  | "agda"
  | "al"
  | "antlr4"
  | "g4"
  | "apacheconf"
  | "sql"
  | "apex"
  | "apl"
  | "applescript"
  | "aql"
  | "c"
  | "cpp"
  | "arduino"
  | "ino"
  | "arff"
  | "armasm"
  | "arm-asm"
  | "bash"
  | "sh"
  | "shell"
  | "yaml"
  | "yml"
  | "markdown"
  | "md"
  | "arturo"
  | "art"
  | "asciidoc"
  | "adoc"
  | "csharp"
  | "cs"
  | "dotnet"
  | "aspnet"
  | "asm6502"
  | "asmatmel"
  | "autohotkey"
  | "autoit"
  | "avisynth"
  | "avs"
  | "avro-idl"
  | "avdl"
  | "awk"
  | "gawk"
  | "basic"
  | "batch"
  | "bbcode"
  | "shortcode"
  | "bbj"
  | "bicep"
  | "birb"
  | "bison"
  | "bnf"
  | "rbnf"
  | "bqn"
  | "brainfuck"
  | "brightscript"
  | "bro"
  | "cfscript"
  | "cfc"
  | "chaiscript"
  | "cil"
  | "cilkc"
  | "cilk-c"
  | "cilkcpp"
  | "cilk"
  | "clojure"
  | "cmake"
  | "cobol"
  | "coffeescript"
  | "coffee"
  | "concurnas"
  | "conc"
  | "csp"
  | "cooklang"
  | "ruby"
  | "rb"
  | "crystal"
  | "csv"
  | "cue"
  | "cypher"
  | "d"
  | "dart"
  | "dataweave"
  | "dax"
  | "dhall"
  | "diff"
  | "markup-templating"
  | "django"
  | "jinja2"
  | "dns-zone-file"
  | "dns-zone"
  | "docker"
  | "dockerfile"
  | "dot"
  | "gv"
  | "ebnf"
  | "editorconfig"
  | "eiffel"
  | "ejs"
  | "eta"
  | "elixir"
  | "elm"
  | "lua"
  | "etlua"
  | "erb"
  | "erlang"
  | "excel-formula"
  | "xlsx"
  | "xls"
  | "fsharp"
  | "factor"
  | "false"
  | "firestore-security-rules"
  | "flow"
  | "fortran"
  | "ftl"
  | "gml"
  | "gamemakerlanguage"
  | "gap"
  | "gcode"
  | "gdscript"
  | "gedcom"
  | "gettext"
  | "po"
  | "git"
  | "glsl"
  | "gn"
  | "gni"
  | "linker-script"
  | "ld"
  | "go"
  | "go-module"
  | "go-mod"
  | "graphql"
  | "groovy"
  | "less"
  | "scss"
  | "textile"
  | "haml"
  | "handlebars"
  | "hbs"
  | "mustache"
  | "haskell"
  | "hs"
  | "haxe"
  | "hcl"
  | "hlsl"
  | "hoon"
  | "hpkp"
  | "hsts"
  | "json"
  | "webmanifest"
  | "uri"
  | "url"
  | "http"
  | "ichigojam"
  | "icon"
  | "icu-message-format"
  | "idris"
  | "idr"
  | "ignore"
  | "gitignore"
  | "hgignore"
  | "npmignore"
  | "inform7"
  | "ini"
  | "io"
  | "j"
  | "java"
  | "scala"
  | "php"
  | "javadoclike"
  | "javadoc"
  | "javastacktrace"
  | "jolie"
  | "jq"
  | "typescript"
  | "n4js"
  | "n4jsd"
  | "json5"
  | "jsonp"
  | "jsstacktrace"
  | "julia"
  | "keepalived"
  | "keyman"
  | "kotlin"
  | "kt"
  | "kts"
  | "kusto"
  | "latex"
  | "tex"
  | "context"
  | "latte"
  | "scheme"
  | "lilypond"
  | "ly"
  | "liquid"
  | "lisp"
  | "emacs"
  | "elisp"
  | "emacs-lisp"
  | "livescript"
  | "llvm"
  | "log"
  | "lolcode"
  | "magma"
  | "makefile"
  | "mata"
  | "matlab"
  | "maxscript"
  | "mel"
  | "mermaid"
  | "metafont"
  | "mizar"
  | "mongodb"
  | "monkey"
  | "moonscript"
  | "moon"
  | "n1ql"
  | "nand2tetris-hdl"
  | "nand2tetris"
  | "neon"
  | "nevod"
  | "nginx"
  | "nim"
  | "nix"
  | "nsis"
  | "nsl"
  | "nsm"
  | "nso"
  | "nsp"
  | "nsr"
  | "nss"
  | "nsv"
  | "nsw"
  | "nt"
  | "nta"
  | "ntb"
  | "ntc"
  | "ntd"
  | "nte"
  | "ntf"
  | "ntg"
  | "nth"
  | "nti"
  | "ntp"
  | "ntq"
  | "ntr"
  | "nts"
  | "ntt"
  | "ntx"
  | "nty"
  | "ntz"
  | "nu"
  | "nup"
  | "nus"
  | "nv"
  | "nve"
  | "nvf"
  | "nvl"
  | "nvm"
  | "nvo"
  | "nvp"
  | "nvq"
  | "nvr"
  | "nvs"
  | "nvt"
  | "nvv"
  | "nvx"
  | "nvy"
  | "nw"
  | "nwb"
  | "nwv"
  | "nxc"
  | "nxl"
  | "nxq"
  | "nxr"
  | "nxs"
  | "nxt"
  | "ny"
  | "nym"
  | "nys"
  | "nyy"
  | "nz"
  | "o"
  | "oak"
  | "objc"
  | "objectpascal"
  | "ocaml"
  | "odin"
  | "opencl"
  | "openqasm"
  | "qasm"
  | "oz"
  | "parigp"
  | "parser"
  | "pascal"
  | "asp"
  | "pascaligo"
  | "psl"
  | "pcaxis"
  | "px"
  | "peoplecode"
  | "pcode"
  | "perl"
  | "perl6"
  | "phpdoc"
  | "plant-uml"
  | "plantuml"
  | "plsql"
  | "powerquery"
  | "pq"
  | "mscript"
  | "powershell"
  | "processing"
  | "prolog"
  | "promql"
  | "properties"
  | "proto"
  | "protobuf"
  | "stylus"
  | "swift"
  | "systemd"
  | "t4-templating"
  | "t4"
  | "t4-cs"
  | "vb"
  | "t4-vb"
  | "tap"
  | "tcl"
  | "tt2"
  | "toml"
  | "tremor"
  | "trickle"
  | "troy"
  | "typo"
  | "typoscript"
  | "uc"
  | "unrealscript"
  | "uc"
  | "uscript"
  | "uc"
  | "unrealscript"
  | "uc"
  | "uc"
  | "uc"
  | "uscript"
  | "uc"
  | "uorazor"
  | "v"
  | "vala"
  | "velocity"
  | "verilog"
  | "vhdl"
  | "vim"
  | "visual-basic"
  | "vb"
  | "vba"
  | "vbs"
  | "vbnet"
  | "vbscript"
  | "vcl"
  | "vim"
  | "visual-basic"
  | "vb"
  | "vba"
  | "vbs"
  | "vbnet"
  | "vbscript"
  | "vcl"
  | "vim"
  | "visual-basic"
  | "vb"
  | "vba"
  | "vbs"
  | "vbnet"
  | "vbscript"
  | "vcl"
  | "vim"
  | "visual-basic"
  | "vb"
  | "vba"
  | "vbs"
  | "vbnet"
  | "vbscript"
  | "vcl"
  | "vim"
  | "visual-basic"
  | "vb"
  | "vba"
  | "vbs"
  | "vbnet"
  | "vbscript"
  | "vcl"
  | "vim"
  | "visual-basic"
  | "vb"
  | "vba"
  | "vbs"
  | "vbnet"
  | "vbscript"
  | "vcl"
  | "vim"
  | "visual-basic"
  | "vb"
  | "vba"
  | "vbs"
  | "vbnet"
  | "vbscript"
  | "vcl"
  | "vim"
  | "visual-basic"
  | "vb"
  | "vba"
  | "vbs"
  | "vbnet"
  | "vbscript"
  | "vcl"
  | "w"
  | "warpscript"
  | "wasm"
  | "web-idl"
  | "webidl"
  | "wgsl"
  | "wiki"
  | "wolfram"
  | "wl"
  | "wolfram"
  | "mathematica"
  | "nb"
  | "wl"
  | "wolfram"
  | "mathematica"
  | "nb"
  | "wl"
  | "wolfram"
  | "mathematica"
  | "nb"
  | "wl"
  | "wolfram"
  | "mathematica"
  | "nb"
  | "wl"
  | "wolfram"
  | "mathematica"
  | "nb"
  | "wren"
  | "xeora"
  | "xeoracube"
  | "xquery"
  | "yang"
  | "zig";

const SupportedLanguages = {
  Markup: ["markup", "html", "xml", "svg", "mathml", "ssml", "atom", "rss"],
  CSS: ["css"],
  C_like: ["clike"],
  Regex: ["regex"],
  JavaScript: ["javascript", "js"],
  ABAP: ["abap"],
  ABNF: ["abnf"],
  ActionScript: ["actionscript"],
  Ada: ["ada"],
  Agda: ["agda"],
  AL: ["al"],
  ANTLR4: ["antlr4", "g4"],
  "Apache Configuration": ["apacheconf"],
  SQL: ["sql"],
  Apex: ["apex"],
  APL: ["apl"],
  AppleScript: ["applescript"],
  AQL: ["aql"],
  C: ["c"],
  "C++": ["cpp"],
  Arduino: ["arduino", "ino"],
  ARFF: ["arff"],
  "ARM Assembly": ["armasm", "arm-asm"],
  Bash: ["bash", "sh", "shell"],
  YAML: ["yaml", "yml"],
  Markdown: ["markdown", "md"],
  Arturo: ["arturo", "art"],
  AsciiDoc: ["asciidoc", "adoc"],
  "C#": ["csharp", "cs", "dotnet"],
  "ASP.NET (C#)": ["aspnet"],
  "6502 Assembly": ["asm6502"],
  "Atmel AVR Assembly": ["asmatmel"],
  AutoHotkey: ["autohotkey"],
  AutoIt: ["autoit"],
  AviSynth: ["avisynth", "avs"],
  "Avro IDL": ["avro-idl", "avdl"],
  AWK: ["awk", "gawk"],
  BASIC: ["basic"],
  Batch: ["batch"],
  BBcode: ["bbcode", "shortcode"],
  BBj: ["bbj"],
  Bicep: ["bicep"],
  Birb: ["birb"],
  Bison: ["bison"],
  BNF: ["bnf", "rbnf"],
  BQN: ["bqn"],
  Brainfuck: ["brainfuck"],
  BrightScript: ["brightscript"],
  Bro: ["bro"],
  CFScript: ["cfscript", "cfc"],
  ChaiScript: ["chaiscript"],
  CIL: ["cil"],
  "Cilk/C": ["cilkc", "cilk-c"],
  "Cilk/C++": ["cilkcpp", "cilkcpp", "cilk-cpp", "cilk"],
  Clojure: ["clojure"],
  CMake: ["cmake"],
  COBOL: ["cobol"],
  CoffeeScript: ["coffeescript", "coffee"],
  Concurnas: ["concurnas", "conc"],
  "Content-Security-Policy": ["csp"],
  Cooklang: ["cooklang"],
  Ruby: ["ruby", "rb"],
  Crystal: ["crystal"],
  CSV: ["csv"],
  CUE: ["cue"],
  Cypher: ["cypher"],
  D: ["d"],
  Dart: ["dart"],
  DataWeave: ["dataweave"],
  DAX: ["dax"],
  Dhall: ["dhall"],
  Diff: ["diff"],
  "Markup templating": ["markup-templating"],
  "Django/Jinja2": ["django", "jinja2"],
  "DNS zone file": ["dns-zone-file", "dns-zone"],
  Docker: ["docker", "dockerfile"],
  "DOT (Graphviz)": ["dot", "gv"],
  EBNF: ["ebnf"],
  EditorConfig: ["editorconfig"],
  Eiffel: ["eiffel"],
  EJS: ["ejs", "eta"],
  Elixir: ["elixir"],
  Elm: ["elm"],
  Lua: ["lua"],
  "Embedded Lua templating": ["etlua"],
  ERB: ["erb"],
  Erlang: ["erlang"],
  "Excel Formula": ["excel-formula", "xlsx", "xls"],
  "F#": ["fsharp"],
  Factor: ["factor"],
  False: ["false"],
  "Firestore security rules": ["firestore-security-rules"],
  Flow: ["flow"],
  Fortran: ["fortran"],
  "FreeMarker Template Language": ["ftl"],
  "GameMaker Language": ["gml", "gamemakerlanguage"],
  "GAP (CAS)": ["gap"],
  "G-code": ["gcode"],
  GDScript: ["gdscript"],
  GEDCOM: ["gedcom"],
  gettext: ["gettext", "po"],
  Git: ["git"],
  GLSL: ["glsl"],
  GN: ["gn", "gni"],
  "GNU Linker Script": ["linker-script", "ld"],
  Go: ["go"],
  "Go module": ["go-module", "go-mod"],
  GraphQL: ["graphql"],
  Groovy: ["groovy"],
  Less: ["less"],
  "Sass (SCSS)": ["scss"],
  Textile: ["textile"],
  Haml: ["haml"],
  Handlebars: ["handlebars", "handlebars", "hbs", "mustache"],
  Haskell: ["haskell", "hs"],
  Haxe: ["haxe"],
  HCL: ["hcl"],
  HLSL: ["hlsl"],
  Hoon: ["hoon"],
  "HTTP Public-Key-Pins": ["hpkp"],
  "HTTP Strict-Transport-Security": ["hsts"],
  JSON: ["json", "webmanifest"],
  URI: ["uri", "url"],
  HTTP: ["http"],
  IchigoJam: ["ichigojam"],
  Icon: ["icon"],
  "ICU Message Format": ["icu-message-format"],
  Idris: ["idris", "idr"],
  ignore: ["ignore", "ignore", "gitignore", "hgignore", "npmignore"],
  "Inform 7": ["inform7"],
  Ini: ["ini"],
  Io: ["io"],
  J: ["j"],
  Java: ["java"],
  Scala: ["scala"],
  PHP: ["php"],
  "JavaDoc-like": ["javadoclike"],
  JavaDoc: ["javadoc"],
  "Java stack trace": ["javastacktrace"],
  Jolie: ["jolie"],
  JQ: ["jq"],
  TypeScript: ["typescript", "ts"],
  JSDoc: ["jsdoc"],
  N4JS: ["n4js", "n4jsd"],
  JSON5: ["json5"],
  JSONP: ["jsonp"],
  "JS stack trace": ["jsstacktrace"],
  Julia: ["julia"],
  Keepalived: ["keepalived"],
  Keyman: ["keyman"],
  Kotlin: ["kotlin", "kotlin", "kt", "kts"],
  Kusto: ["kusto"],
  LaTeX: ["latex", "latex", "tex", "context"],
  Latte: ["latte"],
  Scheme: ["scheme"],
  LilyPond: ["lilypond", "ly"],
  Liquid: ["liquid"],
  Lisp: ["lisp", "lisp", "emacs", "elisp", "emacs-lisp"],
  LiveScript: ["livescript"],
  "LLVM IR": ["llvm"],
  "Log file": ["log"],
  LOLCODE: ["lolcode"],
  "Magma (CAS)": ["magma"],
  Makefile: ["makefile"],
  Mata: ["mata"],
  MATLAB: ["matlab"],
  MAXScript: ["maxscript"],
  MEL: ["mel"],
  Mermaid: ["mermaid"],
  METAFONT: ["metafont"],
  Mizar: ["mizar"],
  MongoDB: ["mongodb"],
  Monkey: ["monkey"],
  MoonScript: ["moonscript", "moon"],
  N1QL: ["n1ql"],
  "Nand To Tetris HDL": ["nand2tetris-hdl"],
  Naninovel: ["naniscript", "nani"],
  NASM: ["nasm"],
  NEON: ["neon"],
  Nevod: ["nevod"],
  nginx: ["nginx"],
  Nim: ["nim"],
  Nix: ["nix"],
  NSIS: ["nsis"],
  ObjectiveC: ["objectivec", "objc"],
  OCaml: ["ocaml"],
  Odin: ["odin"],
  OpenCL: ["opencl"],
  OpenQasm: ["openqasm", "qasm"],
  Oz: ["oz"],
  "PARI/GP": ["parigp"],
  Parser: ["parser"],
  Pascal: ["pascal", "objectpascal"],
  Pascaligo: ["pascaligo"],
  "PATROL Scripting Language": ["psl"],
  "PC-Axis": ["pcaxis", "px"],
  PeopleCode: ["peoplecode", "pcode"],
  Perl: ["perl"],
  PHPDoc: ["phpdoc"],
  PlantUML: ["plant-uml", "plantuml"],
  "PL/SQL": ["plsql"],
  PowerQuery: ["powerquery", "powerquery", "pq", "mscript"],
  PowerShell: ["powershell"],
  Processing: ["processing"],
  Prolog: ["prolog"],
  PromQL: ["promql"],
  properties: ["properties"],
  "Protocol Buffers": ["protobuf"],
  Stylus: ["stylus"],
  Twig: ["twig"],
  Pug: ["pug"],
  Puppet: ["puppet"],
  PureBasic: ["purebasic", "pbfasm"],
  Python: ["python", "py"],
  Q: ["qsharp", "qs"],
  QML: ["qml"],
  Qore: ["qore"],
  R: ["r"],
  Racket: ["racket", "rkt"],
  "Razor C#": ["cshtml", "razor"],
  "React JSX": ["jsx"],
  "React TSX": ["tsx"],
  Reason: ["reason"],
  Rego: ["rego"],
  "Ren'py": ["renpy", "rpy"],
  ReScript: ["rescript", "res"],
  "reST (reStructuredText)": ["rest"],
  Rip: ["rip"],
  Roboconf: ["roboconf"],
  "Robot Framework": ["robotframework", "robot"],
  Rust: ["rust"],
  SAS: ["sas"],
  "Sass (Sass)": ["sass"],
  "Shell session": ["shell-session", "sh-session", "shellsession"],
  Smali: ["smali"],
  Smalltalk: ["smalltalk"],
  Smarty: ["smarty"],
  SML: ["sml", "smlnj"],
  "Solidity (Ethereum)": ["solidity", "sol"],
  "Solution file": ["solution-file", "sln"],
  Soy: ["soy"],
  "Splunk SPL": ["splunk-spl"],
  SQF: ["sqf"],
  Squirrel: ["squirrel"],
  Stan: ["stan"],
  "Stata Ado": ["stata"],
  "Structured Text (IEC 61131-3)": ["iecst"],
  SuperCollider: ["supercollider", "sclang"],
  Swift: ["swift"],
  "Systemd configuration file": ["systemd"],
  "T4 templating": ["t4-templating"],
  "T4 Text Templates (C#)": ["t4-cs", "t4"],
  "VB.Net": ["vbnet"],
  "T4 Text Templates (VB)": ["t4-vb"],
  TAP: ["tap"],
  Tcl: ["tcl"],
  "Template Toolkit 2": ["tt2"],
  TOML: ["toml"],
  Tremor: ["tremor", "trickle", "troy"],
  TypoScript: ["typoscript", "tsconfig"],
  UnrealScript: ["unrealscript", "uscript", "uc"],
  "UO Razor Script": ["uorazor"],
  V: ["v"],
  Vala: ["vala"],
  Velocity: ["velocity"],
  Verilog: ["verilog"],
  VHDL: ["vhdl"],
  vim: ["vim"],
  "Visual Basic": ["visual-basic", "vb", "vba", "vbs"],
  WarpScript: ["warpscript"],
  WebAssembly: ["wasm"],
  "Web IDL": ["web-idl", "webidl"],
  WGSL: ["wgsl"],
  "Wiki markup": ["wiki"],
  "Wolfram language": ["wolfram", "mathematica", "wl", "nb"],
  Wren: ["wren"],
  Xeora: ["xeora", "xeoracube"],
  XQuery: ["xquery"],
  YANG: ["yang"],
  Zig: ["zig"],
};

export { type TypeSupportedLanguages, SupportedLanguages };
