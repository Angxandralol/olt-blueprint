import { TrafficService } from "../services/traffic";
import type { Measurement } from "../models/measurement";

export class TrafficController {
    static async getDevice(deviceID: number, initialDate: string, endDate: string): Promise<Measurement[]> {
        const response = await TrafficService.getDevice(deviceID, initialDate, endDate);
        if (response.status === 200) {
            let newDataTraffic : Measurement[] = [];
            let dataTraffic = response.info as Measurement[];
            dataTraffic.map((traffic: Measurement) => {
                let newTraffic: Measurement = {
                    date: new Date(traffic.date),
                    bandwidth_bps: Number(traffic.bandwidth_bps),
                    in_bps: Number(traffic.in_bps),
                    out_bps: Number(traffic.out_bps)
                }
                newDataTraffic.push(newTraffic);
            });
            return newDataTraffic;
        } else {
            console.error(response.info!.message);
            return [];
        }
    }

    static async getInterface(interfaceID: number, initialDate: string, endDate: string): Promise<Measurement[]> {
        const response = await TrafficService.getInterface(interfaceID, initialDate, endDate);
        if (response.status === 200) {
            let newDataTraffic : Measurement[] = [];
            let dataTraffic = response.info as Measurement[];
            dataTraffic.map((traffic: Measurement) => {
                let newTraffic: Measurement = {
                    date: new Date(traffic.date),
                    bandwidth_bps: Number(traffic.bandwidth_bps),
                    in_bps: Number(traffic.in_bps),
                    out_bps: Number(traffic.out_bps)
                }
                newDataTraffic.push(newTraffic);
            });
            return newDataTraffic;
        } else {
            console.error(response.info!.message);
            return [];
        }
    }

    static async getState(state: string, initialDate: string, endDate: string): Promise<Measurement[]> {
        const response = await TrafficService.getState(state, initialDate, endDate);
        if (response.status === 200) {
            let newDataTraffic : Measurement[] = [];
            let dataTraffic = response.info as Measurement[];
            dataTraffic.map((traffic: Measurement) => {
                let newTraffic: Measurement = {
                    date: new Date(traffic.date),
                    bandwidth_bps: Number(traffic.bandwidth_bps),
                    in_bps: Number(traffic.in_bps),
                    out_bps: Number(traffic.out_bps)
                }
                newDataTraffic.push(newTraffic);
            });
            return newDataTraffic;
        } else {
            console.error(response.info!.message);
            return [];
        }
    }

    static async getCounty(state: string, county: string, initialDate: string, endDate: string): Promise<Measurement[]> {
        const response = await TrafficService.getCounty(state, county, initialDate, endDate);
        if (response.status === 200) {
            let newDataTraffic : Measurement[] = [];
            let dataTraffic = response.info as Measurement[];
            dataTraffic.map((traffic: Measurement) => {
                let newTraffic: Measurement = {
                    date: new Date(traffic.date),
                    bandwidth_bps: Number(traffic.bandwidth_bps),
                    in_bps: Number(traffic.in_bps),
                    out_bps: Number(traffic.out_bps)
                }
                newDataTraffic.push(newTraffic);
            });
            return newDataTraffic;
        } else {
            console.error(response.info!.message);
            return [];
        }
    }

    static async getMunicipality(state: string, county: string, municipality: string, initialDate: string, endDate: string): Promise<Measurement[]> {
        const response = await TrafficService.getMunicipality(state, county, municipality, initialDate, endDate);
        if (response.status === 200) {
            let newDataTraffic : Measurement[] = [];
            let dataTraffic = response.info as Measurement[];
            dataTraffic.map((traffic: Measurement) => {
                let newTraffic: Measurement = {
                    date: new Date(traffic.date),
                    bandwidth_bps: Number(traffic.bandwidth_bps),
                    in_bps: Number(traffic.in_bps),
                    out_bps: Number(traffic.out_bps)
                }
                newDataTraffic.push(newTraffic);
            });
            return newDataTraffic;
        } else {
            console.error(response.info!.message);
            return [];
        }
    }

}