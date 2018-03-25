export class UbbletTransfer {
  id: number;
  code: number;
  target_user: string;
  amount: number;
  fee: number;
  description: string;
  created_at: string;
  wallet: Object;

  construct() {
    this.id = 0;
    this.code = 0;
    this.target_user = "";
    this.amount = 0;
    this.fee = 0;
    this.description = "";
    this.created_at = "";
    this.wallet = new Object();

  }
}