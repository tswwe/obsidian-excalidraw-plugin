export const EXCALIDRAW_AUTOMATE_INFO = [
  {
    field: "plugin",
    desc: "The ExcalidrawPlugin object",
    after: '.',
    alt: true,
  },
  {
    field: "elementsDict",
    desc: "The {} dictionary object, contains the ExcalidrawElements currently edited in Automate indexed by el.id",
    after: '[""]',
    alt: true,
  },
  {
    field: "imagesDict",
    desc: "the images files including DataURL, indexed by fileId",
    after: '[""]',
    alt: true,
  },
  {
    field: "style.strokeColor",
    desc: "[string] valid css color. See https://www.w3schools.com/colors/default.asp for more.",
    after: '',
    alt: true,
  },
  {
    field: "style.backgroundColor",
    desc: "[string] valid css color. See https://www.w3schools.com/colors/default.asp for more.",
    after: '',
    alt: true,
  },
  {
    field: "style.angle",
    desc: "[number] rotation of the object in radian",
    after: '',
    alt: true,
  },
  {
    field: "style.fillStyle",
    desc: "[string] 'hachure' | 'cross-hatch' | 'solid'",
    after: '',
    alt: true,
  },
  {
    field: "style.strokeWidth",
    desc: "[number]",
    after: '',
    alt: true,
  },
  {
    field: "style.strokeStyle",
    desc: "[string] 'solid' | 'dashed' | 'dotted'",
    after: '',
    alt: true,
  },
  {
    field: "style.roughness",
    desc: "[number]",
    after: '',
    alt: true,
  },
  {
    field: "style.opacity",
    desc: "[number]",
    after: '',
    alt: true,
  },  
  {
    field: "style.strokeSharpness",
    desc: "[string] 'round' | 'sharp'",
    after: '',
    alt: true,
  },
  {
    field: "style.fontFamily",
    desc: "[number] 1: Virgil, 2:Helvetica, 3:Cascadia, 4:LocalFont",
    after: '',
    alt: true,
  },
  {
    field: "style.fontSize",
    desc: "[number]",
    after: '',
    alt: true,
  },  
  {
    field: "style.textAlign",
    desc: "[string] 'left' | 'right' | 'center'",
    after: '',
    alt: true,
  },
  {
    field: "style.verticalAlign",
    desc: "[string] for future use, has no effect currently; 'top' | 'bottom' | 'middle'",
    after: '',
    alt: true,
  },
  {
    field: "style.startArrowHead",
    desc: "[string] 'triangle' | 'dot' | 'arrow' | 'bar' | null",
    after: '',
    alt: true,
  },
  {
    field: "style.endArrowHead",
    desc: "[string] 'triangle' | 'dot' | 'arrow' | 'bar' | null",
    after: '',
    alt: true,
  },
  {
    field: "canvas.theme",
    desc: "[string] 'dark' | 'light'",
    after: '',
    alt: true,
  },
  {
    field: "canvas.viewBackgroundColor",
    desc: "[string] valid css color. See https://www.w3schools.com/colors/default.asp for more.",
    after: '',
    alt: true,
  },
  {
    field: "canvas.gridSize",
    desc: "[number]",
    after: '',
    alt: true,
  },
  {
    field: "addToGroup",
    desc: "addToGroup(objectIds: []): string;",
    after: '',
    alt: true,
  },
  {
    field: "toCliboard",
    desc: "toClipboard(templatePath?: string): void; //copies current elements using template to clipboard, ready to be pasted into an excalidraw canvas",
    after: '',
    alt: true,
  },
  {
    field: "getElements",
    desc: "getElements(): ExcalidrawElement[]; //get all elements from ExcalidrawAutomate elementsDict",
    after: '',
    alt: true,
  },
  {
    field: "create",
    desc: 'create(params?: {//create a drawing and save it to filename\n  filename?: string; //if null: default filename as defined in Excalidraw settings\n  foldername?: string; //if null: default folder as defined in Excalidraw settings\n  templatePath?: string;\n  onNewPane?: boolean;\n  frontmatterKeys?: {\n    "excalidraw-plugin"?: "raw" | "parsed";\n    "excalidraw-link-prefix"?: string;\n    "excalidraw-link-brackets"?: boolean;\n    "excalidraw-url-prefix"?: string;\n  };\n}): Promise<string>;',
    after: '',
    alt: true,
  },
   {
    field: "createSVG",
    desc: 'createSVG(\n  templatePath?: string,\n  embedFont?: boolean,\n  exportSettings?: ExportSettings, //use ExcalidrawAutomate.getExportSettings(boolean,boolean)\n  loader?: EmbeddedFilesLoader, //use ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?)\n  theme?: string,\n): Promise<SVGSVGElement>;',
    after: '',
    alt: true,
  }, 
  {
    field: "createPNG",
    desc: 'createPNG(\n  templatePath?: string,\n  scale?: number,\n  exportSettings?: ExportSettings, //use ExcalidrawAutomate.getExportSettings(boolean,boolean)\n  loader?: EmbeddedFilesLoader, //use ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?)\n  theme?: string,\n): Promise<any>;',
    after: '',
    alt: true,
  }, 
  {
    field: "wrapText",
    desc: "wrapText(text: string, lineLen: number): string;",
    after: '',
    alt: true,
  },
  {
    field: "addRect",
    desc: "addRect(topX: number, topY: number, width: number, height: number): string;",
    after: '',
    alt: true,
  },
  {
    field: "addDiamond",
    desc: "addDiamond(topX: number, topY: number, width: number, height: number): string;",
    after: '',
    alt: true,
  },
  {
    field: "addEllipse",
    desc: "addEllipse(topX: number, topY: number, width: number, height: number): string;",
    after: '',
    alt: true,
  },
  {
    field: "addBlob",
    desc: "addBlob(topX: number, topY: number, width: number, height: number): string;",
    after: '',
    alt: true,
  },
  {
    field: "addText",
    desc: 'addText(\n  topX: number,\n  topY: number,\n  text: string,\n  formatting?: {\n    wrapAt?: number;\n    width?: number;\n    height?: number;\n    textAlign?: string;\n    box?: boolean | "box" | "blob" | "ellipse" | "diamond"; //if !null, text will be boxed\n    boxPadding?: number;\n  },\n  id?: string,\n): string; //returns the id of the TextElement. If the text element is boxed i.e. it is a sticky note, then the id of the container object',
    after: '',
    alt: true,
  },
  {
    field: 'addLine',
    desc: 'addLine(points: [[x: number, y: number]]): string;',
    after: '',
    alt: true,
  },
  {
    field: 'addArrow',
    desc: 'addArrow(\n  points: [[x: number, y: number]],\n  formatting?: {\n    startArrowHead?: string;\n    endArrowHead?: string;\n    startObjectId?: string;\n    endObjectId?: string;\n  },\n): string;',
    after: '',
    alt: true,
  },
  {
    field: 'addImage',
    desc: 'addImage(topX: number, topY: number, imageFile: TFile): Promise<string>;',
    after: '',
    alt: true,
  },
  {
    field: 'addLaTex',
    desc: 'addLaTex(topX: number, topY: number, tex: string): Promise<string>;',
    after: '',
    alt: true,
  },
  {
    field: 'connectObjects',
    desc: 'connectObjects(\n  objectA: string,\n  connectionA: ConnectionPoint, //type ConnectionPoint = "top" | "bottom" | "left" | "right" | null\n  objectB: string,\n  connectionB: ConnectionPoint, //when passed null, Excalidraw will automatically decide\n  formatting?: {\n    numberOfPoints?: number; //points on the line. Default is 0 ie. line will only have a start and end point\n    startArrowHead?: string; //"triangle"|"dot"|"arrow"|"bar"|null\n    endArrowHead?: string; //"triangle"|"dot"|"arrow"|"bar"|null\n    padding?: number;\n  },\n): void;',
    after: '',
    alt: true,
  },
  {
    field: 'clear',
    desc: 'clear(): void; //clear elementsDict and imagesDict only',
    after: '',
    alt: true,
  },
  {
    field: 'reset',
    desc: 'reset(): void; //clear() + reset all style values to default',
    after: '',
    alt: true,
  },  
  {
    field: 'isExcalidrawFile',
    desc: 'isExcalidrawFile(f: TFile): boolean; //returns true if MD file is an Excalidraw file',
    after: '',
    alt: true,
  },  
  {
    field: 'targetView',
    desc: 'targetView: ExcalidrawView; //the Obsidian view currently edited',
    after: '',
    alt: true,
  }, 
  {
    field: 'setView',
    desc: 'setView(view: ExcalidrawView | "first" | "active"): ExcalidrawView;',
    after: '',
    alt: true,
  }, 
  {
    field: 'getExcalidrawAPI',
    desc: 'getExcalidrawAPI(): any; //https://github.com/excalidraw/excalidraw/tree/master/src/packages/excalidraw#ref',
    after: '',
    alt: true,
  },
  {
    field: 'getViewElements',
    desc: 'getViewElements(): ExcalidrawElement[]; //get elements in View',
    after: '',
    alt: true,
  }, 
  {
    field: 'deleteViewElements',
    desc: 'deleteViewElements(el: ExcalidrawElement[]): boolean;',
    after: '',
    alt: true,
  }, 
  {
    field: 'getViewSelectedElement',
    desc: 'getViewSelectedElement(): ExcalidrawElement; //get the selected element in the view, if more are selected, get the first',
    after: '',
    alt: true,
  },
  {
    field: 'getViewSelectedElements',
    desc: 'getViewSelectedElements(): ExcalidrawElement[];',
    after: '',
    alt: true,
  }, 
  {
    field: 'getViewFileForImageElement',
    desc: 'getViewFileForImageElement(el: ExcalidrawElement): TFile | null; //Returns the TFile file handle for the image element',
    after: '',
    alt: true,
  }, 
  {
    field: 'copyViewElementsToEAforEditing',
    desc: 'copyViewElementsToEAforEditing(elements: ExcalidrawElement[]): void; //copies elements from view to elementsDict for editing',
    after: '',
    alt: true,
  }, 
  {
    field: 'viewToggleFullScreen',
    desc: 'viewToggleFullScreen(forceViewMode?: boolean): void;',
    after: '',
    alt: true,
  },
  {
    field: 'connectObjectWithViewSelectedElement',
    desc: 'connectObjectWithViewSelectedElement( //connect an object to the selected element in the view\n  objectA: string, //see connectObjects\n  connectionA: ConnectionPoint,\n  connectionB: ConnectionPoint,\n  formatting?: {\n    numberOfPoints?: number;\n    startArrowHead?: string;\n    endArrowHead?: string;\n    padding?: number;\n  },\n): boolean;',
    after: '',
    alt: true,
  }, 
  {
    field: 'addElementsToView',
    desc: 'addElementsToView( //Adds elements from elementsDict to the current view\n  repositionToCursor?: boolean, //default is false\n  save?: boolean, //default is true\n  //newElementsOnTop controls whether elements created with ExcalidrawAutomate\n  //are added at the bottom of the stack or the top of the stack of elements already in the view\n  //Note that elements copied to the view with copyViewElementsToEAforEditing retain their\n  //position in the stack of elements in the view even if modified using EA\n  newElementsOnTop?: boolean, //default is false, i.e. the new elements get to the bottom of the stack\n): Promise<boolean>;',
    after: '',
    alt: true,
  },
  {
    field: 'onDropHook',
    desc: 'onDropHook(data: {\n  //if set Excalidraw will call this function onDrop events\n  ea: ExcalidrawAutomate;\n  event: React.DragEvent<HTMLDivElement>;\n  draggable: any; //Obsidian draggable object\n  type: "file" | "text" | "unknown";\n  payload: {\n    files: TFile[]; //TFile[] array of dropped files\n    text: string; //string\n  };\n  excalidrawFile: TFile; //the file receiving the drop event\n  view: ExcalidrawView; //the excalidraw view receiving the drop\n  pointerPosition: { x: number; y: number }; //the pointer position on canvas at the time of drop\n}): boolean; //a return of true will stop the default onDrop processing in Excalidraw',
    after: '',
    alt: true,
  },
  {
    field: 'mostRecentMarkdownSVG',
    desc: 'mostRecentMarkdownSVG: SVGSVGElement; //Markdown renderer will drop a copy of the most recent SVG here for debugging purposes',
    after: '',
    alt: true,
  },
  {
    field: 'getEmbeddedFilesLoader',
    desc: 'getEmbeddedFilesLoader(isDark?: boolean): EmbeddedFilesLoader; //utility function to generate EmbeddedFilesLoader object',
    after: '',
    alt: true,
  },
  {
    field: 'getExportSettings',
    desc: 'getExportSettings( //utility function to generate ExportSettings object\n  withBackground: boolean,\n  withTheme: boolean,\n): ExportSettings;',
    after: '',
    alt: true,
  },
  {
    field: 'getBoundingBox',
    desc: 'getBoundingBox(elements: ExcalidrawElement[]): {\n  //get bounding box of elements\n  topX: number; //bounding box is the box encapsulating all of the elements completely\n  topY: number;\n  width: number;\n  height: number;\n};',
    after: '',
    alt: true,
  },
  {
    field: 'getMaximumGroups',
    desc: 'getMaximumGroups(elements: ExcalidrawElement[]): ExcalidrawElement[][]; //elements grouped by the highest level groups',
    after: '',
    alt: true,
  },
  {
    field: 'getLargestElement',
    desc: 'getLargestElement(elements: ExcalidrawElement[]): ExcalidrawElement;\n//gets the largest element from a group. useful when a text element is grouped with a box, and you want to connect an arrow to the box',
    after: '',
    alt: true,
  },
  {
    field: 'intersectElementWithLine',
    desc: 'intersectElementWithLine(\n  element: ExcalidrawBindableElement,\n  a: readonly [number, number],\n  b: readonly [number, number],\n  gap?: number, //if given, element is inflated by this value\n): Point[];\n// Returns 2 or 0 intersection points between line going through `a` and `b`\n// and the `element`, in ascending order of distance from `a`.',
    after: '',
    alt: true,
  },
  {
    field: 'getLargestElement',
    desc: 'getLargestElement(elements: ExcalidrawElement[]): ExcalidrawElement;\n//gets the largest element from a group. useful when a text element is grouped with a box, and you want to connect an arrow to the box',
    after: '',
    alt: true,
  },
  {
    field: 'activeScript',
    desc: 'activeScript: string; //Mandatory to set before calling the get and set ScriptSettings functions. Set automatically by the ScriptEngine\nSee for more details: https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html',
    after: '',
    alt: true,
  },
   {
    field: 'getScriptSettings',
    desc: 'getScriptSettings(): {}; //Returns script settings. Saves settings in plugin settings, under the activeScript key\nSee for more details: https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html',
    after: '',
    alt: true,
  }, 
  {
    field: 'setScriptSettings',
    desc: 'setScriptSettings(settings: any): Promise<void>; //sets script settings.\nSee for more details: https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html',
    after: '',
    alt: true,
  }, 
  {
    field: 'openFileInNewOrAdjacentLeaf',
    desc: 'openFileInNewOrAdjacentLeaf(file: TFile): WorkspaceLeaf; //Open a file in a new workspaceleaf or reuse an existing adjacent leaf depending on Excalidraw Plugin Settings',
    after: '',
    alt: true,
  }, 
  {
    field: 'measureText',
    desc: 'measureText(text: string): { width: number; height: number }; //measure text size based on current style settings',
    after: '',
    alt: true,
  }, 
  {
    field: 'verifyMinimumPluginVersion',
    desc: 'verifyMinimumPluginVersion(requiredVersion: string): boolean;\n//verifyMinimumPluginVersion returns true if plugin version is >= than required\n//recommended use:\n//if(!ea.verifyMinimumPluginVersion || !ea.verifyMinimumPluginVersion("1.5.20")) {new Notice("message");return;}',
    after: '',
    alt: true,
  },
];