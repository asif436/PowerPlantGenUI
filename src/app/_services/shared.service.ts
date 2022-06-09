/* tslint:disable */
import { Injectable, Inject } from '@angular/core';
import { config } from './../_config/config';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { WINDOW } from './window.providers';
import {  map } from 'rxjs/operators';
import { Country } from './../_model/domainentities';

@Injectable()
export class SharedService {

    stateCodeToName = new Map(); 
    country:  Country = new Country() ;
    CACHE_SIZE = 1;
    serviceURL: string;
	hostURL:string;

    // tslint:disable-next-line: variable-name
    constructor(private _http: HttpClient, @Inject(WINDOW) private window: Window) {

     
        if(this.window.location.protocol === 'https:')
            {
                this.serviceURL = 'https://'+ this.window.location.hostname+ ':8080/frontend-powerplantgen-0.0.1-SNAPSHOT/services/';
            } else {
                this.serviceURL = 'http://'+ this.window.location.hostname+ ':8080/frontend-powerplantgen-0.0.1-SNAPSHOT/services/';
            }

        this.hostURL = 'http://'+ this.window.location.hostname ;

    }

	getHostURL() : string {

		this.hostURL = 'http://'+ this.window.location.hostname ;
     //   this.hostURL.replace(':28080','');
        return this.hostURL;

	}
	
	getServiceURL() : string {

		if(this.window.location.protocol === 'https:')
		{
		 	this.serviceURL = 'https://'+ this.window.location.hostname+ ':8080/frontend-powerplantgen-0.0.1-SNAPSHOT/services/';
		} else {
			this.serviceURL = 'http://'+ this.window.location.hostname+ ':8080/frontend-powerplantgen-0.0.1-SNAPSHOT/services/';
        }
    //    this.serviceURL.replace(':28080','');		
		return this.serviceURL;
	
	}


    loadPowerPlantData(){
       
        let headerz = new HttpHeaders();
        headerz = headerz.set('Accept','*/*' );
        const options = { headers : headerz };

        return this._http.get(this.getServiceURL() + config.loadPPGenerationDataURL, options)
             .pipe(map((response: any) => {
                { return response ; } // Prints JSON object!
        }));

    }


    loadGeoCodeForLocationUSA(statecode:string){
       
        let headerz = new HttpHeaders();
        headerz = headerz.set('Accept', '*/*');


        let urlSearchParams = new HttpParams ();
        const body = urlSearchParams.toString();
        const options = { headers : headerz };

    
        var url = config.geocoderURL + statecode + ', USA&key=' + config.apikey;
        return this._http.post( url , urlSearchParams.toString())
            .pipe(map(response => {
                {return response ; }
            }));

    }
  

}


