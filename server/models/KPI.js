import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose); //<----- now you can use the currency


// Each day there will be :-
/*
day
revenue
expense
*/
const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }  //< ------------------- in order to 'get' stuff
);


// Each month there will be :-
/*
month
revenue
expense
operationalExpenses (monthly thing)
nonoperationalExpenses (monthly thing)
*/

const monthSchema = new Schema(
  {
    month: String,

    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },

    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },

    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },

    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } } //< ------------------- in order to 'get' stuff 
);


/* 
cosnt KPISchema = new Schema(
  {
    totalProfit :{},
    totalRevenue :{},
    totalExpenses :{},
    expensesByCategory :{},
    monthlyData = [],
    dailyData = []
  },
  {
     timestamps: true, 
     toJSON: { getters: true }
  }
)
*/
const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,//<------------"Of Type Currnecy"
      currency: "USD",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,//<------------"Of Type Currnecy"
      currency: "USD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,//<------------"Of Type Currnecy"
      currency: "USD",
      get: (v) => v / 100,
    },
    // So this is like shoe : $100 , i.e an object and a currency
    expensesByCategory: {
      type: Map,//<-------------------------------- expensesByCategory is an"Object" and the way
      of: {     //                                   Mongoose deals with obj is called map
        type: mongoose.Types.Currency,//<------------"Of Type Currnecy"
        currency: "USD",
        get: (v) => v / 100,
      },
    },
    monthlyData: [monthSchema],//<------------------- An array of Object (Data row) , might be bulky if we write here , so Creating a new scheme above
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } } //<----------- In order for the 'get' in all the data row 
                                                  // ------------to work you need to have this setting : toJSON: { getters: true } 
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;