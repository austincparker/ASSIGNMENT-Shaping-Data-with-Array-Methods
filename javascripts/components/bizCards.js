import renderToDom from '../helpers/renderToDom.js';
import businesses from '../helpers/data/data.js'

const showCards = () => {
    let domString = '<h1>All Businesses</h1>';
    businesses.forEach(business => {
        domString += `
        <h2>${business.companyName}</h2>
        <section>
          ${business.addressFullStreet}
        </section>
        <section>
          ${business.addressCity}
        </section>
        <section>
          ${business['addressStateCode']}
        </section>
        <section>
          ${business['addressZipCode']}
        </section>
        `
    });

    renderToDom('#bizContainer', domString)
};

// New York Filter Exercise

const showNYBiz = () => {
    const newYorkBusinesses = businesses.filter((business) => {
        let inNewYork = false;
      
        if (business.addressStateCode === "NY") {
          inNewYork = true;
        }
      
        return inNewYork;
      });

      let domString = '<h1>New York Businesses</h1>'
    
      newYorkBusinesses.forEach(business => {
          domString += `
            <h2>${business.companyName}</h2>
                <section>
                ${business.addressFullStreet}
                </section>
                <section>
                ${business.addressCity}
                </section>
                <section>
                ${business['addressStateCode']}
                </section>
                <section>
                ${business['addressZipCode']}
                </section>
          `
           
      })
      renderToDom('#newYorkBiz', domString);
}

const showManuCards = () => {
    const manuBusinesses = businesses.filter((business) => {
        let isManu = false;
      
        if (business.companyIndustry === "Manufacturing") {
          isManu = true;
        }
      
        return isManu;
      });
      let domString = '<h1>Manufacturing Businesses</h1>'
    
      manuBusinesses.forEach(business => {
          domString += `
            <h2>${business.companyName}</h2>
                <section>
                ${business.addressFullStreet}
                </section>
                <section>
                ${business.addressCity}
                </section>
                <section>
                ${business['addressStateCode']}
                </section>
                <section>
                ${business['addressZipCode']}
                </section>
          `
           
      })
      renderToDom('#manuBiz', domString);
};

const showAgents = () => {
    const agents = businesses.map(business => {
        return business.purchasingAgent
    })
    
    console.table(agents)

    let domString = '';
    
    agents.forEach(agent => {
      domString += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
      domString += "<hr/>";
    });
    
    renderToDom('#agentContainer', domString);
}

export { showCards, showNYBiz, showManuCards, showAgents };
