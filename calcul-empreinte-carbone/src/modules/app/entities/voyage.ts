export interface IVoyage {
    id?: number;
    voyageEnCamion?: boolean;
    distanceKm?: number;
    consommationPour100Km?: number;
    get quantiteCO2(): number;
}

export class Voyage implements IVoyage {

    constructor(
        public id?: number,
        public distanceKm?: number,
        public consommationPour100Km?: number,
        public voyageEnCamion?: boolean) {
    }

    get quantiteCO2(): number {
        return ((this.distanceKm || 0) * (this.consommationPour100Km || 0)) / 100 * 2.3;
    }

}