export interface ReportDataInterface {
    columnsName: string[]
    listItration: ListItration[]
  }
   
  export interface ListItration {
    callExecutionTime: string
    columnValue: ColumnValue[]
  }
   
  export interface ColumnValue {
    columnName: string
    columnValue: string
  }