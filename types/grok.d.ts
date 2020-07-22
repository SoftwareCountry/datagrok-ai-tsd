/*import * as _chem from './src/chem';
import * as _ml from './src/ml';
import {Dapi} from "./src/dapi";
import {Functions} from "./src/functions";
import {Events} from "./src/events";
import {Settings, Shell} from "./src/shell";
import {Data} from "./src/data";*/

declare module "datagrok-api/grok" {
    import * as _chem from 'datagrok-api/src/chem';
    import * as _ml from 'datagrok-api/src/ml';
    import {Dapi} from "datagrok-api/src/dapi";
    import {Functions} from "datagrok-api/src/functions";
    import {Events} from "datagrok-api/src/events";
    import {Settings, Shell} from "datagrok-api/src/shell";
    import {Data} from "datagrok-api/src/data";
    
    export let functions: Functions;
    export let events: Events;
    export let dapi: Dapi;
    export let shell: Shell;
    export let settings: Settings;
    export let data: Data;
    export let chem: typeof _chem;
    export let ml: typeof _ml;
}