const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter"],
        petitFormal: ["Petit Formal Script"],
        russonOne:["Russon One"]
      },
      colors:{
        dark:"#0d1117",
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    
      
     
    },
  },
  plugins: [  ],
});
