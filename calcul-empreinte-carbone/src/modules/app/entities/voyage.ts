export interface IVoyage {
    id: number;
    distanceKm: number;
    consommationPour100Km: number;
    get quantiteCO2(): number;
}

export class Voyage implements IVoyage {

    constructor(
        public id: number,
        public distanceKm: number,
        public consommationPour100Km: number) {
    }

    get quantiteCO2(): number {
        return (this.distanceKm * this.consommationPour100Km) / 100 * 2.3;
    }

}