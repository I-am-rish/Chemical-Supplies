const addNewData = document.getElementById("addBtn");
const downArrow = document.getElementById("downArrow");
const upArrow = document.getElementById("upArrow");
const deleteBtn = document.getElementById("deleteBtn");
const refreshBtn = document.getElementById("refreshBtn");
const saveBtn = document.getElementById("saveBtn");
const allCheck = document.getElementById("allCheck");

const wrapper = document.getElementById("wrapper");


let jsonArray = [];
// get data from localStorage
const getDataFromLocalStrorage = () => {
  const arr = localStorage.getItem("jsonArray");
  if (arr) {
    jsonArray = JSON.parse(arr);
    return jsonArray;
  }else{
    return [];
  }
};

//set data in localStorage
const setDataInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

// render data on page load
window.addEventListener("load", () => {
  getDataFromLocalStrorage().map((obj, idx) => {
    createData(obj, idx);
  });
});

// open dummy row to enter new data
addNewData.addEventListener("click", () => {
  const tr = document.createElement("tr");
  tr.id = "dummyRow";

  const td1 = document.createElement("td");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  td1.appendChild(checkBox);
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  const id = document.createElement("span");
  id.innerHTML = jsonArray.length+1;
  td2.appendChild(id);
  tr.appendChild(td2);

  const td3 = document.createElement("td");
  const chemicalNameInput = document.createElement("input");
  chemicalNameInput.id = "chemicalName";
  chemicalNameInput.value = "";
  td3.appendChild(chemicalNameInput);
  tr.appendChild(td3);

  const td4 = document.createElement("td");
  const vendorInput = document.createElement("input");
  vendorInput.id = "vendor";
  vendorInput.value = "";
  td4.appendChild(vendorInput);
  tr.appendChild(td4);

  const td5 = document.createElement("td");
  const densityInput = document.createElement("input");
  densityInput.id = "density";
  densityInput.value = 0;
  densityInput.type = "number";
  td5.appendChild(densityInput);
  tr.appendChild(td5);

  const td6 = document.createElement("td");
  const viscosityInput = document.createElement("input");
  viscosityInput.id = "viscosity";
  viscosityInput.value = 0;
  viscosityInput.type = "number";
  td6.appendChild(viscosityInput);
  tr.appendChild(td6);

  const td7 = document.createElement("td");
  const packagingInput = document.createElement("input");
  packagingInput.id = "packaging";
  packagingInput.value = "";
  td7.appendChild(packagingInput);
  tr.appendChild(td7);

  const td8 = document.createElement("td");
  const packSizeInput = document.createElement("input");
  packSizeInput.id = "packSize";
  packSizeInput.value = "";
  td8.appendChild(packSizeInput);
  tr.appendChild(td8);

  const td9 = document.createElement("td");
  const unitInput = document.createElement("input");
  unitInput.id = "unit";
  unitInput.value = "";
  td9.appendChild(unitInput);
  tr.appendChild(td9);

  const td10 = document.createElement("td");
  const quantityInput = document.createElement("input");
  quantityInput.id = "quantity";
  quantityInput.value = 0;
  quantityInput.type = "number";
  td10.appendChild(quantityInput);
  tr.appendChild(td10);

  wrapper.appendChild(tr);
  wrapper.insertBefore(tr, wrapper.childNodes[3]);
});

saveBtn.addEventListener("click", () => {
  const rowData = {
    chemicalName: "",
    vendor: "",
    density: "",
    viscosity: "",
    packaging: "",
    packSize: "",
    unit: "",
    quantity: "",
  };

  const checkBox = document.querySelectorAll("#checkbox");
  checkBox.forEach((teg) => {
    if(teg.checked){
        let valueArray = [];
        teg.parentElement.parentElement.childNodes.forEach(ele => {
            let value = Number(ele.firstChild.value);
            if (value) {
                valueArray.push(value);
            }
        })
        updateRowData(valueArray, teg.parentElement.parentElement.id);
    }
  });
  rowData.chemicalName = chemicalName.value;
  rowData.vendor = vendor.value;
  rowData.density = density.value;
  rowData.viscosity = viscosity.value;
  rowData.packaging = packaging.value;
  rowData.packSize = packSize.value;
  rowData.unit = unit.value;
  rowData.quantity = quantity.value;

  createData(rowData, jsonArray.length);

    const localStorageData = getDataFromLocalStrorage();
    if (!localStorageData) {
      const json = [];
      json.push(rowData);
      setDataInLocalStorage("jsonArray", jsonData);
  }else {
      localStorageData.push(rowData);
      setDataInLocalStorage("jsonArray", localStorageData);
    }

  const tr = document.getElementById("dummyRow");
  tr.remove();
});

// create new row data method
const createData = (obj, idx) => {
  const tr = document.createElement("tr");
  tr.id = idx;

  const td1 = document.createElement("td");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "checkbox";
  td1.appendChild(checkBox);
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  const id = document.createElement("span");
  id.innerHTML = idx + 1;
  td2.appendChild(id);
  tr.appendChild(td2);

  const td3 = document.createElement("td");
  const chemicalNameInput = document.createElement("p");
  chemicalNameInput.innerHTML = obj.chemicalName;
  td3.appendChild(chemicalNameInput);
  tr.appendChild(td3);

  const td4 = document.createElement("td");
  const vendorInput = document.createElement("p");
  vendorInput.innerHTML = obj.vendor;
  td4.appendChild(vendorInput);
  tr.appendChild(td4);

  const td5 = document.createElement("td");
  const densityInput = document.createElement("input");
  densityInput.type = "number";
  densityInput.value = obj.density;
  td5.appendChild(densityInput);
  tr.appendChild(td5);

  const td6 = document.createElement("td");
  const viscosityInput = document.createElement("input");
  viscosityInput.type = "number";
  viscosityInput.value = obj.viscosity;
  td6.appendChild(viscosityInput);
  tr.appendChild(td6);

  const td7 = document.createElement("td");
  const packagingInput = document.createElement("p");
  packagingInput.innerHTML = obj.packaging;
  td7.appendChild(packagingInput);
  tr.appendChild(td7);

  const td8 = document.createElement("td");
  const packSizeInput = document.createElement("p");
  packSizeInput.innerHTML = obj.packSize;
  td8.appendChild(packSizeInput);
  tr.appendChild(td8);

  const td9 = document.createElement("td");
  const unitInput = document.createElement("p");
  unitInput.innerHTML = obj.unit;
  td9.appendChild(unitInput);
  tr.appendChild(td9);

  const td10 = document.createElement("td");
  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = obj.quantity;
  td10.appendChild(quantityInput);
  tr.appendChild(td10);

  wrapper.appendChild(tr);
};

// update exit data
const updateRowData = (array, idx) => {
    const localStorageData = getDataFromLocalStrorage();
    localStorageData[idx].density = array[0];
    localStorageData[idx].viscosity = array[1];
    localStorageData[idx].quantity = array[2];
    setDataInLocalStorage("jsonArray", localStorageData);
    refreshUIData();
}

// refresh page
refreshBtn.addEventListener("click", () => {
    refreshUIData();
    const dummyRow = document.getElementById("dummyRow");
    if(dummyRow) dummyRow.remove();
});

const refreshUIData = () => {
    const checkBox = document.querySelectorAll("#checkbox");
    checkBox.forEach((teg) => {
      const row = teg.parentElement.parentElement;
      row.remove();
    });
    setTimeout(() => {
      getDataFromLocalStrorage().map((obj, idx) => {
        createData(obj, idx);
      });
    });
}

// upArrow
upArrow.addEventListener("click", () => {
  const checkBox = document.querySelectorAll("#checkbox");
  checkBox.forEach((teg) => {
    if (teg.checked) {
      const row = teg.parentElement.parentElement;
      if (row.id > 0) {
        wrapper.insertBefore(row, wrapper.children[row.id]);
        let n = Number(row.id);
        let arrData = getDataFromLocalStrorage();
        let obj = arrData[n];
        arrData.splice(n, 1);
        arrData.splice(n - 1, 0, obj);
        setDataInLocalStorage("jsonArray", arrData);
        wrapper.childNodes[3 + n].id = Number(wrapper.childNodes[3 + n].id) + 1;
        row.id--;
      }
    }
  });
});

// downArrow
downArrow.addEventListener("click", () => {
  const checkBox = document.querySelectorAll("#checkbox");
  checkBox.forEach((teg) => {
    if (teg.checked) {
      const row = teg.parentElement.parentElement;
      if (row.id < jsonArray.length - 1) {
        let n = Number(row.id) + 2;
        wrapper.insertBefore(wrapper.children[n], row);
        let m = Number(row.id);
        let arrData = getDataFromLocalStrorage();
        let obj = arrData[m];
        arrData.splice(m, 1);
        arrData.splice(m+1, 0, obj);
        setDataInLocalStorage("jsonArray", arrData);
        wrapper.childNodes[3 + m].id = Number(wrapper.childNodes[3 + m].id) - 1;
        row.id++;
      }
    }
  });
});

// delete the row from ui
deleteBtn.addEventListener("click", (e) => {
  const checkBox = document.querySelectorAll("#checkbox");
  checkBox.forEach((teg) => {
    if (teg.checked) {
      const row = teg.parentElement.parentElement;
      deleteDataFromLocalStorage(row.id);
      row.remove();
      if(row.id < jsonArray.length-1) rearrangeRowId(row.id);
    }
  });

});

// rearranging the left row's id after deleting row's deta
const rearrangeRowId = (id) => {
  const checkBox = document.querySelectorAll("#checkbox");
  checkBox.forEach((teg) => {
    const row = teg.parentElement.parentElement;
    if(row.id > id){
        row.id--;
    }
  });
}

// delete data from localStorage
const deleteDataFromLocalStorage = (idx) => {
    const localStorageData = getDataFromLocalStrorage();
    if(allCheck.checked){
        setDataInLocalStorage("jsonArray", []);
        allCheck.checked = false;
    }else{
        localStorageData.splice(idx, 1);
        setDataInLocalStorage("jsonArray", localStorageData);
    }
}

// to check all rows
allCheck.addEventListener("change", () => {
  if (allCheck.checked) {
    const checkBox = document.querySelectorAll("#checkbox");
    checkBox.forEach((teg) => {
      teg.checked = true;
    });
  }else{
    const checkBox = document.querySelectorAll("#checkbox");
    checkBox.forEach((teg) => {
      teg.checked = false;
    });
  }
});

// sort data for each cullumn
const thNodes = document.querySelectorAll('th');
thNodes.forEach(th => {
  th.addEventListener("dblclick", (e) => {
    const id = e.target.id;
    if (
      id == "__density" ||
      id == "__viscosity" ||
      id == "__quantity" ||
      id == "__packSize"
    ) {
      sortDataForNumber(id.substring(2));
    } else {
      sortDataForString(id.substring(2));
    }

    
  });
});

const sortDataForNumber = (id) => {
    let localStorageData = getDataFromLocalStrorage();
    localStorageData.sort((a, b) => {
        return a[id] - b[id];
    });
    setDataInLocalStorage("jsonArray", localStorageData);
    refreshUIData();
};

const sortDataForString = (id) => {
    let localStorageData = getDataFromLocalStrorage();
    localStorageData.sort((a, b) => {
        let first = a[id].toLowerCase(),
            second = b[id].toLowerCase();

        if(first > second) return 1;
        if(first < second) return -1;
        return 0;
    })
    setDataInLocalStorage("jsonArray", localStorageData);
    refreshUIData();

}

