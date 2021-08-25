import renderToDom from '../helpers/renderToDom.js';
import businesses from '../helpers/data/data.js'

const showCards = () => {
    let domString = '<h1>All Businesses</h1>';

    // Total Order Reduce Method Exercise
    
    businesses.forEach(business => {
      let totalOrders = business.orders.reduce(
        (currentTotal, nextValue) => currentTotal += nextValue,
        0
      );
      // ^^ (reduce method) replaces vv 
      // let totalOrders = 0;
      // business.orders.forEach(order => totalOrders += order)

        domString += `
        <h2>
        ${business.companyName}
        ($${totalOrders})
        </h2>
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

// Manufacturing Filter Exercise

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

// Agents Map Exercise

const showAgents = () => {
    const agents = businesses.map(business => {
        return business.purchasingAgent
    })
    
    let domString = '<h1>Purchasing Agents</h1>';
    
    agents.forEach(agent => {
      domString += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
      domString += "<hr/>";
    });
    
    renderToDom('#agentContainer', domString);
}

export { showCards, showNYBiz, showManuCards, showAgents };
