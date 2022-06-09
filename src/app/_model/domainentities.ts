// tslint:disable: variable-name

    export class Country {
        
      data_Year: number;
	    name: string;
	    nameplate_Capacity: number;
	    net_Generation: number;
	
	    powerGenFigures: PowerGenFigures ;
	    lstState: State[];
      
      constructor() {
      
        this.data_Year = 0;
	      this.name='';
	      this.nameplate_Capacity=0;
	      this.net_Generation=0;
	
	      this.powerGenFigures= new PowerGenFigures() ;
	      this.lstState=  [] as  State[];

      }
    }

    export class State {
      
      data_Year: number;
	    abbreviation: string;
	    code: number;
	    net_Generation: number;
	    ozone_Season_Net_Generation: number;
	
      power_plant: PowerPlant[];
      powerGenFigures: PowerGenFigures;
	    
      
      constructor() {

      this.data_Year = 0;
      this.abbreviation= '';
      this.code=0;
      this.net_Generation=0;
      this.ozone_Season_Net_Generation=0;

      this.power_plant = [] as  PowerPlant[];
      this.powerGenFigures= new PowerGenFigures() ;

      }
    
    }

    export class PowerPlant {
      
      data_Year: number;
      state_Abbrevation: string;
      name: string;
      code: number;
      owner_Name: string;
      owner_Id: string;
      utility_Name: string;
      utility_Id: number;
      county_Name: string;
      latitude: number;
      longitued: number;
      total_Units: number;
      total_Generators: number;
      primary_Fuel: string;
      primary_Fuel_Category: string;
      capacity_Factor: number;
      nameplate_Capacity: number;
      annual_Net_Generation: number;
      powerGenFigures: PowerGenFigures;

      constructor() {

        this.data_Year =0;
        this.state_Abbrevation = '';
        this.name = '';
        this.code= 0;
        this.owner_Name= '';
        this.owner_Id= '';
        this.utility_Name= '';
        this.utility_Id= 0;
        this.county_Name= '';
        this.latitude= 0;
        this.longitued= 0;
        this.total_Units= 0;
        this.total_Generators= 0;
        this.primary_Fuel= '';
        this.primary_Fuel_Category= '';
        this.capacity_Factor= 0;
        this.nameplate_Capacity= 0;
        this.annual_Net_Generation= 0;
        this.powerGenFigures= new PowerGenFigures() ;

      }
    }

    export class PowerGenFigures {
      
      net_Generation: number;
	    ozone_Generation: number;
	
      coal_Net_Generation: number;
      oil_Net_Generation: number;
      gas_Net_Generation: number;
      nuclear_Net_Generation: number;
      hydro_Net_Generation: number;
      biomass_Net_Generation: number;
      wind_Net_Generation: number;
      solar_Net_Generation: number;
      geothermal_Net_Generation: number;
      fossil_Net_Generation: number;
      unknown_Net_Generation: number;
      total_Nonrenewables_Net_Generation: number;
      total_Renewables_Net_Generation: number;
      total_Nonhydro_Renewables_Net_Generation: number;
      total_Combustion_Net_Generation: number;
      total_Noncombustion_Net_Generation: number;
      
      coal_Generation_Percent:string;
      oil_Generation_Percent:string;
      gas_Generation_Percent:string;
      nuclear_Generation_Percent:string;
      hydro_Generation_Percent:string;
      biomass_Generation_Percent:string;
      wind_Generation_Percent:string;
      solar_Generation_Percent:string;
      grothermal_Generation_Percent:string;
      fossil_Generation_Percent:string;
      unknown_Generation_Percent:string;
      nonrenewables_Generation_Percent:string;
      renewables_Generation_Percent:string;
      nonhydro_Generation_Percent:string;
      combustion_Generation_Percent:string;
      noncombustion_Generation_Percent:string;

      constructor() {

      this.net_Generation=0;
	    this.ozone_Generation=0;
	
      this.coal_Net_Generation=0;
      this.oil_Net_Generation=0;
      this.gas_Net_Generation=0;
      this.nuclear_Net_Generation=0;
      this.hydro_Net_Generation=0;
      this.biomass_Net_Generation=0;
      this.wind_Net_Generation=0;
      this.solar_Net_Generation=0;
      this.geothermal_Net_Generation=0;
      this.fossil_Net_Generation=0;
      this.unknown_Net_Generation=0;
      this.total_Nonrenewables_Net_Generation=0;
      this.total_Renewables_Net_Generation=0;
      this.total_Nonhydro_Renewables_Net_Generation=0;
      this.total_Combustion_Net_Generation=0;
      this.total_Noncombustion_Net_Generation=0;
      
      this.coal_Generation_Percent= '';
      this.oil_Generation_Percent= '';
      this.gas_Generation_Percent= '';
      this.nuclear_Generation_Percent= '';
      this.hydro_Generation_Percent= '';
      this.biomass_Generation_Percent= '';
      this.wind_Generation_Percent= '';
      this.solar_Generation_Percent= '';
      this.grothermal_Generation_Percent= '';
      this.fossil_Generation_Percent= '';
      this.unknown_Generation_Percent= '';
      this.nonrenewables_Generation_Percent= '';
      this.renewables_Generation_Percent= '';
      this.nonhydro_Generation_Percent= '';
      this.combustion_Generation_Percent= '';
      this.noncombustion_Generation_Percent= '';

      }

    }

