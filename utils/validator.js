const validator = {
    validate: function(rules, obj) { //danh sach luat nguoi dung
        const objKeys = Object.keys(obj);
        for (let i = 0 ; i< objKeys.length; i++){
            const key = objKeys[i] //lay ra tung truog 1
            if(rules[key] !== undefined) { //!== khac 
                //check here
                const rule = rules[key];
                const ruleName = rule.name ;
                // console.log(ruleName)
                const result = validator[ruleName](obj[key], rule.value)
                if (!result){
                    console.log(`${key} violated ${ruleName}`)
                }

            }
        }
    },

    //key: filed obj
    //rules: list cac luat
    //rule co name ...




    notEmpty: function(input){
        return input.length > 0;
    },

    minLength: function(input, value){
        return input.length >= value;
    },

    isEmail: function(value){
        return true;
    },

    matched: function(input, value){
        return input === value;
    }
};

export default validator;