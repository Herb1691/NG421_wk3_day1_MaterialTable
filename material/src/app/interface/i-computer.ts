export interface IComputer {
    id?: number;
    systemName: string;
    operatingSystem: string;
    systemUpdated: boolean;
    updatedDate: Date;
    virusProtection?: string;
    scannedDate?: Date;
}
