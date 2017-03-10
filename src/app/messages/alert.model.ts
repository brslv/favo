export class AlertModel {
  public static TYPE_SUCCESS = 'success';
  
  constructor(public message: string, public type: string) {}
}
