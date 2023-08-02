export const MobileReducer = (state={mobiles:100},action) => {
    console.log(state);
    switch(action.type)
    {
        case 'BUY_MOBILE':
            return {...state,mobiles:state.mobiles-1}
        case 'SELL_MOBILE':
            return {...state,mobiles:state.mobiles+1}
        default :
            return state
    }
  

}
export default MobileReducer
