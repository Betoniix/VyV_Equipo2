export type LenderData  = {to: string, password : string, name: string}

export class LenderCache {
    private static _instance: LenderCache | null = null
    private emails : LenderData[] = []

    private constructor(){}

    static get instance(){
        if(this._instance === null){
            this._instance = new LenderCache()
        }
        return this._instance
    }

    get LenderEmailList(){
        return this.emails
    }

    set PushEmailData(data: LenderData){
        this.emails.push(data)
    }
}