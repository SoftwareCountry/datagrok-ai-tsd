declare module 'datagrok-api/dg' {
    import * as _chem from 'datagrok-api/src/chem';
    import * as _ml from 'datagrok-api/src/ml';
    import * as _utils from 'datagrok-api/src/utils';

    export * from 'datagrok-api/src/const';
    export * from 'datagrok-api/src/events';
    export * from 'datagrok-api/src/dapi';
    export * from 'datagrok-api/src/dataframe';
    export * from 'datagrok-api/src/entities';
    export * from 'datagrok-api/src/functions';
    export * from 'datagrok-api/src/grid';
    export * from 'datagrok-api/src/widgets';
    export * from 'datagrok-api/src/view';
    export * from 'datagrok-api/src/viewer'
    export * from 'datagrok-api/src/docking';
    export * from 'datagrok-api/src/wrappers';

    export let chem: typeof _chem;
    export let ml: typeof _ml;
    export let utils: typeof _utils;
}