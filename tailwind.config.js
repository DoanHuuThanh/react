// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bt': '#FF2D55',
        'ct': '#FFFFFF',
        'ot': '#FF8F0D',
        '#0095FF': '#0095FF'
      },
      backgroundColor: {
        'input': '#F9FBFD'
      },
      borderRadius: {
        '8px': '8px',
        '22px': '22px'
      },
      margin: {
        'mbdr': '14px 147px 12px 147px', 
        'star': '9px 35px 0px 34px'
      },
      height: {
        'ht': '18px'
      },
      width: {
        'wt': '49px'
      },
      borderColor: {
        '#0095FF': '#0095FF'
      },
      borderWidth: {
        '1px': '1px'
      },
      fontSize: {
        'base': '15px',
        'inp': '13px'
      },
      padding: {
        'pi': '15px 273px 13px 16px'
      }
  },
  plugins: [],
}
}
