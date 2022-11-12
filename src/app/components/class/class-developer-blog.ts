
export class DataBlog{
    public creation_date!: Date;
    public update_date!: Date;
    public id!: number;
    public title!: string;
    public description!: string;
    public content!: string;
    public imagenHeader: string = '';
    public imagenBody: string = '';

    constructor(
        creation_date: Date,
        update_date: Date,
        id: number,
        title: string,
        description: string,
        content: string,
        imagenHeader?: string,
        imagenBody?: string
    ){}
}


export class DataResponseBlog {
    public dataList: DataBlog[] = [];
    public numberPage: number = 0;
    public sizePage: number = 0;
    public dataLength: number = 0;
    public totalPages: number = 0;
    public lastPage: boolean = false;

    constructor(
        dataList: DataBlog[],
        numberPage: number,
        sizePage: number,
        dataLength: number,
        totalPages: number,
        lastPage: boolean
    ){}
}