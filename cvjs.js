let url = "./data.json"

async function getSomething() {

    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();

        let utbildningar = data.utbildningar;
        let arbetserfarenhet = data.arbetserfarenhet;
       

        const uTitle = document.querySelectorAll(".title")
        const uSchool = document.querySelectorAll(".school")
        const uYear = document.querySelectorAll(".year")

        const wTitle = document.querySelectorAll(".work-title")
        const wPlace = document.querySelectorAll(".work-place")
        const wPeriod = document.querySelectorAll(".work-period")

        const wList = document.querySelectorAll(".duties-list")
        

        for (let i = 0; i < utbildningar.length; i++) {

            uSchool[i].innerHTML = utbildningar[i].skola;
            uTitle[i].innerHTML = utbildningar[i].utbildning;
            uYear[i].innerHTML = utbildningar[i].period;
        }


        for (let i = 0; i < arbetserfarenhet.length; i++) {

            wTitle[i].innerHTML = arbetserfarenhet[i].titel;
            wPlace[i].innerHTML = arbetserfarenhet[i].plats;
            wPeriod[i].innerHTML = arbetserfarenhet[i].år;
        }

        for (let i = 0; i < arbetserfarenhet.length; i++) {
        
            for (let j = 0; j < arbetserfarenhet[i].arbetsuppgifter.length; j++) {
                const item = arbetserfarenhet[i].arbetsuppgifter[j]
                let li = document.createElement("li");
                li.innerHTML = item;
                wList[i].appendChild(li)
            }

        }

    }


    else {
        console.log("error: " + response.status)

    }

}

getSomething();

