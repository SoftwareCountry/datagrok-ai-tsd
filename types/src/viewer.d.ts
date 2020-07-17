declare module "datagrok-ui/src/viewer" {

    import {VIEWER} from 'datagrok-ai/src/const';
    import {DataFrame} from "datagrok-ai/src/dataframe";
    
    /**
     * Represents a {@link https://datagrok.ai/help/visualize/viewers | viewer}.
     See also {@link https://datagrok.ai/help/develop/js-api#pre-defined-viewers}

     Use Viewer to control the viewers. To develop a custom viewer, {@see JsViewer}.
     * @example
     * let view = grok.shell.addTableView(grok.data.testData('demog', 5000));
     view.scatterPlot({
     *      x: 'height',
     *      y: 'weight',
     *      size: 'age',
     *      color: 'race',
     *    });
     */
    export class Viewer {
        /**
         * Creates a new viewer of the specified type.
         */
        static fromType(viewerType: VIEWER, table: DataFrame, options?: any | null): Viewer;

        /**
         * Sets viewer options. See also {@link getOptions}
         Sample: https://public.datagrok.ai/js/samples/ui/viewers/scatter-plot
         */
        setOptions(): void;

        /**
         * Gets viewer options. See also {@link getOptions}
         Sample: https://public.datagrok.ai/js/samples/ui/viewers/scatter-plot
         */
        getOptions(): void;

        /**
         * Closes and detaches the viewer.
         */
        close(): void;

        /**
         * Visual root.
         */
        root: HTMLElement;
    }

    /**
     * Subclass JsViewer to implement a DataFrame-bound Datagrok viewer in JavaScript.
     See an example on github: {@link https://github.com/datagrok-ai/public/tree/master/packages/Leaflet}
     */
    export class JsViewer {
        root: HTMLElement;
        properties: Property[];
        dataFrame: DataFrame;
        subs: StreamSubscription[];

        /**
         * Gets called when a table is attached to the viewer.
         */
        onTableAttached(): void;

        /**
         * Gets called when viewer's property is changed.
         * @param property - or null, if multiple properties were changed.
         */
        onPropertyChanged(property: Property): void;

        /**
         * Gets called when viewer's size is changed.
         */
        onSizeChanged(width: number, height: number): void;

        /**
         * Gets called when this viewer is detached.
         */
        detach(): void;

        /**
         * Gets property ba name (case-sensitive).
         */
        getProperty(name: string): Property;

        /**
         * cleanup() will get called when the viewer is disposed
         */
        registerCleanup(cleanup: (...params: any[]) => any): void;

        /**
         * Returns the column bound to the specified data property.
         Note that "ColumnName" suffix (this determines whether this is a data property) should be omitted.
         */
        column(dataPropertyName: string): Column;

        /**
         * Registers an integer property with the specified name and defaultValue
         */
        int(propertyName: ViewerPropertyType, defaultValue: number): number;

        /**
         * Registers a floating point property with the specified name and defaultValue
         */
        float(propertyName: ViewerPropertyType, defaultValue: number): number;

        /**
         * Registers a string property with the specified name and defaultValue
         */
        string(propertyName: ViewerPropertyType, defaultValue: string): string;

        /**
         * Registers a string list property with the specified name and defaultValue
         */
        stringList(propertyName: ViewerPropertyType, defaultValue: string[]): string[];

        /**
         * Registers a boolean property with the specified name and defaultValue
         */
        bool(propertyName: ViewerPropertyType, defaultValue: boolean): boolean;

        /**
         * Registers a datetime property with the specified name and defaultValue
         */
        dateTime(propertyName: ViewerPropertyType, defaultValue: DateTime): DateTime;
    }
}