function labelForControl(el){
    let idVal = el.id;
    const labels = document.querySelectorAll('label');
    for( var i = 0; i < labels.length; i++ ) {
        if (labels[i].htmlFor == idVal)
             return labels[i];
     }
}

export {labelForControl};