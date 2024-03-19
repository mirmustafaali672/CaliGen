export interface TransactionModalStateInterface 
{
    visible: boolean,
    message: string, 
    status: number,
    onClose: any
}


//here status = 1 means success 
//status = 0 means error
//status = -1 means warning