export default function MyHours({hours}) {
    
    const one = hours.hours.filter(el=>el.inout === true).map(el=>parseInt(el.clocked))
    const two = hours.hours.filter(el=>el.inout === false).map(el=>parseInt(el.clocked))
    const three = one.map((el,id)=>{return el - two[id]})
    const four = three.reduce((a,b)=>a+b, 0)
    const minutes = Math.round((four)/(1000 * 60))
    const hour = Math.round(minutes / 60)
    const min = Math.round(minutes % 60)
    console.log(hour, 'hours')
    
    return(
        <div className="text-2xl">{hours.hours[0]?.inout ? `${min}min` : 'In'}</div>
    )
}