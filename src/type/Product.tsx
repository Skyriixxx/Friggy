import { DateData } from 'react-native-calendars/src/types';

export default interface Product {
    id: string
    name: string;
    date?: string;
    number?: number;
    dlc: DateData;
    image: string;
}