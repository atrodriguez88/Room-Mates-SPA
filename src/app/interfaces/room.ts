export interface IRoom {

    address: string;
    propertyType: number;
    numberBedrooms: number;
    numberBathrooms: number;
    roomsToRent: number;
    propertyFeatures: any[];
    rules: any[];
    rentPerMonth: number;
    isUtilityIncluded: boolean;
    utilityPerMonth: number;    // Check API
    roomType: number;
    roomSquareMeters: number;
    isFurnished: number;
    ensuiteBathroom: boolean;
    roomFeatures: any[];
    availableFrom: Date;
    minStayMonths: number;
    prefMaxAge: number;
    smoking: number;
    pet: number;
    cleanliness: number;
    numberRoomatesAlready: number;
    prefGender: number;
    ocupationId: number;
    prefOcuppations: number;
    prefMinAge: number;
    userId: number;
}