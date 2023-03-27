
import React, { useState } from 'react';
import Keonjhar_banner from '../images/About_keonjhar/Keonjhar_banner.jpg'
import "../../Keonjhar.css"
import "../../App.css"
import All_About from '../../Components/pages/Datas/All_details'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const About = () => {
  const [Filter_active, setFilter_active] = useState("All_dest")
  const [All_about, setAll_about] = useState(All_About)
  const Filter_Dest = (filterCat) => {
    setFilter_active(filterCat)
    if (filterCat === "All_dest") {
      setAll_about(All_About)
    } else {
      const Filtered_about = All_About.filter((Curr_dest) => {
        return Curr_dest.category === filterCat
      })
      setAll_about(Filtered_about)
    }




  }
  return (
    <>

      <div className="ken_hero">
        < LazyLoadImage effect='blur' src={Keonjhar_banner} alt="" id='ken_banner' width="100%" />
        <h2 className='banner_desc'>About Kendujhar</h2>
      </div>
      <div className="container mt-4">
        <div className="about_keonjhar">
          <ul className='filter about d-flex'>

            <li className={Filter_active === 'All_dest' ? "filter_active" : ""} onClick={() => Filter_Dest("All_dest")} >ALL DETAILS</li>
            <li className={Filter_active === 'history' ? "filter_active" : ""} onClick={() => Filter_Dest("history")} >HISTORY</li>
            <li className={Filter_active === 'map' ? "filter_active" : ""} onClick={() => Filter_Dest("map")}> MAP   </li>
            <li className={Filter_active === 'demography' ? "filter_active" : ""} onClick={() => Filter_Dest("demography")}>DEMOGRAPHY  </li>
            <li className={Filter_active === 'economy' ? "filter_active" : ""} onClick={() => Filter_Dest("economy")}>ECONOMY  </li>

          </ul>

        </div>
        {
          All_about.map((x, i) => {
            if (x.category === "history") {
              return (<>
                <h2 className='text-center text-light border boder-bottom-2'>{x.desc}</h2>
                <p>The Keonjhar District emerged as one of the District on 1st January, 1948. The District is bounded by Mayurbhanj District and Bhadrak District to the east, Jajpur District to the south, Dhenkanal District and Sundargarh District to the west and West Singhbhum district of Jharkhand State to the north. Covering a geographical area of 8303 sq kms, the Keonjhar District lies between 21º 1’ N to 22º 10’ N latitude and 85º 11’ E to 86º 22’ E longitude. </p>

                <p>  As per 2011 census, the total population of Keonjhar District is 1,801,733. The District comprises total 9,06,487 male population and total 8,95,246 female population. Total SC population of the District is 2,09,357 whereas the ST population is 8,18,878.</p> <br />

                <p>  As per the administrative set up is concerned, the Keonjhar District has got three sub divisions namely Anandpur, Champua and Keonjhar. There are 13 tahsils, 13 blocks, 297 GPs, 2132 villages,4 Municipalities and 1 NAC functioning in the District.</p> <br />

                <p>   The climate of Keonjhar District is characterized by an oppressively hot summer with high humidity. Summer generally commences in the month of March. Temperature begins to rise rapidly attaining the maximum in the month of May. During the summer, maximum temperature touches around 380 C. The weather becomes more pleasant with the advent of the monsoon in June and remains as such up to the end of October. The temperature in the month of December is lowest i.e. it hovers at around 110 C. Sometimes it even drops down to as low as 70C. The average annual rainfall is around 1534.5 mms.</p><br />

                <p> Keonjhar is one of the major mineral producing Districts of Odisha. Iron ore, Manganese ore, Chromate, Quartzite, Bauxite, Gold, Pyrophillite and Lime Stone are the major minerals found in this District. The Kalinga Iron Works (Barbil), Ferro Manganese Plant (Joda), Ipitata (Beleipada), Charge Crome (Brahmanipal) are the major names in the industrial scene of Keonjhar. There are also engineering and metal based industries (53 numbers), chemical and allied industries including plastic industries (48 numbers) and agro and marine based industries (242 numbers) functioning in this District.</p><br />

                <p>The major crops grown in the Keonjhar District are Paddy, Maize, Til, Niger, Arhar etc. Keonjhar District celebrates many festivals round the year. Sarhul, Sohrai, Karmapuja, Bodam, Chaitra Parab, Makar Sankaranti, Nuakhai, Raja Parab, Burani Jatra, Ratha Jatra, Shivaratri are the famous festivals celebrated in the District. The other local festivals celebrated in the District are Ram Navami, Dusshera, Dola Yatra, Rasha Purnima, Bada Osha and Chandan Jatra etc.</p>

              </>)
            }

            else if (x.category === "map") {
              return (<>
                <h2 className='text-center text-light border boder-bottom-2'>{x.desc}</h2>
                <div className="map mt-4 mb-4"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59334.77811182182!2d85.602293!3d21.64737195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1f0282788c88bb%3A0xcac8ecd818b3fa4d!2sKeonjhar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1679657338515!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
              </>)
            }
            else if (x.category === "demography") {
              return (<>
                <h2 className='text-center text-light border boder-bottom-2'>{x.desc}</h2>
                <h4 className='text-center mt-4 mb-4 py-3 border-bottom border-4 border-secondary' id='demography'>--As per population figures of 2011 Census--</h4>
                <table className='w-100 table'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Area</span></td>
                      <td data-th="Value"><span class="bt-content">8240 Sq Km</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">No. of Sub Disivions</span></td>
                      <td data-th="Value"><span class="bt-content">3</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">No. of Blocks</span></td>
                      <td data-th="Value"><span class="bt-content">13</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">No. of Gram Panchayats</span></td>
                      <td data-th="Value"><span class="bt-content">297</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">No. of Villages</span></td>
                      <td data-th="Value"><span class="bt-content">2132</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">No. of Tahasils</span></td>
                      <td data-th="Value"><span class="bt-content">13</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">No. of Revenue Circles</span></td>
                      <td data-th="Value"><span class="bt-content">80</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">No. of Municipalities</span></td>
                      <td data-th="Value"><span class="bt-content">4</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">No. of NAC</span></td>
                      <td data-th="Value"><span class="bt-content">1</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">No. of Police Station</span></td>
                      <td data-th="Value"><span class="bt-content">25</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Total Population</span></td>
                      <td data-th="Value"><span class="bt-content">18,01,733</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Population Growth</span></td>
                      <td data-th="Value"><span class="bt-content">15.35%</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Average Literacy</span></td>
                      <td data-th="Value"><span class="bt-content">68.24</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Female Literacy</span></td>
                      <td data-th="Value"><span class="bt-content">58.28</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Sex Ratio(Per 1000)</span></td>
                      <td data-th="Value"><span class="bt-content">988</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Total Child Population(0-6 Age)</span></td>
                      <td data-th="Value"><span class="bt-content">2,59,403</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Female Population(0-6 Age)</span></td>
                      <td data-th="Value"><span class="bt-content">1,27,518</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Male Literates</span></td>
                      <td data-th="Value"><span class="bt-content">6,05,119</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Population Male</span></td>
                      <td data-th="Value"><span class="bt-content">9,06,487</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Population Female</span></td>
                      <td data-th="Value"><span class="bt-content">8,95,246</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Male Literacy</span></td>
                      <td data-th="Value"><span class="bt-content">78.12</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Density/km2</span></td>
                      <td data-th="Value"><span class="bt-content">217</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Child Sex Ratio(0-6 Age)</span></td>
                      <td data-th="Value"><span class="bt-content">867</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Male Population(0-6 Age)</span></td>
                      <td data-th="Value"><span class="bt-content">1,31,885</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Literates</span></td>
                      <td data-th="Value"><span class="bt-content">10,52,518</span></td>
                    </tr>
                    <tr>
                      <td data-th="Name"><span class="bt-content">Female Literates</span></td>
                      <td data-th="Value"><span class="bt-content">4,47,399</span></td>
                    </tr>
                  </tbody>
                </table>
              </>)
            }
            else if (x.category === "economy") {
              return (<>
                <h2 className='text-center text-light border boder-bottom-2'>{x.desc}</h2>


                <div id="post-2748" class=" mt-4 post-2748 page type-page status-publish hentry">
                  <p>Keonjhar district is full of natural scenic beauty with greenery forest, rivers and water fall that enhance the beauty of Tribal District. This district is surrounded by the Mayurbhanj, Bhadrak, Jajapur, Anugul, Sundergardh and West Singhbhum of Jharkhand with an area of 8303 sq. Km. which lies between 85<sup>0</sup> .11’’ to 86<sup>0</sup>. 22’’ east longitude and 20<sup>0</sup>. 01’’ north latitude. Previously, i.e. during the pre independent period it was a princely state(Gadajata Rajya) and it merged with the state of Odisha with effect from 01/01/1948 and become a fullfledged district having its head quarters at Keonjhargargh.The average elevation of the district is 500 mtrs. above the sea level. The major river of the district is Baitarini originates from Gonasika hill and flows and passes boarder of Singhbhum(Jharkhand), Mayurbhanj, Jajpur and finaly falls in Bay of Bengal at Dhamara Bhadrak District. The Population of the district is 180200 ( as per 2011 census). The Climatic condition has been characterized by hot-summer, cold- winter and prolonged erratic monsoon. The summer starts from March to June. The average temperature of the district is 280 Celsius. The normal monsoon starts from second week of June and ends in September which is 75% of rain fall and the rest 25% comes from October to December. The December and January are the cold months with the average temperature of 220 Celsius. The rural population of the district is 86%. There are 69% of the population are BPL. The literacy rate of the District is 68.24%( as per 2011 census). Around 80% of workforce earn their livelihood through a traditional agriculture and vagetables cultivation such as paddy, wheat, maize, moong, biri, kulthi, til, groundnut, mustard, jute, potatoes, sugarcane, mango, tomato and earn a lot of money both during rabi and kharif season. It has also two major irrigation project under construction viz. Kanpur Irrigation Project and Anandapur Barrage Project which is likely to be completed shortly which will enhance the irrigational potential. Besides it has three medium irrigation project i.e. Shalandi, Kanjhari, Remala Irrigation Project. As a result the people of these area produce the double crops and enhance their economy. The district has total cultivable land of 192391 hectors out of 649310 hectors of total area. There are also 178896 hectors and 50260 hectors and 54123 hectors of forest land, non agricultural land , barren and non cultivable land respectively. There is also an area of 4978 hhectors cover with miscellaneous trees and groves. This district has forest resources/ produced like mahua flowers, kendu leaf, sal leaf, jhuna, kusum, timbers both sal and non-sal in huge quantities. The people make sal plate , chaupati and earn their livelihood with good amount of money.</p>
                  <p>It has a vast mineral resources like iron ore, manganese, chromite, magnesite , pyrophyelite, quartize and serpentine with 133 nos. of mines and 14213 nos. of people engaged in these sectors. Besides the quantum of expert is 11975000 M.T. ( 2011 census) of the district in the mineral sector and earn huge amount of foreign money. There also 901 nos. of MSME industries and gives 2652 nos. of employment(2014-15 statistics). Ancillary business such as automobiles, repairing shops, fuel filling stations and motor parts business have been grown up throughout the district.</p>
                  <p>Besides the district has collected /received a huge sum of rupees 15994560925 as District Minerals Development fund and utilize rupees 162987252(in Crores) under different fields such as afforestation, drinking water, education, health, infrastructure, irrigation, skill development, Women &amp; Child Development and watershed development respectively upto Aprill 2018( w.e.f. 12/01/2015 to 30/04/2018).</p>
                  <p>There are 8,17,66,12,48 and 34 nos. of sub-divisional/ other, CHC, PHC, Mobile Unit, Ayurvedic, Homeopathic hospitals and Dispensary respectively in the District. However a medical college and hospital is under construction at Keonjhar. So the health sector is better than some other district.</p>
                  <p>There are 5 nos. of NH running in the district viz.&nbsp; NH49, NH20, NH215, NH520,NH 220&nbsp; which connect Calcutta to Mumbai, Jhamsedpur to Cuttack, Bhubaneswar, Vizag. There is also rail link of 117.39 K.M. in the district which facilitates the communication and transportation.</p>
                  <p>Besides 2069 Villages have been electrified out of total 2123 nos. of villages of the district. There are also 210 nos. of Banks both Nationalised, Gramin, Private and Co-operative which are involve with the banking and financial activities of the district.The district is implementing some anti proverty schemes i.e.</p>
                  <ul class="list-style">
                    <li>MGNREGS,</li>
                    <li>PMAY, GGY,</li>
                    <li>BGJY,</li>
                    <li>MLALAD,</li>
                    <li>MPLAD,</li>
                    <li>SFC&nbsp;</li>
                    <li>CFC for the socio-economic development of the people.</li>
                  </ul>
                  <p>The district is also 20 nos. of tourist places to which thousands and thousands of tourists visit the scenic spots and the district earn huge amount of money.The Keonjhar( Tribal dominated ) district is considered as the most un-urbanized and mineral riched district of the state as well as country.</p>

                </div>
              </>)
            }

          })
        }
      </div>

    </>
  )
}

export default About