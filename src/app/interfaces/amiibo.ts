
// Generated by https://quicktype.io

export interface Nintendo {
    amiibo: Amiibo[];
}

export interface Amiibo {
    amiiboSeries: string;
    character:    string;
    gameSeries:   string;
    head:         string;
    image:        string;
    name:         string;
    release:      Release;
    tail:         string;
    type:         string;
}

export interface Release {
    au: Date;
    eu: Date;
    jp: Date;
    na: Date;
}
