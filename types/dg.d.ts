declare module 'datagrok-ai/dg' {
    import * as _chem from 'datagrok-ai/src/chem';
    import * as _ml from 'datagrok-ai/src/ml';
    import * as _utils from 'datagrok-ai/src/utils';

    export * from 'datagrok-ai/src/const';
    export * from 'datagrok-ai/src/events';
    export * from 'datagrok-ai/src/dapi';
    export * from 'datagrok-ai/src/dataframe';
    export * from 'datagrok-ai/src/entities';
    export * from 'datagrok-ai/src/functions';
    export * from 'datagrok-ai/src/grid';
    export * from 'datagrok-ai/src/widgets';
    export * from 'datagrok-ai/src/view';
    export * from 'datagrok-ai/src/viewer'
    export * from 'datagrok-ai/src/docking';
    export * from 'datagrok-ai/src/wrappers';

    export let chem: typeof _chem;
    export let ml: typeof _ml;
    export let utils: typeof _utils;
}