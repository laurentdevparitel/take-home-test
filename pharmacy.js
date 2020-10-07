
/**
 * Drug class
 * @param string name
 * @param int expiresIn // number of days we have until the item expires.
 * @param int benefit // how powerful the drug is
 * @return  void
 */
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

/**
 * Pharmacy class
 * @param array drugs
 * @return array
 */
export class Pharmacy {

  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * Update drug benefit value
   * @return array
   */
  updateBenefitValue() {

    const updatedDrugs = this.drugs.map( drug => {
        //console.log(drug)           
        
        switch (drug.name) {

            case "Herbal Tea":
   
              if (drug.expiresIn <= 0) { // Once the expiration date has passed, Benefit increases twice as fast
                drug.benefit += 2;
              }
              else {
                drug.benefit += 1;
              }
              break;

            case "Fervex":
            
              if (drug.expiresIn <= 10) { 
                if (drug.expiresIn === 0) { // Benefit drops to 0 after the expiration date
                  drug.benefit = 0;
                }
                else if (drug.expiresIn <= 5) { // Benefit increases by 3 when there are 5 days or less
                  drug.benefit += 3;
                }
                else { // Benefit increases by 2 when there are 10 days or less
                  drug.benefit += 2;
                }              
              }
              else {
                drug.benefit += 1;
              }
              break;

            case "Magic Pill":  
              // "Magic Pill" never expires nor decreases in Benefit
              break;

          default:

            if (drug.expiresIn <= 0) { // Once the expiration date has passed, Benefit degrades twice as fast
              drug.benefit -= 2;
            }
            else { // At the end of each day our system lowers both values for every drug
              drug.benefit -= 1;          
            }            

            break;
        } 

        // At the end of each day our system lowers both values for every drug (except: Magic Pill )
        if (["Magic Pill"].indexOf(drug.name) === -1){
          drug.expiresIn -= 1;
        }
        

        if (drug.benefit <= 0) { // The Benefit of an item is never negative
          drug.benefit = 0;
        }

        if (drug.benefit >= 50) { // The Benefit of an item is never more than 50.
          drug.benefit = 50;
        }

        return drug;
    });   

    //console.log(this.drugs);
    //console.log(updatedDrugs);

    //return this.drugs;
    return updatedDrugs;
  }
}
