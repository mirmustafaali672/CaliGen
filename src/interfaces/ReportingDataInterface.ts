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

  export interface CountOfUsageInterface {
    totalDeviceCount: number
    reservedCount: number
    availableCount: number
    calibratedCount: number
    notCalibratedCount: number
    problemReportedCount: number
  }

  export interface LineChartInterface {
    categories: string[]
    series: Series[]
  }
   
  export interface Series {
    name: string
    data: number[]
  }
  