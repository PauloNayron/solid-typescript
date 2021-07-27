import {Aves} from "./Aves";

export interface AvesQueVoam extends Aves {
    setAltitude(altitude: string);
}