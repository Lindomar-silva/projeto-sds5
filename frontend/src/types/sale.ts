import { Seller } from "./seller"

export type sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: true,
    number: number;
    numberOfElements?: number;
    size?: number;
    empty?: boolean;
}

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}

