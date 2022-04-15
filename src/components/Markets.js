import React from 'react'
import SixPackGrid from "./SixPackGrid"
import '../styles/Markets.css'
import { MdKeyboardArrowRight } from 'react-icons/md'


const Markets = () => {
  const teams = [
    {
      name1: 'Braves',
      logo1: 'https://scmedia.itsfogo.com/$-$/38a18dee93b04aaabdefc2cf5866d8d6.svg',
      record1: '1-0',
      spread1: '+155',
      total1: '+100',
      money1: '+100',
      name2: 'Astros',
      logo2: 'https://scmedia.itsfogo.com/$-$/8a06e2811a7340219f95fe3528f1d91b.svg',
      record2: '0-1',
      spread2: '-190',
      total2: '-120',
      money2: '-120'
    },

    {
      name1: 'Dolphins',
      logo1: 'https://scmedia.itsfogo.com/$-$/79a2e47e2401443aad2ec9602d58051c.svg',
      record1: '1-6',
      spread1: '+110',
      total1: '+110',
      money1: '-610',
      name2: 'Bills',
      logo2: 'https://scmedia.itsfogo.com/$-$/7d093b2fd77744a9b67ba72ae6dabd91.svg',
      record2: '4-2',
      spread2: '-110',
      total2: '-110',
      money2: '-900'
    },
    {
      name1: 'Panthers',
      logo1: 'https://scmedia.itsfogo.com/$-$/96cd6cf6fbf0455fae0bbee210dc2fb8.svg',
      record1: '3-4',
      spread1: '+110',
      total1: '-114',
      money1: '+136',
      name2: 'Falcons',
      logo2: 'https://scmedia.itsfogo.com/$-$/fc3df19dc36642ebb36c1196ae4aa437.svg',
      record2: '3-3',
      spread2: '-110',
      total2: '-106',
      money2: '-116'
    },
    {
      name1: 'Eagles',
      logo1: 'https://scmedia.itsfogo.com/$-$/8056d757f62244b0aaa53d37c87238e8.svg',
      record1: '2-5',
      spread1: '+110',
      total1: '-110',
      money1: '-198',
      name2: 'Lions',
      logo2: 'https://scmedia.itsfogo.com/$-$/6d88c7dc06f04ffda5a98107983d0c09.svg',
      record2: '0-7',
      spread2: '-110',
      total2: '+110',
      money2: '-166'
    },
  ]

  return (
    <div>
      <div className="card-header">
        <div className="competition-header">
          <img src="https://scmedia.itsfogo.com/$-$/076abdaa04144717904bffd9c3fa894c.svg" alt="MLB" />
          <span>MLB</span>
        </div>
        <div className="market-all">
          <span>See All</span>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <SixPackGrid name1={teams[0].name1} logo1={teams[0].logo1} record1={teams[0].record1} spread1={teams[0].spread1} total1={teams[0].total1} money1={teams[0].money1} name2={teams[0].name2} logo2={teams[0].logo2} record2={teams[0].record2} spread2={teams[0].spread2} total2={teams[0].total2} money2={teams[0].money2}/>

      <div className="card-header">
        <div className="competition-header">
          <img src="https://scmedia.itsfogo.com/$-$/0f4942ec6f5341f5898199ae5472abf2.svg" alt="NFL" />
          <span>NFL</span>
        </div>
        <div className="market-all">
          <span>See All</span>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <SixPackGrid name1={teams[1].name1} logo1={teams[1].logo1} record1={teams[1].record1} spread1={teams[1].spread1} total1={teams[1].total1} money1={teams[1].money1} name2={teams[1].name2} logo2={teams[1].logo2} record2={teams[1].record2} spread2={teams[1].spread2} total2={teams[1].total2} money2={teams[1].money2}/>
      <SixPackGrid name1={teams[2].name1} logo1={teams[2].logo1} record1={teams[2].record1} spread1={teams[2].spread1} total1={teams[2].total1} money1={teams[2].money1} name2={teams[2].name2} logo2={teams[2].logo2} record2={teams[2].record2} spread2={teams[2].spread2} total2={teams[2].total2} money2={teams[2].money2}/>
      <SixPackGrid name1={teams[3].name1} logo1={teams[3].logo1} record1={teams[3].record1} spread1={teams[3].spread1} total1={teams[3].total1} money1={teams[3].money1} name2={teams[3].name2} logo2={teams[3].logo2} record2={teams[3].record2} spread2={teams[3].spread2} total2={teams[3].total2} money2={teams[3].money2}/>
    </div>
  )
}

export default Markets