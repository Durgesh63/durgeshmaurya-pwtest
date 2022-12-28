let picker = document.getElementById('picker');
let listing = document.getElementById('listing');

picker.addEventListener('change', (e)=> {
    const data = []
    for (let file of Array.from(e.target.files)) {
        let file_size = file.size;
        if (0 < file_size){
            if (0 < file_size && file_size  < 1024 ){
                file_size = `${file_size} bytes`
            }
            else if(1024 <= file_size && file_size < 1048576 ){
                file_size = `${(file_size/1024).toFixed(2)} KB`
            }
            else if(1048576 <= file_size && file_size < 1073741824 ){
                file_size = `${(file_size/1048576).toFixed(2)} MB`
            }
            else if(1073741824 <= file_size && file_size < 1099511628000 ){
                file_size = `${(file_size/1073741824).toFixed(2)} GB`
            }
            else if(1099511628000 <= file_size ){
                file_size = `${(file_size/1099511628000).toFixed(2)} TB`
            }
            data.push({'name': file.name, 'size': file_size, 'type':file.type,'lastmodified':file.lastModifiedDate,'path':file.webkitRelativePath})
        }
    };

    // sort according to there names
    data.sort(function (a, b) {
        if (a.name.split('.').pop().toLowerCase() < b.name.split('.').pop().toLowerCase()) {
          return -1;
        }
        if (a.name.split('.').pop().toLowerCase() > b.name.split('.').pop().toLowerCase()) {
          return 1;
        }
        return 0;
      });

    // create table
    const tableData = data.map(value => {
    return (
        
        `<tr>
            <td>${value.name.split('.').shift()}</td>
            <td>${value.size}</td>
            <td>
                <button class="tooltip">Info
                    <span class="tooltiptext">
                        <div>Name : ${value.name.split('.').shift()}</div>
                        <div>Size : ${value.size}</div>
                        <div>Extension : ${value.name.split('.').pop()}</div>
                        <div>Path : ${value.path}</div>
                        <div>Type : ${value.type}</div>
                        <div>Lastmodified : ${value.lastmodified.toDateString()}</div>
                    </span>
                </button>
            </td>
        </tr>`
    );
    }).join('');

    listing.innerHTML = tableData;
});



