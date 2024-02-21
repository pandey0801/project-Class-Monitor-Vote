const form = document.querySelector("form");
    const Suresh = document.querySelector("#Suresh");
    const deepank = document.querySelector("#deepank");
    const abhik = document.querySelector("#abhik");

    let count = -1

    axios.get("https://crudcrud.com/api/7a3b992ff2884914a5f7c629233538da/data")
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        displayFormData(response.data[i]);
        count++;
      }
      
      updateCountDisplay();
    })
    .catch((error) => {
      console.log(error);
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    
        console.log(1);
        const details = {
          name: event.target.name.value,
          cat: event.target.cat.value,
        };

            // console.log(details);
        axios.post("https://crudcrud.com/api/7a3b992ff2884914a5f7c629233538da/data", details)
        .then((res) => {
        
        displayFormData(res.data);
        // console.log(res.data);
        count++;
        // console.log(count);
        updateCountDisplay();
        })
        .catch((error) => {
          console.log(error);
        });
    })

    function displayFormData(details) {
        const listItem = document.createElement("li");
        listItem.textContent = `name: ${details.name}`;
    
        const delbtn = document.createElement("button");
        delbtn.appendChild(document.createTextNode("Delete"));
        listItem.appendChild(delbtn);
  
        if (details.cat === "Suresh") {
          Suresh.appendChild(listItem);

          const total_element = document.querySelector("#suresh_total");
          const current_total = Number(total_element.innerHTML)
          total_element.innerHTML = current_total+1;
        //   console.log(current_total,total_element.innerHTML);


        } else if (details.cat === "abhik") {
            abhik.appendChild(listItem);

            const total_element = document.querySelector("#abhik_total");
            const current_total = Number(total_element.innerHTML)
            total_element.innerHTML = current_total+1;

        } else if (details.cat === "deepank") {
            deepank.appendChild(listItem);

            const total_element = document.querySelector("#deepak_total");
            const current_total = Number(total_element.innerHTML)
            total_element.innerHTML = current_total+1;

        }

        delbtn.addEventListener("click", function (event) {
            const userId = details._id;

// 



if (details.cat === "Suresh") {
    Suresh.appendChild(listItem);

    const total_element = document.querySelector("#suresh_total");
    const current_total = Number(total_element.innerHTML)
    total_element.innerHTML = current_total-1;
  //   console.log(current_total,total_element.innerHTML);


  } else if (details.cat === "abhik") {
      abhik.appendChild(listItem);

      const total_element = document.querySelector("#abhik_total");
      const current_total = Number(total_element.innerHTML)
      total_element.innerHTML = current_total-1;

  } else if (details.cat === "deepank") {
      deepank.appendChild(listItem);

      const total_element = document.querySelector("#deepak_total");
      const current_total = Number(total_element.innerHTML)
      total_element.innerHTML = current_total-1;

  }



// 




        axios.delete(`https://crudcrud.com/api/7a3b992ff2884914a5f7c629233538da/data/${userId}`)
          .then((res) => {
            listItem.remove();
            count--;
            console.log(count);
            updateCountDisplay();
          })
          .catch((err) => {
            console.log(err);
          });
        })

        // let p = document.querySelector("#myp");
        // p.innerText = `count${count}`;
    }  

    function updateCountDisplay() {
        let p = document.querySelector("#mycount");
        p.innerText = count;
      }


