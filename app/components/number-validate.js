import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  calorieValid: computed('calorie', function(){
    let isValid = false;
    if (isNaN(this.calorie)) {

       isValid = false;
    }
    else if(this.calorie.length < 1){
      isValid = false;
    }
    else{
      isValid = true;
    }
    return isValid;
  })
});
