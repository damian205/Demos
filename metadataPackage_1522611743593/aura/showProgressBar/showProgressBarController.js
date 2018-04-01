({        
    //Method that calls the toast
    changeProgressBar : function(component, event, helper) {
        
        // Reference the component we put in the markup
        var progBar = component.find('progbar-component');

        var newProgress = component.find('progressInput').get('v.value');
        var newColor = component.find('new-color').get('v.value');

        progBar.set('v.progress', newProgress);

        if ( newColor != '' && newColor != undefined && newColor != null ){            
            progBar.set('v.color', newColor);
        }      

    },
    showStripes : function(component, event, helper){
        var progBar = component.find('progbar-component');
        progBar.set('v.stripes', true);
    },
    hideStripes : function(component, event, helper){
        var progBar = component.find('progbar-component');
        progBar.set('v.stripes', false);
    }
})