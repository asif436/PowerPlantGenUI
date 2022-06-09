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

    this.stateCodeToName.set('AL','Alabama'); 
    this.stateCodeToName.set('AK','Alaska'); 
    this.stateCodeToName.set('AZ','Arizona');
    this.stateCodeToName.set('AR','Arkansas'); 
    this.stateCodeToName.set('CA','California');    
    this.stateCodeToName.set('CO','Colorado'); 
    this.stateCodeToName.set('CT','Connecticut');
    this.stateCodeToName.set('DE','Delaware'); 
    this.stateCodeToName.set('FL','Florida');
    this.stateCodeToName.set('GA','Georgia'); 
    this.stateCodeToName.set('HI','Hawaii');    
    this.stateCodeToName.set('ID','Idaho'); 
    this.stateCodeToName.set('IL','Illinois');
    this.stateCodeToName.set('IN','Indiana'); 
    this.stateCodeToName.set('IA','Iowa');
    this.stateCodeToName.set('KS','Kansas'); 
    this.stateCodeToName.set('KY','Kentucky');    
    this.stateCodeToName.set('LA','Louisiana'); 
    this.stateCodeToName.set('ME','Maine');
    this.stateCodeToName.set('MD','Maryland'); 
    this.stateCodeToName.set('MA','Massachusetts');
    this.stateCodeToName.set('MI','Michigan'); 
    this.stateCodeToName.set('MN','Minnesota');    
    this.stateCodeToName.set('MS','Mississippi'); 
    this.stateCodeToName.set('MO','Missouri');
    this.stateCodeToName.set('MT','Montana'); 
    this.stateCodeToName.set('NE','Nebraska');
    this.stateCodeToName.set('NV','Nevada'); 
    this.stateCodeToName.set('NH','New Hampshire');    
    this.stateCodeToName.set('NJ','New Jersey'); 
    this.stateCodeToName.set('NM','New Mexico');
    this.stateCodeToName.set('NY','New York'); 
    this.stateCodeToName.set('NC','North Carolina');
    this.stateCodeToName.set('ND','North Dakota'); 
    this.stateCodeToName.set('OH','Ohio');    
    this.stateCodeToName.set('OK','Oklahoma'); 
    this.stateCodeToName.set('OR','Oregon');
    this.stateCodeToName.set('PA','Pennsylvania'); 
    this.stateCodeToName.set('RI','Rhode Island');
    this.stateCodeToName.set('SC','South Carolina'); 
    this.stateCodeToName.set('SD','South Dakota');    
    this.stateCodeToName.set('TN','Tennessee'); 
    this.stateCodeToName.set('TX','Texas');
    this.stateCodeToName.set('UT','Utah');
    this.stateCodeToName.set('VT','Vermont');
    this.stateCodeToName.set('VA','Virginia');
    this.stateCodeToName.set('WA','Washington');
    this.stateCodeToName.set('VT','Vermont');
    this.stateCodeToName.set('VA','Virginia');
    this.stateCodeToName.set('WA','Washington');
    this.stateCodeToName.set('WV','West Virginia');
    this.stateCodeToName.set('WI','Wisconsin');
    this.stateCodeToName.set('WY','Wyoming');
    
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


