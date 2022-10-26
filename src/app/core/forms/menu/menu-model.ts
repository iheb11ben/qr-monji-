export interface MenuModel {
  _id?: string;
  nomQr: string;
  name: string;
  plat: [{nomPlat: string, prixPlat: number}];
  user: string;
}
