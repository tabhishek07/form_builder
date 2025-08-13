const btn = document.getElementById("addFieldBtn");

btn.addEventListener("click", (e)=>{
    e.preventDefault();

    const type = document.getElementById("fieldType").value;
    const label  = document.getElementById("fieldLabel").value;
    // alert(`type:${type} || label: ${label}`)

    const preview = document.getElementById("formPreview");

    // field wrapper

    const fieldWrapper = document.createElement("div");
    fieldWrapper.style.marginBottom = "10px";

    // label create karo

    const labelEle = document.createElement("label");
    labelEle.textContent = label;
    labelEle.style.display = "block";

    // create input type
    const inputType = document.createElement("input");
    inputType.type = type;
    if(type === "radio"){
        inputType.name = "radioGroup";
    }
if (type === "checkbox" || type === "radio") {
    const wrapperLabel = document.createElement("label");
    wrapperLabel.style.cursor = "pointer";

    wrapperLabel.appendChild(inputType);
    wrapperLabel.appendChild(document.createTextNode(" " + label));

    fieldWrapper.appendChild(wrapperLabel);
} else {
    labelEle.style.display = "block";
    fieldWrapper.appendChild(labelEle);
    fieldWrapper.appendChild(inputType);
}


    // appenf wrapper

    preview.appendChild(fieldWrapper);
    document.getElementById("fieldLabel").value = "";
});

const clearBtn = document.getElementById("clearField");
clearBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    document.getElementById("formPreview").innerHTML = "";
})