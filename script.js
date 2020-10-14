   
    let myChart = document.getElementById('myChart');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['অ','আ','ই','ঈ','উ','ঊ','এ','ঐ','ও','ঔ', 
        'ক', 'খ', 'গ', 'ঘ', 'ঙ',
         'চ','ছ','জ','ঝ','ঞ',
         'ট','ঠ','ড','ঢ','ণ',
         'ত','থ','দ','ধ','ন',
         'প','ফ','ব','ভ','ম',
         'য','র','ল','শ','ষ','স','হ','ক্ষ','ড়','ঢ়','য়',
         'ি','ী','ু','ূ','া','ো','ৌ','ে','ৈ','ৃ'  ],
        datasets:[{
          label:'Frequency',
          data:[
          fre[0],fre[1],fre[2],fre[3],fre[4],fre[5],fre[6],fre[7],fre[8],fre[9],
          fre[10],fre[11],fre[12],fre[13],fre[14],
          fre[15],fre[16],fre[17],fre[18],fre[19],
          fre[20],fre[21],fre[22],fre[23],fre[24],
          fre[25],fre[26],fre[27],fre[28],fre[29],
          fre[30],fre[31],fre[32],fre[33],fre[34],
          fre[35],fre[36],fre[37],fre[38],fre[39],fre[40], fre[41],fre[42],fre[43],fre[44],fre[45],
          fre[46],fre[47],fre[48],fre[49],fre[50],fre[51],fre[52],fre[53],fre[54],fre[55] ],
          //backgroundColor:'green',
          backgroundColor:[
            // 'rgba(255, 99, 132, 0.6)',
            // 'rgba(54, 162, 235, 0.6)',
            // 'rgba(255, 206, 86, 0.6)',
            // 'rgba(75, 192, 192, 0.6)',
            // 'rgba(153, 102, 255, 0.6)',
            // 'rgba(255, 159, 64, 0.6)',
            // 'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Frequency Of Letter of Bangla Text',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:50,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
  