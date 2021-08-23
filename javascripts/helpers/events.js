import renderToDom from "./renderToDom.js";
import businesses from "./data/data.js"

const searchEvents = () => {
    document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            let domString = '<h1>Search Results</h1>'
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );

            if (foundBusiness === undefined) {
                domString = '<h2 style="color: red">There are no businesses found by that search criteria!</h2'
            } else {
                domString += `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
            }
            
            renderToDom('#searchResults', domString);
        }

    });
}



export default searchEvents;