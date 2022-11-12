export interface IDeveloperAdmin {
    title: string;
    description: string;
    content: string;
    imagenHeader?: string;
    imagenBody?: string;
    id?: number;
}

export interface IDataValues {
    creation_date: Date;
    update_date: Date;
    id: number;
    title: string;
    description: string;
    content: string;
    imagenHeader?: any;
    imagenBody?: any;
}

export interface IDataResponse {
    dataList: IDataValues[];
    numberPage: number;
    sizePage: number;
    dataLength: number;
    totalPages: number;
    lastPage: boolean;
}