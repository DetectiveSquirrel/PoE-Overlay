export interface ItemOverviewResponse {
    lines: ItemOverviewLine[];
}

export interface ItemOverviewLine {
    name: string;
    baseType: string;
    links: number;
    chaosValue: number;
    sparkline: SparkLine;
}

export interface SparkLine {
    data: number[];
    totalChange: number;
}
