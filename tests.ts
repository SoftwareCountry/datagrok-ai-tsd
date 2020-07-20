import {similaritySearch, svgMol} from 'datagrok-ai/src/chem';

import {SIMILARITY_METRIC} from 'datagrok-ai/src/const';
import {Column} from "datagrok-ai/src/dataframe";
import { Grid } from 'datagrok-ai/src/grid';
///<reference path="./types/src/const.d.ts"/>
///<reference path="./types/src/dataframe.d.ts"/>

svgMol("SSIS", 100, 200);

const intColumn = Column.int("a", 10);

const s = similaritySearch(intColumn, "SSSS", SIMILARITY_METRIC.COSINE, 100, 100);

Grid.create({d: {}});