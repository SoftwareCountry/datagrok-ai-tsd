/*import * as _chem from './src/chem';
import * as _ml from './src/ml';
import {Dapi} from "./src/dapi";
import {Functions} from "./src/functions";
import {Events} from "./src/events";
import {Settings, Shell} from "./src/shell";
import {Data} from "./src/data";*/

declare module "datagrok-ai/grok" {
    import * as _chem from 'datagrok-ai/src/chem';
    import * as _ml from 'datagrok-ai/src/ml';
    import {Dapi} from "datagrok-ai/src/dapi";
    import {Functions} from "datagrok-ai/src/functions";
    import {Events} from "datagrok-ai/src/events";
    import {Settings, Shell} from "datagrok-ai/src/shell";
    import {Data} from "datagrok-ai/src/data";
    
    export let functions: Functions;
    export let events: Events;
    export let dapi: Dapi;
    export let shell: Shell;
    export let settings: Settings;
    export let data: Data;
    export let chem: typeof _chem;
    export let ml: typeof _ml;
}