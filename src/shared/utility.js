export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

// Form validator
export const checkValidity = (value, rules) =>{
    if (!rules) {
        return true;
    }

    let isValid = true

    if (rules.required){
        isValid = value.trim() !== '' && isValid
    } 

    if (rules.minLength){
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid
}


export const text_truncate = (str, strLength=50) => {
    let [ending] = ["..."];
    if (str.length > strLength) {
      return str.substring(0, strLength).concat(ending);
    }
    return str;
  }