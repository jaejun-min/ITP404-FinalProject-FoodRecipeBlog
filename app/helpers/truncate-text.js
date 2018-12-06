import { helper } from '@ember/component/helper';

export function truncateText(params) {
  let [message, max] = params
  if (message.length > max){
     message = message.substring(0, max) + "..."
  }
   return message;
}
export default helper(truncateText);
