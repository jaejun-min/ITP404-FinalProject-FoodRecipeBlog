import { helper } from '@ember/component/helper';

export function truncateText(params/*, hash*/) {
  let [message, max] = params
  //console.log(max)
  if (message.length > max){
     message = message.substring(0, max) + "..."
  }
   return message;
}
export default helper(truncateText);
