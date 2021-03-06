import React from 'react';


export function renderInputs(field, form, amountDefault=null, unitDefault=null, buttonFunction){
   switch(field){
      case('totalDistance'):
        return (
          <div key={field} className='form-field'>
            <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
            <label htmlFor='totalDistance'>Total Distance: </label>
            <div className='input-row'>
              <input type='number' id='totalDistance' min='0' step='0.1' defaultValue={amountDefault}/>
              <select form={form} name='totalDistance-unit' id='totalDistance-unit' defaultValue={unitDefault}>
                <option value='miles'>miles</option>
                <option value='km'>km</option>
              </select>
            </div>
          </div>
        )      
        case('totalTime'):
          return (
            <div key={field} className='form-field'>
              <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
              <label htmlFor='totalTime'>Total Time: </label>
              <div className='input-row'>
                <input type='number' id='totalTime' min='0' step='0.1' defaultValue={amountDefault}/>
                <select form={form} name='unit' id='totalTime-unit' defaultValue={unitDefault}>
                  <option value='minutes'>minutes</option>
                  <option value='hours'>hours</option>
                </select>
              </div>
            </div>
          )
        case('averagePace'): //////////////////// FIX THIS ONE ////////////
          return (
            <div key={field} className='form-field'>
              <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
              <label htmlFor='averagePace'>Average Pace / Speed:</label>
              <div className='input-row'>
                <input type='number' id='averagePace' min='0' step='0.1' defaultValue={amountDefault}/>
                <select form={form} name='unit' id='averagePace-unit' defaultValue={unitDefault}>
                  <option value='min/mile'>min/mile</option>
                  <option value='mph'>mph</option>
                </select>
              </div>
            </div>
          )
          case('maximumPace'): ///////////////// FIX THIS ONE ///////////
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='maximumPace'>Max Pace / Speed:</label>
                <div className='input-row'>
                  <input type='number' id='maximumPace' min='0' step='0.1' defaultValue={amountDefault}/>
                  <select form={form} name='unit' id='maximumPace-unit' defaultValue={unitDefault}>
                    <option value='min/mile'>min/mile</option>
                    <option value='mph'>mph</option>
                  </select>
                </div>
              </div>
            )
          case('averageWatts'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='averageWatts'>Average Watts:</label>
                <div className='input-row'>
                  <input type='number' id='averageWatts' min='0' max='2000' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>watts</span>
                </div>
              </div>
            )
          case('maximumWatts'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='maximumWatts'>Max Watts:</label>
                <div className='input-row'>
                  <input type='number' id='maximumWatts' min='0' max='2000'step='0.1' defaultValue={amountDefault}/><span className='sidenote'>watts</span>
                </div>
              </div>
            )
          case('totalElevation'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='totalElevation'>Total Elevation:</label>
                <div className='input-row'>
                  <input type='number' id='totalElevation' step='0.1' defaultValue={amountDefault}/>
                  <select form={form} name='unit' id='totalElevation-unit' defaultValue={unitDefault}>
                    <option value='feet'>feet</option>
                    <option value='meters'>meters</option>
                  </select>
                </div>
              </div>
            )
          case('averageHeartrate'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='averageHeartrate'>Average Heartrate:</label>
                <div className='input-row'>
                  <input type='number' id='averageHeartrate' min='30' max='250' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>bpm</span>
                </div>
              </div>
            )
          case('maxHeartrate'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='maxHeartrate'>Max Heartrate:</label>
                <div className='input-row'>
                  <input type='number' id='maxHeartrate' min='30' max='250' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>bpm</span>
                </div>
              </div>
            )
          case('tss'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='tss'>TSS:</label>
                <div className='input-row'>
                  <input type='number' id='tss' min='0' step='0.1' defaultValue={amountDefault}/>
                </div>
              </div>
            )
          case('minutesStretching'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='minutesStretching'>Time Stretching:</label>
                <div className='input-row'>
                  <input type='number' id='minutesStretching' min='0' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>min</span>
                </div>
              </div>
            )
          case('minutesFoamRollingMassage'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='minutesFoamRollingMassage'>Time Foam Rolling:</label>
                <div className='input-row'>
                  <input type='number' id='minutesFoamRollingMassage' min='0' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>min</span>
                </div>
              </div>
            )
          case('minutesCore'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='minutesCore'>Time on Core Work:</label>
                <div className='input-row'>
                  <input type='number' id='minutesCore' min='0' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>min</span>
                </div>
              </div>
            )
          case('injuryRating'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='injuryRating'>Injury Rating:</label>
                <div className='input-row'>
                  <input type='number' id='injuryRating' min='1' max='10' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>(1-10)</span>
                </div>
              </div>
            )
          case('sorenessRating'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='sorenessRating'>Soreness Rating:</label>
                <div className='input-row'>
                  <input type='number' id='sorenessRating' min='1' max='10' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>(1-10)</span>
                </div>
              </div>
            )
          case('stressRating'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='stressRating'>Stress Rating:</label>
                <div className='input-row'>
                  <input type='number' id='stressRating' min='1' max='10' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>(1-10)</span>
                </div>
              </div>
            )
          case('dietRating'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='dietRating'>Diet Rating:</label>
                <div className='input-row'>
                  <input type='number' id='dietRating' min='1' max='10' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>(1-10)</span>
                </div>
              </div>
            )
          case('hoursOfSleep'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='hoursOfSleep'>Hours of Sleep:</label>
                <div className='input-row'>
                  <input type='number' id='hoursOfSleep' min='0' max='24' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>hours</span>
                </div>
              </div>
            )
          case('bodyWeight'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='bodyWeight'>Body Weight:</label>
                <div className='input-row'>
                  <input type='number' id='bodyWeight' min='0' step='0.1' defaultValue={amountDefault}/><span className='sidenote'>lbs.</span>
                </div>
              </div>
            )
          case('waterDrank'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='waterDrank'>Water Drank: </label>
                <div className='input-row'>
                  <input type='number' id='waterDrank' min='0' step='0.1' defaultValue={amountDefault}/>
                  <select form={form} name='unit' id='waterDrank-unit' defaultValue={unitDefault}>
                    <option value='ounces'>ounces</option>
                    <option value='cups'>cups</option>
                    <option value='liters'>liters</option>
                    <option value='gallons'>gallons</option>
                  </select>
                </div>
              </div>
            )
          case('notes'):
            return (
              <div key={field} className='form-field'>
                <button type='button' onClick={buttonFunction} value={field} className='deleteFieldButton' title='Remove This Field'>X</button>
                <label htmlFor='notes'>Notes: </label>
                <div className='input-row'>
                  <textarea id='notes' defaultValue={amountDefault} rows='3'></textarea>
                </div>
              </div>
            )  
            
      default:
        return '';
    }
}